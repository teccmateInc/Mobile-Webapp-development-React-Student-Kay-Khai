import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Apps } from "@mui/icons-material";
import Sidebar from './Header';

const MenuBar = ({children}) => {
  const [drawerOpen, setDrawerOpen] = useState({ left: false });
  return (
    <>
    <Box style={{ display: "flex", alignItems: "center", flex: 1 }}>
          <Apps
            className="col-white"
            sx={{ mx: "3vmax" }}
            fontSize="medium"
            onClick={() => setDrawerOpen({ left: !drawerOpen.left })}
            />
          {children}
          </Box>
      <Sidebar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
            </>
  )
}

export default MenuBar