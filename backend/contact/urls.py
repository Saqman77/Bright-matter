# contact/urls.py
from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name='index'),
    path('api/contact/', contact_form, name='contact_form'),
]
