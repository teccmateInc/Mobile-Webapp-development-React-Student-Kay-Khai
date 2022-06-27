import React from "react";
import "../assets/styles/loginPage.css";
import { Box } from "@mui/system";
import LoginForm from "../components/Login/LoginForm";
import LoginIconBtns from "../components/Login/LoginIconBtns";
import LoginLogo from "../components/Login/LoginLogo";

const LoginPage = () => {
  return (
    <div className="loginContainer">
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <LoginLogo />
        <LoginForm />
        <LoginIconBtns />
        <p style={{color:"white"}}>Already Have An Account? <span style={{textDecoration:"underline"}}>Sign IN</span></p>
      </Box>
    </div>
  );
};

export default LoginPage;
