from ..models import Element,db,environment,SCHEMA
from datetime import date
from sqlalchemy.sql import text



def seed_element():
    element_1 = Element(
        id = 1,
        category_id = 1,
        name = "Pizza",
        element_image = "https://link-mind.s3.amazonaws.com/pizza-3007395_1280+(1).jpg",
        created_at = date.today()
    )

    element_2 = Element(
        id = 2,
        category_id = 1,
        name = "Pasta",
        element_image = "https://link-mind.s3.amazonaws.com/food-8151625_1280.jpg",
        created_at = date.today()
    )
    element_3 = Element(
        id = 3,
        category_id = 4,
        name = "Happy",
        element_image = "https://link-mind.s3.amazonaws.com/fruit-933674_1280.jpg",
        created_at = date.today()
    )
    element_4 = Element(
        id = 4,
        category_id = 4,
        name = "Angry",
        element_image = "https://link-mind.s3.amazonaws.com/oh-my-gosh-5091609_1280.jpg",
        created_at = date.today()
    )
    element_5 = Element(
        id = 5,
        category_id = 4,
        name = "Sad",
        element_image = "https://link-mind.s3.amazonaws.com/emoji-3202669_1280.jpg",
        created_at = date.today()
    )
    element_6 = Element(
        id = 6,
        category_id = 4,
        name = "Scared",
        element_image = "https://link-mind.s3.amazonaws.com/emoji-7461058_1280.jpg",
        created_at = date.today()
    )
    element_7 = Element(
        id = 7,
        category_id = 1,
        name = "Sushi",
        element_image = "https://link-mind.s3.amazonaws.com/sushi-8113165_1280.jpg",
        created_at = date.today()
    )
    element_8 = Element(
        id = 8,
        category_id = 1,
        name = "Sandwich",
        element_image = "https://link-mind.s3.amazonaws.com/fast-food-2132863_1280.jpg",
        created_at = date.today()
    )   
    element_9 = Element(
        id = 9,
        category_id = 1,
        name = "Hamburger",
        element_image = "https://link-mind.s3.amazonaws.com/hamburger-7191901_1280.jpg",
        created_at = date.today()
    )   
    element_10 = Element(
        id = 10,
        category_id = 1,
        name = "Rice",
        element_image = "https://link-mind.s3.amazonaws.com/usd-67411_1280.jpg",
        created_at = date.today()
    )
    element_11 = Element(
        id = 11,
        category_id = 2,
        name = "Cola",
        element_image = "https://link-mind.s3.amazonaws.com/drink-462776_1280.jpg",
        created_at = date.today()
    )
    element_12 = Element(
        id = 12,
        category_id = 2,
        name = "Water",
        element_image = "https://link-mind.s3.amazonaws.com/water-2105213_1280.jpg",
        created_at = date.today()
    )   
    element_13 = Element(
        id = 13,
        category_id = 2,
        name = "Milk",
        element_image = "https://link-mind.s3.amazonaws.com/milk-220496_1280.jpg",
        created_at = date.today()
    )    
    element_14 = Element(
        id = 14,
        category_id = 2,
        name = "Coffee",
        element_image = "https://link-mind.s3.amazonaws.com/coffe-2991458_1280.jpg",
        created_at = date.today()
    )    
    element_15 = Element(
        id = 15,
        category_id = 2,
        name = "Lemonade",
        element_image = "https://link-mind.s3.amazonaws.com/lemonade-3571083_1280.jpg",
        created_at = date.today()
    )    
    element_16 = Element(
        id = 16,
        category_id = 2,
        name = "Tea",
        element_image = "https://link-mind.s3.amazonaws.com/beverage-1869722_1280.jpg",
        created_at = date.today()
    )    
    element_17 = Element(
        id = 17,
        category_id = 2,
        name = "Smoothie",
        element_image = "https://link-mind.s3.amazonaws.com/fruit-juice-2443495_1280.jpg",
        created_at = date.today()
    )
    db.session.add_all([element_1,element_2,element_3,element_4,element_5,element_6,element_7,element_8,element_9,element_10,element_11,element_12,element_13,element_14,element_15,element_16,element_17])
    db.session.commit()


def unseed_element(): 
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.elements RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE from elements"))

    db.session.commit()