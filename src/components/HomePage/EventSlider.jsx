import { Box } from "@mui/system";
import React from "react";
import Slider from "react-slick";
import EventCard from "./EventCard";

const settings = {
  dots:true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true,
};
const EventSlider = () => {
  return (
    <Box >
      <Slider {...settings} className="slideCenter">
        <EventCard />
        <EventCard />
      </Slider>
    </Box>
  );
};

export default EventSlider;
