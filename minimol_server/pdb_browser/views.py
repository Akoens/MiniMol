import random
import re

from django.http import HttpResponse
from rest_framework.response import Response

from rest_framework.views import APIView
from rest_framework.permissions import AllowAny

from Bio.PDB.Structure import Structure
from Bio.PDB import PDBList, PDBParser, MMCIFParser

pdb_ids = ["10GS", "11GS", "121P", "12CA", "12GS", "133L", "134L", "13GS", "14GS", "16GS", "17GS", "18GS", "19GS",
           "1A00", "1A01", "1A02", "1A07", "1A08", "1A09", "1A0L", "1A0N", "1A0U", "1A0Z", "1A12", "1A15"]


def download_pdb(pdb_id: str):
    """
    Retrieves a PDB file from web store it locally.
    :param pdb_id: The id for the PDB file to download.
    :return: The PDB file contents as a string:
    """

    # Retrieve the structure from the database.
    pdbl = PDBList(verbose=False)
    pdbl.retrieve_pdb_file(pdb_id, pdir='.', file_format='pdb')

    # Open the local file and return it as string.
    with open('pdb' + pdb_id + '.ent', encoding='utf-8') as pdb_file:
        pdb = pdb_file.read()
    return pdb


def pdb_info(request):
    """
    Gets information about the PDB API Urls.
    """
    return HttpResponse(
        "This Api serves PDB: "
        "GET at /pdb/ gives a random PDB, "
        "POST /pdb/<pdb_id> will give the PDB Corresponding to the 4 character pdb_id"
        , status=200
    )


class PDBView(APIView):
    """
    PDBView is a view class that handles different HTTP methods for requesting PDB files.
    """

    permission_classes = (AllowAny,)

    def get(self, request, *args, **kwargs):
        """
        Returns Response containing  a Random PDB file.
        """
        pdb_id = random.choice(pdb_ids)
        pdb = download_pdb(pdb_id)

        return Response(pdb)

    def post(self, request, *args, **kwargs):
        """
        This method takes a pdb_name from the POST request and uses it to retrieve the pdb file using Biopython.
        """
        if "pdb_id" not in request.POST:
            return HttpResponse("No PDB structure id (pdb_id) has been given.", status=400)

        pdb_id: str = request.POST['pdb_id']

        if len(pdb_id) != 4:
            return HttpResponse("PDB structure id must be 4 characters long.", status=400)

        regexp = re.compile('[^0-9a-zA-Z]+')
        if regexp.search(pdb_id):
            return HttpResponse("PDB structure id must be Alphanumeric.", status=400)

        pdb = download_pdb(pdb_id)

        return Response(pdb, status=200)

    # def put(self, request, *args, **kwargs):
    #     pass
    #
    # def delete(self, request, *args, **kwargs):
    #     pass
    #
    # def patch(self, request, *args, **kwargs):
    #     pass
    #
    # def head(self, request, *args, **kwargs):
    #     pass
    #
    # def trace(self, request, *args, **kwargs):
    #     pass
