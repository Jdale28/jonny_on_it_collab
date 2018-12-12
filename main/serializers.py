from rest_framework import serializers

from .models import User, Property, Job

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = ('id', 'profession', 'subcategory', 'properties')

class PropertySerializer(serializers.ModelSerializer):
    jobs = JobSerializer(many=True, read_only=True)
    class Meta:
        model = Property
        fields = ('id', 'streetAddress', 'city', 'state', 'zipcode', 'jobs', 'users')

class UserSerializer(serializers.ModelSerializer):
    properties = PropertySerializer(many=True, read_only=True)
    jobs = JobSerializer(many=True, read_only=True)
    class Meta:
        model = User
        fields = ('id', 'name', 'email', 'phonenumber', 'password', 'properties', 'jobs')