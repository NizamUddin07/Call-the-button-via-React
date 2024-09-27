import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    alert('button Clicked');
  }

  return (
    <>
      <h1>Hello It's Basic React</h1>
      <button onClick={handleClick }>It's Demo Button</button>
    </>
  )
}

export default App
