import { Box, Divider, Modal, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

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
                <Link to="/login" style={{textDecoration:"none",color:"black"}}>Join As Atendee</Link>
            </Typography>
            <div style={{borderBottom:"1px solid rgba(0,0,0,0.3)",width:"80%"}}></div>
            <Link to="/login" style={{textDecoration:"none",color:"black"}}>Join As Sponsor</Link>
            <div style={{borderBottom:"1px solid rgba(0,0,0,0.3)",width:"80%"}}></div>
            <Link to="/login" style={{textDecoration:"none",color:"black"}}>Join As Exhibitor</Link>

        </Box>
      </Modal>
    </div>
  )
}

export default JoinAs