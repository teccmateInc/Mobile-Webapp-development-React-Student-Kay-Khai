import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AppBar from "../components/layout/AppBar";
import MenuBar from "../components/layout/MenuBar";
import { useNavigate } from "react-router-dom";
import MerchandizeCard from "../components/Merchandize/MerchandizeCard";
import tshirt from "../assets/images/tshirt.png"
import Gift from "../assets/images/Gift.png"
import "../assets/styles/merchandize.css"

const gift =[
    {
    name:"Tshirt",
    Img:tshirt,
    Description:"Lorem Epsum Place 11 Street"
},{
    name:"Gift Card",
    Img:Gift,
    Description:"Lorem Epsum Place 11 Street"
},{
    name:"Gift Card",
    Img:Gift,
    Description:"Lorem Epsum Place 11 Street"
},{
    name:"Gift Card",
    Img:Gift,
    Description:"Lorem Epsum Place 11 Street"
},{
    name:"Gift Card",
    Img:Gift,
    Description:"Lorem Epsum Place 11 Street"
},{
    name:"Gift Card",
    Img:Gift,
    Description:"Lorem Epsum Place 11 Street"
}
]

const Merchandize = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <AppBar signupApp="true">
        <MenuBar>
          <Typography variant="h5" className="titleName">
          Merchandize
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
      <Box>
        <Box
          sx={{
            background: "#D9D9D9",
            padding: { md: "3vmax", xs: "4vmax 2vmax" },
            mt: { xs: "5vmax", md: "3vmax" },
            position: "relative",
          }}
        >
          <Typography variant="h6" className="font-montserrat">
            Introduction
          </Typography>
          <Typography className="villagesIntro font-montserrat">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Typography>
        </Box>
        <Box sx={{ p: { xs: 2, md: 4 },mb:5 }}>
          <Grid
            container
            spacing={{ xs: 1, sm: 2, md: 8 }}
            justifyContent="center"
          >
            {gift.map((m,i) => {
              return (
                <MerchandizeCard Name={m.name} Img={m.Img} Description={m.Description} id={i} />
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Merchandize;