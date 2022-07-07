import {
  Box,
  Button,
  Divider,
  IconButton,
  Input,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import AppBar from "../components/layout/AppBar";
import MenuBar from "../components/layout/MenuBar";
import { HomeOutlined, UploadOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import GameDev from "../assets/images/GameDev.png";
import { Container } from "@mui/system";
import Workshop from "../components/villageDetails/workshop";
const VillageDetails = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <AppBar signupApp="true">
        <MenuBar>
          <Typography
            variant="h5"
            sx={{ fontFamily: "Montserrat", color: "white" }}
          >
            VILLAGES
          </Typography>
        </MenuBar>
        <Box sx={{ pr: "2vmax" }}>
          <IconButton
            style={{ background: "white" }}
            onClick={() => navigate("/villages")}
          >
            <HomeOutlined fontSize="large" sx={{ color: "#4FC5CC" }} />
          </IconButton>
        </Box>
      </AppBar>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: { xs: "100%", md: "85%" } }}>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Box className="villageDetailImgBox">
              <img src={GameDev} className="villageDetailImg" />
              <Box className="villageDateBox">
                <Box className="villageDate">
                  <Typography variant="h6">12</Typography>
                  <Typography variant="h6">July</Typography>
                </Box>
              </Box>
              <Box className="villageTimeBox">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6">Game Development</Typography>
                  <Typography>12:00 - 15:00</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="sponsorLogoBox">
            <Typography variant="h6">SponsorLogo</Typography>
          </Box>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Divider sx={{ width: "80%" }} />
          </Box>
          <Box sx={{ margin: "2vmax 0" }}>
            <Paper className="workshopBox">
              <Typography variant="h5">Workshops</Typography>
              <Box sx={{ margin: { xs: "3vmax 1vmax", md: "2vmax 0vmax" } }}>
                <Workshop id="1" Name="Introduction" type="Advance" />
                <Workshop id="2" Name="Philosophy" type="Basic | Advance" />
                <Workshop id="3" Name="History" type="Advance" />
                <Workshop
                  id="4"
                  Name="Begineer Module"
                  type="Basic | Advance"
                />
                <Workshop id="5" Name="Intermediate Module" type="Basic" />
                <Workshop id="6" Name="Expert Level" type="Basic | Advance" />
                <Workshop id="7" Name="Conclusion" type="Basic" />
              </Box>
              <Box className="materialBox">
                <Typography variant="h5">Materials</Typography>
                <label htmlFor="icon-button-file">
                  <Input
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                    style={{ display: "none" }}
                  />
                  <IconButton aria-label="upload picture" component="span">
                    <UploadOutlined />
                  </IconButton>
                </label>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default VillageDetails;
