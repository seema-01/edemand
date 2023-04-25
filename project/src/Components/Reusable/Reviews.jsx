import {
  Avatar,
  Box,
  Breadcrumbs,
  Container,
  Link,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import Navigation from "../layout/Navigation";
import CustomerReview from "./CustomerReview";

const Review = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ marginBottom: 1, marginTop: 1 }}
        >
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/home">
            provider
          </Link>
          <Typography color="text.primary">All Reviews</Typography>
        </Breadcrumbs>
        <Typography variant="h4" gutterBottom>
          <strong>All Reviews</strong>
        </Typography>

        <Box sx={{ background: "white", padding: 2, borderRadius: "10px" }}>
          <Typography variant="h5"> Review & Rating</Typography> <hr />
        <CustomerReview /> <hr />
        <CustomerReview /> <hr />
        <CustomerReview /> <hr />
        <CustomerReview /> <hr />
         </Box>
      </Container>
    </>
  );
};

export default Review;
