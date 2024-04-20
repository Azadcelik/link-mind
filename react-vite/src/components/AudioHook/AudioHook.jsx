import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useSelector } from 'react-redux';
import './AudioHook.css';
import { useState } from 'react';

const AudioHook = () => {
    const [processedTranscript, setProcessedTranscript] = useState('');
    const [statusColor, setStatusColor] = useState('stopped'); // Default status is 'stopped'
    const elements = useSelector(state => state.elements);
    const element = Object.values(elements);

    const { listening, transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    const handleStartButton = () => {
        SpeechRecognition.startListening({ continuous: true });
        setStatusColor('listening');
    };

    const handleStopButton = () => {
        SpeechRecognition.stopListening();
        setProcessedTranscript(transcript);
        setStatusColor('stopped');
    };

    const handleResetButton = () => {
        resetTranscript();
        setStatusColor('reset');
    };

    return (
        <>
            <div className='toolbar'>
                <div className={`status-icon ${statusColor}`}></div>
                <button className="button" onClick={handleStartButton}>Start</button>
                <button className="button" onClick={handleStopButton}>Stop</button>
                <button className="button" onClick={handleResetButton}>Reset</button>
                <p>{transcript}</p>
            </div>
            <div className='image-container'>
                {element.filter(ele => processedTranscript.toLowerCase().split(' ').includes(ele.name)).map(ele => (
                    <img src={ele.element_image} className='ele-img' key={ele.id}/>
                ))}
            </div>
        </>
    );
};

export default AudioHook;
