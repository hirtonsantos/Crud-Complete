from flask import Blueprint
from app.controllers import user_controllers

bp = Blueprint("users", __name__, url_prefix="/users")


bp.post("")(user_controllers.create)
bp.get("")(user_controllers.retrieve)
bp.get("/<user_id>")(user_controllers.get_user_by_id)
bp.delete("/<user_id>")(user_controllers.delete_user_per_id)
bp.patch("/<user_id>")(user_controllers.update_user_per_id)
