import {useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { elementThunk } from "../../redux/element"
import { useNavigate, useParams } from "react-router-dom"
import './GetElements.css'
import { useModal } from "../../context/Modal"
import CreateElement from "../CreateElement"
import UpdateElement from "../UpdateElement"
import { EleIdContext } from "../EleId/Eleid"
import { createImageAction } from "../../redux/elementImage"


const GetElements = () => { 


const {elementImageId,setElementImageId} = useContext(EleIdContext)
 
const [timer,setTimer] = useState(null)
const dispatch = useDispatch()
const {categId} = useParams()
const {setModalContent} = useModal()
const navigate = useNavigate()

const elements = useSelector(state => state.elements)
const element = Object.values(elements)

const categories = useSelector(state => (state.categories))
const category = Object.values(categories)

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
    clearTimeout(timer)
}


const handleCreateElement = () => { 
    setModalContent(<CreateElement categId={categId} />)
    
}

const handleClick = async (ele) => { 
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


    const matchedCategory = category.find(categ => {
        return categ.name == categoryMap[ele.name];
    });

    if (matchedCategory) {
        navigate(`/category/${matchedCategory.id}`);
    } else {
        console.log("Category not found");
    }

}

const readAloud = (text) => { 

    const synth  = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text)
    synth.speak(utterance)
}


    return (

        <div className="element-container">
                      
                    
            <button className="add-element-btn" onClick={handleCreateElement}>+</button>
            {element.map(ele => (
                ele.category_id == categId && (
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