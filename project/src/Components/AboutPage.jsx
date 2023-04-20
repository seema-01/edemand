
import { Box, Card, CardContent, Container, ImageList, ImageListItem, Typography, styled } from '@mui/material'
import React from 'react'
import { Aboutparagraph, AboutList } from './Aboutparagraph'

const Aboutpage = () => {
  return (
    <div>

      <Box
        bgcolor={"#f2f1f6"}
        pt={2}
        pb={2}
        position={"responsive"}
      >

      <Typography
        sx={{ paddingLeft: { xs: 8, md: 13}}}
        variant='a'
        href="#">
        Home | About
      </Typography>
      
      <Typography
        sx={{ paddingLeft: { xs: 8, md: 13}}}
        variant='h4'>
        About us
      </Typography>

      </Box>

      <Container maxWidth="xl">
        <Box
          maxWidth={"100%"}
          bgcolor={"white"}
          pt={4}
          marginLeft={10}
          marginRight={10}
          >

          <Card marginLeft="20px">
            <img
              src="./demo1.jpg"
              alt="" height="100%" width="100%"
              style={{ borderRadius: "5px",
            maxWidth: "100%",
            maxHeight: "100%" }}
            />
            <CardContent>

              <Typography
                gutterBottom
                variant="h5"
                component="div"
                pl={1}>
                Know About Us
              </Typography>
              
              <Aboutparagraph />
              <AboutList />
            
            </CardContent>
          </Card>
        </Box>
      </Container>
    </div>
  )
}

export default Aboutpage