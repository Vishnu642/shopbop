import {Box,Image} from '@chakra-ui/react'; 
import { MdOutlineLocationOn } from "react-icons/Md";
import {AiOutlineDown} from "react-icons/Ai"
import {AiFillHeart,AiOutlineSearch} from "react-icons/Ai"
import {HiOutlineShoppingBag} from "react-icons/Hi"
import "./Navbar.css"
import { useState } from 'react';
import {Dropdown} from "./Dropdown"
import { Link } from 'react-router-dom';

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
                <Box><Link to="/cart"  ><HiOutlineShoppingBag size='20px' cursor="pointer" color='black' /></Link></Box>
               
            </Box>
          </Box>

          <Box className='nav-box' >
            <Link to="/" ><Box className='nav-heading' ><Image h='50px' w='200px' src='https://m.media-amazon.com/images/G/01/Shopbop/p/pcs/shopbop/media/3/images/logos/rebrand_shopbop_logo_2x_1-3.png'/></Box></Link>
            <Box  className='navbar' >
            <Box  > <Link  to="/accessories" className='nav-line' color='black' >WHAT'S NEW</Link></Box>
            <Box><Link to="/bags" className='nav-line' color='black' >OUR FAVOURITE</Link></Box>
            <Box><Link to="/womens" className='nav-line' color='black' >DESIGNERS</Link></Box>
            <Box><Link to="/mens" className='nav-line' color='black' >CLOTHING</Link></Box>
            <Box><Link to="/" className='nav-line' color='black' >ACTIVE</Link></Box>
            <Box><Link to="/" className='nav-line' color='black' >SHOES</Link></Box>
            <Box><Link to="/bags" className='nav-line' color='black' >BAGS</Link></Box>
            <Box><Link to="/accessories" className='nav-line' color='black' >ACCESSORIES</Link></Box>
            <Box><Link to="/mens" className='nav-line' color='black' >MEN</Link></Box>
            <Box><Link to="/" className='nav-line' color='black' >SALE</Link></Box>
            
        <Box><AiOutlineSearch/></Box>
            </Box>
          </Box>
        </div>
    )
}