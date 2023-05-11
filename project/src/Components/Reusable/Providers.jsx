import React from "react";
import Provider from "./Provider";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Container, Grid } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#323232" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: 0,
  boxShadow: "none",
}));

const Providers = () => {
  return (
    <div>
      <Container maxWidth={"lg"}>
        <Grid
          container
          sx={{
            backgroundColor: "white",
            borderRadius: "10px",
            display: "flex",
          }}
          marginTop={"6%"}
          boxShadow={"none"}
        >
          <Grid item xs={12} md={6} lg={12}>
            <Item>
              <Provider />
            </Item>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Providers;
