from django.db import models
from django.contrib.auth.models import User
from datetime import datetime
STATUS_CREATED = 'Created'
STATUS_OPEN = 'Open'
STATUS_COMPLETED = 'Completed'
COMPLAINT_STATUS = [
    (STATUS_CREATED, STATUS_CREATED),
    (STATUS_OPEN, STATUS_OPEN),
    (STATUS_COMPLETED, STATUS_COMPLETED),
]


class Nature(models.Model):
    name = models.CharField(max_length=40, unique=True)

    def __str__(self):
        return self.name


class Location(models.Model):
    name = models.CharField(max_length=40, unique=True)

    def __str__(self):
        return self.name


class Complaint(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, auto_now=False)
    open_date = models.DateTimeField()
    client_name = models.CharField(max_length=100)
    nature = models.ForeignKey(to=Nature,
                               on_delete=models.PROTECT,
                               related_name='nature_complaints')
    location = models.ForeignKey(to=Location,
                                 on_delete=models.PROTECT,
                                 related_name='location_complaints',
                                 null=True)
    status = models.CharField(max_length=20,
                              choices=COMPLAINT_STATUS,
                              default=STATUS_CREATED)
    details = models.CharField(max_length=500)

    rca = models.CharField(max_length=255, null=True, blank=True)
    action_plan = models.CharField(max_length=255, null=True, blank=True)
    results = models.CharField(max_length=500, null=True, blank=True)
    financial_impact = models.CharField(max_length=255, null=True, blank=True)
    cost_center = models.CharField(max_length=255, null=True, blank=True)
    responsible_person = models.CharField(max_length=255,
                                          null=True,
                                          blank=True)
    due_date = models.DateTimeField(null=True, blank=True)
    close_date = models.DateTimeField(null=True, blank=True)
    assigned_to = models.ForeignKey(to=User,
                                    on_delete=models.PROTECT,
                                    null=True,
                                    related_name='assigned_complaints')
    assigned_by = models.ForeignKey(to=User,
                                    on_delete=models.PROTECT,
                                    null=True,
                                    related_name='assigner_complaints')
    assigned_at = models.DateTimeField(null=True)
    closed_by = models.ForeignKey(to=User,
                                  on_delete=models.PROTECT,
                                  null=True,
                                  related_name='closed_complaints')

    def __str__(self):
        return f'{self.open_date.strftime("%d/%m/%Y")} - {self.client_name}'

    class Meta:
        ordering = ['-open_date']
