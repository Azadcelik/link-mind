from flask import Blueprint, jsonify
from ..models import Category

category_routes = Blueprint("category",__name__)


@category_routes.route("/")
def get_category():
    categories = Category.query.all()
    print(categories)

    if not categories:
        return jsonify({"error": "No categories found"}),404
    
    category_list = [{"id": category.id, "user_id": category.user_id, "name": category.name,
                       "category_image": category.category_image} for category in categories]
    
    return jsonify(category_list)
