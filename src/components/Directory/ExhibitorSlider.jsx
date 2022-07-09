import { Box } from "@mui/system";
import React from "react";
import Slider from "react-slick";
import StPauls from "../../assets/images/StPauls.png"

const settings = {
  infinite: true,
  dots: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        infinite: true,
        dots: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
      },
    },
  ],
};
const ExhibitorSlider = () => {
  return (
    <Box>
      <Slider {...settings}>
        <div>
          <img src={StPauls} className="ExhibitorImage"/>
        </div>
        <div>
          <img src={StPauls} className="ExhibitorImage"/>
        </div>
        <div>
          <img src={StPauls} className="ExhibitorImage"/>
        </div>
      </Slider>
    </Box>
  );
};

export default ExhibitorSlider;
