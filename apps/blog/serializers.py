from rest_framework import serializers
from apps.category.serializers import CategorySerializer
from .models import Blog

class BlogSerializer(serializers.ModelSerializer):
    image = serializers.CharField(source='get_image')
    video = serializers.CharField(source='get_video')
    category = CategorySerializer()


    class Meta:
        model = Blog
        fields = (
            'blog_uuid',
            'title',
            'slug',
            'category',
            'description',
            'excerpt',
            'image',
            'video',
            'status',
            'date_created'
        )

