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
  Skeleton,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import api from "../../API/Fetch_data_Api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import { NavLink } from "react-router-dom";

const FetchingCategorys = () => {
  const [image, setImage] = useState([]);
  const [isLoading, SetIsLoading] = useState(false);

  useEffect(() => {
    api
      .get_Api_Category()
      .then((response) => setImage(response.data))
      .then((response) => SetIsLoading(true))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <Box sx={{ marginTop: 2, marginBottom: 2 }}>
        {/* Catregory name comes from api  */}
        {/* --------------------------------------------------- */}
        {/* <Typography variant="h5" sx={{ marginBottom: 1 }}>
          {" "}
          Creative Category{" "}
        </Typography> */}
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          slidesPerView={5}
          freeMode={true}
          navigation={true}
          style={{
            height: "auto",
          }}
          modules={[Pagination, Navigation]}
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
          {isLoading ? (
            <Box>
              {image.map((response) => {
                return (
                  <SwiperSlide
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <Card
                      sx={{
                        mt: 3,
                        width: 200,
                        height: 200,
                        border: "1px solid #e4e4e4",
                      }}
                    >
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
          ) : (
            <Box display={"flex"} gap={2}>
              <Skeleton variant="rectangular" height={"200px"} width={"20%"} />
              <Skeleton variant="rectangular" height={"200px"} width={"20%"} />
              <Skeleton variant="rectangular" height={"200px"} width={"20%"} />
              <Skeleton variant="rectangular" height={"200px"} width={"20%"} />
              <Skeleton variant="rectangular" height={"200px"} width={"20%"} />
            </Box>
          )}
        </Swiper>
      </Box>
    </Container>
  );
};

export default FetchingCategorys;
