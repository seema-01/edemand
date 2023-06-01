import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const CartItem = () => {
  const cartData = JSON.parse(localStorage.getItem("cart")) || [];

  const navigate = useNavigate();
  return (
    <div>
      <Box padding={1}>
        <Typography variant="h4">Cart</Typography>
        <Divider />
        <br />
        {cartData.map((response) => (
          <>
            <Box>
              <Card sx={{ display: "flex" }}>
                <CardMedia>
                  <img
                    src={response.image_of_the_service}
                    height={100}
                    width={100}
                  />
                </CardMedia>
                <CardContent>
                  <Typography>{response.title}</Typography>
                  <Typography>${response.discounted_price}</Typography>
                </CardContent>
              </Card>
              <br />
            </Box>
          </>
        ))}

        <Button fullWidth variant="contained" onClick={() => navigate('/providers/services/payment')}>
          Continue
        </Button>
      </Box>
    </div>
  );
};

export default CartItem;
