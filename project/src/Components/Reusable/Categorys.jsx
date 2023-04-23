// import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
// import api from '../../API/Fetch_data_Api'
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/free-mode";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// const Caategory= () => {
//     const [image, setImage] = useState([])
//     api.get_Api_Category()
//         .then(response => setImage(response.data))
//         .catch(error => console.log(error))

//     const anchorestyle = {
//         color: "black"
//     }

//     return (
//         <div>
//             <div className="heading-address">
//                 <a  href="">Home |&nbsp;</a>
//                 <a  href=""><b>AllCategory</b></a>
//                 <h2 className='heading-name'>All Category</h2>
//             </div>

//             <div className='category'>
//                 <Swiper
//                     slidesPerView={5}
//                     freeMode={true}
//                 >

//                     <div className="api-data">
//                         {
//                             image.map((response) => {
//                                 return (
//                                     <SwiperSlide>
//                                         <div className="data-row" key={response.id}>
//                                             <div className="data-column">
//                                                 <img src={response.category_image} height={"300px"} width={"100%"} alt="" />
//                                             </div>
//                                             <NavLink to='' style={anchorestyle} >{response.name}</NavLink>
//                                             <p>({response.admin_commission}+) provider</p>
//                                         </div>
//                                     </SwiperSlide>
//                                 )
//                             })
//                         }
//                     </div>
//                 </Swiper>
//             </div>
//             <br />
//             <br />
//             <br />
//         </div>
//     )
// }

// export default Caategory


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
                        freeMode={true}>

                        <Box className="api-data">
                            {
                                image.map((response) => {
                                    return (
                                        <SwiperSlide>

                                            <Grid>
                                                <Grid item xs={2} sm={6} md={8} lg={12} xl={12} >
                                                    <Card sx={{ Width: "500px", marginLeft: 4 }}>
                                                        <CardMedia
                                                            sx={{ height: 140 }}
                                                            image={response.category_image}
                                                            title="Services"
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
                                                </Grid>
                                            </Grid>

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