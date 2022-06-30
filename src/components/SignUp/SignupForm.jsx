import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import "../../assets/styles/signup.css";
import CustomSelect from "../layout/SelectWithPlaceholder";

const SignupForm = () => {
  return (
    <Paper className="formContainer">
      <form>
        <Box className="formBox">
          <Box className="innerLeftBox">
            <Typography variant="h6" style={{ padding: 0 }}>
              General
            </Typography>
            <Box
              sx={{
                pr: "2vmax",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <TextField
                sx={{ py: "1vmax" }}
                variant="outlined"
                placeholder="Full Name"
              />
              <TextField
                sx={{ py: "1vmax" }}
                variant="outlined"
                placeholder="Phone Number"
              />
              <TextField
                sx={{ py: "1vmax" }}
                variant="outlined"
                placeholder="Email Address"
              />
              <TextField
                sx={{ py: "1vmax" }}
                variant="outlined"
                placeholder="D-O-B"
              />
            </Box>
          </Box>
          <Box className="innerRightBox">
            <Typography variant="h6" style={{ padding: 0 }}>
              Event
            </Typography>
            <Box
              sx={{
                pr: "2vmax",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CustomSelect
                label="Village"
                placeholder="Village"
                menu={["Game Development"]}
              />
              
              <CustomSelect
                label="Graduation level"
                placeholder="Graduation level"
                menu={["Under Graduate","Graduate"]}
              />
              <CustomSelect
                label="Choose Subject(Major)"
                placeholder="Choose Subject(Major)"
                menu={["Machine Learning","Web Development"]}
              />
              <CustomSelect
                label="How Did You Hear About Us?"
                placeholder="How Did You Hear About Us?"
                menu={["Website","LinkedIn","Other"]}
              />
            </Box>
          </Box>
        </Box>
        <Box className="submitBtnContainer">
          <Button className="signUpBtn" variant="contained" type="submit">
            Register
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default SignupForm;
