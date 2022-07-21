import { ChevronLeft, HomeOutlined } from '@mui/icons-material';
import { Box, Button, IconButton, Paper, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import AppBar from '../components/layout/AppBar';
import MenuBar from '../components/layout/MenuBar';
import "../assets/styles/QRcode.css"
import QRCode from "../assets/images/QR_code.png"

const QRcode = () => {
    const navigate = useNavigate()
  return (
    <Box>
      <AppBar signupApp="true">
        <MenuBar>
            <Box sx={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h6"
              className="col-white font-montserrat"
              sx={{ fontSize:{xs:"2vmax", md:"1.6vmax"}}}
            >
              Marvin James
            </Typography>
            <Typography className="col-white font-montserrat" sx={{ fontSize:{xs:"1.6vmax", md:"1vmax"} }}>
            Joined as atendee
            </Typography>
        </Box>
        <Box style={{display:"flex",alignItems:"center"}}>
          <Button variant="contained" className='pointsBtn' onClick={()=>navigate("/login")}>
            10 points Earned
          </Button>
          <Box>
          <IconButton
            style={{ background: "white",marginRight:"2vmax" }}
            onClick={() => navigate("/")}
          >
            <HomeOutlined sx={{ color: "#4FC5CC",fontSize:"35px" }} />
          </IconButton>
        </Box>
        </Box>
        </Box>
        </MenuBar>
      </AppBar>
      <Box className="QRcontainer">
        <Paper className="QRBox">
            <Box>
                <img src={QRCode} className="QRImg"/>
            </Box>
                <Typography className='font-montserrat' variant="h6" sx={{pt:{xs:"4vmax",md:"1vmax"},fontSize:{xs:"2.4vmax",md:"1.6vmax"}}}>QR Code ID:119471386</Typography>
                <Typography className='font-montserrat' sx={{py:"1vmax",fontSize:{xs:"2.4vmax",md:"1.7vmax",fontStyle:"italic"}}}>This Is Your User QR Code</Typography>

                <IconButton className="backBtn" onClick={()=>navigate("/")}>
                    <ChevronLeft sx={{fontSize:"70px"}} />
                </IconButton>
        </Paper>
      </Box>
      </Box>
  )
}

export default QRcode;