import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Drawer,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import StarRateIcon from "@mui/icons-material/StarRate";
import Badge from "@mui/joy/Badge";
import IconButton from "@mui/joy/IconButton";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import React from "react";

const ProviderService = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
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
                        mt:6
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
                        sx={{
                          bgcolor: "#343f53",
                          justifyContent: "space-between",
                          '&:hover':{
                            bgcolor: "#343f53"
                          }
                        }}
                      >
                        <Box sx={{ display: "block" }}>
                          <p style={{ fontSize: 10 }}> 4 items</p> $2296
                        </Box>
                        <Box>Continue</Box>
                      </Button>
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
