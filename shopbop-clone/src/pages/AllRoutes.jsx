import {Routes,Route} from "react-router-dom"
import Accessories from "../components/Accessories"
import Bags from "../components/Bags"
import Mens from "../components/Mens"
import Womens from "../components/Womens"
import { Cart } from "./Cart"
import { Homepage } from "./HomePage"
import { Payment } from "./Payment"
import { SimpleCard } from "./SignIn"
import SignupCard from "./SignUp"

export const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Homepage/>} ></Route>
            <Route path="/signup" element={<SignupCard/>} ></Route>
            <Route path="/signin" element={<SimpleCard/>} ></Route>
            <Route path="/accessories" element={<Accessories/>} ></Route>
            <Route path="/bags" element={<Bags/>} ></Route>
            <Route path="/mens" element={<Mens/>} ></Route>
            <Route path="/womens" element={<Womens/>} ></Route>
            <Route path="/cart" element={<Cart/>} ></Route>
            <Route path="/payment" element={<Payment/>} ></Route>
        </Routes>
    )
}