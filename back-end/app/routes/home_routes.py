from flask import Blueprint
from app.controllers import user_controllers

bp = Blueprint("users", __name__, url_prefix="/users")


bp.get("")(user_controllers.retrieve)
bp.post("")(user_controllers.create)
bp.delete("/<user_id>")(user_controllers.delete_user_per_id)