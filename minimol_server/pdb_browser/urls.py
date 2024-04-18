"""
This module is used to define the urls for the pdb_browser app. Which in this case serves as the api endpoint.
"""

from django.urls import path
from pdb_browser.views import PDBView, pdb_info

urlpatterns = [
    # This .as_view() is a method of the View class and generates http methods from class methods.
    path("", PDBView.as_view(), name="pdb"),
    path("info", pdb_info, name="info")
]
