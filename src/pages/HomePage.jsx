import {
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AppBar from "../components/layout/AppBar";
import { Apps } from "@mui/icons-material";
import "../assets/styles/homepage.css";
import EventCard from "../components/HomePage/EventCard";
import ActivitiesSlider from "../components/HomePage/ActivitiesSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SponsorsSlider from "../components/HomePage/SponsorsSlider";
import { Add } from "@mui/icons-material";
import JoinAs from "../components/HomePage/JoinAs";
import Sidebar from "../components/layout/Header";
import MenuBar from "../components/layout/MenuBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [drawerOpen, setDrawerOpen] = useState({ left: false });
  const [modal, setModal] = useState();
  const navigate = useNavigate();
  return (
    <Box>
      <AppBar>
        <MenuBar>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h5"
              className="col-white"
              sx={{ fontFamily: "Montserrat" }}
            >
              Welcome Guest
            </Typography>
            <Typography className="col-white" sx={{ fontFamily: "Montserrat" }}>
              Attendee{" "}
              <span onClick={()=>navigate("/login")}
                style={{ cursor: "pointer" }}
                
              >
                {" "}
                Login/SignUp{" "}
              </span>
            </Typography>
        </Box>
        </MenuBar>
        <Box className="btnContainer">
          <Button variant="contained" className="luckydrawBtn" onClick={()=>navigate("/login")}>
            LUCKY DRAW
          </Button>
        </Box>
      </AppBar>
      <Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "2vmax 0",
          }}
        >
          <EventCard />
        </Box>
        <Box style={{ margin: "4vmax 2vmax", overflow: "hidden" }}>
          <Typography
            variant="h3"
            className="activitesHeading"
            style={{ marginLeft: "2vmax" }}
          >
            Attractive Activities
          </Typography>
          <Box>
            <ActivitiesSlider />
          </Box>
        </Box>
        <Box style={{ margin: "4vmax 0vmax", position: "relative" }}>
          <Typography variant="h3" className="sponserHeading">
            Title Sponsers
          </Typography>
          <div className="sponsorsContainer">
            <Box style={{ marginLeft: "2vmax" }}>
              <SponsorsSlider />
            </Box>
          </div>
          <IconButton className="addBtnContainer">
            <Add fontSize="large" className="addBtn" onClick={()=>setModal(true)} />
          </IconButton>
        </Box>
        <JoinAs modal={modal} setModal={setModal} />
      </Box>
      <Sidebar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
    </Box>
  );
};

export default HomePage;
