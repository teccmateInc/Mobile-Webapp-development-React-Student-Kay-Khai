import { ChevronLeftOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "../components/layout/AppBar";
import MenuBar from "../components/layout/MenuBar";


const VotingDetailsPage = () => {
  const navigate = useNavigate()
  return (
    <Box>
      <AppBar signupApp="true">
        <MenuBar>
          <Typography variant="h5" className="titleName">
            VOTING
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
          <ChevronLeftOutlined sx={{ mr: "1vmax" }} onClick={()=>navigate("/voting")}/>
          <Typography
            sx={{ fontWeight: "600", fontSize: { xs: "2.3vmax", md: "" } }}
          >
            Voting
          </Typography>
        </Box>
        <Box>
          <Typography>3 points</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ p: 2, width: { xs: "100%", md: "50%" } }}>
          <Typography className="font-montserrat" sx={{fontWeight:"700",fontSize:{xs:"3vmax",md:"1.7vmax"},textAlign:"center"}}>Best NFT Design</Typography>
          <Typography className="font-montserrat" sx={{fontWeight:"700",fontSize:{xs:"3vmax",md:"1.7vmax"},py:"4vmax"}}>Total Votes Available:<span>2</span></Typography>
          <Typography className="font-montserrat" sx={{fontWeight:"700",fontSize:{xs:"3vmax",md:"1.7vmax"},pb:"2vmax"}}>My Votes</Typography>
          <TextField
              sx={{ py: 1.2 }}
              fullWidth
              variant="outlined"
              placeholder="#1"
            />
         
         
          <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
            <Button
              type="submit"
              variant="contained"
              className="font-montserrat"
              sx={{
                width: {xs:"80%",md:"50%"},
                position:"absolute",bottom:{xs:"20px",md:"30px"},
                py: 2,
                borderRadius: "30px",
                background: "linear-gradient(to bottom, #6BD3FF,#5185FF)",
              }}
            >
              Vote
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default VotingDetailsPage;
