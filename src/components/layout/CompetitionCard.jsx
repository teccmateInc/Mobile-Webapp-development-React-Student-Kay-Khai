import { Card, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CompetitionCard = ({ children }) => {
  return (
    <Paper className="todoCard">
      <Box
        sx={{ display: "flex", justifyContent: "space-between", pb: "2vmax",px:{xs:"2vmax",md:"1vmax"} }}
      >
        <Typography
          variant="h5"
          className="font-montserrat col-white"
          sx={{ fontWeight: "600", fontSize: { xs: "2.8vmax", md: "1.7vmax" } }}
        >
          On Going Competition
        </Typography>
        <Box style={{ color: "white",textAlign:"end" }}>
          <Typography  sx={{ fontWeight: "600",fontSize: { xs: "2.5vmax", md: "1.5vmax" } }}>
            TIME
          </Typography>
          <Typography  sx={{fontSize:{ xs: "2.3vmax", md: "1.2vmax"}}}>11:00 - 19:00</Typography>
        </Box>
      </Box>
      <Box>{children}</Box>
    </Paper>
  );
};

export default CompetitionCard;
