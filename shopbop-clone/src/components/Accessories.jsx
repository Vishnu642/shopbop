import {Box,Select} from "@chakra-ui/react"
import "./Accessories.css"
import axios from "axios"
import { useState,useEffect } from "react"


function Accessories(){


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
      url:" http://localhost:8050/accessories",
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
            <Box className="product-left" ></Box>
            <Box className="product-right" >
                <Box className="sort" >
                <Select  w='200px'  h='40px' fontSize='20px' border='1px solid black' placeholder= 'Sort By'>
                <option value='low'>Low to High</option>
                <option value='high'>High to Low</option>
  
                </Select>
             </Box>

        <Box className="product" >

    {data.map((item)=>(
        <Box className="product-div">
          <Box className="pro-img" ><img src={item.imgURL} width="100%" height="100%" ></img></Box>
          <Box className="pro-txt" ><p>{item.title}<br></br>{item.name}<br></br><br></br>{item.price}</p></Box>
        </Box>
    ))}

        </Box>

            </Box>
        </Box>
    )
}

export default Accessories;