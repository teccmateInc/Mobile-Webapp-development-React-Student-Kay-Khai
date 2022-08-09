import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AppBar from "../components/layout/AppBar";
import MenuBar from "../components/layout/MenuBar";
import { useNavigate } from "react-router-dom";
import GiftCard from "../assets/images/GiftCard.png";
import Question from "../assets/images/question.png";
import NFTModal from "../components/NFT/NFTModal";
import { useState } from "react";
const gift = "123456789ABC";
const NFT = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  return (
    <Box>
      <AppBar signupApp="true">
        <MenuBar>
          <Typography variant="h5" className="titleName">
            NFT
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
        <Box
          sx={{
            background: "#D9D9D9",
            padding: { md: "3vmax", xs: "4vmax 2vmax" },
            mt: { xs: "5vmax", md: "3vmax" },
            position: "relative",
          }}
        >
          <Box
            className="question"
            onClick={() => setModal(true)}
          >
            <img src={Question} />
          </Box>
          <Typography variant="h6" className="font-montserrat">
            Introduction
          </Typography>
          <Typography className="villagesIntro font-montserrat">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Typography>
        </Box>
        <Box sx={{ p: { xs: 2, md: 4 },mb:5 }}>
          <Grid
            container
            spacing={{ xs: 2, sm: 2, md: 8 }}
            justifyContent="center"
          >
            {gift.split("").map(() => {
              return (
                <Grid item xs={4} md={3}>
                  <img src={GiftCard} width="100%" height="100%" />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
      <NFTModal modal={modal} setModal={setModal} />
    </Box>
  );
};

export default NFT;
