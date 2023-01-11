from django.db import models

# Create your models here.

class Payment(models.Model):
    mobile_number= models.CharField(max_length=15)
    amount = models.DecimalField(max_length=10)
    status= models.CharField(max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)