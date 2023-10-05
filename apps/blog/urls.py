from django.urls import path 

from .views import *

urlpatterns = [
    path('', BlogListView.as_view()),
    path('<post_slug>', BlogDetailView.as_view()),
    path('category/<category_id>', BlogListCategoryView.as_view()),
    path('search/<search_term>', BlogSearchView.as_view())
]

