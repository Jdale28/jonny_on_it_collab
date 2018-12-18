from rest_framework import serializers

from .models import User, Property, Payment, Job

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = ('id', 'profession', 'subcategory', 'property', 'date', 'timeslot')

class PropertySerializer(serializers.ModelSerializer):
    jobs = JobSerializer(many=True, read_only=True)
    class Meta:
        model = Property
        fields = ('id', 'streetAddress', 'city', 'state', 'zipcode', 'jobs', 'user')

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ('id', 'cardholderName', 'cardType', 'cardNumber', 'cardCVV', 'cardMonth', 'cardYear', 'user')

class UserSerializer(serializers.ModelSerializer):
    properties = PropertySerializer(many=True, read_only=True)
    jobs = JobSerializer(many=True, read_only=True)
    payments = PaymentSerializer(many=True, read_only=True)
    class Meta:
        model = User
        fields = ('id', 'name', 'email', 'phonenumber', 'password', 'properties', 'jobs', 'payments')