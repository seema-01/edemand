import React from "react";
import Address, { AddAddress } from "./Profile/Address";
import { Box, Button, Grid, Typography } from "@mui/material";

const AddressPayment = () => {
  return (
    <div>
      <Box>
        <Grid
          container
          spacing={15}
          sx={{backgroundColor: "white",borderRadius: "10px" }}
          boxShadow={"none"}
        >
          <Grid item xs={12} sm={6}>
            <Box mt={1}>
              {/* <Typography variant="h6"> Select Your Address: </Typography> */}
              <Address />
              <Address />
              <Address />
              <Box sx={{ float: "right", mr: 2 }}>
                <Button variant="contained">Continue</Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <MyMap />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AddressPayment;

const MyMap = () => {
  return (
    <Box>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d938040.4942412841!2d70.44102538357195!3d23.307750668490733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x39572aaadf46dc53%3A0x289367772791f66b!2sAdani%20Power%20Rd%2C%20370405!3m2!1d22.804894899999997!2d69.6190076!4m5!1s0x395e9b5e94477b69%3A0x19ab90f1d2071742!2sTimes%20Square%2C%2059%2C%20Thaltej%20Rd%2C%20near%20Ravija%20Plaza%2C%20Opposite%20Rambag%2C%20Thaltej%2C%20Shilaj%2C%20Gujarat%20380059!3m2!1d23.049818899999998!2d72.5013069!5e0!3m2!1sen!2sin!4v1682527846899!5m2!1sen!2sin"
        width="500"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </Box>
  );
};
