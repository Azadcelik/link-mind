from flask import Blueprint, jsonify, request
from ..models import Category, db
from ..forms import CategoryForm
from .aws_helper import get_unique_filename, remove_file_from_s3, upload_file_to_s3
from flask_login import login_required, current_user
from datetime import date

category_routes = Blueprint("category",__name__)



@category_routes.route('/<int:id>')
def get_categoryid(id):

    """get all categories list"""
    category= Category.query.get(id)

    if not category:
        return jsonify({"error:" "No categories dound"}),404
    
    category_data = {"id": category.id, "user_id": category.user_id, "name": category.name,
                     "category_image": category.category_image}
    return jsonify(category_data)
    
    

@category_routes.route('/new-category')
@login_required
def create_category():
    
    """create category with image and name"""
    form = CategoryForm()


    form["csrf_token"].data = request.cookies["csrf_token"]

    

    if form.validate_on_submit():
        category_image = form.data['image']
        category_image.filename = get_unique_filename(category_image.filename)
        upload = upload_file_to_s3(category_image)
        print (upload)

        if 'url' not in upload:
            return upload
        
        new_category = Category(
            user_id = current_user.id,
            name = form.data['name'],
            category_image = upload['url'],
            created_at = date.today()
        )
        
        db.session.add(new_category)
        db.session.commit()

        return jsonify({"id": new_category.id, "user_id": new_category.user_id,
                        "name": new_category.name, "image": new_category.image}), 201
            
    else:
      print(form.errors)
      return form.errors



