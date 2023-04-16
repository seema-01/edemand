import React from 'react'
import demo1 from '../Images/demo1.jpg'
import demo2 from '../Images/demo2.jpg'
import { FaSearch } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr'
import '../Style/style.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/css/navigation';
// import required modules
import { Navigation } from "swiper";

const HomeSlider = () => {
    return (
        <div>
            <div className="home-image-slider">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide><img src={demo1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={demo2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={demo1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={demo2} alt="" /></SwiperSlide>
                </Swiper>
            </div>


            <div className="home-location">
                <span className="input-group-text" id=""><GrLocation /></span>
                <input type="text" id='myinp1' className="form-control" placeholder='Enter Zip code' />
                <input type="text" className="form-control" placeholder='Enter Location name,Area name etc...' />
                <button className='mybtn'> <FaSearch />Search</button> 
            </div>
        </div>
    )
}

export default HomeSlider