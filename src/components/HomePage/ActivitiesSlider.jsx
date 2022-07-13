import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Slider from "react-slick";
import WheelofFortune from "../../assets/images/wheel-of-fortune 1.png";
// import WheelofFortune from "../../assets/images/wheel-of-fortune 1.png";
import Treasure from "../../assets/images/Treasure.png";
import Quiz from "../../assets/images/Quiz.png";
import ActivityCard from "./ActivityCard";

const settings = {
  dots:true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
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
const ActivitiesSlider = () => {
  return (
    <Box >
      <Slider {...settings}>
        <ActivityCard activityName="Lucky Draw" sponserBy="Sponsered By" sponserName="hanu." ImgSrc={WheelofFortune}/>
        <ActivityCard activityName="Treasure Hunt" sponserBy="Sponsered By" sponserName="hanu." ImgSrc={Treasure}/>
        <ActivityCard activityName="Quiz" sponserBy="Sponsered By" sponserName="hanu." ImgSrc={Quiz}/>
      </Slider>
    </Box>
  );
};

export default ActivitiesSlider;
