from django.shortcuts import render, redirect
from .models import Contact

def index(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        message = request.POST.get('message')
        
        # Save the data to the database
        contact = Contact(name=name, email=email, phone=phone, message=message)
        contact.save()
        
        # Optionally, you can also add code here to send an email
        
        return redirect('success')
    
    return render(request, 'index.html')

def success(request):
    return render(request, 'success.html')