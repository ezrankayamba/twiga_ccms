from django.db.models import Sum, Count
from . import models


def get_nature_summary():
    qs = models.Nature.objects.raw(
        "select max(n.id) as id, n.name, sum(case when c.status='Completed' then 1 else 0 end) as count_done, count(c.id) as count_all from complaints_complaint c left join complaints_nature n on c.nature_id=n.id group by n.name"
    )
    return qs


def get_complaints_status_summary():
    qs = models.Complaint.objects.raw(
        "select max(c.id) as id, c.status as name, count(c.id) as count from complaints_complaint c group by c.status"
    )

    return qs
