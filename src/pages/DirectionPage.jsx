import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import AppBar from "../components/layout/AppBar";
import MenuBar from "../components/layout/MenuBar";
import { Box, Button, Card, Typography } from "@mui/material";
import Event from "../assets/images/Event.png";
import "../assets/styles/direction.css"

const mapStyles = {
  width: "100%",
  overflowY:"hidden",
  // height: "100%",
  positiom:"relative",
  height:"82vh !important",
  // maxHeight:"100%"
};
export class Direction extends Component {
  render() {
    return (
      <Box>
        <AppBar signupApp="true">
          <MenuBar>
            <Typography
              variant="h5"
              sx={{ fontFamily: "Montserrat", color: "white" }}
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
            <Box style={{ display: "flex", justifyContent: "center" }}>
              <Card
                sx={{
                  padding: "2vmax",
                  position: "absolute",
                  bottom: {xs:10,sm:50,md:50},
                  width: {xs:"93%",md:"50%"},
                  borderRadius: "30px 30px 0 0",
                }}
              >
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <Box style={{ padding: "0 3vmax" }}>
                    <img src={Event} className="eventImg"/>
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="h6" fontSize="medium">
                      Tech Edu Fair 2022
                    </Typography>
                    <Box style={{ padding: "1vmax 0" }}>
                      <Typography fontSize="small">
                        Date: Sept 3rd - 4th|2022
                      </Typography>
                      <Typography fontSize="small">Timing</Typography>
                    </Box>
                    <Typography fontSize="small">11:00 - 19:00</Typography>
                  </Box>
                </Box>
              </Card>
            </Box>

            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Box
                className="destinationBox"
              >
                <Typography
                  className="col-white"
                  style={{ paddingTop: "1vmax" }}
                >
                  Your Destination is
                </Typography>
                <Typography
                  className="col-white"
                  variant="h6"
                  fontSize="small"
                  style={{ padding: "1vmax" }}
                >
                  Sunway Pyramid Convention Center,Malaysia
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCxKnq_PSIIar_mMfGmSvxTGyoK0SkhVfQ",
})(Direction);
