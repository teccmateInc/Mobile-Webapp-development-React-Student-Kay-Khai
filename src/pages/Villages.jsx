import { Button, Card, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import AppBar from '../components/layout/AppBar'
import MenuBar from '../components/layout/MenuBar'
import Game from "../assets/images/WebDev.png"
import MachineLearning from "../assets/images/ML.png"
import Crypto from "../assets/images/Crypto.png"
import MobileDevelopment from "../assets/images/MD.png"
import Cyber from "../assets/images/Cyber.png"
import Village from '../components/Villages/Village'
import "../assets/styles/villages.css"

const Villages = () => {
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
          <Box className="">
            <Button
              className="col-white"
              sx={{ textDecoration: "none", color: "white",paddingRight:"2vmax" }}
            >
              Login/Signup
            </Button>
          </Box>
        </AppBar>
        <Box>

        <Box style={{height:"13vh",background:"#C1C1C1",padding:"1vmax 2vmax"}}>
                <Typography variant='h6'>Introduction</Typography>
                <Typography className="villagesIntro">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry</Typography>
        </Box>
        <Box sx={{margin:"1vmax 0"}}>
            <Typography style={{padding:"1vmax 3vmax"}}>Showing 5 of 5 results</Typography>
        </Box>
            <Box sx={{padding:"0 3vmax 3vmax 3vmax"}}>
                <Grid container  spacing={{ xs: 2, sm: 3, md: 5 }} style={{position:"relative"}}>
                    <Village villageName="Game Development" villageImg={Game}/>
                    <Village villageName="Machine Learning & AI" villageImg={MachineLearning}/>
                    <Village villageName="Blockchain" villageImg={Crypto}/>
                    <Village villageName="Mobile Development" villageImg={MobileDevelopment}/>
                    <Village villageName="Cyber  Security" villageImg={Cyber}/>
                </Grid>
            </Box>
        </Box>
    </Box>
  )
}

export default Villages