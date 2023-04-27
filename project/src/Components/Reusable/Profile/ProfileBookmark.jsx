import React from "react";
import Heading from "./Heading";
import { Box, Button, Container, Grid, Rating } from "@mui/material";
import ProfileNavigation from "./ProfileNavigation";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import {
  ArrowCircleLeft,
  ArrowRight,
  ArrowRightAltOutlined,
  Done,
  DoneRounded,
} from "@mui/icons-material";
import Bookmark from "./Bookmark";

const ProfileBookmark = () => {
  const theme = useTheme();

  return (
    <div>
      <Box>
        <Container>
          <Grid container sx={{ padding: 0 }}>
            <Grid item xs={12} md={4}>
              <ProfileNavigation />
            </Grid>
            <Grid item xs={12} md={8}>
              <Box sx={{ mt: 3, background: "white", borderRadius: "10px" }}>
                <Heading heading="Bookmark" />
                <Box sx={{ m: 2 }}>
                  <Bookmark /> <br />
                  <Bookmark /> <br />
                  <Bookmark /> <br />
                  <Bookmark /> <br /> 
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default ProfileBookmark;
