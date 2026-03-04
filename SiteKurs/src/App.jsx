import MainPage from './MainPage/MainPage.jsx'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return(
    <>
      <MainPage/>
    </>
  )
}

export default App
