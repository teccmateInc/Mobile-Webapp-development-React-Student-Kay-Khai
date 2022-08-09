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
import ActivitiesSlider from "../components/HomePage/ActivitiesSlider";
import ChanceToWinSlider from "../components/Rewards/ChanceToWinSlider";
import RewardModal from "../components/Rewards/RewardModal";
const gift = "12345678";
const Rewards = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  return (
    <Box>
      <AppBar signupApp="true">
        <MenuBar>
          <Typography variant="h5" className="titleName">
            REWARDS
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
        <Box style={{ margin: "4vmax 2vmax", overflow: "hidden" }}>
          <Typography
            variant="h3"
            className="activitesHeading"
            style={{ marginLeft: "2vmax" }}
          >
            Chance To Win
          </Typography>
          <Box>
            <ChanceToWinSlider />
          </Box>
        </Box>
        <Box sx={{ p: { xs: 2, md: 4 },mb:5 }}>
        <Typography
            variant="h3"
            className="activitesHeading"
            sx={{ marginLeft: {xs:"0",md:"2vmax"} }}
          >
            Gifts Redeemed
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, sm: 2, md: 8 }}
            sx={{px:{xs:"0",md:"2vmax"}}}
            // justifyContent="center"
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
        <RewardModal modal={modal} setModal={setModal} />
        </Box>
  )
}

export default Rewards