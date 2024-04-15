from flask import Blueprint,request,jsonify
from ..models import Element,db
from .aws_helper import get_unique_filename, upload_file_to_s3, remove_file_from_s3
from datetime import date
from ..forms import ElementForm
from flask_login import login_required, current_user

element_routes = Blueprint('element',__name__)


@element_routes.route("/<int:id>")
def get_elements(id):
    """get all elements list """
    
    elements = Element.query.filter_by(category_id = id).all()

    if not elements:
        return jsonify({"error": "No elements found"}),404
    
    elements_list = [{"id": element.id,"name": element.name, "category_id": element.category_id,
                       "element_image": element.element_image} for element in elements]
    
    return jsonify(elements_list)


@element_routes.route('/new/<int:id>', methods = ["POST"])
@login_required
def create_element(id):
    """create a element with name and image"""
    form = ElementForm()


    form["csrf_token"].data = request.cookies["csrf_token"]

    

    if form.validate_on_submit():
        element_image = form.data['element_image']
        print('element image returned from react form',element_image)
        element_image.filename = get_unique_filename(element_image.filename)
        upload = upload_file_to_s3(element_image)
        print (upload)

        if 'url' not in upload:
            return upload
        
        new_element = Element(
            category_id = id,
            name = form.data['name'],
            element_image = upload['url'],
            created_at = date.today()
        )
        
        db.session.add(new_element)
        db.session.commit()
        return jsonify({"id": new_element.id,
                        "name": new_element.name, "category_image": new_element.element_image}), 201
            
    else:
      print(form.errors)
      return form.errors
      


@element_routes.route('/update/<int:id>', methods = ["PUT"])
@login_required
def update_element(id):
    """update an existing element"""

    element = Element.query.get(id)
    form = ElementForm()
    if not element:
        return jsonify({'error': 'Element not found'}), 404

    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        if 'element_image' in form.data and form.data['element_image']:
            image = form.data['element_image']
            image.filename = get_unique_filename(image.filename)
            upload = upload_file_to_s3(image)
            
            if not 'url' in upload:
                return upload
            
            remove_file_from_s3(element.element_image)

            element.element_image = upload['url']
        
        element.name = form.data['name']

        db.session.commit()
        return jsonify({"id": element.id, "category_id": id, "name": element.name, "element_image": element.element_image})
    
    else:
        print(form.errors)
        return form.errors


@element_routes.route('/delete/<int:id>', methods = ["DELETE"])
@login_required
def delete_element(id):
    element = Element.query.get(id)

    if not element:
        return jsonify({'error': 'Element not found'}), 404

    remove_file_from_s3(element.element_image)
    print("succesfully deleted")
    db.session.delete(element)
    db.session.commit()
    return jsonify({"message": "succesfully deleted"})