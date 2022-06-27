import { Box } from "@mui/material";
import React from "react";

const LoginForm = () => {
  return (
    <Box style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <form
      className="loginForm"
      >
        <input
          type="text"
          style={{ marginTop: "2vmax" }}
          className="loginFields"
          defaultValue="Username"
        />
        <input type="text" className="loginFields" defaultValue="Password" />

        <input
          type="submit"
          className="loginSubmit"
        />
      </form>
    </Box>
  );
};

export default LoginForm;
