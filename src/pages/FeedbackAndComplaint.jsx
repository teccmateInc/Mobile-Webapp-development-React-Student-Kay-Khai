import { Box, Button, Rating, TextareaAutosize, TextField, Typography } from "@mui/material";
import React from "react";
import AppBar from "../components/layout/AppBar";
import MenuBar from "../components/layout/MenuBar";
import { useNavigate } from "react-router-dom";
import CustomSelect from "../components/layout/SelectWithPlaceholder";
const FeedbackAndComplaint = () => {
  const [ratings, setRatings] = React.useState(3);
  const navigate = useNavigate();
  return (
    <Box>
      <AppBar signupApp="true">
        <MenuBar>
          <Typography variant="h5" className="font-montserrat col-white" sx={{fontSize:{xs:"2.4vmax",md:"1.6vmax"},fontWeight:600}}>
            COMPLAINTS/FEEDBACK
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
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ p: 2, width: { xs: "100%", md: "50%" } }}>
        <CustomSelect
              label="Submit"
              placeholder="Submit"
              menu={["Complaint","Feedback"]}
            />
            <Box sx={{py:2}}>

          <Typography
            sx={{ fontWeight: "700", fontSize: { xs: "3vmax", md: "1.7vmax" } }}
          >
            General
          </Typography>
          <Box>
            <TextField
              sx={{ py: 1.2 }}
              fullWidth
              variant="outlined"
              placeholder="Full Name"
            />
            <TextField
              sx={{ py: 1.2 }}
              fullWidth
              variant="outlined"
              placeholder="Phone Number"
            />
            <TextField
              sx={{ py: 1.2 }}
              fullWidth
              variant="outlined"
              placeholder="Email Address"
            />
          <CustomSelect
            label="Village Name"
            placeholder="Village Name"
            menu={["Game Development"]}
          />
          </Box>
          </Box>

          <Box sx={{ my: 2 }}>
            <Typography
              sx={{
                my: 2,
                fontWeight: "700",
                fontSize: { xs: "3vmax", md: "1.7vmax" },
            }}
            >
              Feedback/Complaint
            </Typography>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={9}
              className="font-montserrat"
              placeholder="Full Name"
              style={{ width: "98%" }}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: { xs: "3vmax", md: "1.7vmax" },
              }}
            >
              Rate Your Experience
            </Typography>
            <Rating
              name="simple-controlled"
              value={ratings}
              onChange={(event, newValue) => {
                setRatings(newValue);
              }}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                width: "80%",
                py: 2,
                borderRadius: "30px",
                background: "linear-gradient(to bottom, #6BD3FF,#5185FF)",
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FeedbackAndComplaint;
