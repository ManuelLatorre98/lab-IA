import requests
import json

# Define la URL de la API
url = "https://chatgpt-api.shn.hk/v1/"

# Define el contenido del mensaje que deseas enviar
payload = {
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user", "content": "Hello, how are you?"}]
}

# Establece las cabeceras para la solicitud
headers = {
    "Content-Type": "application/json"
}

# Realiza la solicitud POST a la API
response = requests.post(url, data=json.dumps(payload), headers=headers)

# Obtén la respuesta en formato JSON
response_data = response.json()

# Accede al contenido de la respuesta generada por GPT-3.5 Turbo
generated_message = response_data["choices"][0]["message"]["content"]

# Imprime la respuesta generada
print(generated_message)