import {
  Avatar,
    Box,
    Button,
    Grid,
    IconButton,
    Paper,
    Typography,
  } from "@mui/material";
  import React from "react";
  import { useNavigate } from "react-router-dom";
  import AppBar from "../components/layout/AppBar";
  import MenuBar from "../components/layout/MenuBar";
  import Gmap from "../assets/images/Gmap.png";
  import { Circle, } from "@mui/icons-material";
  import { useState } from "react";
  import Photo from "../assets/images/Photobooth.png"
import CompetitionCard from "../components/layout/CompetitionCard";
const PhotoBooth = () => {
    const navigate = useNavigate();
    const [online, setOnline] = useState(true);
  return (
    <Box>
      <AppBar signupApp="true">
        <MenuBar>
          <Typography variant="h5" className="titleName">
            PHOTO BOOTH
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
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ width: { xs: "100%", md: "85%" } }}>
            <Box style={{ display: "flex", justifyContent: "center" }}>
              <Box className="exhibitorImgBox">
                <img src={Photo} className="villageDetailImg" />

                <Box className="exhibitorInfoBox">
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      height: "100%",
                      alignItems: "center",
                      padding: "0 2vmax",
                    }}
                  >
                    <Box
                      className="col-white"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <IconButton>
                        <img src={Gmap} />
                      </IconButton>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          pl: "2vmax",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography variant="h5">Photo Booth</Typography>
                        {/* <Typography>12:00 - 19:00</Typography> */}
                      </Box>
                    </Box>
                    {/* <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-end",
                        pb: "0.5vmax",
                      }}
                    >
                      <Paper
                        sx={{
                          display: "flex",
                          padding: "0.5vmax 2vmax",
                          borderRadius: "30px",
                          alignItems: "center",
                        }}
                      >
                        <Typography sx={{ pr: { xs: "3vmax", md: "1vmax" } }}>
                          Status
                        </Typography>
                        <Circle
                          className={`${online ? "col-green" : "col-red"} `}
                        />
                      </Paper>
                    </Box> */}
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                px: "2vmax",
                textAlign: "left",
                py: "2vmax",
              }}
            >
              <Typography
                className="font-montserrat"
                sx={{ fontSize: { xs: "2.2vmax", md: "1.3vmax" } }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{width:"100%",display:"flex",justifyContent:"center",my:"3vmax",mb:"2vmax"}}>

        <CompetitionCard>
        <Box sx={{fontSize: { xs: "2.4vmax", md: "1.3vmax" }}}>
              <ul className="col-white">
                <li>Take Picture</li>
                <li>Upload and Hashtag The Sponser</li>
                <li>Prize</li>
                <li>Winner Will Be Announced At Xxx</li>
              </ul>
          </Box>
        </CompetitionCard>
        </Box>
        <Box sx={{width:"100%",display:"flex",justifyContent:"center",my:"3vmax",mb:"5vmax"}}>

          <Box sx={{width:"80%",display:"flex",flexDirection:"column"}}>
            <Typography variant="h5" sx={{py:"2vmax",fontSize: { xs: "2.8vmax", md: "2vmax" },fontWeight:"500"}}>Sponsors</Typography>
            <Box sx={{display:"flex"}}>
            <Avatar sx={{mx:1,width: 56, height: 56}}/>
            <Avatar sx={{mx:1,width: 56, height: 56}}/>
            <Avatar sx={{mx:1,width: 56, height: 56}}/>
            </Box>
          </Box>
        </Box>
        </Box>
  )
}

export default PhotoBooth