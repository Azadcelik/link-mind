from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired
from flask_wtf.file import FileAllowed, FileRequired, FileField

from ..api.aws_helper import ALLOWED_EXTENSIONS


class CategoryForm(FlaskForm):
    name = StringField("name", validators=[DataRequired()])
    category_image = FileField("category_image", validators=[FileAllowed(list(ALLOWED_EXTENSIONS)),FileRequired()])
    