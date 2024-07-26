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
      
    element_18 = Element(
        id = 18,
        category_id = 5,
        name = "Green",
        element_image = "https://link-mind.s3.amazonaws.com/meadow-196567_1280.jpg",
        created_at = date.today()
    )  
    element_19 = Element(
        id = 19,
        category_id = 5,
        name = "Red",
        element_image = "https://link-mind.s3.amazonaws.com/red-1262572_1280.jpg",
        created_at = date.today()
    )  
    element_20 = Element(
        id = 20,
        category_id = 5,
        name = "Orange",
        element_image = "https://link-mind.s3.amazonaws.com/orange-83011_1280.jpg",
        created_at = date.today()
    )  
    element_21 = Element(
        id = 21,
        category_id = 5,
        name = "Yellow",
        element_image = "https://link-mind.s3.amazonaws.com/yellow-1845394_1280.jpg",
        created_at = date.today()
    )  
    element_22 = Element(
        id = 22,
        category_id = 5,
        name = "Blue",
        element_image = "https://link-mind.s3.amazonaws.com/wood-1963988_1280.jpg",
        created_at = date.today()
    )  
    element_23 = Element(
        id = 23,
        category_id = 5,
        name = "Purple",
        element_image = "https://link-mind.s3.amazonaws.com/texture-2104054_1280.jpg",
        created_at = date.today()
    )
    element_24 = Element(
        id = 24,
        category_id = 6,
        name = "Gardening",
        element_image = "https://link-mind.s3.amazonaws.com/lawn-mower-384589_1280.jpg",
        created_at = date.today()
    )
    element_25 = Element(
        id = 25,
        category_id = 6,
        name = "Mopping Floor",
        element_image = "https://link-mind.s3.amazonaws.com/girl-1531575_1280.jpg",
        created_at = date.today()
    )
    element_26 = Element(
        id = 26,
        category_id = 6,
        name = "Laundry",
        element_image = "https://link-mind.s3.amazonaws.com/laundry-413688_1280.jpg",
        created_at = date.today()
    )
    element_27 = Element(
        id = 27,
        category_id = 6,
        name = "Folding clothes",
        element_image = "https://link-mind.s3.amazonaws.com/jeans-428614_1280.jpg",
        created_at = date.today()
    )
    element_28 = Element(
        id = 28,
        category_id = 6,
        name = "Cooking",
        element_image = "https://link-mind.s3.amazonaws.com/spaghetti-6639970_1280.jpg",
        created_at = date.today()
    )
    element_29 = Element(
        id = 29,
        category_id = 6,
        name = "Vacuum",
        element_image = "https://link-mind.s3.amazonaws.com/vacuum-cleaner-268179_1280.jpg",
        created_at = date.today()
    )
    element_30 = Element(
        category_id = 7,
        name = "Banana",
        element_image = "https://link-mind.s3.amazonaws.com/banana-2449019_1280.jpg",
        created_at = date.today()
    )
    element_31 = Element(
        category_id = 7,
        name = "Apple",
        element_image = "https://link-mind.s3.amazonaws.com/harvest-7458975_1280.jpg",
        created_at = date.today()
    )
    element_32= Element(
        category_id = 7,
        name = "Orange",
        element_image = "https://link-mind.s3.amazonaws.com/oranges-15046_1280.jpg",
        created_at = date.today()
    )
    element_33= Element(
        category_id = 7,
        name = "Strawberry",
        element_image = "https://link-mind.s3.amazonaws.com/strawberry-7224875_1280.jpg",
        created_at = date.today()
    )
    element_34 = Element(
        category_id = 7,
        name = "Blackberry",
        element_image = "https://link-mind.s3.amazonaws.com/blackberry-1061734_1280.jpg",
        created_at = date.today()
    )
    element_35 = Element(
        category_id = 7,
        name = "Blueberry",
        element_image = "https://link-mind.s3.amazonaws.com/blueberries-5955833_1280.jpg",
        created_at = date.today()
    )
    element_36 = Element(
        category_id = 8,
        name = "Cat",
        element_image = "https://link-mind.s3.amazonaws.com/european-shorthair-8601492_1280.jpg",
        created_at = date.today()
    )
    element_37 = Element(
        category_id = 8,
        name = "Dog",
        element_image = "https://link-mind.s3.amazonaws.com/dog-7758887_1280.jpg",
        created_at = date.today()
    )
    element_38 = Element(
        category_id = 8,
        name = "Fish",
        element_image = "https://link-mind.s3.amazonaws.com/fish-5917864_1280.jpg",
        created_at = date.today()
    )
    element_39 = Element(
        category_id = 8,
        name = "Giraffe",
        element_image = "https://link-mind.s3.amazonaws.com/giraffe-6378717_1280.jpg",
        created_at = date.today()
    )
    element_40 = Element(
        category_id = 8,
        name = "Bird",
        element_image = "https://link-mind.s3.amazonaws.com/pied-flycatcher-8062744_1280.jpg",
        created_at = date.today()
    )
    element_41 = Element(
        category_id = 8,
        name = "Elephant",
        element_image = "https://link-mind.s3.amazonaws.com/elephant-114543_1280.jpg",
        created_at = date.today()
    )
    element_42 = Element(
        category_id = 9,
        name = "Cloudy",
        element_image = "https://link-mind.s3.amazonaws.com/clouds-8029036_1280.jpg",
        created_at = date.today()
    )
    element_43 = Element(
        category_id = 9,
        name = "Sunny",
        element_image = "https://link-mind.s3.amazonaws.com/clouds-1117584_1280.jpg",
        created_at = date.today()
    )
    element_44 = Element(
        category_id = 9,
        name = "Rainy",
        element_image = "https://link-mind.s3.amazonaws.com/rain-275317_1280.jpg",
        created_at = date.today()
    )
    element_45 = Element(
        category_id = 9,
        name = "Snowy",
        element_image = "https://link-mind.s3.amazonaws.com/trees-1861704_1280.jpg",
        created_at = date.today()
    )
    element_46 = Element(
        category_id = 9,
        name = "Windy",
        element_image = "https://link-mind.s3.amazonaws.com/palm-trees-4293013_1280.jpg",
        created_at = date.today()
    )
    element_47 = Element(
        category_id = 10,
        name = "Soccer",
        element_image = "https://link-mind.s3.amazonaws.com/soccer-1457988_1280.jpg",
        created_at = date.today()
    )
    element_48 = Element(
        category_id = 10,
        name = "Basketball",
        element_image = "https://link-mind.s3.amazonaws.com/basketball-3571730_1280.jpg",
        created_at = date.today()
    )
    element_49 = Element(
        category_id = 10,
        name = "Tennis",
        element_image = "https://link-mind.s3.amazonaws.com/tennis-2557074_1280.jpg",
        created_at = date.today()
    )
    element_50 = Element(
        category_id = 10,
        name = "Voleyball",
        element_image = "https://link-mind.s3.amazonaws.com/volleyball-90896_1280.jpg",
        created_at = date.today()
    )
    element_51 = Element(
        category_id = 10,
        name = "Baseball",
        element_image = "https://link-mind.s3.amazonaws.com/hit-1407826_1280.jpg",
        created_at = date.today()
    )
    element_52 = Element(
        category_id = 13,
        name = "go",
        element_image = "https://link-mind.s3.amazonaws.com/images.jpeg",
        created_at = date.today()
    )
    element_53 = Element(
        category_id = 13,
        name = "walk",
        element_image = "https://link-mind.s3.amazonaws.com/mountains-8497575_1280.jpg",
        created_at = date.today()
    )
    element_54 = Element(
        category_id = 13,
        name = "eat",
        element_image = "https://link-mind.s3.amazonaws.com/fork-207410_1280.jpg",
        created_at = date.today()
    )
    element_55 = Element(
        category_id = 13,
        name = "run",
        element_image = "https://link-mind.s3.amazonaws.com/man-8293794_1280.jpg",
        created_at = date.today()
    )
    element_56 = Element(
        category_id = 13,
        name = "drink",
        element_image = "https://link-mind.s3.amazonaws.com/beautiful-1867178_1280.jpg",
        created_at = date.today()
    )
    element_57 = Element(
        category_id = 13,
        name = "sleep",
        element_image = "https://link-mind.s3.amazonaws.com/dog-6934895_1280.jpg",
        created_at = date.today()
    )
    element_58 = Element(
        category_id = 13,
        name = "play",
        element_image = "https://link-mind.s3.amazonaws.com/child-3281615_1280.jpg",
        created_at = date.today()
    )
    element_59 = Element(
        category_id = 13,
        name = "cook",
        element_image = "https://link-mind.s3.amazonaws.com/vegetables-7438072_1280.jpg",
        created_at = date.today()
    )
    element_60 = Element(
        category_id = 13,
        name = "dance",
        element_image = "https://link-mind.s3.amazonaws.com/people-7001880_1280.jpg",
        created_at = date.today()
    )
    element_61 = Element(
        category_id = 14,
        name = "on",
        element_image = "https://link-mind.s3.amazonaws.com/prepositions+(1).jpg",
        created_at = date.today()
    )
    element_62 = Element(
        category_id = 14,
        name = "in",
        element_image = "https://link-mind.s3.amazonaws.com/prepositions.jpg",
        created_at = date.today()
    )
    element_63 = Element(
        category_id = 14,
        name = "under",
        element_image = "https://link-mind.s3.amazonaws.com/prepositions+(2).jpg",
        created_at = date.today()
    )
    element_64 = Element(
        category_id = 14,
        name = "next to",
        element_image = "https://link-mind.s3.amazonaws.com/prepositions+(3).jpg",
        created_at = date.today()
    )
    element_65 = Element(
        category_id = 14,
        name = "behind",
        element_image = "https://link-mind.s3.amazonaws.com/prepositions+(4).jpg",
        created_at = date.today()
    )
    element_66 = Element(
        category_id = 14,
        name = "in front of",
        element_image = "https://link-mind.s3.amazonaws.com/prepositions+(5).jpg",
        created_at = date.today()
    )
    element_67 = Element(
        category_id = 14,
        name = "between",
        element_image = "https://link-mind.s3.amazonaws.com/prepositions+(6).jpg",
        created_at = date.today()
    )
    element_68 = Element(
        category_id = 14,
        name = "to",
        element_image = "https://link-mind.s3.amazonaws.com/to+prepositions.jpg",
        created_at = date.today()
    )
    element_69 = Element(
        category_id = 15,
        name = "shopping mall",
        element_image = "https://link-mind.s3.amazonaws.com/stairs-906723_1280.jpg",
        created_at = date.today()
    )
    element_70 = Element(
        category_id = 15,
        name = "school",
        element_image = "https://link-mind.s3.amazonaws.com/education-3189934_1280.jpg",
        created_at = date.today()
    )
    element_71 = Element(
        category_id = 15,
        name = "theatre",
        element_image = "https://link-mind.s3.amazonaws.com/enactment-258631_1280.jpg",
        created_at = date.today()
    )
    element_72 = Element(
        category_id = 15,
        name = "home",
        element_image = "https://link-mind.s3.amazonaws.com/house-1836070_1280.jpg",
        created_at = date.today()
    )
    element_73 = Element(
        category_id = 15,
        name = "museum",
        element_image = "https://link-mind.s3.amazonaws.com/st-petersburg-97166_1280.jpg",
        created_at = date.today()
    )
    element_74 = Element(
        category_id = 15,
        name = "hospital",
        element_image = "https://link-mind.s3.amazonaws.com/hospital-8352776_1280.jpg",
        created_at = date.today()
    )
    element_75 = Element(
        category_id = 15,
        name = "outside",
        element_image = "https://link-mind.s3.amazonaws.com/legs-2635038_1280.jpg",
        created_at = date.today()
    )
    element_76 = Element(
        category_id = 15,
        name = "library",
        element_image = "https://link-mind.s3.amazonaws.com/library-488690_1280.jpg",
        created_at = date.today()
    )
    element_77 = Element(
        category_id = 3,
        name = "Cartoon",
        element_image = "https://link-mind.s3.amazonaws.com/television-5017870_1280.jpg",
        created_at = date.today()
    )
    element_78 = Element(
        category_id = 3,
        name = "Youtube",
        element_image = "https://link-mind.s3.amazonaws.com/youtube-1158693_1280.jpg",
        created_at = date.today()
    )
    element_79 = Element(
        category_id = 3,
        name = "Sports",
        element_image = "https://link-mind.s3.amazonaws.com/football-67701_1280.jpg",
        created_at = date.today()
    )
    element_80 = Element(
        category_id = 3,
        name = "Movies",
        element_image = "https://link-mind.s3.amazonaws.com/couple-7025924_1280.jpg",
        created_at = date.today()
    )
    



    


    db.session.add_all([element_1,element_2,element_3,element_4,element_5,element_6,element_7,element_8,element_9,element_10,element_11,element_12,element_13,element_14,element_15,element_16,element_17,
                        element_18,element_19,element_20,element_21,element_22,element_23,element_24,element_25,element_26,element_27,element_28,element_29,element_30,element_31,element_32,element_33,element_34,element_35,
                        element_36,element_37,element_38,element_39,element_40,element_4,element_42,element_43,element_44,element_45,element_46,element_47,element_48,element_49,element_50,element_51,
                        element_52,element_53,element_54,element_55,element_56,element_57,element_58,element_59,element_60,element_61,element_61,element_63,element_64,element_65,element_66,element_67,element_68,
                        element_69,element_70,element_71,element_72,element_73,element_74,element_75,element_76,element_77,element_78,element_79,element_80])
    db.session.commit()


def unseed_element(): 
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.elements RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE from elements"))

    db.session.commit()