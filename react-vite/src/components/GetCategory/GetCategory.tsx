

import React from 'react'
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
import { CategoryStateType } from '../../redux/category'
import { CategoryType } from '../../redux/category'


const GetCategory = () => {
    


// const props = useContext(EleIdContext)
// console.log(props.elementImageId,props.setElementImageId)

//objects destruction is better for coding 
const {elementImageId,setElementImageId} = useContext(EleIdContext)

// const [elementImageId,setElementImageId] = useContext(EleIdContext); // react code

    const  {setModalContent} = useModal()
    const [timer,setTimer] = useState<number | null>(null)

const dispatch = useDispatch()
const navigate = useNavigate()




const categories = useSelector((state: CategoryStateType) => (state.categories))
// console.log('categories in get use selector',categories)
const category = Object.values(categories)

const readAloud = async (text:string,id:number | string) => { 
    const categoryImage = categories[id]
    console.log('let is see catgory image',categoryImage)
    if (["want to","to","go","I"].includes(categoryImage.name)) { 
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

const displayModal = (): void => { 
    setModalContent(<CreateCategory />)
}


const handleMouseDown = (id: number | string): void => { 

    const newTimer: number = setTimeout(() => {
    setModalContent(<UpdateCategory categId = {id} />)
    }, 1500);
    setTimer(newTimer)
}

const handleMouseUp = () => { 
    if (timer !== null)
    clearTimeout(timer)
}

const  navigateCategory = (categId: string | number): void =>  { 
    navigate(`${categId}`)
}



const getActionsId = (): number | string => { 
    const wantsObject: CategoryType | undefined= category.find((categ: CategoryType) => categ.name == "Actions")
    console.log("what does wantss id return i really wodner",wantsObject)

    if (!wantsObject) throw new Error("Category actions not found")
    return  wantsObject.id
}

return (
    
    <div className="category-container">
        <button className="add-category-btn" onClick={displayModal}>+</button>
        {category.map(categ => (
            <div className="category-box" key={categ.id} onMouseDown={() => handleMouseDown(categ.id)} onMouseUp={handleMouseUp} onClick={() => 
            !(["want to","I","go","to"].includes(categ.name)) ?
             navigateCategory(categ.id) 
             : categ.name == "want to" ?
             navigateCategory(getActionsId())
             : null}>
                <img src={categ.category_image} alt={categ.name} onClick={() => readAloud(categ.name ,categ.id)} />
                <p>{categ.name}</p>
            </div>
        ))}
    </div>
);

}


export default GetCategory