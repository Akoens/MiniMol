from django.test import TestCase, Client
from django.urls import reverse
import json


class TestViews(TestCase):

    def setUp(self) -> None:
        """
        Setup is run before each test. Allowing for the tests to run using a reliable test case.
        """
        self.client = Client()
        self.info_url = reverse('info')
        self.pdb_url = reverse('pdb')

    def test_pdb_info_GET(self):
        """
        Test if the info API is returns 200 and content.
        """
        response = self.client.get(self.info_url)
        self.assertEqual(response.status_code, 200)
        self.assertIsNotNone(response.content)

    def test_pdb_GET(self):
        """
        Test if the pdb GET API is returns 200 and content.
        """
        response = self.client.get(self.pdb_url)
        self.assertEqual(response.status_code, 200)
        self.assertIsNotNone(response.content)

    def test_pdb_POST(self):
        """
            Test if the pdb GET API is returns 200 and content.
        """
        response = self.client.post(self.pdb_url, {'pdb_id': '1a00'})
        self.assertEqual(response.status_code, 200)
        self.assertIsNotNone(response.content)
        self.assertIsNotNone(response, msg='data')

    def test_pdb_POST_no_data(self):
        """
            Test if the pdb GET API is returns 200 and content.
        """
        response = self.client.post(self.pdb_url)
        self.assertEqual(response.status_code, 400)

    def test_pdb_POST_invalid(self):
        """
            Test if the pdb GET API is returns 200 and content.
        """
        response = self.client.post(self.pdb_url, {'pdb_id': 'XXXXXXXXXXX'})
        self.assertEqual(response.status_code, 400)

        response = self.client.post(self.pdb_url, {'pdb_id': '!@#$'})
        self.assertEqual(response.status_code, 400)
