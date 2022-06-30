import { useState, useRef } from 'react';
import "./App.css";

function App() {

  const [time, setTime] = useState(0)
  const timeRef = useRef(null)

  let start = () => {
    if ( timeRef.current != null) return
    timeRef.current = setInterval(() => {
      setTime((time) => time + 1)
    }, 10)
    
  }

  let stop = () => {
    if (timeRef.current == null) return
    clearInterval(timeRef.current)
    timeRef.current = null
  }

  let reset = () => {
    stop()
    setTime(0)
  }

   let formatTime = (timeInMilis) => {
    const milis = timeInMilis % 100
    const sec = Math.floor(timeInMilis / 100) % 60
    const min = Math.floor(timeInMilis / 6000) % 60
    const hour = Math.floor(timeInMilis / 600000) 
    console.log(sec, min, timeInMilis)
    return `${hour}:${min}:${sec}:${milis}`
    
  }

  return (
    <div className="App">
      <h1>
        <time>{formatTime(time)}</time>
      </h1>
      <button className="strt" onClick= {start}>start</button>
      <button className="stp" onClick={stop} >stop</button>
      <button className="rst" onClick={reset} >reset</button>
    </div>
  );
}

export default App;
