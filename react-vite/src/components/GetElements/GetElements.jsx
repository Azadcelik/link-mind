import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { elementThunk } from "../../redux/element"
import { useParams } from "react-router-dom"
import './GetElements.css'


const GetElements = () => { 

const dispatch = useDispatch()
const {categId} = useParams()

const elements = useSelector(state => state.elements)
const element = Object.values(elements)



useEffect(() => {
    const getElements = async () => { 
       await dispatch(elementThunk(categId))
    }
    getElements()
},[dispatch,categId])
    return (
        <div className="element-container">
            <button className="add-element-btn">+</button>
            {element.map(ele => (
                ele.category_id == categId && (
                    <div className="element-box" key={ele.id} >
                        <img src={ele.element_image} alt={ele.name}/>
                        <p>{ele.name}</p>
                    </div>
                )
            ))}

        </div>
    )
}

export default GetElements