import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import VillageCard from "../components/Directory/VillageCard";
import ActivitiesSlider from "../components/HomePage/ActivitiesSlider";
import SponsorsSlider from "../components/HomePage/SponsorsSlider";
import AppBar from "../components/layout/AppBar";
import MenuBar from "../components/layout/MenuBar";
import "../assets/styles/directory.css";
import VillageSlider from "../components/Directory/VillageSlider";
import ExhibitorSlider from "../components/Directory/ExhibitorSlider";

const DirectoryPage = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <AppBar signupApp="true">
        <MenuBar>
          <Typography
            variant="h5"
            sx={{ fontFamily: "Montserrat", color: "white" }}
          >
            EXHIBITORS
          </Typography>
        </MenuBar>
        <Box className="">
          <Button
            className="col-white"
            sx={{
              textDecoration: "none",
              color: "white",
              paddingRight: "2vmax",
            }}
            onClick={() => navigate("/login")}
          >
            Login/Signup
          </Button>
        </Box>
      </AppBar>
      <Box style={{ margin: "3vmax 0vmax", position: "relative" }}>
        <Typography variant="h3" className="sponserHeading">
          Title Sponsers
        </Typography>
        <div className="sponsorsContainer">
          <Box style={{ marginLeft: "2vmax" }}>
            <SponsorsSlider />
          </Box>
        </div>
      </Box>
      <Box style={{ margin: "3vmax 2vmax", overflow: "hidden" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h3"
            className="activitesHeading"
            style={{ marginLeft: "2vmax" }}
          >
            Villages
          </Typography>
          <Link to="/villages">
            <Typography>View All</Typography>
          </Link>
        </Box>
        <Box style={{ marginLeft: { xs: "1vmax", md: "3vmax" } }}>
          <VillageSlider />
        </Box>
      </Box>
      <Box style={{ margin: "3vmax 2vmax", overflow: "hidden" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h3"
            className="activitesHeading"
            style={{ marginLeft: "2vmax" }}
          >
            Exhibitors
          </Typography>
          <Link to="/exhibitors">
            <Typography>View All</Typography>
          </Link>
        </Box>
        <Box style={{ marginLeft: { xs: "1vmax", md: "3vmax" } }}>
          <ExhibitorSlider />
        </Box>
      </Box>
      <Box style={{ margin: "3vmax 2vmax", overflow: "hidden" }}>
        <Typography
          variant="h3"
          className="activitesHeading"
          style={{ marginLeft: "2vmax" }}
        >
          Other Countries
        </Typography>
        <Box>
          <ActivitiesSlider />
        </Box>
      </Box>
    </Box>
  );
};

export default DirectoryPage;
