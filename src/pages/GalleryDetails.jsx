import { ChatBubbleOutline, FavoriteBorderOutlined, HorizontalRule, MoreHoriz, ShareOutlined } from '@mui/icons-material'
import { Avatar, Box, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'
import {useNavigate} from "react-router-dom"
import GalleryImg from "../assets/images/GalleryImg.png"

const GalleryDetails = () => {
    const navigate = useNavigate()
  return (
    <Box className="mediaPage">
      <Paper className="mediaContainer">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IconButton>
          <HorizontalRule
            sx={{ fontSize: "70px" }}
            onClick={() => navigate("/gallery")}
            />
            </IconButton>
          <Box sx={{width:{md:"600px",sm:"550px",xs:"100%"}}}>
            <Box sx={{px:2,py:1,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <Box sx={{display:"flex"}}>
                <Avatar sx={{mr:2}}/>
                <Typography variant="h6">Andrew Sheraz</Typography>
                </Box>
            <IconButton>
            <MoreHoriz />
            </IconButton>
            </Box>
          </Box>

          <img src={GalleryImg} className="mediaImg" />
          <Box className="mediaIcons">
            <Box sx={{ display: "flex", pl: { xs: "2vmax", md: "0" } }}>
              <Box sx={{ display: "flex", alignItems: "center", mx: "1vmax" }}>
                <IconButton>
                  <FavoriteBorderOutlined sx={{ pr: 1 }} />
                </IconButton>
                <span>48</span>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mx: "2vmax" }}>
                <IconButton>
                  <ChatBubbleOutline sx={{ pr: 1 }} />
                </IconButton>
                <span>48</span>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mx: "1vmax" }}>
                <IconButton>
                  <ShareOutlined sx={{ pr: 1 }} />
                </IconButton>
                <span>48</span>
              </Box>
            </Box>

            <Box sx={{ py: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", py: 2, pl: 2 }}>
                <Typography
                  sx={{
                    pr: "3vmax",
                    fontSize: { xs: "3vmax", md: "1.5vmax" },
                    fontWeight: "600",
                  }}
                >
                  Title
                </Typography>
                <Typography>Lenovo Leglon Y11</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", py: 1, pl: 2 }}>
                <Typography
                  sx={{
                    pr: "3vmax",
                    fontSize: { xs: "3vmax", md: "1.5vmax" },
                    fontWeight: "600",
                  }}
                >
                  Upload
                </Typography>
                <Typography>
                  11 Hours Ago
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}

export default GalleryDetails