from django.contrib import admin

from main.models import User, Property, Payment, Job

admin.site.register([User, Property, Payment, Job])