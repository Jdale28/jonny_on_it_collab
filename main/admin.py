from django.contrib import admin

from main.models import User, Property, Job

admin.site.register([User, Property, Job])