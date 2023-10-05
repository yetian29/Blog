from django.db import models

# Create your models here.


class Category(models.Model):
    parent = models.ForeignKey('self', on_delete=models.CASCADE, related_name='children', blank=True, null=True)
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='categories')

    class Meta:
        verbose_name_plural = 'Categories'
    
    def __str__(self):
        return self.name
    
    def get_image(self):
        if self.image:
            return self.image.url
        return ''
