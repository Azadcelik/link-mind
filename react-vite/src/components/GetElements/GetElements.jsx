import {useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { elementThunk } from "../../redux/element"
import { useParams } from "react-router-dom"
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

const elements = useSelector(state => state.elements)
const element = Object.values(elements)


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

const handleClick = async (id) => { 
    const element = elements[id]
    await dispatch(createImageAction(element,elementImageId))
    setElementImageId(prev  => prev + 1)
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
                    <div className="element-box" key={ele.id} onMouseDown={() => handleMouseDown(ele.id)} onMouseUp={handleMouseUp} onClick={() => handleClick(ele.id)}>
                        <img src={ele.element_image} alt={ele.name} onClick={() => readAloud(ele.name)}/>
                        <p>{ele.name}</p>
                    </div>
                )
            ))}
        </div>
    )
}

export default GetElements