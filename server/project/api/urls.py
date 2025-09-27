from django.urls import path
from api.views import BookList

urlpatterns = [
    path('books/', get_books, name='get_books'),
]