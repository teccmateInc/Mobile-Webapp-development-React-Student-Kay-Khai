import React from 'react'
import puma from "../../assets/images/puma.png";
import AllState from "../../assets/images/AllState.png";
import Bajaj from "../../assets/images/Bajaj.png";
import Slider from 'react-slick';
import { Box } from '@mui/system';
import "../../assets/styles/homepage.css"

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true
    
}
const SponsorsSlider = () => {
  return (
    <Box style={{overflow:"hidden"}}>
      <Slider {...settings} className="sponserSlider">
        <div>
        <img src={puma} className="sponserImage"/>
        </div>
        <div style={{ padding: "2vmax" }}>
        <img src={AllState} className="sponserImage"/>
        </div>
        <div style={{ padding: "2vmax" }}>
        <img src={Bajaj} className="sponserImage"/>
        </div>
        <div>
        <img src={puma} className="sponserImage"/>
        </div>
        <div style={{ padding: "2vmax" }}>
        <img src={AllState} className="sponserImage"/>
        </div>
        <div style={{ padding: "2vmax" }}>
        <img src={Bajaj} className="sponserImage"/>
        </div>
      </Slider>
    </Box>
  )
}

export default SponsorsSlider