import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const Booking = () => {
  return (
    <div>
      <Grid container alignItems="center" sx={{ ml: 1 }}>
        <Grid item xs>
          <Typography gutterBottom variant="h6" fontSize={18}>
            <strong> Kitchen Cleaning</strong>
          </Typography>
          <Typography gutterBottom variant="p" fontSize={16}>
            1 * $ 399
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            gutterBottom
            variant="h6"
            textAlign={"end"}
            fontSize={18}
            color={"blue"}
          >
            <strong>$399</strong>
          </Typography>
          <Button size="small" variant="contained">
            {" "}
            Rate{" "}
          </Button>
        </Grid>
      </Grid>
      <br />
    </div>
  );
};

export default Booking;
