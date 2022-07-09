import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const VillageCard = () => {
    const navigate = useNavigate()
  return (
    <Paper className="villageSliderCard" onClick={()=>navigate("/direction")}>
            <Box style={{display:"flex",justifyContent:"space-between"}}>
                <Box style={{color:"white"}}>
                    <Typography variant='h5' className='font'>Machine learning and AI</Typography>
                    <Typography  className='font'>The description of the event are as follows</Typography>
                </Box>
            </Box>
            
        </Paper>
  )
}

export default VillageCard