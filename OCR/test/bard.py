import requests
from bardapi import Bard, SESSION_HEADERS
import pdfReader
session = requests.Session()
token = "agibKoKsa9h30E9sZcz2F-PpcecHHUNplJDHBk8H8R8l9YekDXRgJk-U_l9s4PrxrNIr_A."
session.cookies.set("__Secure-1PSID", "agibKoKsa9h30E9sZcz2F-PpcecHHUNplJDHBk8H8R8l9YekDXRgJk-U_l9s4PrxrNIr_A.")
session.cookies.set( "__Secure-1PSIDCC", "APoG2W91h2UpHhqvtKI5vDPloRD4d3yz9bSMoqA_fCbROJ0a3ZmpKJhwYPheQHc3cAbqmnK2Cjk3")
session.cookies.set("__Secure-1PSIDTS", "sidts-CjIBSAxbGULIfAFSJbwqiLJ_77ulogPGf-5swb7kIboFrcQL6a55qj-0FbKkzozGoUMKmRAA")
session.headers = SESSION_HEADERS

bard = Bard(token=token, session=session)

pdf=pdfReader.read_pdf('COZZA.pdf')
query= """
          Vas a analizar una pericia medica.
          Quiero que solamente listes todos los aspectos relevantes a heridas del siguiente texto. 
          No quiero que asumas cosas ni que agregues contenido al que ya hay
          Este es el texto: 
        """+pdf
print(bard.get_answer(query)['content'])