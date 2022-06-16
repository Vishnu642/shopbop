import {Box} from "@chakra-ui/react"
import "./Section1.css"


export const Section1 = ()=>{
    return(
        <Box>
            <Box className="section1-bg" h='450px' backgroundSize='cover' backgroundRepeat='no-repeat' w='100%' bgImg="https://m.media-amazon.com/images/G/01/Shopbop/p/pcs/shopbop/media/desktop/lookbooks/2022/2022_06/sb_20220613_desktop_LB_beachshop_10_1-0.jpg" >
                <button className="section1-button" >Shop Now</button>
            </Box>
            <Box className="category-box" >
                <Box className="cat-div" bgImg="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_06/sb_20220613_hp_card_visnav_beachshop_02._QL90_UX373_.jpg" ></Box>
                <Box className="cat-div" bgImg='https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_06/sb_20220613_hp_card_visnav_beachshop_03._QL90_UX373_.jpg' ></Box>
                <Box className="cat-div" bgImg='https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_06/sb_20220613_hp_card_visnav_beachshop_04._QL90_UX373_.jpg' ></Box>
                <Box className="cat-div" bgImg='https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_06/sb_20220613_hp_card_visnav_beachshop_05._QL90_UX373_.jpg' ></Box>
             </Box>



             <Box bgColor='white' className="pink-container" >
                <Box className="pink-box" >
                    <Box className="pink-heading" >
                        <Box className="head-left" >
                            <p>Find Some Inspiration</p>
                            <h1>Your wardrobe starts here</h1>
                        </Box>
    
                    </Box>
                    <Box className="pink-category" >
                        <Box className="pink-div" >
                            <Box className="pink-img" bgImage="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/landingpages/mens/2022/2022_06/sbm_20220601_hp_card_visnav_waylf_01._QL90_UX373_.jpg" ></Box>
                            <Box className="pink-txt" textDecoration="underline" ><h3>Summer swim</h3></Box>
                        </Box> 
                        <Box className="pink-div" > 
                            <Box className="pink-img" bgImage="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/landingpages/mens/2022/2022_06/sbm_20220601_hp_card_visnav_waylf_02._QL90_UX373_.jpg" ></Box>
                            <Box className="pink-txt" textDecoration="underline" ><h3>Closet-classic</h3></Box>
                            </Box>
                        <Box className="pink-div" > 
                            <Box className="pink-img" bgImage="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/landingpages/mens/2022/2022_06/sbm_20220601_hp_card_visnav_waylf_03._QL90_UX373_.jpg" ></Box>
                            <Box className="pink-txt" textDecoration="underline" ><h3>New Season</h3></Box>
                            </Box>
                        <Box className="pink-div" >
                             <Box className="pink-img" bgImage="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/landingpages/mens/2022/2022_06/sbm_20220601_hp_card_visnav_waylf_04._QL90_UX373_.jpg" ></Box>
                            <Box className="pink-txt" textDecoration="underline" ><h3>Active wear</h3></Box>
                            </Box>
                        
                    </Box>
                </Box>
            </Box>


             <Box className="overlap-box" >
                <Box className="overlap-div" bgImg="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_06/sb_20220612_hp_card_2up_FathersDay._QL90_UX595_.jpg" ></Box>
        
                <Box className="overlap-div" bgImg="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_06/sb_20220612_hp_card_2up_MostHearted._QL90_UX595_.jpg" ></Box>
             </Box>




           



        </Box>

    )
}