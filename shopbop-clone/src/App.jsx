import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Navbar} from "./components/Navbar"
import {Footer} from "./components/Footer"
import { Homepage } from './pages/HomePage'
import Accessories from "./components/Accessories"
import Bags from "./components/Bags"
import Mens from "./components/Mens"
import Womens from "./components/Womens"
import {SimpleCard} from "./pages/SignIn"
import SignupCard from "./pages/SignUp"
import {Cart} from "./pages/Cart"
import {Payment} from "./pages/Payment"
import { AllRoutes } from './pages/AllRoutes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/> 
      {/* <SignupCard/> */}
      {/* <SimpleCard/> */}
      {/* <Homepage/> */}
      {/* <Accessories/> */}
      {/* <Bags/> */}
      {/* <Mens/> */}
      {/* <Womens/> */}
      {/* <Cart/> */}
      {/* <Payment/> */}
      <AllRoutes/>
      <Footer/>
    </div>
  )
}

export default App
