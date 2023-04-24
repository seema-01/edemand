import { Box, Breadcrumbs, Card, CardActions, CardContent, CardMedia, Container, Grid, Link, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import api from "../../API/Fetch_data_Api"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { NavLink } from 'react-router-dom';

const Categorys = () => {

    const [image, setImage] = useState([])
    useEffect(() => {
        api.get_Api_Category()
            .then(response => setImage(response.data))
            .catch(error => console.log(error))
    }, [])

    const anchorestyle = {
        color: "black"
    }

    return (
        <div>
            <Container maxWidth="lg">

                <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 1, marginTop: 1 }}>
                    <Link underline="hover" color="inherit" href="/home">
                        Home
                    </Link>
                    <Typography color="text.primary">category</Typography>
                </Breadcrumbs>
                <Typography variant="h4" gutterBottom>
                    <strong>Categorys</strong>
                </Typography>

                <Box>
                    <Swiper
                        slidesPerView={5}
                        freeMode={true}

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
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                        }}>

                        <Box>
                            {
                                image.map((response) => {
                                    return (
                                        <SwiperSlide>
                                            <Card sx={{ marginLeft: 4, width: 200 }}>
                                                <img
                                                    src={response.category_image}
                                                    title="Services"
                                                    style={{height:"100%" , width:"100%"}}
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="a" href="#" component="div">
                                                        {response.name}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {response.admin_commission}+ Provider
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </SwiperSlide>

                                    )
                                })
                            }
                        </Box>
                    </Swiper>
                </Box>


            </Container>
        </div >
    )
}

export default Categorys