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

const FetchingCategorys = () => {
  const [image, setImage] = useState([]);
  useEffect(() => {
    api
      .get_Api_Category()
      .then((response) => setImage(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <Container>
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
                <SwiperSlide
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Card sx={{ width: 200, height: 200, border: "2px solid" }}>
                    <img
                      src={response.category_image}
                      title="Services"
                      style={{ maxHeight: "100%", maxWidth: "100%" }}
                    />
                    <CardContent sx={{ textAlign: "center", mt: -6 }}>
                      <Typography
                        gutterBottom
                        variant="a"
                        href="#"
                        component="div"
                      >
                        <strong>{response.name}</strong>
                      </Typography>
                      {/* <Typography variant="body2" color="text.secondary">
                        {response.admin_commission}+ Provider
                      </Typography> */}
                    </CardContent>
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

export default FetchingCategorys;
