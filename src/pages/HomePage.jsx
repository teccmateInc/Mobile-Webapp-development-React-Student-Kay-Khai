import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import {
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
  Avatar
} from "@mui/material";
import React, { useState } from "react";
import AppBar from "../components/layout/AppBar";
import "../assets/styles/homepage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Add } from "@mui/icons-material";
import JoinAs from "../components/HomePage/JoinAs";
import Sidebar from "../components/layout/Header";
import MenuBar from "../components/layout/MenuBar";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import EventSlider from "../components/HomePage/EventSlider";
import AuthorizedAppbar from "../components/HomePage/AuthorizedAppbar"
import ActivitiesSlider from '../components/HomePage/ActivitiesSlider';
import SponsorsSlider from '../components/HomePage/SponsorsSlider';
const HomePage = ({ test, auth }) => {
  const [drawerOpen, setDrawerOpen] = useState({ left: false });
  const [modal, setModal] = useState(false);
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout
  } = useAuth0();

  const navigate = useNavigate();

  const renderAppBar = () => {
    if (isAuthenticated) {
      return (
        <AuthorizedAppbar logout={logout}/>
        // <AppBar>
        //   <MenuBar>
        //     <Box style={{ display: "flex", flexDirection: "column" }}>
        //       <Grid container spacing={1} alignItems="center">
        //         <Grid item>
        //           <Avatar src={user.picture} sx={{ margin: 1 }} />
        //         </Grid>
        //         <Grid item>
        //         <Typography
        //       variant="h6"
        //       className="col-white font-montserrat"
        //       sx={{ fontSize:{xs:"3.2vmax", md:"1.8vmax"}}}
        //     >
        //       {user.name}
        //     </Typography>
        //     <Typography className="col-white font-montserrat" sx={{ fontSize:{xs:"2.5vmax", md:"1.5vmax"} }}>
        //     Atendee
        //     </Typography>
        //         </Grid>
        //       </Grid>
        //     </Box>
        //   </MenuBar>
        //   <Box className="btnContainer">
        //     <Button
        //       variant="contained"
        //       className="luckydrawBtn"
        //       onClick={() => logout()}>
        //       LOGOUT
        //     </Button>
        //   </Box>
        // </AppBar>
      );
    }
    else {
      return (
        <AppBar>
    <MenuBar>
      <Box style={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="h6"
          className="col-white font-montserrat"
          sx={{ fontSize:{xs:"2.5vmax", md:"2.3vmax"}}}
        >
          <FormattedMessage id='home.welcome' />
        </Typography>
        <Typography  className="col-white font-montserrat" sx={{ fontSize:{xs:"2vmax", md:"1.2vmax"} }}>
          Attendee{" "}
          <span onClick={()=>navigate("/login")}
            style={{ cursor: "pointer" }}
            
          >
            {" "}
            Login/SignUp{" "}
          </span>
        </Typography>
    </Box>
    </MenuBar>
    <Box className="btnContainer">
      <Button variant="contained" className="luckydrawBtn" onClick={() => loginWithRedirect()}>
        LOGIN
      </Button>
    </Box>
  </AppBar>

      );
    }
  };

  return (
    <Box>
      {renderAppBar()}
      <Box>

        <Box
          style={{
            margin: "2vmax auto",
            overflow: "hidden"
          }}
        >
          <EventSlider />
        </Box>
        <Box style={{ margin: "4vmax 2vmax", overflow: "hidden" }}>
          <Typography
            variant="h3"
            className="activitesHeading"
            style={{ marginLeft: "2vmax" }}
          >
            Attractive Activities
          </Typography>
          <Box>
            <ActivitiesSlider />
          </Box>
        </Box>
        <Box style={{ margin: "4vmax 0vmax", position: "relative" }}>
          <Typography variant="h3" className="sponserHeading">
            Title Sponsers
          </Typography>
          <div className="sponsorsContainer">
            <Box style={{ marginLeft: "2vmax" }}>
              <SponsorsSlider />
            </Box>
          </div>
          <IconButton className="addBtnContainer" onClick={() => setModal(true)}>
            <Add fontSize="large" className="addBtn" />
          </IconButton>
        </Box>
        <JoinAs modal={modal} setModal={setModal} />
      </Box>
      <Sidebar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    test: state.test
  }
}

export default connect(mapStateToProps, {})(HomePage);
