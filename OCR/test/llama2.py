# load the large language model file
from llama_cpp import Llama
import pdfReader
#LLM = Llama(model_path=".\codellama-7b.Q2_K.gguf")
#LLM = Llama(model_path=".\codellama-7b.Q8_0.gguf", verbose=True, n_ctx=2048)
LLM = Llama(model_path="asclepius-13b.Q8_0.gguf", verbose=True, n_ctx=2048)
# create a text prompt
pdf=pdfReader.read_pdf('COZZA.pdf')
prompt= """
          Vas a analizar una pericia medica.
          Quiero que solamente listes todos los aspectos relevantes a heridas del siguiente texto. 
          No quiero que asumas cosas ni que agregues contenido al que ya hay
          Este es el texto: 
        """+pdf

# generate a response (takes several seconds)
output = LLM(prompt)

# display the response
print(output["choices"][0]["text"])
#with open('archivo.txt', 'w', encoding='utf-8') as archivo:
    #print(output["choices"][0]["text"], file=archivo)