from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String, nullable=False)
    #password = db.Column(db.String(255), nullable=False)
    user_locations = db.relationship('UserLocation', backref='user')


    def to_dict(self):
        locations = [ul.location for ul in self.user_locations]
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'locations': [location.to_dict() for location in locations]
        }

class Location(db.Model):
    __tablename__ = 'locations'
    id = db.Column(db.Integer, primary_key=True)
    city_name = db.Column(db.String(255), nullable=False)
    country = db.Column(db.String(255), nullable=False)
    latitude = db.Column(db.Float, nullable=False)
    longitude = db.Column(db.Float, nullable=False)
    user_locations = db.relationship('UserLocation', backref='location')

    def to_dict(self):
        users = [ul.users for ul in self.user_locations]
        return {
            'city_name': self.city_name,
            'country': self.country,
            'longitude': self.longitude,
            'latitude': self.latitude,
            'users': [user.to_dict() for user in users]
        }

class UserLocation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    location_id = db.Column(db.Integer, db.ForeignKey('locations.id'), nullable=False)
