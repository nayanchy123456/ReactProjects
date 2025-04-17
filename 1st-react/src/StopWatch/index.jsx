import React, { useRef, useState } from 'react'
import './index.css';
function StopWatch() {
  const [time, setTime] = useState(0);
  const stopWatchRef = useRef(0);
  const intervalRef = useRef(null);


  const handleStart = () => {
    stopWatchRef.current = new Date().getTime();
    
  }

  const handlePause = () => {

  }

  const handleRestart = () => {

  }

  return (
    <div className='stopWatch-container'>
      <h1>00:00:00</h1>
      <div className='buttons-container'>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleRestart}>Restart</button>
      </div>
    </div>
  )
}

export default StopWatch
