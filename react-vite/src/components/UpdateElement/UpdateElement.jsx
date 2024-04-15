import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { elementThunk, updateElementThunk } from "../../redux/element"
import { useModal } from "../../context/Modal"








const UpdateElement = (props) => { 

    const {closeModal} = useModal()
    const dispatch = useDispatch()
    const element = useSelector(state => state.elements[props.elementId])
    console.log(element,'this is en alemeniakjsd')

const [image,setImage] = useState(null)
const [name,setName] = useState(element.name)
const [validationErrors,setValidationError] = useState({})
const [hasSubmitted,setHasSubmitted] = useState(false)


useEffect(() => { 
    const error = {}
    if (!name || name.length < 2) error.name = "Name should at least be two characthers"
    if (!image) error.image = "You should upload an image"
    setValidationError(error)
},[name,image])


const handleFormData = async (e) => {
    e.preventDefault()
    setHasSubmitted(true)

    if (Object.values(validationErrors).length) {
        return 'something went wrong please try agian aaaa';
    }

    const formData = new FormData()
    formData.append("name",name)
    formData.append('element_image',image)

    await dispatch(updateElementThunk(formData,props.elementId))
    await dispatch(elementThunk(element.category_id))
    closeModal()
}



return (
    <form encType="multipart/form-data" onSubmit={handleFormData} className="upload-form">
        <i className="fa-solid fa-trash"></i>
        <div className="form-group">
            <label htmlFor="image-input">Image</label>
            {hasSubmitted && validationErrors.image && (
                <span>{validationErrors.image}</span>
            )}
            <input 
                type="file"
                accept="image/*"
                onChange={e => setImage(e.target.files[0])}
                id="image-input"
            />
        </div>

        <div className="form-group">
            <label htmlFor="name-input">Name</label>
            {hasSubmitted && validationErrors.name && (
                <span>{validationErrors.name}</span>
            )}
            <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name-input"
            />
        </div>
        <button type="submit" className="submit-button">Submit</button>
    </form>
);
}


export default UpdateElement