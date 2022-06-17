import {Box,Image} from '@chakra-ui/react'; 
import { MdOutlineLocationOn } from "react-icons/Md";
import {AiOutlineDown} from "react-icons/Ai"
import {AiFillHeart,AiOutlineSearch} from "react-icons/Ai"
import {HiOutlineShoppingBag} from "react-icons/Hi"
import "./Navbar.css"
import { useState } from 'react';
import {Dropdown} from "./Dropdown"

export const Navbar = ()=>{
    const [dropdown,setDropdown] = useState(false)
    return(
        <div>
          <Box className='nav-top'>
            <Box className='nav-top-left' fontSize='12px' >
                <Box><MdOutlineLocationOn size='10px' />IN<AiOutlineDown/></Box>
                <Box>EN<AiOutlineDown/></Box>
                <Box>$USD<AiOutlineDown/></Box>
                
                </Box>
            <Box className='nav-top-center'>
                FREE Express International Delivery + Easy returns
            </Box>
            <Box className='nav-top-right'>
                <Box onClick={()=>setDropdown(!dropdown)} > Sign In/ Register {dropdown && <Dropdown/>} </Box>
                <Box><AiFillHeart color='red' size='20px' /></Box>
                <Box><HiOutlineShoppingBag size='20px' /></Box>
               
            </Box>
          </Box>

          <Box className='nav-box' >
            <Box className='nav-heading' ><Image h='50px' w='200px' src='https://m.media-amazon.com/images/G/01/Shopbop/p/pcs/shopbop/media/3/images/logos/rebrand_shopbop_logo_2x_1-3.png'/></Box>
            <Box className='navbar' >
                <Box>WHAT'S NEW</Box>
                <Box>OUR FAVOURITE</Box>
                <Box>DESIGNERS</Box>
                <Box>CLOTHING</Box>
                <Box>ACTIVE</Box>
                <Box>SHOES</Box>
                <Box>BAGS</Box>
                <Box>ACCESSORIES</Box>
                <Box>MEN</Box>
                <Box>SALE</Box>
                <Box><AiOutlineSearch/></Box>
            </Box>
          </Box>
        </div>
    )
}