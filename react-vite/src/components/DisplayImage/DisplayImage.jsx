import { useContext, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { EleIdContext } from "../EleId/Eleid"



const DisplayImage = () => {
  const { elementImageId } = useContext(EleIdContext); 
  const [imageArr, setImageArr] = useState([]); 
  const [addedImages, setAddedImages] = useState(new Set())

  const element = useSelector((state) => state.elements[elementImageId])

  useEffect(() => {
    if (element && element.element_image && !addedImages.has(element.element_image)) {
      setImageArr((prev) => [...prev, element.element_image])
      setAddedImages((prev) => new Set([...prev, element.element_image]))
    }
  }, [element]); 

  if (!elementImageId || !element) {
    return null; 
  }

  return (
    <>
      {imageArr.map((img, index) => (
        <img src={img} style={{ width: '20px', height: '20px' }} key={index} /> 
      ))}
    </>
  );
};

export default DisplayImage;