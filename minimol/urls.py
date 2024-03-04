from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("", include("pdb_browser.urls")),
    path("admin/", admin.site.urls),
    path("__debug__/", include("debug_toolbar.urls")),
]

