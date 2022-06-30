import { Box } from '@mui/system'
import React from 'react'
import Logo from "../../assets/images/Logo.png";
import LogoText from "../../assets/images/LogoText.png";

const LoginLogo = () => {
  return (
    <Box
          className="logoContainer"
        >
          <img src={Logo} width="150px" height="auto" style={{paddingTop:"1vmax"}} />

          <img src={LogoText} className="LogoText" />
        </Box>
  )
}

export default LoginLogo