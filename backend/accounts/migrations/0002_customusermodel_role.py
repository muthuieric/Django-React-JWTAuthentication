# Generated by Django 5.0.1 on 2024-01-20 13:42

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("accounts", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="customusermodel",
            name="role",
            field=models.CharField(default="user", max_length=50, verbose_name="Role"),
        ),
    ]
