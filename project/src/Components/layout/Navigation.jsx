import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  styled,
  IconButton,
  List,
  ListItemButton,
  Drawer,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

//for creating logo
const StyledToolBar = styled(Toolbar)({
  display: "flex",
  backgroundColor: "white",
  color: "blue",
  maxWidth: "lg",
  justifyContent: "space-between",
});

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <AppBar position="sticky" style={{ background: "none" }}>
        <Box marginLeft={"5%"} marginRight={"5%"}>
          <StyledToolBar>
            <IconButton
              color="inherit"
              aria-label="open-drawer"
              edge="start"
              sx={{ mr: 2, display: { md: "none" } }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          
          {/* Set logo and burger menu in one side */}
            <div>
            <Drawer open={open} onClose={() => setOpen(false)}>
              <List>
                <ListItemButton href="/home">HOME</ListItemButton>
                <ListItemButton href="/about us">ABOUT US</ListItemButton>
                <ListItemButton href="/all categories">ALL CATEGORIES </ListItemButton>
                <ListItemButton href="/all providers">ALL PROVIDERS</ListItemButton>
                <ListItemButton href="/conatct us">CONATCT US</ListItemButton>
              </List>
            </Drawer>
            <Typography variant="h6">eDemand</Typography>
            </div>

            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <NavLink
                to="/"
                style={{
                  paddingLeft: "1%",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                style={{
                  paddingLeft: "5%",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                About
              </NavLink>
              <NavLink
                to="/category"
                style={{
                  paddingLeft: "5%",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Category
              </NavLink>
              <NavLink
                to="/provider"
                style={{
                  paddingLeft: "5%",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Provider
              </NavLink>
              <NavLink
                to="/contact"
                style={{
                  paddingLeft: "5%",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Contact
              </NavLink>
            </Box>
            <Button variant="contained" startIcon={<AccountCircleIcon/>}>Sign in</Button>
          </StyledToolBar>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Navigation;
