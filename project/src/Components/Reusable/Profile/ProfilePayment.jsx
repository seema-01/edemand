import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";
import ProfileNavigation from "../ProfileNavigation";

const ProfilePayment = () => {
  return (
    <Container>
      <Grid container sx={{padding:0}}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ background: "red", margin: 0}}
        >
        <ProfileNavigation />
        </Grid>
        <Grid item xs={12} md={8} bgcolor={"yellow"}>
          i'm payment
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfilePayment;
