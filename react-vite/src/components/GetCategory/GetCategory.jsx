

import { useEffect, useState,useContext } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { categoryThunk } from '../../redux/category'
import './GetCategory.css'
import CreateCategory from '../CreateCategory/CreateCategory'
import { useModal } from '../../context/Modal'
import UpdateCategory from '../UpdateCategory'
import { useNavigate } from 'react-router-dom'
import { EleIdContext } from '../EleId/Eleid'
import { createImageAction } from '../../redux/elementImage'
const GetCategory = () => {
    
const {elementImageId,setElementImageId} = useContext(EleIdContext)


    const  {setModalContent} = useModal()
    const [timer,setTimer] = useState(null)

const dispatch = useDispatch()
const navigate = useNavigate()

const categories = useSelector(state => (state.categories))
console.log('categories in get use selector',categories)
const category = Object.values(categories)

const readAloud = async (text,id) => { 
    const categoryImage = categories[id]
    console.log('let is see catgory image',categoryImage)
    if (["want","to","go","I"].includes(categoryImage.name)) { 
        categoryImage.element_image = categoryImage.category_image
        await dispatch(createImageAction(categoryImage,elementImageId))
        setElementImageId(prev  => prev + 1)
    }

    const synth  = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text)
    if (utterance.text === "I") utterance.text = "i"
    synth.speak(utterance)
}





useEffect(() => {
    async function dispatching() {
       await dispatch(categoryThunk())
    }
      dispatching()
},[dispatch])

const displayModal = () => { 
    setModalContent(<CreateCategory />)
}


const handleMouseDown = (id) => { 

    const newTimer = setTimeout(() => {
    setModalContent(<UpdateCategory categId = {id} />)
    }, 1000);
    setTimer(newTimer)
}

const handleMouseUp = () => { 
    clearTimeout(timer)
}

const  navigateCategory = (categId) =>  { 
    navigate(`${categId}`)
}

return (
    <div className="category-container">
        <button className="add-category-btn" onClick={displayModal}>+</button>
        {category.map(categ => (
            <div className="category-box" key={categ.id} onMouseDown={() => handleMouseDown(categ.id)} onMouseUp={handleMouseUp} onClick={() => !(["want","I","go","to"].includes(categ.name))? navigateCategory(categ.id) : null}>
                <img src={categ.category_image} alt={categ.name} onClick={() => readAloud(categ.name,categ.id)} />
                <p>{categ.name}</p>
            </div>
        ))}
    </div>
);

}


export default GetCategory