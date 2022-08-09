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
import { Circle, Message, Phone } from "@mui/icons-material";
import { useState } from "react";
import "../assets/styles/quiz.css";
import HintBox from "../components/TreasureHunt/HintBox";
import Treasure from "../assets/images/TreasureHunt.png"
const TreasureHuntPage = () => {
  const navigate = useNavigate();
  const [online, setOnline] = useState(true);
  return (
    <Box>
      <AppBar signupApp="true">
        <MenuBar>
          <Typography variant="h5" className="titleName">
            Treasure Hunt
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
      <Box>
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ width: { xs: "100%", md: "85%" } }}>
            <Box style={{ display: "flex", justifyContent: "center" }}>
              <Box className="exhibitorImgBox">
                <img src={Treasure} className="villageDetailImg" />

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
                        <Typography variant="h5">Anywhere</Typography>
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
        <Box sx={{ display: "flex", justifyContent: "center", pb: "4vmax" }}>
          <Grid
            container
            justifyContent="space-between"
            spacing={{ md: 4 }}
            rowSpacing={5}
            sx={{ p: "2vmax", width: { xs: "100%", md: "85%" } }}
          >
            <HintBox HintNo="1" Hint="There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable."/>
            <HintBox HintNo="2" Hint="There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable."/>
            <HintBox HintNo="3" Hint="There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable."/>
            <HintBox HintNo="4" Hint="There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable."/>
            
            <HintBox HintNo="5" Hint="There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable."/>
            
            <HintBox HintNo="6" Hint="There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable."/>
            
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default TreasureHuntPage;
