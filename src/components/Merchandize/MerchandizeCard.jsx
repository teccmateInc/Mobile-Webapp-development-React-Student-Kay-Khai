import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import {useNavigate} from "react-router-dom";

const MerchandizeCard = ({Img,Name,Description,id}) => {
    const navigate = useNavigate();
  return (
    <Grid item xs={4} md={3} onClick={()=>navigate(`/merchandize/${id}`)}>
        <Box className="merchandizeCard ">
        <img src={Img} className="merchandizeImg" />
        <Typography variant="h6" className="col-white merchandizeTitle font-montserrat">{Name}</Typography>
        <Typography className="merchandizeDesc font-montserrat">{Description}</Typography>
        </Box>
    </Grid>
  )
  
}


export default MerchandizeCard