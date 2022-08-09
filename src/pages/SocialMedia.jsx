import {
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
  import Social from "../assets/images/SocialMedia.png"
  import Social1 from "../assets/images/Social1.png"
  import Social2 from "../assets/images/Social2.png"  
  import "../assets/styles/SocialMedia.css"  

import CompetitionCard from "../components/layout/CompetitionCard";
const SocialMedia = () => {
    const navigate = useNavigate();
    const [online, setOnline] = useState(true);
  return (
    <Box>
      <AppBar signupApp="true">
        <MenuBar>
          <Typography variant="h5" className="titleName">
            SOCIAL MEDIA
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
                <img src={Social} className="villageDetailImg" />

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
                          alignItems: "flex-start",
                        }}
                      >
                        <Typography variant="h5">FB, Insta, Twitter</Typography>
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
        <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          my: "3vmax",
          mb: "5vmax",
        }}
      >
        <CompetitionCard>
          <Box
            sx={{
              m: { xs: "2vmax", md: "0vmax 1vmax" },
              display:"flex"
            }}
          >
            <Box sx={{mx:"1vmax"}} onClick={()=>navigate(`/socialmedia/abc`)}>
              <img src={Social1} className="socialImg" />
            </Box>
            <Box sx={{mx:"1vmax"}}>
              <img src={Social2} className="socialImg"/>
            </Box>
          </Box>
        </CompetitionCard>
      </Box>
        </Box>
  )
}

export default SocialMedia