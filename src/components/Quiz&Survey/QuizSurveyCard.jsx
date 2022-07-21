import { Box, Button, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import QuizBox from "../../assets/images/QuizBox.png"

const QSCard = ({Image,Name,Company,Points,Join,link}) => {
  const navigate=useNavigate()
  return (
    <Grid item xs={12} md={6}>    
    <Card sx={{padding:"2vmax"}}>
        <Box sx={{display:"flex",position:"relative"}} className="font-montserrat">
            <Box>
                <img src={Image} className="quizPic"/>
            </Box>
            <Box sx={{width:"60%",pl:"1vmax"}}>
                <Typography variant="h5" sx={{fontSize:{xs:"2.6vmax",md:"1.4vmax"},fontWeight:600}}>{Name}</Typography>
                <Typography sx={{py:"2vmax",fontSize:{xs:"2.4vmax",md:"1.4vmax"}}}>{Company}</Typography>
            </Box>
            <Box sx={{display:"flex",justifyContent:"flex-end",textAlign:"right"}}>
            <Typography sx={{fontSize:{xs:"2.6vmax",md:"1.4vmax"},fontWeight:600}}>{Points}</Typography>
            </Box>
            <Button variant='contained' className="joinQuizBtn" onClick={()=>navigate(link)}>{Join}</Button>
        </Box>
    </Card>
    </Grid>
  )
}

export default QSCard