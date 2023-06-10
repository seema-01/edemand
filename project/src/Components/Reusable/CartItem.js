import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router";

const CartItem = ({ item, onDelete, onQuantityChange, itemQuantities }) => {
  const handleIncrement = () => {
    onQuantityChange(item.id, (itemQuantities[item.id] || 0) + 1);
  };

  const handleDecrement = () => {
    if ((itemQuantities[item.id] || 0) > 1) {
      onQuantityChange(item.id, (itemQuantities[item.id] || 0) - 1);
    }
  };

  const totalPrice = item.discounted_price * (itemQuantities[item.id] || 1);

  return (
    <>
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          height="180"
          width="200"
          image={item.image_of_the_service}
          alt={item.title}
          sx={{ maxWidth: 200 }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6">{item.title}</Typography>
          <Typography variant="body1" color="text.secondary">
            ${item.discounted_price}
          </Typography>
          <Box display="flex" alignItems="center" marginTop={2}>
            <IconButton onClick={handleDecrement}>
              <RemoveIcon />
            </IconButton>
            <Typography variant="body2">
              {itemQuantities[item.id] || 1}
            </Typography>
            <IconButton onClick={handleIncrement}>
              <AddIcon />
            </IconButton>
          </Box>
          <Typography variant="body2">
            Total: ${totalPrice.toFixed(2)}
          </Typography>
        </CardContent>
        <CardActions sx={{ alignSelf: "flex-end" }}>
          <IconButton
            color="error"
            aria-label="Delete"
            onClick={() => onDelete(item.id)}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
      <br />
    </>
  );
};

const Cart = () => {
  const [cartData, setCartData] = useState(() => {
    const storedCartData = JSON.parse(localStorage.getItem("cart"));
    return storedCartData || [];
  });

  const navigate = useNavigate();

  const [itemQuantities, setItemQuantities] = useState(() => {
    const storedItemQuantities = JSON.parse(
      localStorage.getItem("itemQuantities")
    );
    return storedItemQuantities || {};
  });

  useEffect(() => {
    localStorage.setItem("itemQuantities", JSON.stringify(itemQuantities));
  }, [itemQuantities]);

  const handleQuantityChange = (itemId, quantity) => {
    setItemQuantities((prevItemQuantities) => ({
      ...prevItemQuantities,
      [itemId]: quantity,
    }));
  };

  const handleDelete = (itemId) => {
    setCartData((prevCartData) => {
      const updatedCartData = prevCartData.filter((item) => item.id !== itemId);
      localStorage.setItem("cart", JSON.stringify(updatedCartData));
      return updatedCartData;
    });
  };

  const handleRequest = () => {
    const apiUrl = "https://edemand-test.thewrteam.in/api/v1/manage_cart";
    const cartItems = JSON.parse(localStorage.getItem("cart"));

    if (!cartItems || cartItems.length === 0) {
      console.log("Cart is empty. Cannot make API request.");
      return;
    }

    const data = {
      items: cartItems.map((item) => ({
        service_id: item.id,
        qty: itemQuantities[item.id] || 1,
      })),
    };

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed");
        }
        console.log("API request successful");
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });

    navigate("/providers/services/payment");
  };

  // Calculate the total price
  const totalPrice = cartData.reduce(
    (total, item) =>
      total + item.discounted_price * (itemQuantities[item.id] || 1),
    0
  );

  return (
    <div>
      <Box padding={1}>
        <Typography variant="h4">Cart</Typography>
        <Divider />
        <br />
        {cartData.length === 0 ? (
          <Box sx={{ textAlign: "center" }}>
            <h3>No Products here!</h3>
            <br />
            Your cart is empty. Login & Add products <br /> so that we can serve
            you!
            <h4 style={{ color: "gray" }}>can serve you!</h4>
          </Box>
        ) : (
          <>
            {cartData.map((item) => (
              <CartItem
                item={item}
                key={item.id}
                onDelete={handleDelete}
                onQuantityChange={handleQuantityChange}
                itemQuantities={itemQuantities}
              />
            ))}
            <Typography
              variant="body2"
              sx={{ textAlign: "right", marginTop: 2 }}
            >
              Total: ${totalPrice.toFixed(2)}
            </Typography>
          </>
        )}

        <Button fullWidth variant="contained" onClick={handleRequest}>
          Continue
        </Button>
      </Box>
    </div>
  );
};

export default Cart;
