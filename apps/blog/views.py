from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from .models import Blog
from .paginations import SmallSetPagination
from .serializers import BlogSerializer
from rest_framework.response import Response
from rest_framework import status
from apps.category.models import Category
from django.db.models.query_utils import Q
# Create your views here.


class BlogListView(APIView):
    def get(self, request, format=None):
        if Blog.postobjects.all().exists():
            posts = Blog.postobjects.all()
            paginator = SmallSetPagination()
            result = paginator.paginate_queryset(posts, request)
            serializer = BlogSerializer(result, many=True)
            return paginator.get_paginated_response({'posts': serializer.data})
        return Response({'error': 'No posts found'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
class BlogDetailView(APIView):
    def get(self, request, post_slug, format=None):
        post = get_object_or_404(Blog, slug=post_slug)
        serializer = BlogSerializer(post)
        return Response({'post': serializer.data}, status=status.HTTP_200_OK)
    

class BlogListCategoryView(APIView):
    def get(self, request, category_id, format=None):
        if Blog.postobjects.all().exists():
            category = get_object_or_404(Category, id=category_id)
            posts = category.posts.all()
            paginator = SmallSetPagination()
            result = paginator.paginate_queryset(posts, request)
            serializer = BlogSerializer(result, many=True)
            return paginator.get_paginated_response({'posts': serializer.data})
        return Response({'error': 'No posts found'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



class BlogSearchView(APIView):
     def get(self, request, search_term):
        matches = Blog.postobjects.filter(
            Q(title__icontains=search_term) |
            Q(description__icontains=search_term) |
            Q(category__name__icontains=search_term) 
        )
        paginator = SmallSetPagination()
        results = paginator.paginate_queryset(matches, request)
        serializer = BlogSerializer(results, many=True)
        return paginator.get_paginated_response({'filtered_posts': serializer.data})