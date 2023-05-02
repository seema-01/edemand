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
import StarRateIcon from "@mui/icons-material/StarRate";
import Badge from "@mui/joy/Badge";
import IconButton from "@mui/joy/IconButton";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import React from "react";
import Address, { AddAddress, OrderAddAddress, OrderAddress } from '../Reusable/Profile/Address'

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
                    <Pg5 /> <hr />
                    <Pg5 /> <hr />
                    <Pg5 /> <hr />
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
                      {/* <Box display={"flex"}>
                        <Box display={"block"}>
                          <Typography>4items</Typography>
                          <Typography>$2,296</Typography>
                        </Box>
                        <Typography marginLeft={"auto"}>Continue</Typography>
                      </Box> */}
                      <Button
                        variant="contained"
                        fullWidth
                        size="small"
                        onClick={handleAddress}
                        sx={{
                          bgcolor: "#343f53",
                          justifyContent: "space-between",
                          "&:hover": {
                            bgcolor: "#343f53",
                          },
                        }}
                      >
                        <Box sx={{ display: "block" }}>
                          <p style={{ fontSize: 10 }}> 4 items</p> $2296
                        </Box>
                        <Box>Continue</Box>
                      </Button>
                      <Drawer anchor="right" open={address}>
                        <Box sx={{ width: "500px" }}>
                          <Box
                            display={"flex"}
                            textAlign="center"
                            marginTop={3}
                          >
                            {
                              <NavigateBeforeIcon
                                onClick={handleCloseAddress}
                                fontSize="large"
                                sx={{ marginLeft: "20px" }}
                              />
                            }
                            <Typography fontSize={20} marginLeft={3}>
                              From: W0rld Clean Pvt Ltd
                            </Typography>
                          </Box>
                          <hr />
                          <Box ml={3} mr={3}>
                            <Grid container spacing={2} mt={2}>
                              <Grid item xs={6}>
                                <Typography mb={1} fontSize={15}>
                                  Select Date
                                </Typography>
                                <TextField
                                  fullWidth
                                  size="small"
                                  placeholder="Select Date"
                                  sx={{ backgroundColor: "#F2F1F6" }}
                                ></TextField>
                                <br />

                                <Typography mt={1} fontSize={15}>
                                  Your Address
                                </Typography>
                                <OrderAddress sx={{ backgroundColor: "gray" }} />
                              </Grid>
                              <Grid item xs={6}>
                                <Typography mb={1} fontSize={15}>
                                  Select Time
                                </Typography>
                                <TextField
                                  fullWidth
                                  placeholder="Select Time"
                                  size="small"
                                  sx={{ backgroundColor: "#F2F1F6", marginBottom: 2 }}
                                ></TextField>
                                
                                <OrderAddAddress />
                              </Grid>
                            </Grid>
                            <br />
                            <br />
                            <Typography color={"gray"}>
                              Write Instruction for provider
                            </Typography>

                            <Textarea
                              placeholder="Type in here…"
                              value={text}
                              onChange={(event) => setText(event.target.value)}
                              minRows={4}
                              maxRows={30}
                              sx={{ backgroundColor: "#F2F1F6", minWidth: 300 }}
                            />
                            <br />
                            <br />
                            <br />
                            <Button
                              variant="contained"
                              fullWidth
                              size="medium"
                              sx={{ backgroundColor: "#343F53" }}
                              onClick={handleOpen}
                            >
                              Continue
                            </Button>
                          </Box>
                        </Box>
                      </Drawer>
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

const Pg5 = () => {
  const [count, setCount] = React.useState(0);
  const [showZero, setShowZero] = React.useState(false);
  return (
    <>
      <Box m={3} display={"flex"}>
        <img
          src="https://picsum.photos/300/300 "
          height={120}
          width={120}
          style={{ borderRadius: 10 }}
        ></img>
        <Box ml={3} mr="auto">
          <Typography color={"#2560FC"}>Car Wash</Typography>
          <Typography color={"gray"} sx={{ marginRight: "auto" }}>
            2Person | 90 Min{" "}
          </Typography>

          <Button
            sx={{ position: "relative", top: "-45px", left: "260px" }}
            startIcon={<StarRateIcon sx={{ color: "goldenrod" }} />}
          >
            4.5
          </Button>

          {/* counting */}
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                marginTop: -0.2,
                borderRadius: "4px",
                backgroundColor: "blue",
                padding: "3px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <IconButton
                  size="sm"
                  sx={{ background: "none", color: "white" }}
                  onClick={() => setCount((c) => c - 1)}
                >
                  <Remove />
                </IconButton>
                <Typography fontWeight="md" color={"white"}>
                  {count}
                </Typography>
                <IconButton
                  size="sm"
                  sx={{ background: "none", color: "white" }}
                  onClick={() => setCount((c) => c + 1)}
                >
                  <Add />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
