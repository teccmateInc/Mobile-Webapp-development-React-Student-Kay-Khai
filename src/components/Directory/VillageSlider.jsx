import { Box } from "@mui/system";
import React from "react";
import Slider from "react-slick";
import VillageCard from "./VillageCard";

const settings = {
  infinite: true,
  dots: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        infinite: true,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      },
    },
  ],
};
const VillageSlider = () => {
  return (
    <Box>
      <Slider {...settings}>
        <div>
          <VillageCard />
        </div>
        <div>
          <VillageCard />
        </div>
      </Slider>
    </Box>
  );
};

export default VillageSlider;
