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
  Delete,
  Logout,
  Notifications,
  FavoriteBorder,
  Wallet,
  AccountBalance,
  AccountBalanceWalletOutlined,
  DeleteOutline,
  NotificationsOutlined,
  LocalActivityOutlined,
  LocationCityOutlined,
} from "@mui/icons-material";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import ProfilePayment from "./ProfilePayment";
import RightContent from "./RightContent";


const ProfileNavigation = () => {
  return (
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
          <Link to={"/profile/booking"} style={{ textDecoration: "none" }}>
            <ListItem button sx={{ paddingTop: 1, paddingBottom: 1 }} href="/">
              <ListItemIcon>
                <Book sx={{ color: "blue" }} />
              </ListItemIcon>
              {/* booking address url  */}
              <Link
                to={"/profile/booking"}
                style={{ textDecoration: "none", color: "black" }}
                primary="My Bookings"
              >
                Mybooking
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
          </Link>
          <Divider />
          <Link to={"/profile/payment"} style={{ textDecoration: "none" }}>
            <ListItem button sx={{ paddingTop: 1, paddingBottom: 1 }} href="/">
              <ListItemIcon>
                <LocationCityOutlined sx={{ color: "blue" }} />
              </ListItemIcon>
              <Link
                to={"/profile/address"}
                style={{ textDecoration: "none", color: "black" }}
                primary="My Bookings"
              >
                Manage Address
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
          </Link>
          <Divider />
          <Link to={"/profile/payment"} style={{ textDecoration: "none" }}>
            <ListItem button sx={{ paddingTop: 1, paddingBottom: 1 }} href="/">
              <ListItemIcon>
                <AccountBalanceWalletOutlined sx={{ color: "blue" }} />
              </ListItemIcon>
              <Link
                to={"/profile/payment"}
                style={{ textDecoration: "none", color: "black" }}
                primary="My Bookings"
              >
                Payment
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
          </Link>
          <Divider />
          <Link to={"/profile/bookmark"} style={{ textDecoration: "none" }}>
            <ListItem button sx={{ paddingTop: 1, paddingBottom: 1 }} href="/">
              <ListItemIcon>
                <FavoriteBorder sx={{ color: "blue" }} />
              </ListItemIcon>
              <Link
                to={"/profile/bookmark"}
                style={{ textDecoration: "none", color: "black" }}
                primary="My Bookings"
              >
                My Bookmark
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
          </Link>
          <Divider />
          <Link
            to={"/profile/notifications"}
            style={{ textDecoration: "none" }}
          >
            <ListItem button sx={{ paddingTop: 1, paddingBottom: 1 }} href="/">
              <ListItemIcon>
                <NotificationsOutlined sx={{ color: "blue" }} />
              </ListItemIcon>
              <Link
                to={"/profile/notifications"}
                style={{ textDecoration: "none", color: "black" }}
                primary="My Bookings"
              >
                Notification
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
          </Link>
          <Divider />
          <Link to={"/profile/logout"} style={{ textDecoration: "none" }}>
            <ListItem button sx={{ paddingTop: 1, paddingBottom: 1 }} href="/">
              <ListItemIcon>
                <Logout sx={{ color: "blue" }} />
              </ListItemIcon>
              <Link
                to={"/profile/logout"}
                style={{ textDecoration: "none", color: "black" }}
                primary="My Bookings"
              >
                Logout
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
          </Link>{" "}
          <Divider />
          <Link to={"/profile/delete"} style={{ textDecoration: "none" }}>
            <ListItem button sx={{ paddingTop: 1, paddingBottom: 1 }} href="/">
              <ListItemIcon>
                <DeleteOutline sx={{ color: "red" }} />
              </ListItemIcon>
              <Link
                to={"/profile/delete"}
                style={{ textDecoration: "none", color: "black" }}
                primary="My Bookings"
              >
                Delete Account
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
          </Link>
        </List>
      </Box>
    </Box>
  );
};

export default ProfileNavigation;
