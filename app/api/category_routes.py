from flask import Blueprint, jsonify, request
from ..models import Category, db
from ..forms import CategoryForm
from .aws_helper import get_unique_filename, remove_file_from_s3, upload_file_to_s3
from flask_login import login_required, current_user
from datetime import date

category_routes = Blueprint("category",__name__)


@category_routes.route("/")
def get_category():
    """get all category list """
    
    categories = Category.query.all()

    if not categories:
        return jsonify({"error": "No categories found"}),404
    
    category_list = [{"id": category.id, "user_id": category.user_id, "name": category.name,
                       "category_image": category.category_image} for category in categories]
    
    return jsonify(category_list)



    

@category_routes.route('/new', methods = ["POST"])
def create_category():
    """create a category with name and image"""
    form = CategoryForm()


    form["csrf_token"].data = request.cookies["csrf_token"]

    

    if form.validate_on_submit():
        category_image = form.data['category_image']
        print('category image returned from react form',category_image)
        category_image.filename = get_unique_filename(category_image.filename)
        upload = upload_file_to_s3(category_image)
        print (upload)

        if 'url' not in upload:
            return upload
        
        new_category = Category(
            user_id = current_user.id,
            name = form.data['name'],
            category_image = upload['url'],
        )
        
        db.session.add(new_category)
        db.session.commit()
        print(new_category,"this is new category in create api============")
        return jsonify({"id": new_category.id, "user_id": new_category.user_id,
                        "name": new_category.name, "category_image": new_category.category_image}), 201
            
    else:
      print(form.errors)
      return form.errors



@category_routes.route('/update/<int:id>', methods = ["PUT"])
@login_required
def update_category(id):
    """update an existing category"""

    category = Category.query.get(id)
    form = CategoryForm()
    if not category:
        return jsonify({'error': 'Category not found'}), 404

    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        if 'category_image' in form.data and form.data['category_image']:
            image = form.data['category_image']
            image.filename = get_unique_filename(image.filename)
            upload = upload_file_to_s3(image)
            
            if not 'url' in upload:
                return upload
            
            remove_file_from_s3(category.category_image)

            category.category_image = upload['url']
        
        category.name = form.data['name']

        db.session.commit()
        return jsonify({"id": category.id, "user_id": current_user.id, "name": category.name, "category_image": category.category_image})
    
    else:
        print(form.errors)
        return form.errors

        
