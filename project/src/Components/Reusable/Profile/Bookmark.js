import { ArrowRightAltOutlined, DoneRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const Bookmark = () => {
  const bookData = JSON.parse(localStorage.getItem("bookmark")) || [];

  const navigate = useNavigate();
  return (
    <div>
      {bookData.map((response) => (
        <>
          <Card
            sx={{
              display: "flex",
              maxHeight: 300,
              border: "1px solid gray",
              boxShadow: "none",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 150, borderRadius: "8px" }}
              image={response.banner_image}
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
              image={response.image}
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
                    {response.company_name}
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    startIcon={<DoneRounded />}
                    variant="contained"
                    sx={{ mt: 1, mr: 2 }}
                    size="small"
                  >
                    {response.number_of_orders} orders Completed
                  </Button>
                </Grid>
              </Grid>
              <Box display={"flex"}>
                <Rating readOnly value={response.ratings}></Rating>
                <Typography variant="p" ml={1}>
                  {response.ratings}/5
                </Typography>
              </Box>
              <Button
                endIcon={<ArrowRightAltOutlined />}
                sx={{ mt: 5, mr: "auto" }}
                variant="outlined"
                size="small"
                onClick={() =>
                  navigate("/providers/services/" + response.partner_id)
                }
              >
                View all Services
              </Button>
              <br />
            </Box>
          </Card>
          <br />
        </>
      ))}{" "}
    </div>
  );
};

export default Bookmark;
