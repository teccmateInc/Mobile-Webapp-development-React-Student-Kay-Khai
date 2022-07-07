import { Button, Card, FormControl, Grid, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AppBar from "../components/layout/AppBar";
import MenuBar from "../components/layout/MenuBar";
import Exhibitor1 from "../assets/images/Exhibitor1.png";
import Exhibitor2 from "../assets/images/Exhibitor2.png";
import Exhibitor3 from "../assets/images/Exhibitor3.png";
import Exhibitor4 from "../assets/images/Exhibitor4.png";
import Exhibitor5 from "../assets/images/Exhibitor5.png";
import "../assets/styles/exhibitor.css";
import Exhibitor from "../components/Exhibitors/Exhibitor";
import SearchBox from "../components/Exhibitors/SearchBox";


const Exhibitors = () => {
  return (
    <Box>
      <AppBar signupApp="true">
        <MenuBar>
          <Typography
            variant="h5"
            sx={{ fontFamily: "Montserrat", color: "white" }}
          >
            EXHIBITORS
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
          >
            Login/Signup
          </Button>
        </Box>
      </AppBar>
      <Box>
        <SearchBox />
        <Box sx={{ padding: "0 3vmax 3vmax 3vmax" }}>
          <Grid
            container
            spacing={{ xs: 2, sm: 3, md: 5 }}
            style={{ position: "relative" }}
          >
            <Exhibitor
              exhibitorName="Indian Institute Of Technology"
              exhibitorImg={Exhibitor1}
            />
            <Exhibitor
              exhibitorName="Indian Institute Of Technology"
              exhibitorImg={Exhibitor2}
            />
            <Exhibitor
              exhibitorName="Indian Institute Of Technology"
              exhibitorImg={Exhibitor3}
            />
            <Exhibitor
              exhibitorName="Indian Institute Of Technology"
              exhibitorImg={Exhibitor4}
            />
            <Exhibitor
              exhibitorName="Indian Institute Of Technology"
              exhibitorImg={Exhibitor5}
            />
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Exhibitors;
