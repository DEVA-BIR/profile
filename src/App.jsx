import { useState } from 'react'
import './App.css'
import Header from './Component/Header.jsx'
import MainBody from './Component/MainBody.jsx'
import Footer from './Component/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MainBody />
      <Footer />
    </>
  )
}

export default App
