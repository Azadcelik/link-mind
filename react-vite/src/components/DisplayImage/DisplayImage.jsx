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
      let speakerArr = []
      images.map ((img)=>  { 
        speakerArr.push(img.name)
       

      })
      const speakerSentence = speakerArr.join(" ")
      const utterance = new SpeechSynthesisUtterance(speakerSentence)
      utterance.rate = 0.8
      synth.speak(utterance)
  }


    return (
      <div className="top-page">
        <div>
      <i className="fa-solid fa-volume-high" id="displaying-image" onClick={handleSpeaker}></i>
      </div>
      <div className="imge-container">
        {images.map((img,index) => (
          <div className="imge-wrapper">
          <img src={img.element_image}  key={index} />
          <p>{img.name} </p>
          </div>
        ))}
      </div>
      <div>
      <i class="fa-solid fa-delete-left" id="displaying-image" onClick={handleClearImage}></i>
      </div>
      </div>
    );
  };
  
  export default DisplayImage;