# Generated by Django 4.2.3 on 2023-08-01 08:00

import apps.blog.models
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('category', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('blog_uuid', models.UUIDField(default=uuid.uuid4, unique=True)),
                ('title', models.CharField(max_length=255)),
                ('slug', models.SlugField(max_length=255)),
                ('image', models.ImageField(blank=True, null=True, upload_to=apps.blog.models.Blog.get_media_path)),
                ('video', models.FileField(blank=True, null=True, upload_to=apps.blog.models.Blog.get_media_path)),
                ('description', models.TextField()),
                ('excerpt', models.CharField(max_length=100)),
                ('status', models.CharField(choices=[('draft', 'Draft'), ('published', 'Published')], default='draft', max_length=10)),
                ('date_created', models.DateTimeField(default=django.utils.timezone.now)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='posts', to='category.category')),
            ],
            options={
                'ordering': ('-date_created',),
            },
        ),
    ]
