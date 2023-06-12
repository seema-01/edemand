// here some backup code availablehh
{
  /* <NavLink
                  to="/"
                  style={({ isActive }) => {
                    return {
                      paddingLeft: "5%",
                      textDecoration: "none",
                      color: theme.palette.color.navLink,
                    };
                  }}
                >
                  Home
                </NavLink>
          
                <NavLink
                  to="/about"
                  style={{
                    paddingLeft: "5%",
                    textDecoration: "none",
                    color: theme.palette.color.navLink,
                  }}
                >
                  About
                </NavLink>
                <NavLink
                  to="/categorys"
                  style={{
                    paddingLeft: "5%",
                    textDecoration: "none",
                    color: theme.palette.color.navLink,
                  }}
                >
                  Category
                </NavLink>
                <NavLink
                  to="/providers"
                  style={{
                    paddingLeft: "5%",
                    textDecoration: "none",
                    color: theme.palette.color.navLink,
                  }}
                >
                  Provider
                </NavLink>
                <NavLink
                  to="/contact"
                  style={{
                    paddingLeft: "5%",
                    textDecoration: "none",
                    color: theme.palette.color.navLink,
                  }}
                >
                  Contact
                </NavLink> */
}

//Removed redux files
//Counter
//REDUX File

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;


//Booking Rating

{
  /* <Button size="small" onClick={handleOpen} variant="contained">
                Rate
              </Button> */
}

{
  /* <Drawer anchor="right" open={open}>
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
              </Drawer> */
}
