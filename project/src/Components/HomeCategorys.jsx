import React, { useEffect, useState } from 'react'
import api from '../API/Fetch_data_Api'
import { NavLink } from 'react-router-dom'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi'


// import required modules
import { Pagination, Navigation } from "swiper";

const HomeCategorys = () => {
    const [image, setImage] = useState([])
    const [carService,setCarService] = useState([])
    const [homeService, setHomeService] = useState([])
    const [laundryService, setLaundryService] = useState([])
    const [plumbingService,setPlumbingService] = useState([])

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

    useEffect(() => {
        api.get_categories_laundry()
            .then((response) => setLaundryService(response.data))
            .catch(error => console.log(error));
    }, [])

    useEffect(() => {
        api.get_categories_car()
            .then((response) => setCarService(response.data))
            .catch(error => console.log(error));
    }, [])

    useEffect(() => {
        api.get_categories_plumbing()
            .then((response) => setPlumbingService(response.data))
            .catch(error => console.log(error));
    }, [])


    const anchorestyle = {
        color: "black"
    }

    return (
        <div >
            <div className='category'>
                <div>
                    <h1 className='heading'>Creative Category</h1>
                    <hr />
                    <br />
                    <Swiper
                        slidesPerView={5}
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
                                                <NavLink to='' style={anchorestyle} >{response.name}</NavLink>
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
                    <Swiper
                        slidesPerView={4}
                        freeMode={true}
                    >

                        <div className="api-data">
                            {
                                homeService.map((response) => {
                                    return (
                                        <div className="home-row" key={response.id}>
                                            <div className="home-column">
                                                <img src={response.category_image} height={"200px"} width={"100%"} alt="" />
                                                <div className="text-img">
                                                    <NavLink to=''>{response.name}</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <br />
                        </div>
                    </Swiper>
                    <div className="right-btn">
                            <button id='category-btn'><BiChevronRight  className='category-icon-style'/></button>
                        </div>
                        <div className="left-btn">
                            <button id='category-btn'>< BiChevronLeft className='category-icon-style' /></button>
                        </div>
                </div>
            </div>

            <br />

            {/* ---------------------------------------------------------------------------------------  */}
            <div className="category">
                <div>
                    <h1 className='heading'>Laundry Servies</h1>
                    <hr />

                    <div className="api-data">
                        {

                            laundryService.map((response) => {
                                return (
                                    <div className="home-row" key={response.id}>
                                        <div className="home-column">
                                            <img src={response.category_image} height={"200px"} width={"100%"} alt="" />
                                            <div className="text-img">
                                                <NavLink to=''>{response.name}</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className="right-btn">
                            <button id='bt1' className='mt-4'><BiChevronRight className='mt-5' /></button>
                        </div>
                        <div className="left-btn">
                            <button id='bt2' className='mt-4'>< BiChevronLeft className='mt-5' /></button>
                        </div>
                    </div>
                    <div className="right-btn">
                            <button id='category-btn'><BiChevronRight  className='category-icon-style'/></button>
                        </div>
                        <div className="left-btn">
                            <button id='category-btn'>< BiChevronLeft className='category-icon-style' /></button>
                        </div>
                </div>
            </div>

            <br />
              {/* ---------------------------------------------------------------------------------------  */}

              <div className="category">
                <div>
                    <h1 className='heading'>Car Servies</h1>
                    <hr />

                    <div className="api-data">
                        {
                            carService.map((response) => {
                                return (
                                    <div className="home-row" key={response.id}>
                                        <div className="home-column">
                                            <img src={response.category_image} height={"200px"} width={"100%"} alt="" />
                                            <div className="text-img">
                                                <NavLink to=''>{response.name}</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                        <div className="right-btn">
                            <button id='category-btn'><BiChevronRight  className='category-icon-style'/></button>
                        </div>
                        <div className="left-btn">
                            <button id='category-btn'>< BiChevronLeft className='category-icon-style' /></button>
                        </div>
                </div>
            </div>

            <br />
              {/* ---------------------------------------------------------------------------------------  */}

              <div className="category">
                <div>
                    <h1 className='heading'>Plumbing Servies</h1>
                    <hr />

                    <div className="api-data">
                        {
                            plumbingService.map((response) => {
                                return (
                                    <div className="home-row" key={response.id}>
                                        <div className="home-column">
                                            <img src={response.category_image} height={"200px"} width={"100%"} alt="" />
                                            <div className="text-img">
                                                <NavLink to=''>{response.name}</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className="right-btn">
                            <button id='bt1' className='mt-4'><BiChevronRight className='mt-5' /></button>
                        </div>
                        <div className="left-btn">
                            <button id='bt2' className='mt-4'>< BiChevronLeft className='mt-5' /></button>
                        </div>
                    </div>
                    <div className="right-btn">
                            <button id='category-btn'><BiChevronRight  className='category-icon-style'/></button>
                        </div>
                        <div className="left-btn">
                            <button id='category-btn'>< BiChevronLeft className='category-icon-style' /></button>
                        </div>
                </div>
            </div>

            <br />
              {/* ---------------------------------------------------------------------------------------  */}
              <br />
              <br />

        </div>
    )
}

export default HomeCategorys