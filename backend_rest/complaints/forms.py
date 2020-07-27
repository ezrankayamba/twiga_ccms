from django import forms
from . import models


class ComplaintForm(forms.ModelForm):
    class Meta:
        model = models.Complaint
        fields = '__all__'


class CsvImportForm(forms.Form):
    csv_file = forms.FileField()