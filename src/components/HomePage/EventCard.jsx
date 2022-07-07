import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../../assets/styles/homepage.css"

const EventCard = () => {
    const navigate = useNavigate();
  return (
    <Paper className="eventCard" onClick={()=>navigate("/direction")}>
            <Box style={{display:"flex",justifyContent:"space-between"}}>
                <Box style={{color:"white"}}>
                    <Typography variant='h5' className='font'>Tect Edu Fair</Typography>
                    <Typography variant='h5' className='font'>2022</Typography>
                </Box>
                <Box style={{color:"white"}}>
                <Typography className='font'>03-04</Typography>
                <Typography variant="h5" className='font'>SEPT</Typography>
                </Box>
            </Box>
            <Box style={{color:"white",padding:"2vmax 0"}}>
                <Typography className='location'>
                Sunway Pyramid Convention Centre, Malaysia
                    </Typography>
            </Box>
            <Box style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <Box style={{color:"white",display:"flex",alignItems:"center"}}>
                <Typography className='sponsor'>Sponsored By <span style={{marginLeft:"1vmax",fontSize:"4vmax",color:"orange"}}>hanu.</span></Typography>
            </Box>
            <Box style={{color:"white"}}>
            <Typography>11.00 - 19.00</Typography>
            </Box>
            </Box>
        </Paper>
  )
}

export default EventCard