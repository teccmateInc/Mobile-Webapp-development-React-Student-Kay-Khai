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
            <img src={Gmail} className="loginIcons" />
          </IconButton>
          <IconButton >
            <img src={Google} className="loginIcons" />
          </IconButton>
          <IconButton >
            <img src={FaceBook} className="loginIcons" />
          </IconButton>
        </Box>
  )
}

export default LoginIconBtns