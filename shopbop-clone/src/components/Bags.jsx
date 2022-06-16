import {Box,Select} from "@chakra-ui/react"
import "./Bags.css"
import axios from "axios"
import { useState,useEffect } from "react"


function Bags(){


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
      url:" http://localhost:8050/bag",
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



    return(
        <Box className="product-container" >
             
            <Box className="product-left" >
              <Box marginLeft="60px" ><h1 style={{padding:"10px"}} >Bags</h1><hr></hr></Box>
              
              <Box marginLeft="60px" ><h3>Catogory</h3></Box>
              <Box marginLeft="60px" >
                <h4>All Jewelry & Accessories</h4>
                <p>Jewelry</p>
                <p>Fine Jewelry</p>
                <p>Watches</p>
                <p>Active Accessories</p>
                <p>Belts</p>
                <p>Gloves</p>
                <p>Hair Accessories</p>
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
          <Box className="pro-button" ><button style={{padding:"7px",color:"white",background:"tomato",borderRadius:"5px"}} >Add to Cart</button></Box>
        </Box>
    ))}

        </Box>

            </Box>
        </Box>
    )
}

export default Bags;