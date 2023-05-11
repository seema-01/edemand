import {
  AppBar,
  Avatar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CloseIcon from "@mui/icons-material/Close";

const Setting = () => {
  const [openSetting, setOpenSetting] = useState(false);
  const handleOpenSetting = () => {
    setOpenSetting(true);
  };
  const handleCloseSetting = () => {
    setOpenSetting(false);
  };
  return (
    <div>
      <IconButton onClick={handleOpenSetting}>
        <SettingsOutlinedIcon />{" "}
      </IconButton>
      <Drawer anchor="right" open={openSetting}>
        <Box width="500px">
          <Box>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  size="medium"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  // sx={{ mr: 2 }}
                >
                  <SettingsOutlinedIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  eDemmand&nbsp;Setting
                </Typography>
                <IconButton color="inherit" onClick={handleCloseSetting}>
                  <CloseIcon
                  />
                </IconButton>
              </Toolbar>
            </AppBar>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
};

export default Setting;
