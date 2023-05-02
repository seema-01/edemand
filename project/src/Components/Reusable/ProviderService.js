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
import Address, {
  AddAddress,
  OrderAddAddress,
  OrderAddress,
} from "../Reusable/Profile/Address";

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
                                <OrderAddress
                                  sx={{ backgroundColor: "gray" }}
                                />
                              </Grid>
                              <Grid item xs={6}>
                                <Typography mb={1} fontSize={15}>
                                  Select Time
                                </Typography>
                                <TextField
                                  fullWidth
                                  placeholder="Select Time"
                                  size="small"
                                  sx={{
                                    backgroundColor: "#F2F1F6",
                                    marginBottom: 2,
                                  }}
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
                            {/* ------------------------------------------------------------------------------  */}
                            {/* for setting location in map while user click this button  */}
                            <Button
                              variant="contained"
                              fullWidth
                              size="medium"
                              sx={{ backgroundColor: "#343F53", top: "80px" }}
                              onClick={LocationhandleOpen}
                            >
                              Continue
                            </Button>
                            <Drawer anchor="right" open={location}>
                              <Box sx={{ width: "500px", mr:3 }}>
                                <Box
                                  display={"flex"}
                                  marginTop={3}
                                  marginLeft={2}
                                >
                                  {
                                    <NavigateBeforeIcon
                                      fontSize="large"
                                      onClick={LocationhandleClose}
                                    />
                                  }
                                  <Typography fontSize={20} marginLeft={3}>
                                    Select Location
                                  </Typography>
                                </Box>
                                <hr />
                                <Box sx={{ml:3}}>
                                  {/* map */}
                                  <Box marginTop={3}>
                                    <iframe
                                      src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d938040.4942412841!2d70.44102538357195!3d23.307750668490733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x39572aaadf46dc53%3A0x289367772791f66b!2sAdani%20Power%20Rd%2C%20370405!3m2!1d22.804894899999997!2d69.6190076!4m5!1s0x395e9b5e94477b69%3A0x19ab90f1d2071742!2sTimes%20Square%2C%2059%2C%20Thaltej%20Rd%2C%20near%20Ravija%20Plaza%2C%20Opposite%20Rambag%2C%20Thaltej%2C%20Shilaj%2C%20Gujarat%20380059!3m2!1d23.049818899999998!2d72.5013069!5e0!3m2!1sen!2sin!4v1682527846899!5m2!1sen!2sin"
                                      width="480"
                                      height="450"
                                      style={{ border: 0 }}
                                      loading="lazy"
                                    ></iframe>
                                  </Box>
                                  <Box
                                    display={"flex"}
                                    marginLeft={"-18px"}
                                    marginTop={4}
                                    alignItems={"center"}
                                  >
                                    <img
                                      src="data:image/png;base64,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"
                                      height={60}
                                      width={80}
                                    />

                                    <Box display={"block"}>
                                      <Typography>Adani Power Road</Typography>
                                      <Typography color={"gray"}>
                                        370405, Mundra, Gujarat
                                      </Typography>
                                    </Box>
                                  </Box>
                                  <Button
                                    sx={{
                                      backgroundColor: "#343f53",
                                      marginTop: "50px",
                                    }}
                                    variant="contained"
                                    fullWidth
                                    size="large"
                                  >
                                    Complete Address
                                  </Button>
                                </Box>
                              </Box>
                            </Drawer>
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
