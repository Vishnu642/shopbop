import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Navbar} from "./components/Navbar"
import {Footer} from "./components/Footer"

import { AllRoutes } from './pages/AllRoutes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/> 
      <AllRoutes/>
      <Footer/>
    </div>
  )
}

export default App
