from django.db import models
from django.contrib.auth.models import User
from datetime import datetime


class Nature(models.Model):
    name = models.CharField(max_length=40, unique=True)

    def __str__(self):
        return self.name


class Complaint(models.Model):
    open_date = models.DateTimeField()
    client_name = models.CharField(max_length=100)
    nature = models.ForeignKey(to=Nature,
                               on_delete=models.PROTECT,
                               related_name='complaints')
    status = models.CharField(max_length=20)
    details = models.CharField(max_length=500)
    assigned_to = models.ForeignKey(to=User,
                                    on_delete=models.PROTECT,
                                    null=True,
                                    blank=True)
    rca = models.CharField(max_length=255, null=True, blank=True)
    action_plan = models.CharField(max_length=255, null=True, blank=True)
    results = models.CharField(max_length=255, null=True, blank=True)
    financial_impact = models.CharField(max_length=255, null=True, blank=True)
    cost_center = models.CharField(max_length=255, null=True, blank=True)
    responsible_person = models.CharField(max_length=40, null=True, blank=True)
    due_date = models.DateTimeField(null=True, blank=True)
    close_date = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f'{self.open_date.strftime("%d/%m/%Y")} - {self.client_name}'
