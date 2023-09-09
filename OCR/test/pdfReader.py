import pdfplumber
def read_pdf(file_path):
  detected_text = ''
  with pdfplumber.open(file_path) as pdf:
      num_pages = len(pdf.pages)
      for page_num in range(num_pages):
          page = pdf.pages[page_num]
          detected_text += page.extract_text() + '\n\n'
  return detected_text