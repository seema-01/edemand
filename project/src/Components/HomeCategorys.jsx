import React, { useEffect, useState } from 'react'
import api from '../API/Fetch_data_Api'
import { NavLink } from 'react-router-dom'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import '../Style/style.css'
// Import Swiper styles
import { FreeMode } from "swiper";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

const HomeCategorys = () => {
    const [image, setImage] = useState([])
    const [homeService, setHomeService] = useState([])

    useEffect(() => {
        api.get_Api_Category()
            .then((response) => setImage(response.data))
            .catch(error => console.log(error));

    }, [])

    useEffect(() => {
        api.get_categories_home()
            .then((response) => setHomeService(response.data))
            .catch(error => console.log(error));
    }, [])

    return (
        <div >
            <div className='category'>
                <div>
                    <h1 className='heading'>Creative Category</h1>
                    <hr />
                    <br />
                    <Swiper
                        slidesPerView={5}
                        // spaceBetween={100}
                        freeMode={true}
                        // navigation={true} modules={[Navigation]} className="mySwiper"
                    >

                        <div className="api-data">
                            {
                                image.map((response) => {
                                    return (
                                        <SwiperSlide>
                                        <div className="data-row" key={response.id}>
                                            <div className="data-column">
                                                <img src={response.category_image} height={"300px"} width={"100%"} alt="" />
                                            </div>
                                            <NavLink to='' >{response.name}</NavLink>
                                            <p>({response.admin_commission}+) provider</p>
                                        </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </div>
                    </Swiper>
                </div>
            </div>
/*--------------------------------------------------------------------------------------------------- */
            <br />

            <div className="category">
                <div>
                    <h1 className='heading'>Home Servies</h1>
                    <hr />
                    <br />
                   
                        <div className="api-data">
                            {
                                homeService.map((response) => {
                                    return (
                                        
                                            <div className="home-row" key={response.id}>
                                                <div className="home-column">
                                                    <img src={response.category_image} height={"300px"} width={"100%"} alt="" />
                                                    <div className="text-img">
                                                        <NavLink to=''>{response.name}</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                    )
                                })
                            }
                        </div>
                    
                </div>
            </div>

            <br />



        </div>
    )
}

export default HomeCategorys