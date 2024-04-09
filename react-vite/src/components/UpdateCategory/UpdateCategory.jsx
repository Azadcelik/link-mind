import { useSelector,useDispatch } from "react-redux"
import { categoryThunk, updateCategoryThunk } from "../../redux/category"
import { useModal } from "../../context/Modal"
import { useState,useEffect } from "react"


const UpdateCategory = ({categId}) => { 

    const dispatch = useDispatch()
    let category = useSelector( state => state.categories[categId])

    const {closeModal} = useModal()

    const [name,setName] = useState(category.name)
    const [image,setImage] = useState(null)
    const [validationErrors,setValidationError] = useState({})
    const [hasSubmitted,setHasSubmitted] = useState(false)
    

    useEffect(() =>  { 
        const error = {}

        if (!name || name.length < 2) error.name = "Your name should be at least two character"
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
        formData.append("category_image",image)
        
        await dispatch(updateCategoryThunk(formData,categId))
        await dispatch(categoryThunk())
        closeModal()
    }


    return (
        <form encType="multipart/form-data" onSubmit={handleFormData} className="upload-form">
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



export default UpdateCategory