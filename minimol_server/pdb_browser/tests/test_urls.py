from django.test import SimpleTestCase
from django.urls import reverse, resolve
from pdb_browser.views import PDBView, pdb_info


class TestUrls(SimpleTestCase):
    """
    Test the URL paths for this App.
    """

    def test_pdb_info_url_is_resolved(self):
        """
        Check if the info url is resolved to the function of pdb_info.
        """
        url = reverse('info')
        # .func to resolve this url as a function.
        self.assertEquals(resolve(url).func, pdb_info)

    def test_pdb_view_url_is_resolved(self):
        """
        Check if the view url is resolved to the view class of PDBView.
        """
        url = reverse('pdb')
        # .func.view_class to resolve this url as a view class.
        self.assertEquals(resolve(url).func.view_class, PDBView)
