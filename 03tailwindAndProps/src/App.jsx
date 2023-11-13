import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 text-black rounded-xl p-4 mb-2'>TailWind Test</h1>
      <Card userName="Anjay" />
      <Card userName="Ashish" />
    </>
  )
}

export default App
