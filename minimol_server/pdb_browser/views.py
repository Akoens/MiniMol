import random

from django.http import JsonResponse, HttpResponse
from django.views import View

from Bio.PDB.Structure import Structure
from Bio.PDB import PDBList, PDBParser, MMCIFParser

pdb_ids = ["10GS", "11GS", "121P", "12CA", "12GS", "133L", "134L", "13GS", "14GS", "16GS", "17GS", "18GS", "19GS",
           "1A00", "1A01", "1A02", "1A07", "1A08", "1A09", "1A0L", "1A0N", "1A0U", "1A0Z", "1A12", "1A15"]


async def download_pdb(pdb_id: str):
    # Retrieve the structure from the database.
    pdbl = PDBList()
    pdbl.retrieve_pdb_file(pdb_id, pdir='.', file_format='pdb')

    with open('pdb' + pdb_id + '.ent', encoding='utf-8') as pdb_file:
        pdb = "".join(pdb_file.readlines()).replace(r'\n', '')
    return pdb


class PDBView(View):
    """
    PDBView is a view class that handles different HTTP methods for requesting PDB files.

    """

    async def get(self, request, *args, **kwargs):
        """
        Returns Response containing  a Random PDB file.
        """
        pdb_id = random.choice(pdb_ids)
        pdb = await download_pdb(pdb_id)

        return JsonResponse(pdb, content_type='application/json', status=200, safe=False)

    async def post(self, request, *args, **kwargs):
        """
        This method takes a pdb_name from the POST request and uses it to retrieve the pdb file using Biopython.
        """
        pdb_id = request.POST['pdb_id']
        if not pdb_id:
            return HttpResponse("No PDB structure id has been given.", status=400)

        pdb = await download_pdb(pdb_id)

        return JsonResponse(pdb, content_type='application/json', status=200)

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
