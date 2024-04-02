from .db import db,SCHEMA,add_prefix_for_prod, environment




class Category(db.Model):

    __tablename__ = "categories"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer,primary_key=True)
    user_id = db.Column(db.Integer,db.ForeignKey(add_prefix_for_prod("users.id")))
    name = db.Column(db.String(30))
    category_image = db.Column(db.String())

    user = db.relationship("User", back_populates="categories")

