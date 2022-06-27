import { IconButton } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Gmail from "../../assets/images/Gmail.png";
import Google from "../../assets/images/Google.png";
import FaceBook from "../../assets/images/FB.png";


const LoginIconBtns = () => {
  return (
    <Box
    className="loginIconBtns"
        >
          <IconButton >
            <img src={Gmail} style={{ width: "80px", height: "auto" }} />
          </IconButton>
          <IconButton >
            <img src={Google} style={{ width: "80px", height: "auto" }} />
          </IconButton>
          <IconButton >
            <img src={FaceBook} style={{ width: "80px", height: "auto" }} />
          </IconButton>
        </Box>
  )
}

export default LoginIconBtns