import { Box, Button, IconButton, Typography } from '@mui/material'
import React from 'react'
import AppBar from '../layout/AppBar'
import MenuBar from '../layout/MenuBar'
import QR from "../../assets/images/QR.png";
import { useNavigate } from 'react-router-dom';

const AuthorizedAppbar = () => {
  const navigate = useNavigate();
  return (
   <>
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
            onClick={()=>navigate("/QRcode")}
          >
            <img src={QR}/>
          </IconButton>
        </Box>
        </Box>
        </Box>
        </MenuBar>
      </AppBar>
      </>
  )
}

export default AuthorizedAppbar