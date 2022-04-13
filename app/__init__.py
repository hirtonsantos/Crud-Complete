from flask import Flask
from app import routes
# from flask_cors import CORS


def create_app():
    app = Flask(__name__)

    routes.init_app(app)

    # CORS(app)

    if __name__ == '__main__':
        app.run(debug=False)

    return app
