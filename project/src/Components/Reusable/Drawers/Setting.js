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
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const Setting = ({change, check}) => {
  const [openSetting, setOpenSetting] = useState(false);
  const handleOpenSetting = () => {
    setOpenSetting(true);
  };
  const handleCloseSetting = () => {
    setOpenSetting(false);
  };

  const [view, setView] = React.useState("list");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    nextView: string
  ) => {
    setView(nextView);
  };
  return (
    <div>
      <IconButton onClick={handleOpenSetting}>
        <SettingsOutlinedIcon />{" "}
      </IconButton>
      <Drawer anchor="right" open={openSetting}>
        <Box width="400px">
          <Box>
            {/* Heading  */}
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
                  <CloseIcon />
                </IconButton>
              </Toolbar>
            </AppBar>

            {/* Toggle Button for Modes  */}
            <Box justifyContent={"space-around"} display={"flex"} marginTop={3}>
              <ToggleButtonGroup value={view} exclusive onChange={handleChange}>
                <ToggleButton onClick={change} value="list" aria-label="list">
                  <Brightness7Icon /> Light Theme
                </ToggleButton>
                <ToggleButton
                  onClick={change}
                  value="module"
                  aria-label="module"
                >
                  <Brightness4Icon /> Dark Theme
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
};

export default Setting;
