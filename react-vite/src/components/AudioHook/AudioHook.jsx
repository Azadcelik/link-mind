import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition'
import { useSelector } from 'react-redux'
import './AudioHook.css'
import { useState } from 'react'
const AudioHook = () => { 
  
const [processedTranscript,setProcessedTranscript] = useState('')


const elements = useSelector(state => state.elements)
const element = Object.values(elements)

console.log('this is audiohoook',element)
    const {listening, transcript,resetTranscript,browserSupportsSpeechRecognition} = useSpeechRecognition()

        if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn&apos;t support speech recognition.</span>;
      }
 

      const handleStartButton = () => {
        SpeechRecognition.startListening({continuous: true})
    }

    const handleStopButton = () => { 
        SpeechRecognition.stopListening()
        setProcessedTranscript(transcript)
    }


    const matchedElement = element.filter(ele => processedTranscript.split(' ').includes(ele.name))

    matchedElement.sort((a,b) => { 
        return processedTranscript.indexOf(a.name) - processedTranscript.indexOf(b.name)
    })


    return (

        <>
        <p>Microphone: {listening ? "on" : 'off'}</p>
        <button onClick={handleStartButton}>Start</button>
        <button onClick={handleStopButton}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
        <p>{transcript}</p>
        <div>
        {matchedElement.map(ele => (
            <img src = {ele.element_image} className='ele-img' key={ele.id}/>
        ))}    
        </div>        
        </>
    )
}


export default AudioHook;