import { Box } from '@mui/system'
import React from 'react'
import Logo from "../../assets/images/Logo.png";
import LogoText from "../../assets/images/LogoText.png";

const LoginLogo = () => {
  return (
    <Box
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "2vmax",
          }}
        >
          <img src={Logo} width="150px" height="auto" />

          <img src={LogoText} style={{ paddingTop: "1vmax" }} />
        </Box>
  )
}

export default LoginLogo