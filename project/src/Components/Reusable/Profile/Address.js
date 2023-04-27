import { DeleteOutline, EditOutlined, PlusOne } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const Address = () => {
  return (
    <div>
      <Box>
        <Box
          sx={{
            my: 3,
            mx: 2,
            maxWidth: "100%",
            border: "1px solid gray",
            borderRadius: "10px",
            p: 2,
          }}
        >
          <Grid container alignItems="center">
            <Grid item xs display={"flex"}>
              <Typography gutterBottom variant="p" component="div">
                <input type="radio"></input>
                Divy Jani
              </Typography>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  height: "22px",
                  width: "auto",
                  ml: 1,
                }}
              >
                Home
              </Button>
            </Grid>
            <Grid item>
              <EditOutlined
                sx={{
                  background: "green",
                  color: "white",
                  borderRadius: "5px",
                }}
              />
              <DeleteOutline
                sx={{
                  background: "red",
                  color: "white",
                  borderRadius: "5px",
                  ml: 1,
                }}
              />
            </Grid>
          </Grid>
          <Typography color="text.secondary" variant="body2">
            2-3-577/2 Minister Road, Nallakunta, Nallakunta, Secunderabad <br />
            Andhra Pradesh, 500003 - India
          </Typography>
        </Box>
      </Box>
    </div>
  );
};


export const AddAddress = () =>{
    return(
      <>
        <Box  sx={{
            my: 3,
            mx: 2,
            maxWidth: "100%",
            border: "1px solid gray",
            borderRadius: "10px",
            height: "84px",
            p: 2,
            justifyContent:"center",
            textAlign: "center",
            display: "flex"
          }}>
          <Button >+Add New Address</Button>
        </Box>
      </>
    )
}

export default Address;
