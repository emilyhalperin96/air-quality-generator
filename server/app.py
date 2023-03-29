from flask import Flask, make_response, jsonify, request, session
from flask_cors import CORS
from flask_cors import cross_origin
from models import db, User
from flask_migrate import Migrate
import requests

import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///air_quality.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['CORS_HEADERS'] = 'Content-Type'
app.secret_key = os.environ.get('SECRET_KEY')
CORS(app, resources={r"/*": {"origins": "http://localhost:4000"}})
# CORS(app)


db.init_app(app)
migrate = Migrate(app, db)


with app.app_context():
    db.create_all()

@app.route('/signup', methods=['POST'])
def signup():
    #import pdb; pdb.set_trace()
    data = request.get_json()
    user = User(
        name=data['name'], 
        email=data['email'],
    )
    db.session.add(user)
    db.session.commit()
    session['user_id'] = user.id
    return make_response(jsonify(user.to_dict()), 201)

#add userid to the session

@app.route('/checksession', methods=['GET'])
def checksession():
    if session.get('user_id'):
        user = User.query.filter(User.id == session['user_id']).first()
        return user.to_dict(), 200
    return {'error': '401 Unathorized'}, 401



#@app.route('/locations', methods=['POST', 'GET', 'DELETE'])
#def manage_user_locations():
    #pass

@app.route('/air_quality', methods=['GET'])
@cross_origin()
def get_location_air_quality():
    # values = request.get_json()
   # city = values.get('city')
   # state = values.get('state')
    # country = values.get('country')
    city = request.args.get('city')
    country = request.args.get('country')
    state = request.args.get('state')
    airvisual_api_key = '91c867ed-854a-4bd5-948d-576454a4bfc7'
    airvisual_url = f'https://api.airvisual.com/v2/city?city={city}&state={state}&country={country}&key={airvisual_api_key}'
    print(airvisual_url)

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
    app.run(port=5000)