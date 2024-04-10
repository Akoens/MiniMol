from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response


class PDBViewSet(viewsets.ModelViewSet):
    """

    """

    @action(methods=['get'], detail=False)
    def get_pdb(self, request):
        return Response("200")
