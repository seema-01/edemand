import { Box, Container } from "@mui/material";
import React from "react";
import demo2 from '../../Images/demo2.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/css/navigation';
// import required modules
import { Navigation } from "swiper";

const HomePage = () => {
  return (
    <>
      <Container>
        <Box sx={{height:"500px",overflow:"hidden",marginTop: 5}}>
        <Swiper height={"auto"} navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <img src={demo2} height={"auto"} width={"100%"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={demo2} height={"auto%"} width={"100%"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={demo2} height={"auto%"} width={"100%"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={demo2} height={"auto%"} width={"100%"} alt="" />
          </SwiperSlide>
        </Swiper>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
