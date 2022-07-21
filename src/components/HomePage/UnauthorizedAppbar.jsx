import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import AppBar from '../layout/AppBar'
import MenuBar from '../layout/MenuBar'

const UnAuthorizedAppbar = () => {
  const navigate = useNavigate();
  return (
    <>
    <AppBar>
    <MenuBar>
      <Box style={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="h6"
          className="col-white font-montserrat"
          sx={{ fontSize:{xs:"2.5vmax", md:"2.3vmax"}}}
        >
          Welcome Guest
        </Typography>
        <Typography  className="col-white font-montserrat" sx={{ fontSize:{xs:"2vmax", md:"1.2vmax"} }}>
          Attendee{" "}
          <span onClick={()=>navigate("/login")}
            style={{ cursor: "pointer" }}
            
          >
            {" "}
            Login/SignUp{" "}
          </span>
        </Typography>
    </Box>
    </MenuBar>
    <Box className="btnContainer">
      <Button variant="contained" className="luckydrawBtn" onClick={()=>navigate("/login")}>
        LUCKY DRAW
      </Button>
    </Box>
  </AppBar>
  </>
  )
}

export default UnAuthorizedAppbar;