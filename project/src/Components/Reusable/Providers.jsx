import React from "react";
import Provider from "./Provider";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Container, Grid } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.card,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  border: 0,
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
          marginBottom={"6%"}
          boxShadow={"none"}
        >
          <Grid item>
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
