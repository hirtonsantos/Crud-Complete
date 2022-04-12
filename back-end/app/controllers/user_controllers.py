from http import HTTPStatus
from xml.dom import NotFoundErr
from flask import jsonify, request
from app.models.user_models import User
from psycopg2.errors import UniqueViolation


def retrieve():
    return {
        "data": "User.users()"
    }


def get_user_by_id(user_id):
    try:
        response = jsonify(User.read_user_by_id(user_id)[0])
        return response
    except IndexError:
        return {
            "error": "Not found"
        }, HTTPStatus.NOT_FOUND


def create():
    try:
        data = User.users()
        return User.create_user(data)
    except KeyError:
        available_keys = ["name", "email", "phone"]
        data_request = request.get_json()
        wrong_keys = [key for key in data_request if key not in available_keys]
        wrong_keys_alternative = [
            key for key in data_request if key in available_keys]
        return {
            "expected_keys": available_keys,
            "wrong_keys": wrong_keys if len(wrong_keys) >= 1
            else wrong_keys_alternative
        }, HTTPStatus.UNPROCESSABLE_ENTITY
    except UniqueViolation:
        return {
            "error": "email or phone already exists"
        }, HTTPStatus.UNPROCESSABLE_ENTITY


def delete_user_per_id(user_id):
    deleted_anime = User.delete_user(user_id)

    if not deleted_anime:
        return {"error": "Not Found"}, HTTPStatus.NOT_FOUND

    return {}, HTTPStatus.NO_CONTENT


def update_user_per_id(user_id):

    available_keys = ["name", "email", "phone"]

    data = request.get_json()

    try:

        for key in data.keys():
            if key not in available_keys:
                raise KeyError

        update_user = User.update_user(data, user_id)

        if not update_user:
            raise NotFoundErr

        return jsonify(update_user[0])

    except KeyError:
        wrong_keys = [key for key in data if key not in available_keys]

        return {
            "expected_keys": available_keys,
            "wrong_keys": wrong_keys
        }, HTTPStatus.UNPROCESSABLE_ENTITY

    except NotFoundErr:
        return {"error": "user not found"}, HTTPStatus.NOT_FOUND
