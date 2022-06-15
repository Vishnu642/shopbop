import {Box} from "@chakra-ui/react"
import "./Section1.css"

export const Section1 = ()=>{
    return(
        <Box>
            <Box h='450px' backgroundSize='cover' backgroundRepeat='no-repeat' w='100%' bgImg="https://m.media-amazon.com/images/G/01/Shopbop/p/pcs/shopbop/media/desktop/lookbooks/2022/2022_06/sb_20220613_desktop_LB_beachshop_10_1-0.jpg" ></Box>
            <Box className="category-box" >
                <Box className="cat-div" bgImg="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_06/sb_20220613_hp_card_visnav_beachshop_02._QL90_UX373_.jpg" ></Box>
                <Box className="cat-div" bgImg='https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_06/sb_20220613_hp_card_visnav_beachshop_03._QL90_UX373_.jpg' ></Box>
                <Box className="cat-div" bgImg='https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_06/sb_20220613_hp_card_visnav_beachshop_04._QL90_UX373_.jpg' ></Box>
                <Box className="cat-div" bgImg='https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_06/sb_20220613_hp_card_visnav_beachshop_05._QL90_UX373_.jpg' ></Box>
             </Box>
             <Box className="overlap-box" >
                <Box className="overlap-div" bgImg="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_06/sb_20220612_hp_card_2up_FathersDay._QL90_UX595_.jpg" ></Box>
        
                <Box className="overlap-div" bgImg="https://m.media-amazon.com/images/G/01//Shopbop/media/desktop/homepages/2022/2022_06/sb_20220612_hp_card_2up_MostHearted._QL90_UX595_.jpg" ></Box>
             </Box>
        </Box>

    )
}