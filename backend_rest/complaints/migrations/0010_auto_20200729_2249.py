# Generated by Django 3.0.8 on 2020-07-29 19:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('complaints', '0009_auto_20200729_2131'),
    ]

    operations = [
        migrations.AlterField(
            model_name='complaint',
            name='status',
            field=models.CharField(choices=[('Created', 'Created'), ('Open', 'Open'), ('Completed', 'Completed')], default='Created', max_length=20),
        ),
    ]
