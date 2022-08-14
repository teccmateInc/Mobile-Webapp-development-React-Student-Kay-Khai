import { Close } from "@mui/icons-material";
import { Box, Divider, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/nft.css";

const RewardModal = ({ modal, setModal }) => {
  return (
    <div>
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="NFTModal">
          <IconButton>
            <Close onClick={() => setModal(false)} />
          </IconButton>
          <Box sx={{ my: 3 }}>
            <Box sx={{ my: 3 }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "2.7vmax", md: "1.5vmax" },
                }}
                className="font-montserrat"
              >
                Where Is The Spinning Wheel?
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "2.2vmax", md: "1.2vmax" },
                  my: 1,
                }}
                className="font-montserrat"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </Typography>
            </Box>
            <Box sx={{ my: 3 }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "2.7vmax", md: "1.5vmax" },
                }}
                className="font-montserrat"
              >
                How Do I Get A Spin?
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "2.2vmax", md: "1.2vmax" },
                  my: 1,
                }}
                className="font-montserrat"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </Typography>
            </Box>
            <Box sx={{ my: 3 }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "2.7vmax", md: "1.5vmax" },
                }}
                className="font-montserrat"
              >
                How Do I Earn Points?
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "2.2vmax", md: "1.2vmax" },
                  my: 1,
                }}
                className="font-montserrat"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default RewardModal;
