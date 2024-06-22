import { useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import { EleIdContext } from "../EleId/Eleid"
import { clearImage } from "../../redux/elementImage";
import './DisplayImage.css'



const DisplayImage = () => {
    
   const {setElementImageId} = useContext(EleIdContext)
 
    const dispatch = useDispatch()


    const handleClearImage = async () => { 
      await dispatch(clearImage())
      setElementImageId(0)
    }

    const image = useSelector(state => state.elementImage)
    const images = Object.values(image)

    return (
      <>
      <div className="imge-container">
        {images.map((img,index) => (
          <div className="imge-wrapper">
          <img src={img.element_image}  key={index} />
          <p>{img.name} </p>
          </div>
        ))}
      </div>
      <i className="fa-solid fa-trash" id="hey" onClick={handleClearImage}></i>
      </>
    );
  };
  
  export default DisplayImage;