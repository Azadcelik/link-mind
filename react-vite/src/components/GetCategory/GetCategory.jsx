

import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { categoryThunk } from '../../redux/category'
import './GetCategory.css'
import CreateCategory from '../CreateCategory/CreateCategory'
import { useModal } from '../../context/Modal'


const GetCategory = () => {
    
    const  {setModalContent} = useModal()

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

return (
    <div className="category-container">
        <button className="add-category-btn" onClick={displayModal}>+</button>
        {category.map(categ => (
            <div className="category-box" key={categ.id}>
                <img src={categ.category_image} alt={categ.name} onClick={() => readAloud(categ.name)} />
                <p>{categ.name}</p>
            </div>
        ))}
    </div>
);

}


export default GetCategory