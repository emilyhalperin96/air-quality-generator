from flask import Flask, make_response, jsonify, request
from flask_cors import CORS
from models import db
import requests
# Add imports for database, user authentication, and AirVisual API

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///air_quality.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
CORS(app)

db.init_app(app)


with app.app_context():
    db.create_all()

@app.route('/register', methods=['POST'])
def register_user():
    
    pass

@app.route('/login', methods=['POST'])
def login_user():

    pass

@app.route('/logout', methods=['POST'])
def logout_user():
 
    pass

@app.route('/locations', methods=['POST', 'GET', 'DELETE'])
def manage_user_locations():
    pass

@app.route('/air_quality', methods=['GET'])
def get_location_air_quality():
    lat = request.args.get('lat')
    lon = request.args.get('lon')
    airvisual_api_key = '91c867ed-854a-4bd5-948d-576454a4bfc7'
    airvisual_url = f'https://api.airvisual.com/v2/nearest_city?lat={lat}&lon={lon}&key={airvisual_api_key}'

    response = requests.get(airvisual_url)
    
    if response.status_code == 200:
        air_quality_data = response.json()
        return jsonify(air_quality_data)
    else:
        return make_response(jsonify({'error': 'Failed to fetch air quality data'}), response.status_code)

@app.route('/')
def root():
    return ''

if __name__ == '__main__':
    app.run(port=5555)