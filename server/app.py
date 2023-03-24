
from flask import Flask, make_response, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route('/')
def root():
    return ''

if __name__ == '__main__':
    app.run(port=5555)