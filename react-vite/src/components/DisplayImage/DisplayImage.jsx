import { useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import { EleIdContext } from "../EleId/Eleid"
import { clearImage } from "../../redux/elementImage";





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
        {images.map((img,index) => (
          <img src={img.element_image} style={{ width: '20px', height: '20px' }} key={index}/> 
          
        ))}
        <h1 onClick={handleClearImage}>Clear</h1>
      </>
    );
  };
  
  export default DisplayImage;