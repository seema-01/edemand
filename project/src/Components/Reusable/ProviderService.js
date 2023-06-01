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
  Skeleton,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import api from "../../API/Fetch_data_Api";
import { useDispatch, useSelector } from "react-redux";
import { Transert } from "../../actions/action";
// import TransferReducer from "../../reducer/TransferReducer";
import { ToastContainer, toast } from "react-toastify";

const ProviderService = (item) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
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
    // dispatch(TransferReducer(item))
  }, []);

  return (
    <Box>
      {isLoading ? (
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
                              <ToastContainer />
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
          <Skeleton variant="rectangular" height={200} width={620} />
          <br />
          <Skeleton variant="rectangular" height={200} width={620} />
          <br />
          <Skeleton variant="rectangular" height={200} width={620}></Skeleton>
          <br />
          <Skeleton variant="rectangular" height={200} width={620}></Skeleton>
          <br />
          <Skeleton variant="rectangular" height={200} width={620}></Skeleton>
          <br />
          <Skeleton variant="rectangular" height={200} width={620}></Skeleton>
          <br />
        </Box>
      )}
    </Box>
  );
};

export default ProviderService;
