import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const CartItem = ({ item, onDelete }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const totalPrice = item.discounted_price * quantity;

  return (
    <Box>
      <Card sx={{ display: "flex" }}>
        <CardMedia>
          <img src={item.image_of_the_service} height={100} width={140} />
        </CardMedia>
        <CardContent>
          <Typography>{item.title}</Typography>
          <Typography>${item.discounted_price}</Typography>
          {/* <Box display="flex" alignItems="center" marginTop={2}>
            <Button onClick={handleDecrement}>-</Button>
            <Typography variant="body2">{quantity}</Typography>
            <Button onClick={handleIncrement}>+</Button>
          </Box> */}
          {/* <Typography variant="body2">Total: ${totalPrice}</Typography> */}
          <Button onClick={() => onDelete(item.id)}>Delete</Button>
        </CardContent>
      </Card>
      <br />
    </Box>
  );
};

const Cart = () => {
  const [cartData, setCartData] = useState(() => {
    const storedCartData = JSON.parse(localStorage.getItem("cart"));
    return storedCartData || [];
  });
  const [totalPrice, setTotalPrice] = useState(() => {
    const storedTotalPrice = JSON.parse(localStorage.getItem("totalPrice"));
    return storedTotalPrice || 0;
  });

  const navigate = useNavigate();

  // Filter out duplicate items based on their IDs
  const distinctCartData = Array.from(
    new Set(cartData.map((item) => item.id))
  ).map((id) => cartData.find((item) => item.id === id));

  const cartItem = localStorage.getItem("cart") || [];

  const handleAddToCart = (item) => {
    setCartData((prevCartData) => {
      const updatedCartData = [...prevCartData, item];
      localStorage.setItem("cart", JSON.stringify(updatedCartData));
      return updatedCartData;
    });
  };

  const handleDelete = (itemId) => {
    setCartData((prevCartData) => {
      const updatedCartData = prevCartData.filter((item) => item.id !== itemId);
      localStorage.setItem("cart", JSON.stringify(updatedCartData));
      return updatedCartData;
    });
  };

  return (
    <div>
      <Box padding={1}>
        <Typography variant="h4">Cart</Typography>
        <Divider />
        <br />
        {cartItem == null ? (
          <>
            <Box sx={{ textAlign: "center" }}>
              <h3>No Products here!</h3>
              <br />
              Your cart is empty. Login & Add products <br /> to that we
              <h4 style={{ color: "gray" }}>can serve you!</h4>
            </Box>
          </>
        ) : (
          <>
            {distinctCartData.map((item) => (
              <CartItem item={item} key={item.id} onDelete={handleDelete} />
            ))}
          </>
        )}

        <Button
          fullWidth
          variant="contained"
          onClick={() => navigate("/providers/services/payment")}
        >
          Continue
        </Button>
      </Box>
    </div>
  );
};

export default Cart;
