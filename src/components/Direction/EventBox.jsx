import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import Event from "../../assets/images/Event.png";


const EventBox = () => {
  return (
    <Box style={{ display: "flex", justifyContent: "center" }}>
              <Card
                sx={{
                  padding: "2vmax",
                  position: "absolute",
                  bottom: {xs:10,sm:50,md:50},
                  width: {xs:"93%",md:"50%"},
                  borderRadius: "30px 30px 0 0",
                }}
              >
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <Box style={{ padding: "0 3vmax" }}>
                    <img src={Event} className="eventImg"/>
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="h6" fontSize="medium">
                      Tech Edu Fair 2022
                    </Typography>
                    <Box style={{ padding: "1vmax 0" }}>
                      <Typography fontSize="small">
                        Date: Sept 3rd - 4th|2022
                      </Typography>
                      <Typography fontSize="small">Timing</Typography>
                    </Box>
                    <Typography fontSize="small">11:00 - 19:00</Typography>
                  </Box>
                </Box>
              </Card>
            </Box>
  )
}

export default EventBox