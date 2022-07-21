import { ChevronLeft } from "@mui/icons-material";
import {
  Button,
  Paper,
  Step,
  StepButton,
  Stepper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "../components/layout/AppBar";
import MenuBar from "../components/layout/MenuBar";
import QuizOptions from "../components/Quiz/QuizOptions";

const steps = [
  {
    id: 0,
    question:
      "Among the following States of India, which one has the oldest rock formations in the Country? ",
    options: ["Assam", "Bihar", "Krnataka", "Uttar Pradesh"],
  },
  {
    id: 0,
    question:
      "Among the following States of India, which one has the oldest rock formations in the Country bla bla bla? ",
    options: ["Assam", "Bihar", "Krnataka", "Uttar Pradesh"],
  },
  {
    id: 0,
    question:
      "Among the following States of India, which one has the oldest rock formations in the Country? ",
    options: ["Assam", "Bihar", "Krnataka", "Uttar Pradesh"],
  },
  {
    id: 0,
    question:
      "Among the following States of India, which one has the oldest rock formations in the Country? ",
    options: ["Assam", "Bihar", "Krnataka", "Uttar Pradesh"],
  },
  {
    id: 0,
    question:
      "Among the following States of India, which one has the oldest rock formations in the Country? ",
    options: ["Assam", "Bihar", "Krnataka", "Uttar Pradesh"],
  },
];

let visible = ["question", "options"];

const QuizDetailsPage = () => {
    const navigate = useNavigate()
  const [activeStep, setActiveStep] = React.useState(0);
  const [answerGiven, steAnswerGiven] = useState(
    Array.from(steps, () => false)
  );
  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  return (
    <Box>
      <AppBar signupApp="true">
        <MenuBar>
          {/* <Box sx={{display:"flex"}}> */}

          <ChevronLeft className="col-white" onClick={()=>navigate("/survey")}/>
          <Typography variant="h5" className="titleName">
            01:14
          </Typography>
          {/* </Box> */}
        </MenuBar>
        <Box sx={{ pr: "2vmax" }}>
          <Button
            variant="outlined"
            style={{
              color: "white",
              borderColor: "white",
              borderRadius: "30px",
              padding: "1vmax 4vmax",
            }}
            // onClick={() => navigate("/exhibitors")}
          >
            Submit
          </Button>
        </Box>
      </AppBar>
      <Box
        sx={{
          background: "linear-gradient(to right,#5185FF,#4FD2C2)",
          width: "100%",
        }}
      >
        <Box
          sx={{
            background: "transparent",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "60%" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Stepper nonLinear activeStep={activeStep}>
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepButton
                    color="inherit"
                    onClick={handleStep(index)}
                  ></StepButton>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Box>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Paper
            sx={{
              width: { xs: "85%", md: "60%" },
              px: "3vmax",
              py: "2vmax",
              my: "2vmax",
              borderRadius: "20px",
            }}
          >
            {
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "3vmax", md: "2vmax" },
                  fontWeight: "600",
                  my: "2vmax",
                }}
              >
                {activeStep + 1}.
              </Typography>
            }
            {Object.keys(steps[activeStep]).map((key, i) => {
              let ques = steps[activeStep][key];
              console.log(ques);
              if (visible.includes(key)) {
                return (
                  <React.Fragment>
                    {Array.isArray(ques) ? (
                      <QuizOptions data={ques} />
                    ) : (
                      <>
                        <Typography
                          variant="h5"
                          sx={{
                            fontSize: { xs: "3vmax", md: "2vmax" },
                            fontWeight: "600",
                            my: "2vmax",
                          }}
                        >
                          {ques}
                        </Typography>
                      </>
                    )}
                  </React.Fragment>
                );
              }
            })}
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default QuizDetailsPage;
