import { Box, Button, Grid, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import AppBar from '../components/layout/AppBar'
import MenuBar from '../components/layout/MenuBar'
import VotingImg from "../assets/images/Voting.png";
import Gmap from "../assets/images/Gmap.png";
import { Circle, Message, Phone } from '@mui/icons-material'
import { useState } from 'react'
import QSCard from '../components/Quiz&Survey/QuizSurveyCard'
import SurveyImage from "../assets/images/QuizBox.png"
import "../assets/styles/quiz.css"
const Voting = () => {
    const navigate = useNavigate();
    const[online,setOnline] =useState(true);
  return (
    <Box>
      <AppBar signupApp="true">
        <MenuBar>
          <Typography
            variant="h5"
            className="titleName"
          >
            VOTING
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
            onClick={()=>navigate("/login")}
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
              <img src={VotingImg} className="villageDetailImg" />
            </Box>
          </Box>
          <Box sx={{ display: "flex", px: "2vmax",textAlign:"left", py: "2vmax" }}>
            <Typography className="font-montserrat" sx={{fontSize:{xs:"2.2vmax",md:"1.3vmax"}}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </Typography>
          </Box>
      </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center",pb:"4vmax" }}>
        <Grid container justifyContent="space-between" spacing={{md:4}} rowSpacing={5} sx={{p:"2vmax", width: { xs: "100%", md: "85%" } }}>
        <QSCard Image={SurveyImage} Name="Best NFT Design" Company="Company Name" Points="3 Points" Join="View" link="/voting/1" />
        <QSCard Image={SurveyImage} Name="Most Imteresting Booth" Company="Company Name" Points="3 Points" Join="View" link="/voting/2"/>
        </Grid>
      </Box>
      </Box>
      </Box>
  )
}

export default Voting