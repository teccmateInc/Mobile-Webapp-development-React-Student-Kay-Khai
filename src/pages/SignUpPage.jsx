import {
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../assets/styles/signup.css";
import { Apps } from "@mui/icons-material";
import SignupForm from "../components/SignUp/SignupForm";
import AppBar from "../components/layout/AppBar";
import MenuBar from "../components/layout/MenuBar";

const SignUp = () => {
  return (
    <>
    <AppBar signupApp="true">
      <MenuBar>
      <Typography variant="h5" sx={{fontFamily:"Montserrat",color:"white"}} >SIGN-UP DETAILS</Typography>

      </MenuBar>
    </AppBar>
    <Box className="mainContainer"
    >
      <SignupForm />
    </Box>
    </>
  );
};

export default SignUp;
