import { ChevronLeftOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Rating,
  Slider,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "../components/layout/AppBar";
import MenuBar from "../components/layout/MenuBar";
import CustomSelect from "../components/layout/SelectWithPlaceholder";

const marks = [
  { value: 0 },
  { value: 20 },
  { value: 40 },
  { value: 60 },
  { value: 80 },
  { value: 100 },
];
const SurveyDetailsPage = () => {
  const [ratings, setRatings] = React.useState(2);
  const navigate = useNavigate()
  return (
    <Box>
      <AppBar signupApp="true">
        <MenuBar>
          <Typography variant="h5" className="titleName">
            SURVEY
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
            // onClick={()=>navigate("/login")}
          >
            Login/Signup
          </Button>
        </Box>
      </AppBar>
      <Box
        sx={{
          height: "12vh",
          background: "lightgrey",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: "2vmax",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ChevronLeftOutlined sx={{ mr: "1vmax" }} onClick={()=>navigate("/survey")}/>
          <Typography
            sx={{ fontWeight: "600", fontSize: { xs: "2.3vmax", md: "" } }}
          >
            Game Development Survey
          </Typography>
        </Box>
        <Box>
          <Typography>3 points</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ p: 2, width: { xs: "100%", md: "50%" } }}>
          <Typography sx={{fontWeight:"700",fontSize:{xs:"3vmax",md:"1.7vmax"}}}>Slider Question</Typography>
          <Box>
            <Slider
              aria-label="Always visible"
              //   defaultValue={80}
              //   getAriaValueText={valuetext}
              step={10}
              marks={marks}
              //   valueLabelDisplay="on"
            />
          </Box>
          <Box>
            <CustomSelect
              label="MCQ Question"
              placeholder="MCQ Question"
              menu={["Game Development"]}
            />
            <TextField
              sx={{ py: 1.2 }}
              fullWidth
              variant="outlined"
              placeholder="Word Text Question"
            />
            <TextField
              sx={{ py: 1.2 }}
              fullWidth
              variant="outlined"
              placeholder="Word Text Question"
            />
          </Box>
          <Box sx={{ my: 2 }}>
            <Typography sx={{ my: 2,fontWeight:"700",fontSize:{xs:"3vmax",md:"1.7vmax"} }}>Feedback/Complaint</Typography>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={9}
              className="font-montserrat"
              placeholder="Full Name"
              style={{ width: "98%" }}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
            <Typography sx={{fontWeight:"700",fontSize:{xs:"3vmax",md:"1.7vmax"}}}>Rate Your Experience</Typography>
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

export default SurveyDetailsPage;
