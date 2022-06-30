import { Box } from '@mui/material'
import React from 'react'
import "../../assets/styles/appbar.css"
const AppBar = ({children,signupApp}) => {
  return (
    <Box className={`${signupApp ==="true" ? "AppBar" :"appBar"}`}>
      {children}
    </Box>
  )
}

export default AppBar