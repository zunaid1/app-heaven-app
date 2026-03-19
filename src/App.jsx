import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-2xl text-center'>Welcome to <span className='font-bold text-blue-800'>App Haven App</span></h1>
    </>
  )
}

export default App
