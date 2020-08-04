import graphene
from . import models
from graphene_django.types import DjangoObjectType
from graphene_django.forms.mutation import DjangoModelFormMutation
from . import forms
from django.contrib.auth.models import User
import graphql_jwt
from graphql_jwt.decorators import login_required
from core import gmail
import datetime
from . import reports
DEFAULT_PASS = 'testing321'

DEFAULT_PAGE_SIZE = 4


class UserType(DjangoObjectType):
    class Meta:
        model = User


class NatureType(DjangoObjectType):
    class Meta:
        model = models.Nature


class LocationType(DjangoObjectType):
    class Meta:
        model = models.Location


class ComplaintType(DjangoObjectType):
    class Meta:
        model = models.Complaint


class NatureSummaryType(graphene.ObjectType):
    name = graphene.String()
    count_all = graphene.Int()
    count_done = graphene.Int()


class StatusSummaryType(graphene.ObjectType):
    name = graphene.String()
    count = graphene.Int()


class LocationSummaryType(graphene.ObjectType):
    loc_name = graphene.String()
    loc_count = graphene.Int()


class Query(object):
    natures = graphene.List(NatureType)
    locations = graphene.List(LocationType)
    complaints = graphene.List(ComplaintType,
                               page_no=graphene.Int(),
                               page_size=graphene.Int())
    complaint = graphene.Field(ComplaintType, id=graphene.ID())
    users = graphene.List(UserType)
    me = graphene.Field(UserType)
    user = graphene.Field(UserType, id=graphene.ID())
    nature_summary = graphene.List(NatureSummaryType)
    status_summary = graphene.List(StatusSummaryType)
    location_summary = graphene.List(LocationSummaryType)

    def resolve_natures(self, info, **kwargs):
        return models.Nature.objects.all()

    def resolve_locations(self, info, **kwargs):
        return models.Location.objects.all()

    def resolve_nature_summary(self, info, **kwargs):
        qs = reports.get_nature_summary()
        return qs

    def resolve_status_summary(self, info, **kwargs):
        qs = reports.get_complaints_status_summary()
        return qs

    def resolve_location_summary(self, info, **kwargs):
        qs = reports.get_location_summary()
        return qs

    @login_required
    def resolve_users(self, info, **kwargs):
        return User.objects.all()

    @login_required
    def resolve_me(self, info, **kwargs):
        user = info.context.user
        if user.is_anonymous:
            raise Exception('Authentication Failure!')
        return user

    @login_required
    def resolve_user(self, info, id, **kwargs):
        user = User.objects.get(pk=id)
        return user

    @login_required
    def resolve_complaints(self,
                           info,
                           page_no=1,
                           page_size=DEFAULT_PAGE_SIZE,
                           **kwargs):

        start = ((page_no - 1) * page_size)
        to = page_no * page_size
        print(f'Start: {start}, To: {to}')
        qs = models.Complaint.objects.select_related(
            'nature', 'assigned_to').all()[start:to]

        return qs

    @login_required
    def resolve_complaint(self, info, id):
        return models.Complaint.objects.select_related(
            'nature', 'assigned_to').get(pk=id)


class ComplaintMutation(DjangoModelFormMutation):
    complaint = graphene.Field(ComplaintType)

    class Meta:
        form_class = forms.ComplaintForm
        input_field_name = 'data'
        return_field_name = 'result'


class UserMutation(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=False)
        username = graphene.String(required=True)
        email = graphene.String(required=True)
        first_name = graphene.String(required=False)
        last_name = graphene.String(required=False)

    user = graphene.Field(UserType)

    @login_required
    def mutate(self,
               info,
               username,
               email,
               first_name=None,
               last_name=None,
               id=None):
        # user = info.context.user
        data = {
            'username': username,
            'email': email,
            'first_name': first_name,
            'last_name': last_name
        }
        user = User.objects.filter(pk=id).first() if id else None
        if user:
            # User.objects.filter(pk=id).update(**data)
            user.email = email
            user.first_name = first_name
            user.last_name = last_name
            user.save()
        else:
            user = User.objects.create_user(username,
                                            email,
                                            password=DEFAULT_PASS)
            user.first_name = first_name
            user.last_name = last_name
            user.save()
            url = 'https://ccms.nezatech.co.tz'
            gmail.send_registered(id,
                                  user.email,
                                  def_pass=DEFAULT_PASS,
                                  base_url=url)

        return UserMutation(user=user)


class ComplaintAssignMutation(graphene.Mutation):
    class Arguments:
        user_id = graphene.ID(required=True)
        id = graphene.ID(required=True)

    complaint = graphene.Field(ComplaintType)

    @login_required
    def mutate(self, info, user_id, id):
        user = info.context.user
        assign_to = User.objects.get(pk=user_id)
        compl = models.Complaint.objects.get(pk=id)
        compl.assigned_to = assign_to
        compl.status = models.STATUS_OPEN
        compl.assigned_by = user
        compl.assigned_at = datetime.datetime.now()
        compl.save()
        url = 'https://ccms.nezatech.co.tz/complaints'
        gmail.send_assign(id, assign_to.email, base_url=url)
        return ComplaintAssignMutation(complaint=compl)


class GetMeMutation(graphene.Mutation):

    me = graphene.Field(UserType)

    @login_required
    def mutate(self, info):
        user = info.context.user
        if user.is_anonymous:
            raise Exception('Authentication Failure!')
        return GetMeMutation(me=user)


class ComplaintDetailsUpdateMutation(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        rca = graphene.String()
        action_plan = graphene.String()
        results = graphene.String()
        financial_impact = graphene.String()
        cost_center = graphene.String()
        responsible_person = graphene.String()

    complaint = graphene.Field(ComplaintType)

    @login_required
    def mutate(self, info, id, rca, action_plan, results, financial_impact,
               cost_center, responsible_person):
        user = info.context.user
        compl = models.Complaint.objects.get(pk=id)
        compl.rca = rca
        compl.action_plan = action_plan
        compl.results = results
        compl.financial_impact = financial_impact
        compl.cost_center = cost_center
        compl.responsible_person = responsible_person
        compl.status = models.STATUS_COMPLETED
        compl.close_date = datetime.datetime.now()
        compl.closed_by = user
        compl.save()
        return ComplaintDetailsUpdateMutation(complaint=compl)


class RootQuery(Query, graphene.ObjectType):
    pass


class RootMutation(graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()
    create_complaint = ComplaintMutation.Field()
    assign_complaint = ComplaintAssignMutation.Field()
    update_complaint = ComplaintDetailsUpdateMutation.Field()
    register_user = UserMutation.Field()
    get_me = GetMeMutation.Field()


root_schema = graphene.Schema(query=RootQuery, mutation=RootMutation)