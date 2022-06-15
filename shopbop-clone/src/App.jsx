import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Navbar} from "./components/Navbar"
import {Footer} from "./components/Footer"
import {Section1} from "./components/Section1"
import {Section2} from "./components/Section2"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/> 
      <Section1/>
      <Section2/>
      <Footer/>
    </div>
  )
}

export default App
