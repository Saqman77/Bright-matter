from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)  # Adjust the max_length as needed
    message = models.TextField()
    appointment_date = models.DateTimeField(null=True, blank=True)  # Optional

    def __str__(self):
        return self.name