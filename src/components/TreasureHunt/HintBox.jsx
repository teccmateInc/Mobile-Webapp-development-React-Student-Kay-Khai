import { KeyboardArrowDown } from "@mui/icons-material";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useState } from "react";

const HintBox = ({ HintNo, Hint }) => {
  const [btn, setBtn] = useState(false);
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {}, [btn]);

  return (
    <Grid item xs={12} md={6}>
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ padding: "2vmax" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h5"
                className="font-montserrat"
                sx={{
                  pr: "0.9vmax",
                  fontSize: { xs: "3vmax",sm:"1.9vmax" },
                  fontWeight: 600,
                }}
              >
                Hint{" "}
              </Typography>
              <Typography
                variant="h5"
                className={`${btn ? "col-orange" : "col-aqua"} ${
                  revealed ? "d-none" : "d-block"
                } font-montserrat `}
                sx={{ fontSize: { xs: "3vmax",sm:"1.7vmax" }, fontWeight: 600 }}
              >
                Hidden
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontSize: { xs: "3vmax",sm:"1.7vmax" }, fontWeight: 600 }}
                className={`${revealed ? "d-block col-orange" : "d-none"} `}
              >
                Revealed
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h5"
                className="font-montserrat"
                sx={{ fontSize: { xs: "3vmax",sm:"1.7vmax" }, fontWeight: 600 }}
              >
                HINT {HintNo}
              </Typography>
              <KeyboardArrowDown
                onClick={() => setBtn(true)}
                className={`${btn ? "d-none" : "d-block"}`}
              />
            </Box>
          </Box>
          <Box className={`${btn ? "d-block" : "d-none"}`}>
            <Box
              sx={{ padding: "4vmax 2vmax" }}
              className={`${revealed ? "d-none" : "d-block"}`}
            >
              <Button
                variant="contained"
                className="font-montserrat"
                sx={{
                  width: "100%",
                  height: "60px",
                  borderRadius: "50px",
                  fontSize: { xs: "4vmax",sm:"2.2vmax" },
                  fontWeight: 400,
                  background: "linear-gradient(to bottom, #FFE300,#FCB017 )",
                }}
                onClick={() => setRevealed(true)}
              >
                Scan To Reveal
              </Button>
            </Box>
            <Box
              sx={{ width: "100%", padding: "2vmax 0" }}
              className={`${revealed ? "d-block" : "d-none"}`}
            >
              <Typography
                className="font-montserrat"
                sx={{
                  width: "70%",
                  fontSize: { xs: "2vmax",sm:"1.2vmax" },
                  fontWeight: 500,
                }}
              >
                {Hint}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default HintBox;
