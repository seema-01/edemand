import React, { useState } from "react";
import {
  Tabs,
  Toolbar,
  Tab,
  AppBar,
  Button,
  useMediaQuery,
  useTheme
} from "@mui/material";

import DrawerComponent from "./DrawerComponent";


const Navigation1 = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.dowm('md'));
  console.log(isMatch);

  
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
      
        <Toolbar>
          eDemmand
          <Tabs
            textcolor="inherit"
            value={value}
            onChange={(e, value) => setValue(value)}
            indicatorColor="secondary"
          >
            <Tab label="HOME" />
            <Tab label="ABOUT US" />
            <Tab label="ALL CATEGORY " />
            <Tab label="ALL SERVICES" />
            <Tab label="CONTACT US" />
          </Tabs>
          <Button variant="contained" sx={{ marginLeft: "auto" }}>
            SIGN IN
          </Button>
        </Toolbar>
        <DrawerComponent />
      </AppBar>
    </React.Fragment>
  );
};

export default Navigation1;
