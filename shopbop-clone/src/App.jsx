import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Navbar} from "./components/Navbar"
import {Footer} from "./components/Footer"
import {Section1} from "./components/Section1"
import {Section2} from "./components/Section2"
import Accessories from "./components/Accessories"
import Bags from "./components/Bags"
import Mens from "./components/Mens"
import Womens from "./components/Womens"
import {SimpleCard} from "./pages/SignIn"
import SignupCard from "./pages/SignUp"
import {Cart} from "./pages/Cart"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Navbar/>  */}
      {/* <SignupCard/> */}
    {/* <SimpleCard/> */}
       {/* <Section1/>
       <Section2/>  */}
      {/* <Accessories/> */}
      {/* <Bags/> */}
      {/* <Mens/> */}
      {/* <Womens/> */}
      <Cart/>
      {/* <Footer/> */}
    </div>
  )
}

export default App
