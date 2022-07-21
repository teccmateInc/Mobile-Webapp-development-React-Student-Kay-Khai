import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import AppBar from "../components/layout/AppBar";
import MenuBar from "../components/layout/MenuBar";
import { Box, Button, Card, Typography } from "@mui/material";
import "../assets/styles/direction.css"
import EventBox from "../components/Direction/EventBox";
import DestinationBox from "../components/Direction/DestinationBox";

const mapStyles = {
  width: "100%",
  overflowY:"hidden",
  positiom:"relative",
  height:"82vh !important",
};
export class Direction extends Component {
  render() {
    return (
      <Box>
        <AppBar signupApp="true">
          <MenuBar>
            <Typography
              variant="h5"
              className="titleName"
            >
              DIRECTION
            </Typography>
          </MenuBar>
          <Box className="">
            <Button
              className="col-white"
              sx={{ textDecoration: "none", color: "white" }}
              
            >
              Login/Signup
            </Button>
          </Box>
        </AppBar>
        <Box style={{ width: "100vw", maxWidth: "100%", height: "82vh !important"}}>
          <Map
            google={this.props.google}
            zoom={17}
            style={mapStyles}
            initialCenter={{ lat: 40.758596, lng:-73.9872057 }}
          >
            <Marker position={{ lat: 40.758592, lng: -73.985017 }} />
          </Map>
          <Box style={{ width: "100vw" }}>
            <EventBox />
            <DestinationBox />
          </Box>
        </Box>
      </Box>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCxKnq_PSIIar_mMfGmSvxTGyoK0SkhVfQ",
})(Direction);
