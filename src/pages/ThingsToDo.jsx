import { Airplay, Camera, CameraOutlined, ClassOutlined, ContentCopyOutlined, Redeem, Shield, ShieldOutlined, StarOutlined, StarOutlineOutlined, TabletMacOutlined } from '@mui/icons-material'
import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AppBar from '../components/layout/AppBar'
import MenuBar from '../components/layout/MenuBar'
import ActivityCard from '../components/ThingsToDO/ActivityCard'
import NFT from "../assets/images/NFT.png"

const ThingsToDo = () => {
    const navigate =useNavigate()
  return (
    <Box>
      <AppBar signupApp="true">
        <MenuBar>
          <Typography
            variant="h5"
            className="titleName"
          >
            THINGS TO DO
          </Typography>
        </MenuBar>
        <Box className="">
          <Button
            className="col-white"
            sx={{
              textDecoration: "none",
              color: "white",
              paddingRight: "2vmax",
            }}
            onClick={()=>navigate("/login")}
          >
            Login/Signup
          </Button>
        </Box>
      </AppBar>
      <Box style={{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",position:"static"}}>

      <Box sx={{padding:"2vmax 1vmax",display:"flex",justifyContent:"center"}}>
        <Grid container>
        <ActivityCard title ="Join WorkShop" icon={<TabletMacOutlined style={{paddingRight:"2vmax"}}/>} />
        <ActivityCard title ="Join Task" icon={<TabletMacOutlined style={{paddingRight:"2vmax"}}/>} />
        <Link to="/IGcontest" style={{textDecoration:"none"}}>
        <ActivityCard title ="IG Photo" icon={<img src={NFT} style={{paddingRight:"2vmax"}}/>} />
        </Link>
        <Link to="/crackthecode" style={{textDecoration:"none"}}>
        <ActivityCard title ="Crack The Code" icon={<Airplay style={{paddingRight:"2vmax"}}/>} />
        </Link>
        <Link to="/treasurehunt" style={{textDecoration:"none"}}>
        <ActivityCard title ="Treasure Hunt" icon={<Redeem style={{paddingRight:"2vmax"}}/>} />
        </Link>
        <Link to="/quiz" style={{textDecoration:"none"}}>
        <ActivityCard title ="Quiz" icon={<ClassOutlined style={{paddingRight:"2vmax"}}/>} />
        </Link>
        <Link to="/survey" style={{textDecoration:"none"}}>
        <ActivityCard title ="Survey" icon={<ShieldOutlined style={{paddingRight:"2vmax"}}/>} />
        </Link>

        </Grid>
      </Box>
      <Typography variant="h5" sx={{pl:"4vmax"}}>Image View</Typography>
      <Box sx={{padding:"1vmax",display:"flex"}}>
        <Grid container >
        <Link to="/photobooth" style={{textDecoration:"none"}}>
        <ActivityCard title ="Photo Booth" icon={<StarOutlineOutlined style={{paddingRight:"2vmax"}}/>} />
            </Link>
            <Link to="/socialmedia" style={{textDecoration:"none"}}>
        <ActivityCard title ="Social Media Like & Share" icon={<ContentCopyOutlined style={{paddingRight:"2vmax"}}/>} />
            </Link>
        <Link to="/businesscardandluckydraw" style={{textDecoration:"none"}}> 
        <ActivityCard title ="Business Card Lucky Draw" icon={<CameraOutlined style={{paddingRight:"2vmax"}}/>} />
            </Link>
        </Grid>
      </Box>

      </Box>
      </Box>
  )
}

export default ThingsToDo