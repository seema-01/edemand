import React from "react";
import Heading from "./Heading";
import { Box, Container, Grid } from "@mui/material";
import ProfileNavigation from "./ProfileNavigation";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Divider from "@mui/material/Divider";

const ProfileNotification = () => {
  return (
    <div>
      <Container>
        <Grid container sx={{ padding: 0 }}>
          <Grid item xs={12} md={4}>
            <ProfileNavigation />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ mt: 3, background: "white", borderRadius: "10px" }}>
              <Heading heading="Notifications" />
              <Box>
                <NotificationList />
                <NotificationList />
                <NotificationList />
                <NotificationList />
                <NotificationList />
                <NotificationList />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export const NotificationList = () => {
  return (
    <>
      <List
        sx={{
          maxWidth: "100%",
          bgcolor: "background.paper",
          padding: 0
        }}
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Order Completed" secondary="Jan 9, 2014" />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    </>
  );
};

export default ProfileNotification;
