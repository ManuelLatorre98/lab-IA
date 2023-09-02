import pdfplumber
import os
import replicate
os.environ["REPLICATE_API_TOKEN"]= "r8_4GueYLdz8y3neffaK94JdzuX6AtYRNq305THn"
def read_pdf(file_path):
  detected_text = ''
  with pdfplumber.open(file_path) as pdf:
      num_pages = len(pdf.pages)

      for page_num in range(num_pages):
          page = pdf.pages[page_num]
          detected_text += page.extract_text() + '\n\n'
  return detected_text

def analyze_injuries(pdf):
    pre_prompt = "Te voy a dar en el prompt_input un reporte forense y lo vas a analizar. El objetivo es que listes las heridas que encuentres en el texto. La lista tiene que estar enumerada. No quiero que actúes como chat solamente dame la lista de información: "
    prompt_input = "Este es el informe: "+read_pdf('COZZA.pdf')
    output = replicate.run(
    "a16z-infra/llama13b-v2-chat:df7690f1994d94e96ad9d568eac121aecf50684a0b0963b25a41cc40061269e5", #LLM model
    input={"prompt": f"{pre_prompt} {prompt_input} Assistant: ", #Prompts
    "temperature":0.1, "top_p":0.9, "max_length":5000, "repetition_penalty":1}
    )

    full_response =""
    for item in output:
        full_response+=item
    return full_response

pdf= read_pdf('COZZA.pdf')
result = analyze_injuries(pdf)

output_file_path = 'resultados_heridas.txt'

file = open(output_file_path, 'w')
file.write(result)
file.close

print(result)