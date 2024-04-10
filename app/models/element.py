
from .db import db,add_prefix_for_prod,SCHEMA,environment









class Element(db.Model):

    __tablename__ = "elements"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key = True)
    category_id = db.Column(db.Integer,db.ForeignKey(add_prefix_for_prod("categories.id")))
    name = db.Column(db.String(30))
    element_image = db.Column(db.String(255))
    created_at = db.Column(db.Date)

    category = db.relationship("Category",back_populates= "elements")
