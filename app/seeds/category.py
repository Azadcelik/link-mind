from ..models import Category, db, environment, SCHEMA
from sqlalchemy.sql import text



def seed_category():

    seed_categories1 = Category(
        user_id = 1,
        name = "Eat",
        category_image = "https://link-mind.s3.amazonaws.com/istockphoto-1477430966-1024x1024.jpg"
    )

    seed_categories2 = Category(
        user_id = 2,
        name = "Drink",
        category_image = "https://link-mind.s3.amazonaws.com/istockphoto-1487256441-1024x1024.jpg"
    )

    seed_categories3 = Category(
        user_id = 3,
        name = "Watch",
        category_image = "https://link-mind.s3.amazonaws.com/television-5017870_1280.jpg"
    )

    db.session.add_all([seed_categories1,seed_categories2,seed_categories3])
    db.session.commit()


def unseed_category(): 
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.categories RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE from categories"))

    db.session.commit()

