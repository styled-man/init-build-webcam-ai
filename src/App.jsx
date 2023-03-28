import { useState } from 'react'
import './App.css'
import Webcam from "react-webcam";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Webcam />
    </div>
  )
}

export default App
