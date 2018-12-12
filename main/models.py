from django.db import models

class User(models.Model):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    phonenumber = models.CharField(max_length=255)
    password = models.CharField(max_length=255, default='password')

    def __str__(self):
        return self.name

class Property(models.Model):
    streetAddress = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    zipcode = models.CharField(max_length=255)
    users = models.ForeignKey(User, on_delete=models.CASCADE, related_name='properties')

    def __str__(self):
        return self.streetAddress

class Job(models.Model):
    PROFESSION_CHOICES = (
        ('ELECTRICIAN', 'Electrician'),
        ('PLUMBING', 'Plumbing'),
        ('CLEANING', 'Cleaning'),
        ('PEST', 'Pest & Termite'),
        ('PAINTING', 'Painting'),
        ('CARPENTRY', 'Carpentry'),
        ('ROOFING', 'Roofing'),
        ('HVAC', 'HVAC'),
        ('HANDYMAN', 'Handyman'),
    )
    profession = models.CharField(max_length=255, choices=PROFESSION_CHOICES, default='HANDYMAN')
    properties = models.ForeignKey(Property, on_delete=models.CASCADE, related_name='jobs')

    def __str__(self):
        return self.profession