import smtplib
from email.message import EmailMessage

EMAIL_ADDRESS = 'twiga.nezatech@gmail.com'
EMAIL_PASSWORD = 'gjkrloqotkbehwqp'


def send_assign(id, dest, base_url='http://localhost:8000'):
    msg = EmailMessage()
    msg['Subject'] = 'Customer Complaint Assigned'
    msg['From'] = f'Twiga - CCMS<{EMAIL_ADDRESS}>'
    msg['To'] = dest
    msg.set_content('HTML disabled?')

    with open('assign.html', 'r') as f:
        html = f.read()
        html = html.replace('RECORD_ID', f'{id}')
        html = html.replace('DETAIL_URL', base_url)
    msg.add_alternative(html, subtype='html')

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
        smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
        smtp.send_message(msg)


# send_assign(1234, 'ezrankayamba@gmail.com')