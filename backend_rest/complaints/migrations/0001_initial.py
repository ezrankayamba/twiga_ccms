# Generated by Django 3.0.8 on 2020-07-06 14:05

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Nature',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=40)),
            ],
        ),
        migrations.CreateModel(
            name='Complaint',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('open_date', models.DateTimeField()),
                ('client_name', models.CharField(max_length=100)),
                ('status', models.CharField(max_length=20)),
                ('details', models.CharField(max_length=500)),
                ('rca', models.CharField(max_length=255, null=True)),
                ('action_plan', models.CharField(max_length=255, null=True)),
                ('results', models.CharField(max_length=255, null=True)),
                ('financial_impact', models.CharField(max_length=255, null=True)),
                ('cost_center', models.CharField(max_length=255, null=True)),
                ('responsible_person', models.CharField(max_length=40, null=True)),
                ('due_date', models.DateTimeField(null=True)),
                ('close_date', models.DateTimeField(null=True)),
                ('assigned_to', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL)),
                ('nature', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='complaints.Nature')),
            ],
        ),
    ]
