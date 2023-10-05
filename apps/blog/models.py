from django.db import models
import uuid
from apps.category.models import Category
from django.utils import timezone

# Create your models here.


class Blog(models.Model):

    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')
        

    def get_media_path(instance, filename):
        return 'blog/{0}/{1}'.format(instance.title, filename)
    
    options = (
        ('draft', 'Draft'),
        ('published', 'Published')
    )
    blog_uuid = models.UUIDField(default=uuid.uuid4, unique=True)
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='posts')
    image = models.ImageField(upload_to=get_media_path, blank=True, null=True)
    video = models.FileField(upload_to=get_media_path, blank=True, null=True)
    description = models.TextField()
    excerpt = models.CharField(max_length=100)
    status = models.CharField(max_length=10, choices=options, default='draft')
    objects = models.Manager()
    postobjects = PostObjects()
    date_created = models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ('-date_created',)

    def __str__(self):
        return self.title
    
    def get_image(self):
        if self.image:
            return self.image.url
        return ''
    
    def get_video(self):
        if self.video:
            return self.video.url
        return ''
        

