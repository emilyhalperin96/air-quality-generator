from flask import Flask, make_response, jsonify, request
from flask_cors import CORS
import requests
import json
import logging 

app = Flask(__name__)

CORS(app)

@app.route('/')
def root():
    return ''

@app.route('/api/garbagedetection', methods=['POST'])
def garbage_detection():
    image_url = request.form.get('image_url')
    logging.debug(f"Received image_url: {image_url}")
    # api_key = 'ec0c3746c2msh3b20cf4e4f8342bp1b0d3djsnc79b06985708'

    headers = {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'ec0c3746c2msh3b20cf4e4f8342bp1b0d3djsnc79b06985708',
        'X-RapidAPI-Host': 'reciclapi-garbage-detection.p.rapidapi.com'
    }
    data = json.dumps({'image': image_url})
    response = requests.post('https://reciclapi-garbage-detection.p.rapidapi.com/predict', headers=headers, data=data)
    logging.debug(f"API response status code: {response.status_code}")

    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({'error': 'API request failed'}), 500

if __name__ == '__main__':
    logging.basicConfig(level=logging.DEBUG)
    app.run(port=5555)
