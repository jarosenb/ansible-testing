from django.urls import path
from base import consumers

websocket_urlpatterns = [
    path('ws/base/', consumers.ChatConsumer)
]