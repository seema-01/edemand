import { Box, Breadcrumbs, Button, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ContactForm = () => {
  return (
    <Container maxWidth={"lg"}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 1, marginTop: 5 }}>
        <Link underline="hover" color="inherit" href="/home">
          Home
        </Link>
        <Typography color="text.primary">Contact</Typography>
      </Breadcrumbs>
      <Typography variant="h4" gutterBottom>
        <strong>Contact us</strong>
      </Typography>

      <Grid container spacing={2} xs={12}>
        <div>
          <Grid item xs={12} lg={6}>
            <Box sx={{ padding: { xs: '16px', md: '20px' } }}>
              <Typography variant='h6' color={"blue"}>Let's Talk</Typography>
              <Typography variant="h5" gutterBottom>
                <strong>Get In Touch With Us!</strong>
              </Typography>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus
                nibh eu ex faucibus, eget efficitur velit elementum. Aliquam erat
                volutpat. Nunc congue laoreet sagittis.
              </p>
              <p>
                Nullam lacinia nunc ipsum, eu lobortis neque varius vel. Duis
                tincidunt scelerisque blandit. Aliquam maximus, mauris quis rhoncus
                aliquet, diam augue bibendum tellus, a sollicitudin ipsum tellus non
                enim.
              </p>
              <p>
                Aliquam lobortis maximus leo eu imperdiet. Nunc non risus non lacus
                efficitur varius. Ut vitae arcu libero.
              </p>
              <p>123 Main St</p>
              <p>New York, NY 10001</p>
              <p>contact@mywebsite.com</p>
              <p>(123) 456-7890</p>
            </Box>
          </Grid>

          <Grid item xs={12} lg={6} > 
            <Box
              component="form"
              sx={{ padding: { xs: '16px', md: '32px' } }}
              onSubmit={(e) => {
                e.preventDefault();
                // handle form submission
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
                sx={{ marginTop: '16px' }}
              >
                Send Message
              </Button>
            </Box>
          </Grid>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35419.35496376489!2d69.63786434692074!3d23.256557301540912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39511e18ba7b37d1%3A0x2fa64b5d0d7304a8!2sTime%20Square%20Space!5e0!3m2!1sen!2sin!4v1682061357684!5m2!1sen!2sin" width="100%" height="450"></iframe>


        </div>
      </Grid>
    </Container>
  )
}

export default ContactForm