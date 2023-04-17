import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import api from '../API/Fetch_data_Api'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const CaategoryPage = () => {
    const [image, setImage] = useState([])
    api.get_Api_Category()
        .then(response => setImage(response.data))
        .catch(error => console.log(error))

    const anchorestyle = {
        color: "black"
    }

    return (
        <div>
            <div className="heading-address">
                <a  href="">Home |&nbsp;</a>
                <a  href=""><b>AllCategory</b></a>
                <h2 className='heading-name'>All Category</h2>
            </div>

            <div className='category'>
                <Swiper
                    slidesPerView={5}
                    freeMode={true}
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
            <br />
            <br />
            <br />
        </div>
    )
}

export default CaategoryPage