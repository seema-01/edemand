import {
  Button,
  Grid,
  Typography,
  TextField,
  Badge,
  Box,
  Drawer,
  OutlinedInput,
} from "@mui/material";
import React from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import StarIcon from "@mui/icons-material/Star";
import { MuiFileInput } from "mui-file-input";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Booking = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const [file, setFile] = React.useState(null);
  const cartData = JSON.parse(localStorage.getItem("cart")) || [];

  const itemQuantities = cartData.reduce((quantities, item) => {
    return { ...quantities, [item.id]: item.quantity || 1 };
  }, {});

  const totalDiscountedPrice = cartData.reduce((total, item) => {
    return total + item.discounted_price * itemQuantities[item.id];
  }, 0);

  localStorage.setItem("totalPrice", totalDiscountedPrice);

  return (
    <div>
      {cartData.map((item) => (
        <React.Fragment key={item.id}>
          <Grid container alignItems="center" sx={{ ml: 1 }}>
            <Grid item xs>
              <Typography gutterBottom variant="h6" fontSize={18}>
                <strong>{item.title}</strong>
              </Typography>
              <Typography gutterBottom variant="p" fontSize={16}>
                {itemQuantities[item.id]} * ${item.discounted_price}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                gutterBottom
                variant="h6"
                textAlign={"end"}
                fontSize={18}
                color={"blue"}
              >
                <strong>
                  ${item.discounted_price * itemQuantities[item.id]}
                </strong>
              </Typography>
            </Grid>
          </Grid>
          <br />
          <br />
        </React.Fragment>
      ))}

      {/* Display total discounted price */}
      <Typography
        gutterBottom
        variant="h6"
        textAlign={"end"}
        fontSize={18}
        color={"blue"}
      >
        <strong>Total: ${totalDiscountedPrice.toFixed(2)}</strong>
      </Typography>
    </div>
  );
};

export default Booking;
