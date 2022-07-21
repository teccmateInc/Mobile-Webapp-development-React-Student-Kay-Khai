import { TabletMacOutlined } from '@mui/icons-material'
import { Card, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import "../../assets/styles/thingstodo.css"

const ActivityCard = ({title,icon}) => {
  return (
    <Grid item xs={12} md={4}>
        <Card className="thingstodoCard">
        {icon}
        <Typography className='font-montserrat' sx={{fontWeight:700,fontSize:{xs:"2.5vmax",md:"1.2vmax"}}}>{title}</Typography>
        </Card>
    </Grid>
  )
}

export default ActivityCard;