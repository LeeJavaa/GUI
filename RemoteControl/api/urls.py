from django.urls import path
from django.views.generic import TemplateView

from .views import api_overview, get_data, set_left_speed, set_right_speed

urlpatterns = [
    path('', api_overview),
    path('data/', get_data),
    path('control/right/<int:speed>/', set_right_speed),
    path('control/left/<int:speed>/', set_left_speed),
]
