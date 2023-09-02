from bardapi import Bard
#import os
#os.environ['_BARD_API_KEY']= ""

token ="agibKoKsa9h30E9sZcz2F-PpcecHHUNplJDHBk8H8R8l9YekDXRgJk-U_l9s4PrxrNIr_A."
bard = Bard(token=token)
bard.get_answer("EYYY")['content']
#print(Bard.get_answer("La concha de tu madre"))


#AIzaSyDlRREMLD3LtFcqJSL0fnMIFLg6fNsFzOU