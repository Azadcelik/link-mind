from ..models import Element,db,environment,SCHEMA
from datetime import date
from sqlalchemy.sql import text



def seed_element():
    element_1 = Element(
        id = 1,
        category_id = 3,
        name = "Pizza",
        element_image = "https://link-mind.s3.amazonaws.com/pizza-3010062_640.jpg.crdownload",
        created_at = date.today()
    )

    element_2 = Element(
        id = 2,
        category_id = 3,
        name = "Pasta",
        element_image = "https://link-mind.s3.amazonaws.com/pasta-794464_1280.jpg",
        created_at = date.today()
    )

    db.session.add_all([element_1,element_2])
    db.session.commit()


def unseed_element(): 
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.elements RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE from elements"))

    db.session.commit()