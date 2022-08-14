import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import AppBar from '../components/layout/AppBar'
import MenuBar from '../components/layout/MenuBar'
import {useNavigate} from "react-router-dom"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Gallery1 from "../assets/images/Gallery1.png"
import Gallery2 from "../assets/images/Gallery2.png"
import Gallery3 from "../assets/images/Gallery3.png"
import Gallery4 from "../assets/images/Gallery4.png"
import Gallery5 from "../assets/images/Gallery5.png"
import Gallery6 from "../assets/images/Gallery6.png"
const Gallery = () => {
    const navigate = useNavigate();
  return (
    <Box>
        <AppBar signupApp="true">
        <MenuBar>
          <Typography
            variant="h5"
            className="titleName"
          >
            GALLERY
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
            onClick={() => navigate("/login")}
          >
            Login/Signup
          </Button>
        </Box>
      </AppBar>
      <Box sx={{padding:"2vmax 3vmax"}}>
      <Masonry columnsCount={5} gutter="1px">
                    <img src={Gallery1} style={{width: "100%",height:"100%", display: "block"}} onClick={()=>navigate("/gallery/asd")}/>
                    <img src={Gallery2} style={{width: "100%",height:"100%", display: "block"}} onClick={()=>navigate("/gallery/asd")}/>
                    <img src={Gallery3} style={{width: "100%",height:"100%", display: "block"}} onClick={()=>navigate("/gallery/asd")}/>
                    <img src={Gallery3} style={{width: "100%",height:"100%", display: "block"}} onClick={()=>navigate("/gallery/asd")}/>
                    <img src={Gallery4} style={{width: "100%",height:"100%", display: "block"}} onClick={()=>navigate("/gallery/asd")}/>
                    <img src={Gallery5} style={{width: "100%",height:"100%", display: "block"}} onClick={()=>navigate("/gallery/asd")}/>
                    <img src={Gallery6} style={{width: "100%",height:"100%", display: "block"}} onClick={()=>navigate("/gallery/asd")}/>
                    <img src={Gallery3} style={{width: "100%",height:"100%", display: "block"}} onClick={()=>navigate("/gallery/asd")}/>
                </Masonry>
            {/* </ResponsiveMasonry> */}
      </Box>
    </Box>
  )
}

export default Gallery