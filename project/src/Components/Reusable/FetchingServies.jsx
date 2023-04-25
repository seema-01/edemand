import React from "react";
import {
  Box,
  Breadcrumbs,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import api from "../../API/Fetch_data_Api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { NavLink } from "react-router-dom";

const FetchingServies = () => {
  const [image, setImage] = useState([]);
  useEffect(() => {
    api
      .get_categories_home()
      .then((response) => setImage(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <Container>
        <Box sx={{ paddingBottom: 1}}>
            <Typography variant="h4">Home Services</Typography>
            <hr />
        </Box>
      <Box sx={{ marginTop: 2, marginBottom: 2 }}>
        <Swiper
          slidesPerView={5}
          freeMode={true}
          navigation={true}
          style={{
            height: "auto",
          }}
          modules={[Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          <Box>
            {image.map((response) => {
              return (
                <SwiperSlide>
                  <Card sx={{ width: 200, height: 200, border: "2px solid" }}>
                    <img
                      src={response.category_image}
                      title="Services"
                      style={{ height: "100%", width: "100%",filter:"brightness(0.8)"}}
                    />
                    <Box marginTop={-5} textAlign={"center"} color={"white"}>
                        <Typography variant="h6" zIndex={1} position={"relative"}><strong>{response.name}</strong></Typography>
                    </Box>
                  </Card>
                </SwiperSlide>
              );
            })}
          </Box>
        </Swiper>
      </Box>
    </Container>
  );
};

export default FetchingServies;


// plumbing services fetching 


export const FetchingPlumbing = () => {
  const [image, setImage] = useState([]);
  useEffect(() => {
    api
      .get_categories_laundry()
      .then((response) => setImage(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
         <Box sx={{ paddingBottom: 1}}>
            <Typography variant="h4">Laundry Services</Typography>
            <hr />
        </Box>  
      <Box sx={{ marginTop: 2, marginBottom: 2 }}>
        <Swiper
          slidesPerView={5}
          freeMode={true}
          navigation={true}
          style={{
            height: "auto",
          }}
          modules={[Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          <Box>
            {image.map((response) => {
              return (
                <SwiperSlide>
                  <Card sx={{ width: 200, height: 200, border: "2px solid" }}>
                    <img
                      src={response.category_image}
                      title="Services"
                      style={{ height: "100%", width: "100%",filter:"brightness(0.8)"}}
                    />
                    <Box marginTop={-5} textAlign={"center"} color={"white"}>
                        <Typography variant="h6" zIndex={1} position={"relative"}><strong>{response.name}</strong></Typography>
                    </Box>
                  </Card>
                </SwiperSlide>
              );
            })}
          </Box>
        </Swiper>
      </Box>
    </Container>
  );
};


// Laundry services fetching 


export const FetchingLaundry = () => {
    const [image, setImage] = useState([]);
    useEffect(() => {
      api
        .get_categories_plumbing()
        .then((response) => setImage(response.data))
        .catch((error) => console.log(error));
    }, []);
  
    return (
      <Container>
        <Box sx={{ paddingBottom: 1}}>
            <Typography variant="h4">Plumbing Services</Typography>
            <hr />
        </Box>
        <Box sx={{ marginTop: 2, marginBottom: 2 }}>
          <Swiper
            slidesPerView={5}
            freeMode={true}
            navigation={true}
            style={{
              height: "auto",
            }}
            modules={[Navigation]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
          >
            <Box>
              {image.map((response) => {
                return (
                  <SwiperSlide>
                    <Card sx={{ width: 200, height: 200, border: "2px solid" }}>
                      <img
                        src={response.category_image}
                        title="Services"
                        style={{ height: "100%", width: "100%",filter:"brightness(0.8)"}}
                      />
                      <Box marginTop={-5} textAlign={"center"} color={"white"}>
                          <Typography variant="h6" zIndex={1} position={"relative"}><strong>{response.name}</strong></Typography>
                      </Box>
                    </Card>
                  </SwiperSlide>
                );
              })}
            </Box>
          </Swiper>
        </Box>
      </Container>
    );
  };
  

// car services fetching 


export const FetchingCar = () => {
    const [image, setImage] = useState([]);
    useEffect(() => {
      api
        .get_categories_car()
        .then((response) => setImage(response.data))
        .catch((error) => console.log(error));
    }, []);
  
    return (
      <Container>
        <Box sx={{ paddingBottom: 1}}>
            <Typography variant="h4">Vehical Repair Services</Typography>
            <hr />
        </Box>
        <Box sx={{ marginTop: 2, marginBottom: 2 }}>
          <Swiper
            slidesPerView={5}
            freeMode={true}
            navigation={true}
            style={{
              height: "auto",
            }}
            modules={[Navigation]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
          >
            <Box>
              {image.map((response) => {
                return (
                  <SwiperSlide>
                    <Card sx={{ width: 200, height: 200, border: "2px solid" }}>
                      <img
                        src={response.category_image}
                        title="Services"
                        style={{ height: "100%", width: "100%",filter:"brightness(0.8)"}}
                      />
                      <Box marginTop={-5} textAlign={"center"} color={"white"}>
                          <Typography variant="h6" zIndex={1} position={"relative"}><strong>{response.name}</strong></Typography>
                      </Box>
                    </Card>
                  </SwiperSlide>
                );
              })}
            </Box>
          </Swiper>
        </Box>
      </Container>
    );
  };
  
