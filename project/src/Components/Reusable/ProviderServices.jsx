import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Link,
  Typography,
  Card,
  CardContent,
  Button,
  CardMedia,
  CardActions,
  Rating,
  Divider,
  LinearProgress,
  Avatar,
  Skeleton,
} from "@mui/material";
import api from "../../API/Fetch_data_Api";
import React, { useEffect, useState } from "react";
import ProviderService from "./ProviderService";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GradeIcon from "@mui/icons-material/Grade";
import CustomerReview from "./CustomerReview";
import StarIcon from "@mui/icons-material/Star";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Transert } from "../../actions/action";

const ProviderServices = ({ match }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([]);
  const [provider, setProvider] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [parentPicture, setParentPicture] = useState("");

  const Data = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const islogined = localStorage.getItem("ContactInfo");

  const handleOpen = (item) => {
    // if user is logged in then success otherwiser error 'please login'
    islogined === ""
      ? toast.error("Please Login...")
      : toast.success("Added Success...");
    console.info("clicked", item);

    dispatch(Transert(item));

    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    cartData.push(item);
    localStorage.setItem("cart", JSON.stringify(cartData));
  };

  //dynamic urlN
  const params = useParams();
  const { partner_id } = params;
  console.log("partner_id" + partner_id);

  let finalDoc = 0;

  async function allData() {
    var formdata = new FormData();
    formdata.append("latitude", "23.2507356");
    formdata.append("longitude", "69.6689201");
    formdata.append("partner_id", `${partner_id}`);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    const response = await fetch(
      "https://edemand.wrteam.me/api/v1/get_services",
      requestOptions
    );
    const result = await response.json();
    console.log(result);
    setParentPicture(partner_id);
    console.log("Stored ID :" + parentPicture);
    return result;
  }

  useEffect(() => {
    allData()
      .then((response) => setData(response.data))
      .then((response) => setIsLoading(true))
      .then((response) => console.log(response));
    api
      .get_providers()
      .then((response) => setProvider(response.data))
      .then((response) => setIsLoading(true))
      .then((response) => console.log(response));
  }, []);

  return (
    <div>
      <Container>
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ marginBottom: 1, marginTop: 1 }}
        >
          <Link
            sx={{ cursor: "pointer", textDecoration: "none" }}
            color="inherit"
            onClick={() => navigate("/")}
          >
            Home
          </Link>
          <Link
            sx={{ cursor: "pointer", textDecoration: "none" }}
            color="inherit"
            onClick={() => navigate("/providers")}
          >
            Providers
          </Link>
          <Typography color="text.primary">Services</Typography>
        </Breadcrumbs>
        <Typography variant="h4" gutterBottom>
          <strong>Service Providers</strong>
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                background: theme.palette.background.box,
                borderRadius: "10px",
                mb: 5,
              }}
            >
              <Typography variant="h5" ml={2} p={2}>
                <strong>Our Services</strong>
              </Typography>
              <hr />

              <Box sx={{ p: 3 }}>
                <Box>
                  {isLoading ? (
                    <Box>
                      {data.map((response) => {
                        return (
                          <Box sx={{ flexGrow: 1 }}>
                            <Card
                              sx={{
                                display: "flex",
                                boxShadow: "none",
                                height: 200,
                                p: 1,
                              }}
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
                                    <Box
                                      sx={{
                                        display: "block",
                                        textAlign: "start",
                                      }}
                                    >
                                      <Box sx={{ display: "flex" }}>
                                        <Typography
                                          color={"#2560FC"}
                                          sx={{ marginRight: "auto" }}
                                        >
                                          {response.title}
                                        </Typography>
                                        <StarIcon sx={{ color: "gold" }} />
                                        {response.rating}
                                        <br />
                                      </Box>
                                      <Typography fontSize={14} pt={2}>
                                        {response.description}
                                      </Typography>
                                      <br /> <br />
                                      <Typography
                                        color={"gray"}
                                        fontSize={14}
                                        sx={{ mt: -4 }}
                                      >
                                        2 Person | 150 min
                                      </Typography>
                                      <br />
                                      <Box sx={{ display: "flex", mt: 3 }}>
                                        <Typography
                                          color={"#2560FC"}
                                          sx={{ marginRight: "auto" }}
                                        >
                                          ${response.discounted_price}
                                          <del style={{ color: "gray" }}>
                                            ${response.price}
                                          </del>
                                        </Typography>

                                        <Box sx={{ float: "right", mt: -1 }}>
                                          <Button
                                            variant="outlined"
                                            onClick={() => handleOpen(response)}
                                            float="right"
                                            size="small"
                                          >
                                            Add
                                          </Button>
                                          <ToastContainer autoClose={3000} />
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
                  ) : (
                    <Box>
                      <Skeleton
                        variant="rectangular"
                        height={200}
                        width={620}
                      />
                      <br />
                      <Skeleton
                        variant="rectangular"
                        height={200}
                        width={620}
                      />
                      <br />
                      <Skeleton
                        variant="rectangular"
                        height={200}
                        width={620}
                      ></Skeleton>
                      <br />
                      <Skeleton
                        variant="rectangular"
                        height={200}
                        width={620}
                      ></Skeleton>
                      <br />
                      <Skeleton
                        variant="rectangular"
                        height={200}
                        width={620}
                      ></Skeleton>
                      <br />
                      <Skeleton
                        variant="rectangular"
                        height={200}
                        width={620}
                      ></Skeleton>
                      <br />
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box>
              {isLoading ? (
                <>
                  {provider.map((response) => {
                    return (
                      <>
                        {response.partner_id === partner_id ? (
                          <>
                            <Card sx={{}}>
                              <CardMedia
                                sx={{ height: 250 }}
                                image={response.banner_image}
                                title="green iguana"
                              />
                              <CardMedia
                                sx={{
                                  height: 80,
                                  width: 80,
                                  borderRadius: 50,
                                  ml: "auto",
                                  mr: "auto",
                                  border: "5px solid white",
                                  mt: -5,
                                }}
                                image={response.image}
                                title="green iguana"
                              />
                              <CardActions
                                sx={{ justifyContent: "space-around", mb: 4 }}
                              >
                                <Button
                                  variant="contained"
                                  sx={{ textAlign: "start", fontSize: 15 }}
                                >
                                  <Avatar sx={{ bgcolor: "white" }}>
                                    <CheckCircleIcon
                                      sx={{
                                        bgcolor: "white",
                                        color: "blue",
                                        borderRadius: "50px",
                                      }}
                                    />
                                  </Avatar>
                                  <Box sx={{ ml: 2 }}>
                                    <h3>{response.number_of_orders}</h3>
                                    <p style={{ fontSize: 10 }}>
                                      Orders Complete
                                    </p>
                                  </Box>
                                </Button>
                                <Button
                                  variant="contained"
                                  sx={{
                                    textAlign: "start",
                                    fontSize: 15,
                                    bgcolor: "#323232",
                                    "&:hover": { bgcolor: "#323232" },
                                  }}
                                >
                                  <Avatar sx={{ bgcolor: "white" }}>
                                    <StarIcon
                                      sx={{
                                        color: "gray",
                                        borderRadius: "50px",
                                      }}
                                    />
                                  </Avatar>
                                  <Box sx={{ ml: 2 }}>
                                    <h3>{response.ratings}</h3>
                                    <p style={{ fontSize: 10 }}>
                                      provider rating
                                    </p>
                                  </Box>
                                </Button>
                              </CardActions>

                              <hr />

                              <CardContent>
                                <Typography
                                  gutterBottom
                                  variant="h6"
                                  component="div"
                                >
                                  <strong> Provider Address </strong>
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  {response.address}
                                  <br />
                                  370001
                                </Typography>
                                <Typography
                                  gutterBottom
                                  variant="h6"
                                  component="div"
                                  mt={2}
                                >
                                  <strong> Provider Information </strong>
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  Lorem, ipsum dolor sit amet consectetur
                                  adipisicing elit. Nemo dolor inventore
                                  quibusdam quas. Expedita voluptate dolores
                                  labore, voluptatem iure repudiandae facilis.
                                  Eum nihil excepturi, ex molestias quas
                                  assumenda aut possimus.
                                </Typography>
                              </CardContent>
                            </Card>
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    );
                  })}
                </>
              ) : (
                <Skeleton variant="rectangular" height={"800px"} />
              )}
            </Box>
            <Box
              sx={{
                background: theme.palette.background.box,
                borderRadius: "10px",
                mb: 3,
                mt: 3,
              }}
            >
              <Typography variant="h5" pt={2} pb={2} pl={1}>
                <strong>Reviews and Rating</strong>
              </Typography>
              <hr />
              <br />
              <RatingCard />
              <CustomerReview /> <Divider />
              <CustomerReview /> <Divider />
              {/* <Box sx={{m:1, pb:1, justifyContent: "center", display: "flex", bgcolor: "#343f53"}}> */}
              <Box sx={{ pl: 2, pr: 2 }}>
                <NavLink
                  to="/providers/services/reviews"
                  variant="contained"
                  fullWidth
                  style={{
                    textDecoration: "none",
                    textAlign: "center",
                    justifyContent: "center",
                    display: "flex",
                    marginTop: 20,
                    background: "#343f53",
                    color: "white",
                    paddingTop: 10,
                    paddingBottom: 10,
                    borderRadius: "4px",
                  }}
                >
                  View All Review
                </NavLink>
              </Box>
              <br />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProviderServices;

const RatingCard = ({}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        bgcolor: "#323232",
        color: "white",
        borderRadius: "10px",
        height: "200px",
        padding: 1,
        m: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          bgcolor: "white",
          borderRadius: "10px",
          color: "black",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            mt: 2,
            mb: 2,
            borderRadius: "60px",
            background: "#343f53",
            color: "white",
            alignItems: "center",
            textAlign: "center",
            p: 2,
          }}
        >
          4.3
        </Typography>
        <Rating
          name="average-rating"
          sx={{ gap: 1 }}
          value={3}
          precision={0.5}
          readOnly
          mb={1}
        />
        <Typography variant="h6" gutterBottom>
          4 reviews
        </Typography>
      </Box>
      <Box display={"flex"} flexDirection={"column"} mt={2}>
        <Box display={"flex"}>
          <GradeIcon sx={{ color: "yellow", mr: 1 }} /> 5
        </Box>
        <Box display={"flex"}>
          <GradeIcon sx={{ color: "yellow", mr: 1 }} /> 4
        </Box>
        <Box display={"flex"}>
          <GradeIcon sx={{ color: "yellow", mr: 1 }} /> 3
        </Box>
        <Box display={"flex"}>
          <GradeIcon sx={{ color: "yellow", mr: 1 }} /> 2
        </Box>
        <Box display={"flex"}>
          <GradeIcon sx={{ color: "yellow", mr: 1 }} /> 1
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h5" gutterBottom>
          User Ratings
        </Typography>
        <Box
          sx={{ display: "block", alignItems: "center", marginBottom: "8px" }}
        >
          <LinearProgress variant="determinate" value={100} /> <br />
          <LinearProgress variant="determinate" value={80} /> <br />
          <LinearProgress variant="determinate" value={60} /> <br />
          <LinearProgress variant="determinate" value={40} /> <br />
          <LinearProgress variant="determinate" value={20} /> <br />
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={"column"} mt={2}>
        <Typography>120</Typography>
        <Typography>100</Typography>
        <Typography>30</Typography>
        <Typography>10</Typography>
        <Typography>3</Typography>
      </Box>
    </Box>
  );
};
