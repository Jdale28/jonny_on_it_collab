from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('users', views.UserView)
router.register('properties', views.PropertyView)
router.register('payments', views.PaymentView)
router.register('jobs', views.JobView)


urlpatterns = [
    path('', include(router.urls))
]