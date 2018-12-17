from rest_framework import viewsets

from .serializers import UserSerializer, PropertySerializer, PaymentSerializer, JobSerializer
from .models import User, Property, Payment, Job


class UserView(viewsets.ModelViewSet):
    authentication_classes = []
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PropertyView(viewsets.ModelViewSet):
    authentication_classes = []
    queryset = Property.objects.all()
    serializer_class = PropertySerializer

class PaymentView(viewsets.ModelViewSet):
    authentication_classes = []
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer

class JobView(viewsets.ModelViewSet):
    authentication_classes = []
    queryset = Job.objects.all()
    serializer_class = JobSerializer