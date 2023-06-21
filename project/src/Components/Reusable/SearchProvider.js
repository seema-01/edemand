import { Breadcrumbs, Container, Typography, Grid, TextField } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SearchProvider = () => {
  const navigate = useNavigate();
  return <div>
    <Container>

      <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 1, marginTop: 1 }}>
        <Link sx={{ cursor: "pointer", textDecoration: "none" }} color="inherit" onClick={() => navigate("/")}>
          Home
        </Link>
        <Typography color="text.primary">Provider</Typography>
      </Breadcrumbs>
      <Typography variant="h4" gutterBottom>
        <>All Service Provider</>
      </Typography>

    </Container>

  </div>;
};
export default SearchProvider;
