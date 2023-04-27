import { ArrowRightAltOutlined, DoneRounded } from "@mui/icons-material";
import { Box, Button, Card, CardMedia, Grid, Rating, Typography } from "@mui/material";
import React from "react";

const Bookmark = () => {
  return (
    <div>
      <Card sx={{ display: "flex", maxHeight: 300, border: "1px solid gray", boxShadow: "none" }}>
        <CardMedia
          component="img"
          sx={{ width: 150, borderRadius: "8px" }}
          image="http://placeimg.com/360/360/any"
          alt="Live from space album cover"
        />
        <CardMedia
          component="img"
          sx={{
            width: 50,
            height: 50,
            borderRadius: "100px",
            border: "5px solid white",
            ml: -3,
            mt: 6,
          }}
          image="http://placeimg.com/100/100/any"
          alt="Live from space album cover"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Grid container alignItems="center" sx={{ ml: 1 }}>
            <Grid item xs>
              <Typography gutterBottom variant="h6" fontSize={18}>
                Storm Brand Electronic Store
              </Typography>
            </Grid>
            <Grid item>
              <Button
                startIcon={<DoneRounded />}
                variant="contained"
                sx={{ mt: 1, mr: 2 }}
                size="small"
              >
                45 orders Completed
              </Button>
            </Grid>
          </Grid>
          <Box display={"flex"}>
            <Rating readOnly value={3}></Rating>
            <Typography variant="p" ml={1}>
              3/5
            </Typography>
          </Box>
          <Button
            endIcon={<ArrowRightAltOutlined />}
            sx={{ mt: 5, mr: "auto" }}
            variant="outlined"
            size="small"
          >
            View all Services
          </Button>
        </Box>
      </Card>
    </div>
  );
};

export default Bookmark;
