# Generated by Django 3.0.8 on 2020-08-05 14:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('complaints', '0010_auto_20200729_2249'),
    ]

    operations = [
        migrations.AlterField(
            model_name='complaint',
            name='status',
            field=models.CharField(choices=[('Not Assigned', 'Not Assigned'), ('Assigned', 'Assigned'), ('Completed', 'Completed'), ('Feedback Sent', 'Feedback Sent')], default='Not Assigned', max_length=20),
        ),
    ]
