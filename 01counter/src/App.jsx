import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15);

  const increment = () => {
    setCounter(counter + 1);
  }

  const decrement = () => {
    let newCounter = counter - 1;

    if (newCounter >= 0) {
      setCounter(newCounter);
    }
    else {
      alert(`Value can't be negative`)
    }
  }
  return (
    <>
      <h2>Counter Value : {counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default App
