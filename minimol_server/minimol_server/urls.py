"""
URL configuration for minimol_server project.
"""
from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/pdb/", include("pdb_browser.urls"), name="api"),
]
