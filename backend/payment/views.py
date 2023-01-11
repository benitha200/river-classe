from django.shortcuts import render
from .models import Payment
from .payment_provider import initiate_payment
# Create your views here.


def create_payment(request):
    mobile_number=request.POST.get('mobile_number')
    amount=request.POST.get('amount')
    payment= Payment.objects.create(mobile_number=mobile_number,amount=amount)
    status= initiate_payment(mobile_number,amount)
    payment.status = status
    payment.save()
    return render(request,'payment_result.html',{'status':status})
    