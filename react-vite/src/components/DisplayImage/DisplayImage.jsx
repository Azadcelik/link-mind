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
    console.log("thisis images in disolay image", images)
    

    const handleSpeaker = () => { 
      
      const synth  = window.speechSynthesis;
      images.map ((img)=>  { 
        const utterance = new SpeechSynthesisUtterance(img.name)
        utterance.pitch = 1
        synth.speak(utterance)

      })
  }


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
      <div className="speaker-trash">
      <i className="fa-solid fa-volume-high" id="heyya" onClick={handleSpeaker}></i>
      <i className="fa-solid fa-trash" id="hey" onClick={handleClearImage}></i>
      </div>
      </>
    );
  };
  
  export default DisplayImage;