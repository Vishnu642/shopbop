import {Box,Select} from "@chakra-ui/react"
import "./Mens.css"
import axios from "axios"
import { useState,useEffect } from "react"


function Mens(){

    const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);
  const [data,setData] = useState([]);
 
  

  useEffect(()=>{
   FetchData()
  },[])

  const FetchData = async()=>{
    setLoading(true);
   
    axios({
      method:"GET",
      url:" http://localhost:8050/mens",
    //   params:{
    //     _page:page,
    //     _limit:5,
    //     _sort:"rating,cost",
    //     _order:`${ratingOrder},${costOrder}`,
    //     rating_gte:filterRating,
    //     q:q,
    //     ...paramsForPayment
    //   }
    })
    .then((res)=>{
      setData(res.data)    
      setLoading(false)
    })
    .catch((err)=>{
      setError(true)
      setLoading(false)
    })
  }

  console.log(data)
  var cart = JSON.parse(localStorage.getItem("cart"))|| [];
  const handleClick=(ele)=>{
    cart.push(ele);
    localStorage.setItem("cart",JSON.stringify(cart));
  }


    return(
        <Box className="product-container" >
             
            <Box className="product-left" >
              <Box marginLeft="60px" ><h1 style={{padding:"10px"}} >Mens</h1><hr></hr></Box>
              
              <Box marginLeft="60px" ><h3>Catogory</h3></Box>
              <Box marginLeft="60px" >
                <h4>All Dresses</h4>
                <p>Shirt</p>
                <p>Trousers</p>
                <p>Denim</p>
                <p>Shorts</p>
                <p>T shirts</p>
                <p>Jacket</p>
                <p>Inners</p>
              </Box>
              <Box>
                <Box marginLeft="60px" ><h2>Filter</h2></Box>
                <Box marginLeft="60px" ><button style={{width:"250px",height:"40px",color:"white",background:"red"}} >Apply</button></Box>
              </Box>
              <hr></hr>
            </Box>


            <Box className="product-right" >
                <Box className="sort" >
                <Select  w='200px'  h='40px' fontSize='20px' border='1px solid black' placeholder= 'Sort By'>
                <option value='low'>Low to High</option>
                <option value='high'>High to Low</option>
  
                </Select>
             </Box>

        <Box className="product" >
        <Box>
          {loading && <div>...loading</div>}
          </Box>
    {data.map((item)=>(
        <Box className="product-div">
          <Box className="pro-img" ><img src={item.imgURL} width="100%" height="100%" ></img></Box>
          <Box className="pro-txt" ><p>{item.title}<br></br>{item.name}<br></br><br></br>{item.price}</p></Box>
          <Box className="pro-button" ><button 
           onClick={()=>handleClick(item)}
          style={{padding:"7px",color:"white",background:"tomato",borderRadius:"5px",cursor:"pointer"}} >Add to Cart</button></Box>
        </Box>
    ))}

        </Box>

            </Box>
        </Box>
    )
}

export default Mens;