import datetime
import re

regex_camel_to_snake = re.compile(r'(?<!^)(?=[A-Z])')


def camel_to_underscore(camel):
    return regex_camel_to_snake.sub('_', camel).lower()


def params_complaints_filter(kwargs_in):
    print(kwargs_in)
    params = {}
    kwargs = dict((camel_to_underscore(k), v) for k, v in kwargs_in.items())

    if 'clientName' in kwargs:
        params['client_name__contains'] = kwargs['clientName']
    if 'location' in kwargs:
        params['location_id'] = kwargs['location']
    if 'nature' in kwargs:
        params['nature_id'] = kwargs['nature']
    if 'status' in kwargs:
        params['status'] = kwargs['status']

    if 'date_from' in kwargs:
        params['open_date__gt'] = kwargs['date_from']
    else:
        params['open_date__gt'] = datetime.date.today()
    if 'date_to' in kwargs:
        params['open_date__lt'] = kwargs['date_to'] + datetime.timedelta(days=1)
    else:
        params['open_date__lt'] = datetime.date.today() + datetime.timedelta(days=1)

    return params
