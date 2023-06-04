import {
  Button,
  Grid,
  Typography,
  TextField,
  Badge,
  Box,
  Drawer,
  OutlinedInput,
} from "@mui/material";
import React from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import StarIcon from "@mui/icons-material/Star";
import { MuiFileInput } from "mui-file-input";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Booking = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const [file, setFile] = React.useState(null);
  const cartData = JSON.parse(localStorage.getItem("cart")) || [];
  const handleChange = (newFile) => {
    setFile(newFile);
  };


  return (
    <div>
      {cartData.map((response) => (
        <>
          <Grid container alignItems="center" sx={{ ml: 1 }}>
            <Grid item xs>
              <Typography gutterBottom variant="h6" fontSize={18}>
                <strong>{response.category_name}</strong>
              </Typography>
              <Typography gutterBottom variant="p" fontSize={16}>
                1 * ${response.discounted_price}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                gutterBottom
                variant="h6"
                textAlign={"end"}
                fontSize={18}
                color={"blue"}
              >
                <strong>${response.discounted_price}</strong>
              </Typography>
              <Button size="small" onClick={handleOpen} variant="contained">
                Rate
              </Button>

              <Drawer anchor="right" open={open}>
                <Box marginLeft={3} marginRight={3}>
                  <Box display={"flex"} width="500px" marginTop={3}>
                    {
                      <NavigateBeforeIcon
                        fontSize="large"
                        onClick={handleClose}
                      />
                    }
                    <Typography fontSize={20} marginLeft={3}>
                      World Clean Pvt Ltd
                    </Typography>
                  </Box>
                  <hr />

                  {/* main */}
                  <Box>
                    <Typography>Head Massage</Typography>
                    <Box display={"flex"} alignItems={"center"}>
                      <Typography mr={2}>Rate</Typography>

                      <Button
                        variant="outlined"
                        size="small"
                        endIcon={<StarIcon sx={{ color: "goldenrod" }} />}
                        sx={{ marginRight: 1 }}
                      >
                        1
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        endIcon={<StarIcon sx={{ color: "goldenrod" }} />}
                        sx={{ marginRight: 1 }}
                      >
                        2
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        endIcon={<StarIcon sx={{ color: "goldenrod" }} />}
                        sx={{ marginRight: 1 }}
                      >
                        3
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        endIcon={<StarIcon sx={{ color: "goldenrod" }} />}
                        sx={{ marginRight: 1 }}
                      >
                        4
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        endIcon={<StarIcon sx={{ color: "goldenrod" }} />}
                      >
                        5
                      </Button>
                    </Box>
                    {/*  */}
                    <Box mt={2}>
                      <Typography>Message</Typography>
                      <TextField
                        fullWidth
                        multiline
                        rows={6}
                        sx={{ mb: 2, backgroundColor: "#f2f1f6" }}
                        maxRows={10}
                        placeholder="Write Review"
                      ></TextField>
                    </Box>
                    {/* upload */}
                    <Typography>Other Images of the Product</Typography>
                    <OutlinedInput
                      type="file"
                      sx={{
                        height: 200,
                        paddingLeft: 20,
                        border: "2px dashed gray",
                      }}
                      fullWidth
                      placeholder="hello"
                    />

                    {/* img */}
                    <Grid container mt={2} pl={3} spacing={3}>
                      <Grid xs={3}>
                        <Badge
                          badgeContent={
                            <DeleteOutlineOutlinedIcon
                              sx={{
                                backgroundColor: "  red",
                                borderRadius: 30,
                                border: "2px solid white",
                                mt: 2,
                              }}
                            />
                          }
                        >
                          <img
                            src="https://picsum.photos/300/300"
                            height={100}
                            width={100}
                            style={{ borderRadius: 10 }}
                          />
                        </Badge>
                      </Grid>
                      <Grid xs={3}>
                        <Badge
                          badgeContent={
                            <DeleteOutlineOutlinedIcon
                              sx={{
                                backgroundColor: "  red",
                                borderRadius: 30,
                                border: "2px solid white",
                                mt: 2,
                              }}
                            />
                          }
                        >
                          <img
                            src="https://picsum.photos/300/300"
                            height={100}
                            width={100}
                            style={{ borderRadius: 10 }}
                          />
                        </Badge>
                      </Grid>
                    </Grid>
                    {/* Button last */}
                    <Button
                      variant="contained"
                      fullWidth
                      size="medium"
                      sx={{ backgroundColor: "#343F53", marginTop: "50px" }}
                    >
                      Continue
                    </Button>
                  </Box>
                </Box>
              </Drawer>
            </Grid>
          </Grid>
          <br />
        </>
      ))}
    </div>
  );
};

export default Booking;
