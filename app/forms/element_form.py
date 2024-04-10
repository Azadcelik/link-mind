from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired
from flask_wtf.file import FileAllowed, FileRequired, FileField

from ..api.aws_helper import ALLOWED_EXTENSIONS


class ElementForm(FlaskForm):
    name = StringField("name", validators=[DataRequired()])
    element_image = FileField("element_image", validators=[FileAllowed(list(ALLOWED_EXTENSIONS)),FileRequired()])
    