

import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { categoryThunk } from '../../redux/category'
import './GetCategory.css'

const GetCategory = () => {

const dispatch = useDispatch()

const categories = useSelector(state => (state.categories))
const category = Object.values(categories)

const readAloud = (text) => { 

    const synth  = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text)
    synth.speak(utterance)
}


useEffect(() => {
    async function dispatching() {
        dispatch(categoryThunk())
    }
      dispatching()
},[dispatch])
return (
    <div className="category-container">
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