import { Box, Divider, Modal, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    opacity:0.9,
      border: 'none',
      borderRadius:"20px",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    
  };

const JoinAs = ({modal,setModal}) => {
  return (
    <div>
        <Modal
        open={modal}
        onClose={() => setModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='joinAsModal'>
            <Typography  style={{padding:"1vmax 0"}}>
                <Link to="/signup" style={{textDecoration:"none",color:"black"}}>Join As Atendee</Link>
            </Typography>
            <div style={{borderBottom:"1px solid rgba(0,0,0,0.3)",width:"80%"}}></div>
            <Typography  style={{padding:"1vmax 0"}}>
                Join As Sponsor
            </Typography>
            <div style={{borderBottom:"1px solid rgba(0,0,0,0.3)",width:"80%"}}></div>
            <Typography style={{padding:"1vmax 0"}}>
                Join As Exhibitor
            </Typography>

        </Box>
      </Modal>
    </div>
  )
}

export default JoinAs