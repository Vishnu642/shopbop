import {Box} from "@chakra-ui/react"
import "./Cart.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Payment = ()=>{

    const navigate = useNavigate()

    let data = JSON.parse(localStorage.getItem("cart"))
    console.log(data);
  
      const [cart, setCart] = useState(data);
    const totalPrice = () => {
        
      const totalAmt = cart.reduce((acc, elem) => {
        console.log(elem.price)
        return acc + Number(elem.price);
      }, 0);
      console.log(totalAmt)
      let finalAmount = totalAmt;
      console.log(finalAmount)
      localStorage.setItem("totalAmountKey", finalAmount);
      return totalAmt;
    };
    const [totalp, setTotalprice] = useState(totalPrice);
    const removeItem = (id) => {
      for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].id === id) {
          cart.splice(i, 1);
          localStorage.setItem("cart", JSON.stringify(cart));
          setCart([...cart]);
          // setCartLength(cart.length);
          // console.log("cart:", cart);
          break;
        }
      }
      // console.log("removed");
      const tA = totalPrice();
      setTotalprice(tA);
    };


    return(
        <Box className="cart-container" bg="rgb(236, 255, 255)" >
            <Box className="cart-box" >
                <Box className="cart-left" >
                    <Box className="cart-heading" >
                        <h2 style={{padding:"5px"}} >Order Review</h2>
                    </Box>
                    <Box className="cart-product" >
                    {data.map((item)=>{
             return(
             <div className="item-card" style={{backgroundColor:"white"}} >
                <div><img padding="10px" src={item.imgURL} width="150px" height="200px" alt="img"/></div>
                <div> 
                    <h4 style={{marginLeft:"10px"}} >{item.title}</h4>
                    <p style={{marginLeft:"10px"}} >{item.name}</p>
                    <h4 style={{marginLeft:"10px"}} >{item.price}</h4>
                    <p>{item.color}</p>
                    <p>{item.size}</p>
               
                </div>
                
              </div>
              )
          })}
                    </Box>
                </Box>
                <Box bg="white" className="cart-right" >


                <div style={{padding:"10px"}}  >
          <div>
            <h2>Order Summary</h2>
          </div>
          <div style={{display:"flex",justifyContent:"space-between"}} >
            <h4>Products</h4>
            <p style={{fontSize:"18px",fontWeight:"400"}} >${totalp}</p>
          </div>
          <div style={{display:"flex",justifyContent:"space-between"}} >
            <h4>Shipping and Handling</h4>
            <p style={{fontSize:"18px",fontWeight:"400"}} >FREE</p>
          </div>
          
          <div style={{display:"flex",justifyContent:"space-between"}} >
            <h3>
              Order total
            </h3>
            <h3>${totalp}</h3>
          </div>
          <div  style={{display:"flex",justifyContent:"center"}} >
           <button
           onClick={()=>{
            alert("Order has been placed successfuly")
            navigate("/")
           }}
           
           style={{cursor:"pointer",backgroundColor:"tomato",color:"white",border:"1px solid tomato",fontSize:"18px",padding:"5px",width:"200px",height:"50px"}} >
            PLACE ORDER</button>
          </div>
         
        </div>

                </Box>
            </Box>
        </Box>
    )
}