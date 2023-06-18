import api from "../../API/Fetch_data_Api";
import React, { useRef } from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const FetchingCategorys = () => {
  const [image, setImage] = useState([]);
  const [isLoading, SetIsLoading] = useState(false);
  const [swiper, setSwiper] = useState(null);

  const nextSlide = () => {
    swiper.slideNext();
  };
  const prevSlide = () => {
    swiper.slidePrev();
  };
  useEffect(() => {
    api
      .get_Api_Category()
      .then((response) => setImage(response.data))
      .then((response) => SetIsLoading(true))
      .catch((error) => console.log(error));
  }, []);

  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Container>
      <Box sx={{ marginTop: 2, marginBottom: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{ marginBottom: 1, fontSize: theme.palette.fonts.h1 }}
          >
            Creative Category
          </Typography>
          {/* <SwiperButton /> */}
          <Box>
            <span
              className="previous-next-btn"
              sx={{ marginLeft: "auto", alignItems: "center" }}
            >
              <IconButton
                aria-label="delete"
                color="primary"
                onClick={() => prevSlide()}
              >
                <ArrowBackIosIcon
                  sx={{ color: theme.palette.color.navLink, pl: 0.6 }}
                />
              </IconButton>
              <IconButton
                aria-label="delete"
                color="primary"
                onClick={() => nextSlide()}
              >
                <ArrowForwardIosIcon
                  sx={{ color: theme.palette.color.navLink }}
                />
              </IconButton>
            </span>
          </Box>
        </Box>

        <Swiper
          pagination={{
            type: "progressbar",
          }}
          slidesPerView={5}
          freeMode={true}
          style={{
            height: "auto",
          }}
          modules={[Pagination, Navigation]}
          onSwiper={(s) => {
            console.log("initialize swiper", s);
            setSwiper(s);
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1200: {
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
                      key={response.id}
                      onClick={() => navigate("/categorys/" + response.id)}
                      sx={{
                        mt: 3,
                        mb: 2,
                        width: 200,
                        height: 200,
                        border: "1px solid #e4e4e4",
                        background: "white",
                        boxShadow: 0,
                      }}
                    >
                      <img
                        src={response.category_image}
                        title={response.name}
                        //  onClick={navigate("./categorys/213")}
                        style={{
                          maxHeight: "100%",
                          maxWidth: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <CardContent sx={{ textAlign: "center", mt: -6 }}>
                        <NavLink
                          gutterBottom
                          variant="a"
                          // dynamic going to that page
                          to={"/categorys/" + response.id}
                          component="div"
                          style={{
                            textDecoration: "none",
                            color: theme.palette.color.catLink,
                          }}
                        >
                          <h4 style={{ fontWeight: 400 }}>{response.name}</h4>
                        </NavLink>
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
