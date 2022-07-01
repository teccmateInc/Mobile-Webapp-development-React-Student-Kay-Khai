import { Box, Divider, Drawer, List, ListItem, Typography } from "@mui/material";
import React from "react";
import "../../assets/styles/appbar.css"
import {BookOutlined,ShieldOutlined,StarBorderOutlined,CardGiftcardOutlined,Camera,ContentCopyOutlined,LogoutOutlined,TabletMacOutlined} from "@mui/icons-material"
import NFT from "../../assets/images/NFT.png"

const Sidebar = ({ drawerOpen, setDrawerOpen }) => {
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen({ ...drawerOpen, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250  }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List style={{padding:"2vmax 0"}} sx={{pl:{xs:"2vmax",md:0}}}>
        <ListItem >
            <Box className="listItem">
                <BookOutlined style={{paddingRight:"1vmax"}}/>
                <Typography fontSize="14px" fontWeight="500">Directory</Typography>
            </Box>
        </ListItem>
        <Divider  variant="fullWidth"/>
        <ListItem>
            <Box className="listItem">
                <ShieldOutlined style={{paddingRight:"1vmax"}}/>
                <Typography fontSize="13px" fontWeight="500">Villages</Typography>
            </Box>
        </ListItem>
        <Divider variant="fullWidth" />
        <ListItem>
            <Box className="listItem">
                <StarBorderOutlined style={{paddingRight:"1vmax"}}/>
                <Typography fontSize="14px" fontWeight="500">Things To Do(Activities)</Typography>
            </Box>
        </ListItem>
        <Divider />
        <ListItem>
            <Box className="listItem">
                <img src={NFT} style={{paddingRight:"1vmax"}}/>
                <Typography fontSize="14px" fontWeight="500">NFT</Typography>
            </Box>
        </ListItem>
        <Divider />
        <ListItem>
            <Box className="listItem">
                <CardGiftcardOutlined style={{paddingRight:"1vmax"}}/>
                <Typography fontSize="14px" fontWeight="500">Reward</Typography>
            </Box>
        </ListItem>
        <Divider />
        <ListItem>
            <Box className="listItem">
                <ContentCopyOutlined style={{paddingRight:"1vmax"}}/>
                <Typography fontSize="14px" fontWeight="500">LeaderBoard</Typography>
            </Box>
        </ListItem>
        <Divider />
        <ListItem>
            <Box className="listItem">
                <Camera style={{paddingRight:"1vmax"}}/>
                <Typography fontSize="14px" fontWeight="500">gallery</Typography>
            </Box>
        </ListItem>
        <Divider />
        <ListItem>
            <Box className="listItem">
                <TabletMacOutlined style={{paddingRight:"1vmax"}}/>
                <Typography fontSize="14px" fontWeight="500">Feedback/Complaint</Typography>
            </Box>
        </ListItem>
        <Divider />
        <ListItem>
            <Box className="listItem">
                <LogoutOutlined style={{paddingRight:"1vmax"}}/>
                <Typography fontSize="14px" fontWeight="500">Signup/Login</Typography>
            </Box>
        </ListItem>
        <Divider />
        <Divider />
      </List>
    </Box>
  );
  return (
    <div>
      <Drawer
        
        anchor={"left"}
        open={drawerOpen["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
};

export default Sidebar;
