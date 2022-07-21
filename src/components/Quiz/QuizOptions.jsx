import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const QuizOptions = ({ data }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          my: "2vmax",
        }}
      >
        {data.map((opt, i) => (
          <Button
            variant={selectedAnswer === i ? "contained" : "outlined"}
            sx={{
              borderRadius: "30px",
              my: "2vmax",
              py: "2vmax",
              width: { xs: "100%", md: "50%" },
              fontSize: { md: "1.6vmax" },
            }}
            // className={`${selectedAnswer ? "col-white" : "col-black" }`}
            onClick={() => setSelectedAnswer(i)}
          >
            <span style={{ marginRight: "1vmax" }}>{i + 1}. </span>
            {opt}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default QuizOptions;
