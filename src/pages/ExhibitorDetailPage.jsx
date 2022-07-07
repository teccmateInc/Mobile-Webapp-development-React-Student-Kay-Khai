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
import StPauls from "../assets/images/StPauls.png";
import { Container } from "@mui/system";
import Course from "../components/ExhibitorDetails/Course";
const ExhibitorDetails = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <AppBar signupApp="true">
        <MenuBar>
          <Typography
            variant="h5"
            sx={{ fontFamily: "Montserrat", color: "white" }}
          >
            EXHIBITOR DETAIL
          </Typography>
        </MenuBar>
        <Box sx={{ pr: "2vmax" }}>
          <IconButton
            style={{ background: "white" }}
            onClick={() => navigate("/exhibitors")}
          >
            <HomeOutlined fontSize="large" sx={{ color: "#4FC5CC" }} />
          </IconButton>
        </Box>
      </AppBar>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: { xs: "100%", md: "85%" } }}>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Box
                className="exhibitorImgBox"
            >
              <img src={StPauls} className="villageDetailImg" />
            </Box>
          </Box>
          <Box sx={{ display: "flex", pl: "2vmax", py: "2vmax" }}>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </Typography>
          </Box>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Divider sx={{ width: "80%" }} />
          </Box>
          <Box sx={{ margin: "2vmax 0" }}>
            <Paper className="coursesContainer">
              <Typography variant="h5">Courses</Typography>
              <Box sx={{ margin: { xs: "3vmax 1vmax", md: "2vmax 0vmax" } }}>
                <Course id="1" Name="Bachelors Of Computer Science" />
                <Course id="2" Name="Bachelors Of Information Technology" />
                <Course id="3" Name="Bachelors Of Software Engineering" />
                <Course id="4" Name="Bachelors Of Science" />
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

export default ExhibitorDetails;
