# contact/views.py
from django.http import JsonResponse, FileResponse, Http404
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
import json
import requests
import os

def index(request):
    try:
        file_path = os.path.join('static', 'index.html')
        return FileResponse(open(file_path, 'rb'))
    except FileNotFoundError:
        raise Http404("index.html not found")

@csrf_exempt
def contact_form(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        phone = data.get('phone')
        email = data.get('email')
        message = data.get('message')

        # Add to MailChimp
        url = f'https://{settings.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/{settings.MAILCHIMP_AUDIENCE_ID}/members'
        auth = ('apikey', settings.MAILCHIMP_API_KEY)
        payload = {
            'email_address': email,
            'status': 'subscribed',
            'merge_fields': {
                'NAME': name,
                'PHONE': phone,
                'MESSAGE': message,
            }
        }

        response = requests.post(url, auth=auth, json=payload)
        responseDict = {
            'success': False,
            'message': 'Invalid request'
        }

        if response.status_code == 200:
            responseDict['success'] = True
            responseDict['message'] = 'Contact successfully saved.'
            return JsonResponse(responseDict)
        else:
            responseDict['message'] = 'There was an error processing your request.'
            return JsonResponse(responseDict, status=500)
    return JsonResponse(responseDict, status=400)
