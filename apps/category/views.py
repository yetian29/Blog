from django.shortcuts import render
from rest_framework.views import APIView
from .models import Category
from rest_framework.response import Response
from .serializers import CategorySerializer
from rest_framework import status
# Create your views here.


class CategoriesView(APIView):
    def get(self, request, format=None):
        if Category.objects.all().exists():
            categories = Category.objects.all()
            serializers = CategorySerializer(categories, many=True)
            # result = []

            # for category in categories:
            #     if not category.parent:
            #         item = {}
            #         item['id'] = category.id
            #         item['name'] = category.name
            #         item['image'] = category.image.url

            #         item['sub_categories'] = []

            #         for cat in categories:
            #             sub_item = {}
            #             if cat.parent and cat.parent.id == category.id:
            #                 sub_item['id'] = cat.id
            #                 sub_item['name'] = cat.name
            #                 sub_item['image'] = cat.image.url
            #                 item['sub_categories'].append(sub_item)
            #         result.append(item)
            return Response({'categories': serializers.data}, status=status.HTTP_200_OK)
        return Response({'error': 'No categories found'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)






