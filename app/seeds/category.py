from ..models import Category, db, environment, SCHEMA
from sqlalchemy.sql import text



def seed_category():

    seed_categories1 = Category(
        user_id = 1,
        name = "Food",
        category_image = "https://link-mind.s3.amazonaws.com/salad-2756467_1280.jpg"
    )

    seed_categories2 = Category(
        user_id = 1,
        name = "Drink",
        category_image = "https://link-mind.s3.amazonaws.com/istockphoto-1487256441-1024x1024.jpg"
    )

    seed_categories3 = Category(
        user_id = 1,
        name = "Watch",
        category_image = "https://link-mind.s3.amazonaws.com/television-5017870_1280.jpg"
    )
    seed_categories4 = Category(
        user_id = 1,
        name = "Feelings",
        category_image = "https://link-mind.s3.amazonaws.com/smiley-2979107_1280.jpg"
    )
    seed_categories5 = Category(
        user_id = 1,
        name = "Colors",
        category_image = "https://link-mind.s3.amazonaws.com/colorful-2137080_1280.jpg" 
    )
    seed_categories6 = Category(
        user_id = 1,
        name = "Household chores",
        category_image = "https://link-mind.s3.amazonaws.com/family-8806379_1280.jpg"
    )
    seed_categories7 = Category(
        user_id = 1,
        name = "Fruits",
        category_image = "https://link-mind.s3.amazonaws.com/breakfast-4234047_1280.jpg"
    )
    seed_categories8 = Category(
        user_id = 1,
        name = "Animals",
        category_image = "https://link-mind.s3.amazonaws.com/cheshire-cat-933185_1280.jpg"
    )
    seed_categories9 = Category(
        user_id = 1,
        name = "Weather",
        category_image = "https://link-mind.s3.amazonaws.com/Learn-about-Weather.jpg"
    )

    db.session.add_all([seed_categories1,seed_categories2,seed_categories3,seed_categories4,seed_categories5,seed_categories6,seed_categories7,seed_categories8,
                        seed_categories9])
    db.session.commit()


def unseed_category(): 
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.categories RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE from categories"))

    db.session.commit()

