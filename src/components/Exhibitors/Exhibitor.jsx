import { Box, Card, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Exhibitor = ({exhibitorName,exhibitorImg}) => {
//   const [exhibitorDetails, setExhibitorDetails]=useState(false)
  const navigate=useNavigate()
    return (
        <>
    <Grid
      item
      xs={6}
      md={4}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Card className="exhibitorCard" onClick={()=>navigate(`/exhibitor/${exhibitorName}`)}>
        <img src={exhibitorImg} className="exhibitorImg" />
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <Typography  className="exhibitorName" >
            {exhibitorName}
          </Typography>
        </Box>
      </Card>
        
    </Grid>

      </>
  );
};

export default Exhibitor;
