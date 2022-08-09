import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import AppBar from "../components/layout/AppBar";
import MenuBar from "../components/layout/MenuBar";
import { useNavigate } from "react-router-dom";
import CustomSelect from "../components/layout/SelectWithPlaceholder";
import "../assets/styles/leaderboard.css";
import LeaderCard from "../components/Leaderboard/LeaderCard";
const leaders = [
  { pic: "", name: "Amit Somani", points: "11406" },
  { pic: "", name: "Muskan Singhania", points: "10464" },
  { pic: "", name: "Robert Frost", points: "9406" },
  { pic: "", name: "Shreya Rishi", points: "8464" },
  { pic: "", name: "Raghui Tripathy", points: "7464" },
  { pic: "", name: "Manoj Tiwari", points: "6464" },
  { pic: "", name: "Vidya Raman", points: "5464" },
  { pic: "", name: "Eisha Takia", points: "4464" },
];
const LeaderBoard = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <AppBar signupApp="true">
        <MenuBar>
          <Typography variant="h5" className="titleName">
            LEADERBOARD
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
      <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
        <Box
          className="col-white"
          sx={{
            width: {xs:"90%",md:"80%"},
            background: "linear-gradient(to right,#11aa9b,#4FD2C2)",
            p: {md:4,xs:"32px 16px"},
            borderRadius: "10px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box className="font-montserrat">
              <Typography className="font-montserrat" sx={{fontSize:{xs:"3.2vmax",md:"2vmax"},fontWeight:600}}>All Competition</Typography>
              <Typography className="font-montserrat" sx={{fontSize:{xs:"3.2vmax",md:"2vmax"},fontWeight:600}}>Leaderboard</Typography>
            </Box>
            <Box>
              <Typography className="font-montserrat" sx={{fontSize:{xs:"3.2vmax",md:"2vmax"},fontWeight:500}}>DATE</Typography>
              <Typography className="font-montserrat" sx={{fontSize:{xs:"3vmax",md:"1.7vmax"}}}>03-09-2022</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              pt: 4,
            }}
          >
            <Box sx={{ width: {xs:"55%",md:"40%"} }} className="leaderboardFields">
              <CustomSelect
                label="Crack the code"
                placeholder="Crack the code"
                menu={["Crack the code"]}
              />
            </Box>
            <Box sx={{ width: "40%" }} className="leaderboardFields">
              <CustomSelect
                label="Easy"
                placeholder="Easy"
                menu={["Easy", "Normal", "Hard"]}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ my: "2vmax" }}>
        <Box sx={{display:"flex",justifyContent:"center"}}>
          <Box sx={{ width: {xs:"100%",md:"85%"},my:3,px:1 }}>
            <Typography className="font-montserrat" sx={{fontSize:{xs:"3.2vmax",md:"2vmax"},fontWeight:600}}>Leaderboard</Typography>
          </Box>
        </Box>
        <Grid container spacing={2} justifyContent="center" className="leaders">
          {leaders.map((leader, i) => {
            return (
              <LeaderCard
                pic={leader.pic}
                name={leader.name}
                points={leader.points}
                rank={i + 1}
              />
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default LeaderBoard;
