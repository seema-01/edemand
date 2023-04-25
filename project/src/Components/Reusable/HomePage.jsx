import {
  Box,
  Button,
  Container,
  IconButton,
  Input,
  TextField,
} from "@mui/material";
import React from "react";
import demo2 from "../../Images/demo2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/navigation";
// import required modules

import { Navigation } from "swiper";
import { Search } from "@mui/icons-material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
const HomePage = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            height: "500px",
            position: "relative",
            marginTop: 5,
            overflow: "hidden",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        >
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            style={{ maxHeight: "500px" }}
          >
            <SwiperSlide>
              <img src={demo2} height={"100%"} width={"100%"} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={"https://placeimg.com/640/480/tech"}
                height={"auto"}
                width={"100%"}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={"https://placeimg.com/640/480/tech"}
                height={"auto"}
                width={"100%"}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={"https://placeimg.com/640/480/tech"}
                height={"auto"}
                width={"100%"}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </Box>
        <Box sx={{ marginTop: -2,alignItems:"center",justifyContent:"center",display:"flex"}}>
          <TextField
            size="small"
            type="text"
            id="myinp1"
            className="form-control"
            InputProps={{ startAdornment: <LocationOnOutlinedIcon sx={{paddingRight: 2}}/> }}
            placeholder="Enter Zip code"
            sx={{zIndex:1,background:"white"}}
          />
          <TextField
            size="small"
            type="text"
            className="form-control"
            placeholder="Enter Location name,Area name etc..."
            sx={{zIndex:1,background:"white",width:"500px"}}
            InputProps={{
              endAdornment: (
                <Button
                  startIcon={<Search />}
                  variant="contained"
                  sx={{ paddingLeft: 2,float:"right" }}
                >
                  {" "}
                  Search{" "}
                </Button>
              ),
            }}
          />
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
