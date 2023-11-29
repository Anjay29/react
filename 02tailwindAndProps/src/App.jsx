import './App.css'
import Card from './Component/Card'

function App() {
  return (
    <>
      <h1 className='bg-green-500 text-black rounded-xl p-4 mb-2'>Props</h1>
      <Card userName="Anjay" />
      <Card userName="Ashish" />
    </>
  )
}

export default App
