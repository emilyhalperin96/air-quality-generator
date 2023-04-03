from app import app, db
from models import User

def seed_data():
    # Add your seed data here
    pass

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        seed_data()