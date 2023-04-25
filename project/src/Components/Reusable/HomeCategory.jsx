import React from "react";
import Categorys from "./Categorys";
import FetchingCategorys from "./FetchingCategorys";
import { Box, Container, Typography } from "@mui/material";
import FetchingServies, {
  FetchingCar,
  FetchingLaundry,
  FetchingPlumbing,
} from "./FetchingServies";
import Providers from "./Providers";

const HomeCategory = () => {
  return (
    <div>
      <Container maxWidth="100%">
        <Box
          sx={{
            marginTop: 4,
            padding: 2,
            background: "white",
            height: "auto",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <FetchingCategorys />
        </Box>
        <Box
          sx={{
            marginTop: 4,
            padding: 2,
            background: "white",
            height: "auto",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <FetchingServies />
        </Box>
        <Box
          sx={{
            marginTop: 4,
            padding: 2,
            background: "white",
            height: "auto",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <FetchingPlumbing />
        </Box>

        <Box
          sx={{
            marginTop: 4,
            padding: 2,
            background: "white",
            height: "auto",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <FetchingLaundry />
        </Box>

        <Box
          sx={{
            marginTop: 4,
            padding: 2,
            background: "white",
            height: "auto",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <FetchingCar />
        </Box>

        <Box
          sx={{
            marginTop: 4,
            padding: 2,
            background: "white",
            height: "auto",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Container>
            <Box>
              <Typography variant="h4">
                Our Valuabale Service Providers
              </Typography>
              <hr />
            </Box>
            <Box marginTop={-6}>

            <Providers />
            </Box>
          
          </Container>
        </Box>
      </Container>
    </div>
  );
};

export default HomeCategory;
