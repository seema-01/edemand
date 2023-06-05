import { DeleteOutline, EditOutlined, PlusOne } from "@mui/icons-material";
import {
  Backdrop,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Modal,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Address = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
      <Box>
        <Box
          sx={{
            my: 3,
            mx: 2,
            maxWidth: "100%",
            border: "1px solid gray",
            borderRadius: "10px",
            p: 2,
          }}
        >
          <Grid container alignItems="center">
            <Grid item xs display={"flex"}>
              <Typography gutterBottom variant="p" component="div">
                <Radio
                  checked={selectedValue === "a"}
                  onChange={handleChange}
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
                Divy Jani
              </Typography>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  height: "22px",
                  width: "auto",
                  ml: 1,
                  mt: 1,
                }}
              >
                Home
              </Button>
            </Grid>
            <Grid item>
              <IconButton
                aria-label="delete"
                size="small"
                sx={{
                  backgroundColor: "green",
                  mr: 1,
                  borderRadius: 2,
                  "&:hover": {
                    background: "green",
                  },
                }}
              >
                <EditOutlined sx={{ fontSize: "large" }} />
              </IconButton>
              <IconButton
                aria-label="delete"
                size="small"
                sx={{
                  backgroundColor: "red",
                  borderRadius: 2,
                  "&:hover": {
                    background: "red",
                  },
                }}
              >
                <DeleteOutline sx={{ fontSize: "large" }} />
              </IconButton>
            </Grid>
          </Grid>
          <Typography color="text.secondary" variant="body2">
            2-3-577/2 Minister Road, Nallakunta, Nallakunta, Secunderabad <br />
            Andhra Pradesh, 500003 - India
          </Typography>
        </Box>

        {/* Section 2 */}

        <Box
          sx={{
            my: 3,
            mx: 2,
            maxWidth: "100%",
            border: "1px solid gray",
            borderRadius: "10px",
            p: 2,
          }}
        >
          <Grid container alignItems="center">
            <Grid item xs display={"flex"}>
              <Typography gutterBottom variant="p" component="div">
                <Radio
                  checked={selectedValue === "b"}
                  onChange={handleChange}
                  value="b"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "B" }}
                />
                Divy Jani
              </Typography>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  height: "22px",
                  width: "auto",
                  ml: 1,
                  mt: 1,
                }}
              >
                Home
              </Button>
            </Grid>
            <Grid item>
              <IconButton
                aria-label="delete"
                size="small"
                sx={{
                  backgroundColor: "green",
                  mr: 1,
                  borderRadius: 2,
                  "&:hover": {
                    background: "green",
                  },
                }}
              >
                <EditOutlined sx={{ fontSize: "large" }} />
              </IconButton>
              <IconButton
                aria-label="delete"
                size="small"
                sx={{
                  backgroundColor: "red",
                  borderRadius: 2,
                  "&:hover": {
                    background: "red",
                  },
                }}
              >
                <DeleteOutline sx={{ fontSize: "large" }} />
              </IconButton>
            </Grid>
          </Grid>
          <Typography color="text.secondary" variant="body2">
            2-3-577/2 Minister Road, Nallakunta, Nallakunta, Secunderabad <br />
            Andhra Pradesh, 500003 - India
          </Typography>
        </Box>


      </Box>
    </div>
  );
};

export const AddAddress = () => {
  const [openAdd, isOpenAdd] = useState(false);

  const handleOpenAddress = () => {
    isOpenAdd(true);
  };

  const handleCloseAdderss = () => {
    isOpenAdd(false);
  };
  const [name, setName] = React.useState([]);
  const [address, setAddress] = React.useState([]);

  const submit = () => {
    let name = document.getElementById("addressName").value;
    let location = document.getElementById("addressLocation").value;

    setName(name);
    setAddress(location);

    localStorage.setItem("addressName", name);
    localStorage.setItem("addressLocation", address);
  };

  return (
    <>
      <Box
        sx={{
          my: 3,
          mx: 2,
          maxWidth: "100%",
          border: "1px solid gray",
          borderRadius: "10px",
          height: "84px",
          p: 2,
          justifyContent: "center",
          textAlign: "center",
          display: "flex",
        }}
      >
        <Button onClick={handleOpenAddress}>+Add New Address</Button>

        <Backdrop open={openAdd}>
          <Box sx={{ background: "white" }} borderRadius={"10px"} padding={3}>
            <Typography> Enter Address Details:</Typography>
            <Divider />
            <TextField
              id="addressName"
              placeholder="Enter Name"
              sx={{ marginTop: 2, marginBottom: 1 }}
            />{" "}
            <br />
            <TextField
              id="addressLocation"
              placeholder="Enter Address"
              sx={{ margin: 1 }}
            />{" "}
            <br />
            <br />
            <Box display={"flex"} justifyContent={"space-evenly"}>
              <Button variant="contained" onClick={submit}>
                Save
              </Button>
              <Button variant="outlined" onClick={handleCloseAdderss}>
                close
              </Button>
            </Box>
          </Box>
        </Backdrop>
      </Box>
    </>
  );
};

export default Address;
