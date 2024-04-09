

import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { categoryThunk } from '../../redux/category'
import './GetCategory.css'
import CreateCategory from '../CreateCategory/CreateCategory'
import { useModal } from '../../context/Modal'
import UpdateCategory from '../UpdateCategory'


const GetCategory = () => {
    
    const  {setModalContent} = useModal()
    const [timer,setTimer] = useState(null)

const dispatch = useDispatch()

const categories = useSelector(state => (state.categories))
console.log('categories in get use selector',categories)
const category = Object.values(categories)

const readAloud = (text) => { 

    const synth  = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text)
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

    const timer = setTimeout(() => {
    setModalContent(<UpdateCategory categId = {id} />)
    }, 1000);
    setTimer(timer)
}

const handleMouseUp = () => { 
    clearTimeout(timer)
}


return (
    <div className="category-container">
        <button className="add-category-btn" onClick={displayModal}>+</button>
        {category.map(categ => (
            <div className="category-box" key={categ.id} onMouseDown={() => handleMouseDown(categ.id)} onMouseUp={handleMouseUp}>
                <img src={categ.category_image} alt={categ.name} onClick={() => readAloud(categ.name)} />
                <p>{categ.name}</p>
            </div>
        ))}
    </div>
);

}


export default GetCategory