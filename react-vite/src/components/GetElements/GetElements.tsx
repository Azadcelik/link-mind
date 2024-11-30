import React from "react"
import {ElementType, useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { elementThunk } from "../../redux/element"
import { useNavigate, useParams } from "react-router-dom"
import './GetElements.css'
import { useModal } from "../../context/Modal"
import CreateElement from "../CreateElement"
import UpdateElement from "../UpdateElement"
import { EleIdContext } from "../EleId/Eleid"
import { createImageAction } from "../../redux/elementImage"
import { ElementStateType,ElementTypes} from "../../redux/element"
import { CategoryStateType, CategoryType } from "../../redux/category"


const GetElements = () => { 


const {elementImageId,setElementImageId} = useContext(EleIdContext)
 
const [timer,setTimer] = useState<number | null>(null)
const dispatch = useDispatch()
const {categId} = useParams()
const {setModalContent} = useModal()
const navigate = useNavigate()

const elements: ElementStateType = useSelector((state: ElementStateType): ElementStateType => state.elements)
console.log("typescrit element vlaies  before",elements)

const element: ElementTypes[] = Object.values(elements)
console.log("typescrit element vlaies",element)

const categories = useSelector((state: CategoryStateType):CategoryType => (state.categories))
const category: CategoryType[] = Object.values(categories)

useEffect(() => {
    const getElements = async () => { 
       await dispatch(elementThunk())
    }
    getElements()
},[dispatch,categId])


const handleMouseDown = (id) => { 
    const newTimer = setTimeout(() => {
    setModalContent(<UpdateElement elementId={id} />)
    }, 1500);
    setTimer(newTimer)
}

const handleMouseUp = () => { 
    if (timer !== null) clearTimeout(timer)
}


const handleCreateElement = () => { 
    setModalContent(<CreateElement categId={categId} />)
    
}

const handleClick = async (ele: ElementTypes) => { 
    const element = elements[ele.id]
    await dispatch(createImageAction(element,elementImageId))
    setElementImageId(prev  => prev + 1)


    const categoryMap = {
        "drink": "Drink",
        "eat": "Food",
        "cook" : "Food",
        "play": "Play",
        "go": "places" || "Place" || "Visits"
    };


    const matchedCategory: CategoryType | undefined = category.find(categ => {
        return categ.name == categoryMap[ele.name];
    });

    if (matchedCategory) {
        navigate(`/category/${matchedCategory.id}`);
    } else {
        console.log("Category not found");
    }

}

const readAloud = (text: string) => { 

    const synth  = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text)
    synth.speak(utterance)
}


    return (

        <div className="element-container">
                      
                    
            <button className="add-element-btn" onClick={handleCreateElement}>+</button>
            {element.map((ele) => (
                // ele.category_id == categId && 
                (
                    <div className="element-box" key={ele.id} onMouseDown={() => handleMouseDown(ele.id)} onMouseUp={handleMouseUp} onClick={() => handleClick(ele)}>
                        <img src={ele.element_image} alt={ele.name} onClick={() => readAloud(ele.name)}/>
                        <p>{ele.name}</p>
                    </div>
                )
            ))}
        </div>
    )
}

export default GetElements