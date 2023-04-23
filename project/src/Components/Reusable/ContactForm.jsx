import { Call, LocationCity, LocationOn, LockClock, Mail, Map, PunchClock, Timeline, Watch } from '@mui/icons-material'
import { Box, Breadcrumbs, Button, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ContactForm = () => {
  return (
    <Container maxWidth={"lg"}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 1, marginTop: 1 }}>
        <Link underline="hover" color="inherit" href="/home">
          Home
        </Link>
        <Typography color="text.primary">Contact</Typography>
      </Breadcrumbs>
      <Typography variant="h4" gutterBottom>
        <strong>Contact</strong>
      </Typography>

      <Grid container spacing={3} border={"2px solid lightgray"} borderRadius={"10px"} marginTop={1}>
        <Grid item xs={12} sm={6} md={9} xl={4} lg={2}>
            <Box sx={{ padding: { xs: '16px', md: '20px' } }}>
              <Typography variant='h6' color={"blue"}>Let's Talk</Typography>
              <Typography variant="h5" gutterBottom>
                <strong>Get In Touch With Us!</strong>
              </Typography>


              {/* Contact Menu */}
              <Box display={"flex"} marginBottom={2} marginTop={2}>
                <Call sx={{
                  height: "30px",
                  width: "30px",
                  border: "2px solid",
                  p: 1,
                  backgroundColor: "blue",
                  color: "white",
                  borderRadius: "5px"
                }} />
                <Box ml={2}>
                  <Typography variant='p' color={"blue"}>Let's Talk</Typography>
                  <Typography variant='h6'>+91 01234 56789</Typography>
                </Box>
              </Box>
              <hr />

              <Box display={"flex"} marginBottom={2} marginTop={2}>
                <Mail sx={{
                  height: "30px",
                  width: "30px",
                  border: "2px solid",
                  p: 1,
                  backgroundColor: "blue",
                  color: "white",
                  borderRadius: "5px"
                }} />
                <Box ml={2}>
                  <Typography variant='p' color={"blue"}>Quick Email</Typography>
                  <Typography variant='h6'>info@edemand.com</Typography>
                </Box>
              </Box>
              <hr />


              <Box display={"flex"} marginBottom={2} marginTop={2}>
                <LocationOn sx={{
                  height: "30px",
                  width: "30px",
                  border: "2px solid",
                  p: 1,
                  backgroundColor: "blue",
                  color: "white",
                  borderRadius: "5px"
                }} />
                <Box ml={2}>
                  <Typography variant='p' color={"blue"}>Office Address</Typography>
                  <Typography variant='h6'>Time Square Empire Time <br /> Square Empire, Bhuj, Gujrat, <br /> 370001 </Typography>
                </Box>
              </Box>
              <hr />

              <Box display={"flex"} marginBottom={2} marginTop={2}>
                <Watch sx={{
                  height: "30px",
                  width: "30px",
                  border: "2px solid",
                  p: 1,
                  backgroundColor: "blue",
                  color: "white",
                  borderRadius: "5px"
                }} />
                <Box ml={2}>
                  <Typography variant='p' color={"blue"}>Opening Houres</Typography>
                  <Typography variant='h6'>9:00 AM to 7:00 PM</Typography>
                </Box>
              </Box>

            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3} xl={8} lg={10} sx={{borderLeft:"2px solid lightgray"}}>
            <Box
              component="form"
              sx={{ padding: { xs: '16px', md: '32px' }}}
              height={"500px"}
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <h2>Get In Touch</h2>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                sx={{ marginBottom: '16px' }}
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                sx={{ marginBottom: '16px' }}
              />
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={6}
                variant="outlined"
                sx={{ marginBottom: '16px' }}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ marginTop: '16px', marginLeft: "78%" }}
              >
                Send Message
              </Button>
            </Box>
          </Grid>
        
      </Grid>

      <Box marginTop={3}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35419.35496376489!2d69.63786434692074!3d23.256557301540912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39511e18ba7b37d1%3A0x2fa64b5d0d7304a8!2sTime%20Square%20Space!5e0!3m2!1sen!2sin!4v1682061357684!5m2!1sen!2sin" width="100%" height="480"></iframe>
      </Box>
    </Container>
  )
}

export default ContactForm