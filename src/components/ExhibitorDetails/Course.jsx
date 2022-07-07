import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const Course = ({id,Name}) => {
  return (
    <>
      <Box
        sx={{
          margin: { xs: "2vmax 0", md: "1vmax 0" },
        }}
      >
        <Typography>{id}. {Name}</Typography>
      </Box>
      <Divider />
    </>
  );
};

export default Course;
