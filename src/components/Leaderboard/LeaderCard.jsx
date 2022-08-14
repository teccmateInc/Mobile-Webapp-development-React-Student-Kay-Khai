import { Gradient, Star } from "@mui/icons-material";
import { Avatar, Badge, Box, Grid, Typography } from "@mui/material";
import React from "react";

const LeaderCard = ({ pic, name, points,rank }) => {
  return (
    <Grid item xs={12} md={5}>
      <Box
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{position:"relative"}}>
            <Badge badgeContent={rank} color="error" sx={{position:"absolute",top:9,left:5}} />
          <Avatar src={pic} sx={{ mr: 2,width: 56, height: 56 }} />
            </Box>
          <Typography className="font-montserrat" sx={{fontSize:{xs:"2.5vmax",md:"1.5vmax"},fontWeight:600}}>{name}</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Star sx={{ color: "yellow", mr: 1 }} />
          <Typography className="font-montserrat" sx={{fontSize:{xs:"2.5vmax",md:"1.5vmax"},fontWeight:600}}>{points}</Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default LeaderCard;
