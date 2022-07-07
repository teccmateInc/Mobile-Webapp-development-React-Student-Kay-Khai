import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Workshop = ({id,Name,type}) => {
  return (
    <>
      <Box className="workshop">
        <Typography>{id}. {Name}</Typography>
        <Typography>{type}</Typography>
      </Box>
      <Divider />
    </>
  );
};

export default Workshop;
