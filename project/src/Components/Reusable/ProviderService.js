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
  Divider,
} from "@mui/material";
import { Textarea } from "@mui/joy";
import StarIcon from "@mui/icons-material/Star";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import React, { useState, useEffect } from "react";
import AddServices from "./Drawers/AddServices";
import { NavLink } from "react-router-dom";
import api from "../../API/Fetch_data_Api";

const ProviderService = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const [service, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const ApiProviders = () => {
    api
      .get_services()
      .then((response) => setServices(response.data))
      .then((response) => setIsLoading(true))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    ApiProviders();
  }, []);

  return (
    <Box>
      {service.map((response) => {
        return (
          <Box sx={{ flexGrow: 1 }}>
            <Card
              sx={{ display: "flex", boxShadow: "none", height: 200, p: 1 }}
            >
              <Grid container display={"flex"} spacing={3}>
                <Grid item md={4}>
                  <CardMedia
                    image={response.image_of_the_service}
                    alt="hi"
                    sx={{
                      height: "180px",
                      width: "200px",
                      borderRadius: "4px",
                    }}
                  />
                </Grid>
                <Grid item md={8}>
                  <CardContent sx={{ ml: 2, p: 0 }}>
                    <Box sx={{ display: "block", textAlign: "start" }}>
                      <Box sx={{ display: "flex" }}>
                        <Typography
                          color={"#2560FC"}
                          sx={{ marginRight: "auto" }}
                        >
                          {response.title}
                        </Typography>
                        <StarIcon sx={{ color: "gold" }} /> {response.rating}
                        <br />
                      </Box>
                      <Typography fontSize={14} pt={2}>
                        {response.description}
                      </Typography>
                      <br /> <br />
                      <Typography color={"gray"} fontSize={14} sx={{ mt: -4 }}>
                        2 Person | 150 min
                      </Typography>
                      <br />
                      <Box sx={{ display: "flex", mt: 3 }}>
                        <Typography
                          color={"#2560FC"}
                          sx={{ marginRight: "auto" }}
                        >
                          ${response.discounted_price}{" "}
                          <del style={{ color: "gray" }}>${response.price}</del>{" "}
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
                                <NavLink
                                  to={"/providers/services/payment"}
                                  size="small"
                                  style={{
                                    backgroundColor: "#343f53",
                                    display: "flex",
                                    color: "white",
                                    padding: "10px",
                                    textDecoration: "none",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <Box sx={{ display: "block" }}>
                                    <p style={{ fontSize: 10 }}> 4 items</p>{" "}
                                    $2296
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
                </Grid>
              </Grid>
            </Card>
            <Divider />
          </Box>
        );
      })}
    </Box>
  );
};

export default ProviderService;
