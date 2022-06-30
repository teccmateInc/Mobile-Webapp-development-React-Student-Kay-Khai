import { Box, Button, Card, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import AppBar from "../components/layout/AppBar";
import { Apps } from "@mui/icons-material";
import "../assets/styles/homepage.css";
import EventCard from "../components/HomePage/EventCard";
import puma from "../assets/images/puma.png";
import AllState from "../assets/images/AllState.png";
import Bajaj from "../assets/images/Bajaj.png";
import Slider from "react-slick";
import ActivitiesSlider from "../components/HomePage/ActivitiesSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SponsorsSlider from "../components/HomePage/SponsorsSlider";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  centerMode:true,
  slidesToScroll: 1,
};

const HomePage = () => {
  return (
    <Box>
      <AppBar>
        <Box style={{ display: "flex", alignItems: "center", flex: 1 }}>
          <Apps sx={{ mx: "3vmax", color: "white" }} fontSize="medium" />
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h5"
              sx={{ fontFamily: "Montserrat", color: "white" }}
            >
              Welcome Guest
            </Typography>
            <Typography sx={{ fontFamily: "Montserrat", color: "white" }}>
              Attendee Login/SignUp
            </Typography>
          </Box>
        </Box>
        <Box className="btnContainer">
          <Button variant="contained" className="luckydrawBtn">
            LUCKY DRAW
          </Button>
        </Box>
      </AppBar>
      <Box
        style={{ display: "flex", justifyContent: "center", margin: "2vmax 0" }}
      >
        <EventCard />
      </Box>
      <Box style={{ margin: "4vmax 2vmax",overflow:"hidden" }}>
        <Typography
          variant="h3"
          className="activitesHeading" style={{marginLeft:"2vmax"}}>
          Attractive Activities
        </Typography>
        <Box>
            <ActivitiesSlider />
        </Box>
      </Box>
      <Box style={{ margin: "4vmax 0vmax" }}>
        <Typography
          variant="h3"
          className="sponserHeading"
        >
          Title Sponsers
        </Typography>
        <div
          style={{
            marginTop: "3vmax",
            width:"100vw",
            maxWidth:"100%",
            margin:0,
            padding:"2vmax 0",
            background:"#D5D5D5"
          }}
        >
            <Box style={{marginLeft:"2vmax"}}>
            <SponsorsSlider />
            </Box>
          
        </div>
      </Box>
    </Box>
  );
};

export default HomePage;
