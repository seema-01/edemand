import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  TextField,
  Grid,
  Drawer,
} from "@mui/material";
import { Textarea } from "@mui/joy";
import StarIcon from "@mui/icons-material/Star";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

import React from "react";
import AddServices from "./Drawers/AddServices";
import { NavLink } from "react-router-dom";

const ProviderService = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const [address, setAddress] = React.useState(false);
  const handleCloseAddress = () => {
    setAddress(false);
  };
  const handleAddress = () => {
    setAddress(true);
  };

  const [location, setLocation] = React.useState(false);
  const LocationhandleClose = () => {
    setLocation(false);
  };
  const LocationhandleOpen = () => {
    setLocation(true);
  };

  const [text, setText] = React.useState("");
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Card sx={{ display: "flex", boxShadow: "none", height: 180, p: 1 }}>
        <CardMedia
          image="https://picsum.photos/300/300          "
          alt="hi"
          sx={{ height: "180px", width: "200px", borderRadius: "4px" }}
        />

        <CardContent sx={{ ml: 2, p: 0 }}>
          <Box sx={{ display: "block", textAlign: "start" }}>
            <Box sx={{ display: "flex" }}>
              <Typography color={"#2560FC"} sx={{ marginRight: "auto" }}>
                Car Service
              </Typography>
              <StarIcon sx={{ color: "gold" }} /> 4.3
              <br />
            </Box>
            <Typography fontSize={14} pt={2}>
              if you are looking for good car repairing services.then look no
              further than maruti motors in mirzapar,Bhuj
            </Typography>
            <br /> <br />
            <Typography color={"gray"} fontSize={14} sx={{ mt: -4 }}>
              2 Person | 150 min
            </Typography>
            <br />
            <Box sx={{ display: "flex", mt: 3 }}>
              <Typography color={"#2560FC"} sx={{ marginRight: "auto" }}>
                $200 <del style={{ color: "gray" }}>$249</del>{" "}
              </Typography>

              <Box sx={{ float: "right", mt: -1 }}>
                <Button
                  variant="outlined"
                  onClick={handleOpen}
                  float="right"
                  size="small"
                >
                  {" "}
                  Add
                </Button>
                {/* ➡️ Open Drawer When user Click on Add Button  */}
                <Drawer anchor="right" open={open}>
                  <Box>
                    <Box
                      display={"flex"}
                      textAlign="center"
                      width="500px"
                      marginTop={3}
                    >
                      {
                        <NavigateBeforeIcon
                          onClick={handleClose}
                          fontSize="large"
                          sx={{ marginLeft: "20px" }}
                        />
                      }
                      <Typography fontSize={20} marginLeft={3}>
                        From: W0rld Clean Pvt Ltd
                      </Typography>
                    </Box>
                    <hr />
                    {/* ➡️ Drawer Services  */}
                    <AddServices /> <hr />
                    <AddServices /> <hr />
                    <AddServices /> <hr />
                    <br />
                    <br />

                    <Box
                      sx={{
                        backgroundColor: "gray",
                        margin: 3,
                        borderRadius: 2,
                        alignItem: "center",
                        mt: 6,
                      }}
                    >
                      <NavLink to={'/providers/services/payment'}
                        size="small"
                        style={{
                          backgroundColor: "#343f53",
                          display: "flex",
                          color: "white",
                          padding:"10px",
                          textDecoration: "none",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box sx={{ display: "block" }}>
                          <p style={{ fontSize: 10 }}> 4 items</p> $2296
                        </Box>
                        <Box>Continue</Box>
                      </NavLink>

                    </Box>
                  </Box>
                </Drawer>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProviderService;
