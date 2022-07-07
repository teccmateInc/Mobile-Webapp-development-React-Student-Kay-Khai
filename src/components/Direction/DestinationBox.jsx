import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'


const DestinationBox = () => {
  return (
    <Box
    style={{
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
    }}
  >
    <Box
      className="destinationBox"
    >
      <Typography
        className="col-white"
        style={{ paddingTop: "1vmax" }}
      >
        Your Destination is
      </Typography>
      <Typography
        className="col-white"
        variant="h6"
        fontSize="small"
        style={{ padding: "1vmax" }}
      >
        Sunway Pyramid Convention Center,Malaysia
      </Typography>
    </Box>
  </Box>
  )
}

export default DestinationBox