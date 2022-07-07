import { Box, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Village = ({villageName,villageImg}) => {
    const navigate =useNavigate();
  return (
        <Grid item xs={6} md={4} style={{display:"flex",justifyContent:"center"}} >
                        <Card className='villageCard' onClick={()=>navigate(`/village/${villageName}`)}>
                            <img src={villageImg} style={{width:"auto",height:"100%"}}/>
                            <Box style={{display:"flex",justifyContent:"center"}}>
                            <Typography variant="h6" className="villageName">{villageName}</Typography>
                            </Box>
                        </Card>
                    </Grid>
    
  )
}

export default Village