import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Slider from "react-slick";
import WheelofFortune from "../../assets/images/wheel-of-fortune 1.png";
// import WheelofFortune from "../../assets/images/wheel-of-fortune 1.png";
import Treasure from "../../assets/images/Treasure.png";
import Quiz from "../../assets/images/Quiz.png";
import ActivityCard from "../HomePage/ActivityCard";

const settings = {
  dots:true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:true,
  responsive: [
    {
      breakpoint: 2048,
      settings: {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      },
      breakpoint: 1024,
      settings: {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};
const ChanceToWinSlider = () => {
  return (
    <Box >
      <Slider {...settings}>
        <ActivityCard activityName="Spin A Wheel" sponserBy="" sponserName="50 Points" ImgSrc={WheelofFortune}/>
        <ActivityCard activityName="Claim Gifts" sponserBy="" sponserName="Check" ImgSrc={Treasure}/>
        <ActivityCard activityName="Get Your NFTs" sponserBy="" sponserName="60 Points" ImgSrc={Quiz}/>
      </Slider>
    </Box>
  );
};

export default ChanceToWinSlider;