import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./Drawer";
const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "black" }}>
        <Toolbar> <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                eDemmand
              </Typography>
          {/* <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} /> */}
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="primary"
                textColor="inherit"
                fontWeight="bold"
                background="white"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="HOME" />
                <Tab label="ABOUT US" />
                <Tab label="ALL CATEGORY" />
                <Tab label="ALL PROVIDERS" />
                <Tab label="Contact" />
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained" startIcon={<AccountCircleIcon/>}>
                SIGN IN
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
