import {
    ChatBubbleOutline,
    FavoriteBorderOutlined,
    FavoriteOutlined,
    HorizontalRule,
    MoreHoriz,
    ShareOutlined,
  } from "@mui/icons-material";
  import { IconButton, Paper, Typography } from "@mui/material";
  import { Box } from "@mui/system";
  import React from "react";
  import { useNavigate } from "react-router-dom";
  import Merchandize from "../assets/images/merchandize.png";

  
  const MerchandizeDetails = () => {
    const navigate = useNavigate();
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
              onClick={() => navigate("/merchandize")}
              />
              </IconButton>
            <Box sx={{width:{md:"600px",sm:"550px",xs:"100%"}}}>
              <Box sx={{px:2,py:1,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <Typography variant="h6">Tech Edu Tshirt</Typography>
              <IconButton>
              <MoreHoriz />
              </IconButton>
              </Box>
            </Box>
  
            <img src={Merchandize} className="mediaImg" />
            <Box className="mediaIcons">
  
              <Box sx={{ py: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", py: 2, pl: 2 }}>
                  <Typography
                    sx={{
                      width:"25%",
                      fontSize: { xs: "3vmax", md: "1.5vmax" },
                      fontWeight: "600",
                    }}
                  >
                    Title
                  </Typography>
                  <Typography>Tech Edu Tshirt</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", py: 1, pl: 2 }}>
                  <Typography
                    sx={{
                        width:"25%",
                      fontSize: { xs: "3vmax", md: "1.5vmax" },
                      fontWeight: "600",
                    }}
                  >
                    Color
                  </Typography>
                  <Typography>
                    Black
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", py: 1, pl: 2 }}>
                  <Typography
                    sx={{
                        width:"25%",
                      fontSize: { xs: "3vmax", md: "1.5vmax" },
                      fontWeight: "600",
                    }}
                  >
                    Price
                  </Typography>
                  <Typography>
                    RM 30
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "top", py: 1, pl: 2 }}>
                  <Typography
                    sx={{
                        width:"25%",
                      fontSize: { xs: "3vmax", md: "1.5vmax" },
                      fontWeight: "600",
                    }}
                  >
                    How To Get
                  </Typography>
                  <Typography>
                    Merchandize Section
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    );
  };
  
  export default MerchandizeDetails;