import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import React from "react";
import ProfileNavigation from "./ProfileNavigation";
import Heading from "./Heading";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Divider from "@mui/material/Divider";
import {
  AccessTime,
  LocationOffRounded,
  LocationOnOutlined,
  PunchClockOutlined,
} from "@mui/icons-material";
import Booking from "./Booking";

const ProfileBooking = () => {
  return (
    <div>
      <Container>
        <Grid container sx={{ padding: 0 }}>
          <Grid item xs={12} md={4}>
            <ProfileNavigation />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ mt: 3, background: "white",pb:2, mb:1 }}>
              <Heading heading="Booking Information" />

              <Box
                sx={{
                  bgcolor: "#f8f3ff",
                  border: "1px solid #dedddd",
                  borderRadius:"10px",
                  p:1,
                  ml:4,
                  mr: 4,
                  mb:2
                }}
              >
                <Box sx={{ my: 1, mx: 2, display: "flex" }}>
                  <img
                    src="https://placeimg.com/640/480/tech"
                    height={80}
                    width={80}
                    style={{ borderRadius: "10px" }}
                    alt=""
                  />
                  <Grid container alignItems="center" sx={{ ml: 1 }}>
                    <Grid item xs>
                      <Typography gutterBottom variant="h4" component="div">
                        Spicees Spa
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom variant="h6" component="div">
                        $4.50
                      </Typography>
                    </Grid>
                    <Typography color="text.secondary" variant="body2">
                      Pinstriped cornflower blue cotton blouse takes you on a
                      walk to the park or just down the hall.
                    </Typography>
                  </Grid>
                </Box>
                <br />
                <hr />

                <Box sx={{ pl: 3 }}>
                  <ListItem>
                    <ListItemAvatar>
                      <AccessTime />
                    </ListItemAvatar>
                    <ListItemText
                      primary="01:00 PM, 20-jan-2023"
                      secondary="schedule"
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemAvatar>
                      <LocationOnOutlined />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Vacation"
                      secondary="July 20, 2014"
                    />
                  </ListItem>
                </Box>
                <hr />

                {/* my bookings  */}
                <Box sx={{ mt: 1, ml: 3, mr: 3 }}>
                  <Box sx={{ mt: 2, mb: 2 }}>
                    <Booking />
                    <Booking />
                    <Booking />
                    <Booking />
                  </Box>
                </Box>
                <hr />

                <Box sx={{ background: "#CCCCFF",  }}>
                  <Box sx={{ ml: 3, pt: 2, pb: 3, mr: 3 }}>
                    <Grid container alignItems="center" sx={{ ml: 1 }}>
                      <Grid item xs>
                        <Typography gutterBottom variant="h6" fontSize={18}>
                          sub total :
                        </Typography>
                        <Typography gutterBottom variant="h6" fontSize={18}>
                          Tax :
                        </Typography>
                        <Typography gutterBottom variant="h6" fontSize={18}>
                          Visiting Charge :
                        </Typography>
                        <Typography gutterBottom variant="h6" fontSize={18}>
                            <strong>Total :</strong>
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          gutterBottom
                          variant="h6"
                          textAlign={"end"}
                          fontSize={18}
                          color={"grey"}
                        >
                          $1596
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h6"
                          textAlign={"end"}
                          fontSize={18}
                          color={"grey"}
                        >
                          $216
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h6"
                          textAlign={"end"}
                          fontSize={18}
                          color={"grey"}
                        >
                          $45
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h6"
                          textAlign={"end"}
                          fontSize={18}
                          color={""}
                        >
                          <strong>$1857</strong>
                        </Typography>
                      </Grid>
                    </Grid>
                    <br />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProfileBooking;
