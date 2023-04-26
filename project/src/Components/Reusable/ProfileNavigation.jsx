import React from "react";
import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  Dashboard,
  Payment,
  Book,
  Person,
  KeyboardArrowRight,
} from "@mui/icons-material";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import ProfilePayment from "./Profile/ProfilePayment";
import RightContent from "./Profile/RightContent";

const ProfileNavigation = () => {
  return (
    <Container>
      
          <Box display={"flex"} maxWidth={"100%"}>
            <Box
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
                borderRadius: "10px",
                p: 0,
                mt: 3,
                mb: 3,
              }}
            >
              <ListItem
                sx={{ background: "blue", borderRadius: "10px", height: 160 }}
              >
                <ListItemDecorator>
                  <Avatar
                    size="lg"
                    sx={{
                      height: "60px",
                      width: "60px",
                      border: "5px solid white",
                    }}
                  >
                    MB
                  </Avatar>
                </ListItemDecorator>
                <div style={{ marginLeft: 10, color: "white" }}>
                  <Typography fontSize="xl">Murphy Bates</Typography>
                  <Typography fontSize="10px">murphybates@gmail.com</Typography>
                  <Typography fontSize="10px">+91 01234 56789</Typography>
                </div>
              </ListItem>

              <List component="nav" aria-label="main mailbox folders" sx={{}}>
                <ListItem button sx={{ paddingTop: 1, paddingBottom: 1 }}>
                  <ListItemIcon>
                    <Dashboard />
                  </ListItemIcon>
                  <Link
                    to={"/"}
                    style={{ textDecoration: "none", color: "black" }}
                    primary="My Bookings"
                  >
                    Mybooking{" "}
                  </Link>
                  <IconButton
                    sx={{
                      marginLeft: "auto",
                    }}
                  >
                    <KeyboardArrowRight
                      fontSize="xl3"
                      sx={{ color: "text.tertiary", fontSize: 24 }}
                    />
                  </IconButton>
                </ListItem>
                <Divider />

                <ListItem button sx={{ paddingTop: 1, paddingBottom: 1 }}>
                  <ListItemIcon>
                    <Payment />
                  </ListItemIcon>
                  <Link
                    to={"/profile/payment"}
                    style={{ textDecoration: "none", color: "black" }}
                    primary="My Bookings"
                  >
                    Payment{" "}
                  </Link>
                  <IconButton
                    sx={{
                      marginLeft: "auto",
                    }}
                  >
                    <KeyboardArrowRight
                      fontSize="xl3"
                      sx={{ color: "text.tertiary", fontSize: 24 }}
                    />
                  </IconButton>
                </ListItem>
                <Divider />

                <ListItem button sx={{ paddingTop: 1, paddingBottom: 1 }}>
                  <ListItemIcon>
                    <Book />
                  </ListItemIcon>
                  <Link
                    to={"/"}
                    style={{ textDecoration: "none", color: "black" }}
                    primary="My Bookings"
                  >
                    Mybooking{" "}
                  </Link>
                  <IconButton
                    sx={{
                      marginLeft: "auto",
                    }}
                  >
                    <KeyboardArrowRight
                      fontSize="xl3"
                      sx={{ color: "text.tertiary", fontSize: 24 }}
                    />
                  </IconButton>
                </ListItem>
                <Divider />

                <ListItem button sx={{ paddingTop: 1, paddingBottom: 1 }}>
                  <ListItemIcon>
                    <Book />
                  </ListItemIcon>
                  <Link
                    to={"/"}
                    style={{ textDecoration: "none", color: "black" }}
                    primary="My Bookings"
                  >
                    Mybooking{" "}
                  </Link>
                  <IconButton
                    sx={{
                      marginLeft: "auto",
                    }}
                  >
                    <KeyboardArrowRight
                      fontSize="xl3"
                      sx={{ color: "text.tertiary", fontSize: 24 }}
                    />
                  </IconButton>
                </ListItem>
                <Divider />

                <ListItem button sx={{ paddingTop: 1, paddingBottom: 1 }}>
                  <ListItemIcon>
                    <Book />
                  </ListItemIcon>
                  <Link
                    to={"/"}
                    style={{ textDecoration: "none", color: "black" }}
                    primary="My Bookings"
                  >
                    Mybooking{" "}
                  </Link>
                  <IconButton
                    sx={{
                      marginLeft: "auto",
                    }}
                  >
                    <KeyboardArrowRight
                      fontSize="xl3"
                      sx={{ color: "text.tertiary", fontSize: 24 }}
                    />
                  </IconButton>
                </ListItem>
                <Divider />

                <ListItem button sx={{ paddingTop: 1, paddingBottom: 1 }}>
                  <ListItemIcon>
                    <Book />
                  </ListItemIcon>
                  <Link
                    to={"/"}
                    style={{ textDecoration: "none", color: "black" }}
                    primary="My Bookings"
                  >
                    Mybooking{" "}
                  </Link>
                  <IconButton
                    sx={{
                      marginLeft: "auto",
                    }}
                  >
                    <KeyboardArrowRight
                      fontSize="xl3"
                      sx={{ color: "text.tertiary", fontSize: 24 }}
                    />
                  </IconButton>
                </ListItem>
                <Divider />

                <ListItem button sx={{ paddingTop: 1, paddingBottom: 1 }}>
                  <ListItemIcon>
                    <Book />
                  </ListItemIcon>
                  <Link
                    to={"/"}
                    style={{ textDecoration: "none", color: "black" }}
                    primary="My Bookings"
                  >
                    Mybooking{" "}
                  </Link>
                  <IconButton
                    sx={{
                      marginLeft: "auto",
                    }}
                  >
                    <KeyboardArrowRight
                      fontSize="xl3"
                      sx={{ color: "text.tertiary", fontSize: 24 }}
                    />
                  </IconButton>
                </ListItem>
              </List>
            </Box>
          </Box>
     
    </Container>
  );
};

export default ProfileNavigation;
