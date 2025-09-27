from django.urls import path
from api.views import get_books

urlpatterns = [
    path('books/', get_books, name='book-list'),
]