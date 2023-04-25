import { Box, Breadcrumbs, Card, CardActions, CardContent, CardMedia, Container, Grid, Link, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import api from "../../API/Fetch_data_Api"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { NavLink } from 'react-router-dom';
import FetchingCategorys from './FetchingCategorys';


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

            <FetchingCategorys />
        </Container>
    </div >
)
}

export default Categorys