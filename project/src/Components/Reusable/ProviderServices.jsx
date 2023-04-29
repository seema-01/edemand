import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Link,
  Typography,
  Card,
  CardContent,
  Button,
  CardMedia,
  CardActions,
  Rating,
  Divider,
  LinearProgress,
} from "@mui/material";
import React from "react";
import ProviderService from "./ProviderService";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import GradeIcon from "@mui/icons-material/Grade";
import CustomerReview from "./CustomerReview";

const ProviderServices = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ marginBottom: 1, marginTop: 1 }}
        >
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/providers">
            Providers
          </Link>
          <Typography color="text.primary">Services</Typography>
        </Breadcrumbs>
        <Typography variant="h4" gutterBottom>
          <strong>Service Providers</strong>
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Box sx={{ background: "white", borderRadius: "10px", mb: 5 }}>
              <Typography variant="h5" ml={2} p={2}>
                <strong>Our Services</strong>
              </Typography>
              <hr />
              <Box sx={{ p: 3 }}>
                <ProviderService /> <hr />
                <ProviderService /> <hr />
                <ProviderService /> <hr />
                <ProviderService /> <hr />
                <ProviderService /> <hr />
                <ProviderService /> <hr />
                <ProviderService />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Box>
              <Card sx={{}}>
                <CardMedia
                  sx={{ height: 250 }}
                  image="https://picsum.photos/300/300"
                  title="green iguana"
                />
                <CardMedia
                  sx={{
                    height: 80,
                    width: 80,
                    borderRadius: 50,
                    ml: 24,
                    border: "5px solid white",
                    mt: -5,
                  }}
                  image="https://picsum.photos/300/300"
                  title="green iguana"
                />
                <CardActions sx={{ justifyContent: "space-around", mb: 4 }}>
                  <Button
                    variant="contained"
                    sx={{ textAlign: "start", fontSize: 15 }}
                    startIcon={<CheckCircleOutlineIcon />}
                  >
                    {" "}
                    89 <br /> Orders Complete
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      textAlign: "start",
                      fontSize: 15,
                      bgcolor: "#323232",
                      "&:hover": { bgcolor: "#323232" },
                    }}
                    startIcon={<GradeIcon />}
                  >
                    4.3 <br />
                    Provider Rating{" "}
                  </Button>
                </CardActions>

                <hr />

                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    <strong> Provider Address </strong>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Katira Complex, 8/a, Sanskar Nagar, Bhuj, Gujrat <br />
                    370001
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div" mt={2}>
                    <strong> Provider Information </strong>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo dolor inventore quibusdam quas. Expedita voluptate
                    dolores labore, voluptatem iure repudiandae facilis. Eum
                    nihil excepturi, ex molestias quas assumenda aut possimus.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box
              sx={{ background: "white", borderRadius: "10px", mb: 3, mt: 3 }}
            >
              <Typography variant="h5" pt={2} pb={2} pl={1}>
                <strong>Reviews and Rating</strong>
              </Typography>
              <hr />
              <br />
              <RatingCard />
              <CustomerReview /> <Divider />
              <CustomerReview /> <Divider />
              <Button
                href="/providers/services/reviews"
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  mb: 2,
                  bgcolor: "#343f53",
                  "&:hover": { bgcolor: "#343f53" },
                }}
              >
                View All Review
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProviderServices;

const RatingCard = ({}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        bgcolor: "#323232",
        color: "white",
        borderRadius: "10px",
        height: "200px",
        padding: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          bgcolor: "white",
          borderRadius: "10px",
          color: "black",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            mt: 2,
            mb: 2,
            borderRadius: "60px",
            background: "#343f53",
            color: "white",
            alignItems: "center",
            textAlign: "center",
            p: 2,
          }}
        >
          4.3
        </Typography>
        <Rating
          name="average-rating"
          sx={{ gap: 1 }}
          value={3}
          precision={0.5}
          readOnly
          mb={1}
        />
        <Typography variant="h6" gutterBottom>
          4 reviews
        </Typography>
      </Box>
      <Box display={"flex"} flexDirection={"column"} mt={2}>
        <Box display={"flex"}>
          <GradeIcon sx={{ color: "yellow", mr:1}} /> 5
        </Box>
        <Box display={"flex"}>
          <GradeIcon sx={{ color: "yellow", mr:1 }} /> 4
        </Box>
        <Box display={"flex"}>
          <GradeIcon sx={{ color: "yellow", mr:1 }} /> 3
        </Box>
        <Box display={"flex"}>
          <GradeIcon sx={{ color: "yellow", mr:1 }} /> 2
        </Box>
        <Box display={"flex"}>
          <GradeIcon sx={{ color: "yellow", mr:1 }} /> 1
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h5" gutterBottom>
          User Ratings
        </Typography>
        <Box
          sx={{ display: "block", alignItems: "center", marginBottom: "8px" }}
        >
          <LinearProgress variant="determinate" value={100} /> <br />
          <LinearProgress variant="determinate" value={80} /> <br />
          <LinearProgress variant="determinate" value={60} /> <br />
          <LinearProgress variant="determinate" value={40} /> <br />
          <LinearProgress variant="determinate" value={20} /> <br />
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={"column"} mt={2}>
        <Typography>120</Typography>
        <Typography>100</Typography>
        <Typography>30</Typography>
        <Typography>10</Typography>
        <Typography>3</Typography>
      </Box>
    </Box>
  );
};
