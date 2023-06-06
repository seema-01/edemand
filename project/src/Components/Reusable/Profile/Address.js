import { DeleteOutline, EditOutlined, PlusOne } from "@mui/icons-material";
import { Textarea } from "@mui/joy";
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
import { ToastContainer, toast } from "react-toastify";

const Address = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [defName, setDefName] = useState([]);
  const [defAddress, setDefAddress] = useState([]);
  const [edit, setEdit] = useState(false);
  const [deleteItem, isDeleteItem] = useState(false);

  const handleEdit = () => {
    setEdit(true);
  };

  const handleEditClose = () => {
    setEdit(false);
  };

  const handleDelete = () => {
    isDeleteItem(true);
  };

  const handleDeleteClose = () => {
    isDeleteItem(false);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  let name = localStorage.getItem("addressName");
  let address = localStorage.getItem("addressLocation");

  const handleUpdate = () => {
    let updatedName = document.getElementById("updateName").value;
    let updatedEmail = document.getElementById("updatedAddress").value;

    localStorage.setItem("addressName", updatedName);
    localStorage.getItem("addressLocation", updatedEmail);
    setEdit(false);
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
                  color: "white",
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
                  color: "white",
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
        {/* Dynamic Section */}

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
                {name}
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
                onClick={handleEdit}
                sx={{
                  backgroundColor: "green",
                  color: "white",
                  mr: 1,
                  borderRadius: 2,
                  "&:hover": {
                    background: "green",
                  },
                }}
              >
                <EditOutlined sx={{ fontSize: "large" }} />
              </IconButton>
              <Backdrop open={edit}>
                <Box sx={{ background: "white", p: 2, width: 300, zIndex: 1 }}>
                  <label>Name:</label>
                  <br />
                  <br />
                  <TextField placeholder={name} id="updateName" fullWidth>
                  </TextField>{" "}
                  <br /> <br />
                  <label>Address:</label>
                  <br />
                  <br />
                  <TextField
                    placeholder={address}
                    id="updatedAddress"
                    fullWidth
                  ></TextField>{" "}
                  <br /> <br />
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleUpdate}
                  >
                    Save
                  </Button>
                  <Button onClick={handleEditClose}>Close</Button>
                </Box>
              </Backdrop>

              <IconButton
                aria-label="delete"
                size="small"
                sx={{
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: 2,
                  "&:hover": {
                    background: "red",
                  },
                }}
                onClick={handleDelete}
              >
                <DeleteOutline sx={{ fontSize: "large" }} />
              </IconButton>
              <Backdrop open={deleteItem}>
                <Box sx={{background: "white", p:4}}>
                  <Typography>
                    Are You Sure You Want to Delete This Address ?
                  </Typography>
                  {/* for now we just write to close this box when user click on delete  */}
                  <Button variant="contaied" color="error" onClick={handleDeleteClose}>
                    Delete
                  </Button>
                  <Button onClick={handleDeleteClose}>Close</Button>
                </Box>
              </Backdrop>
            </Grid>
          </Grid>
          <Typography color="text.secondary" variant="body2">
            {address}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export const AddAddress = () => {
  const [openAdd, isOpenAdd] = useState(false);
  const [name, setName] = React.useState([]);
  const [address, setAddress] = React.useState([]);
  const [copy, setCopy] = useState(false);

  const handleOpenAddress = () => {
    isOpenAdd(true);
  };

  const handleCloseAdderss = () => {
    isOpenAdd(false);
  };

  const submit = () => {
    let name = document.getElementById("addressName").value;
    let location = document.getElementById("addressLocation").value;

    setName(name);
    setAddress(location);

    // localStorage.setItem("addressName", name);
    // localStorage.setItem("addressLocation", address);

    const userName = JSON.parse(localStorage.getItem("userName")) || [];
    const userAdderss = JSON.parse(localStorage.getItem("userAddress")) || [];
    userName.push(name);
    userAdderss.push(location);
    localStorage.setItem("userName", JSON.stringify(userName));
    localStorage.setItem("userAddress", JSON.stringify(userAdderss));

    toast.done("Address Added Success");
    setCopy(true);
  };

  return (
    <>
      <Box
        sx={{
          // my: 3,
          mx: 2,
          //   maxWidth: "100%",
          //   border: "1px solid gray",
          //   borderRadius: "10px",
          //   height: "104px",
          //   p: 2,
          //   justifyContent: "center",
          //   textAlign: "center",
          //   display: "flex",
        }}
      >
        <Button
          variant="outlined"
          sx={{ marginTop: 3, height: 140 }}
          fullWidth
          onClick={handleOpenAddress}
        >
          +Add New Address
        </Button>

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
              {copy ? DynamicAddress : <></>}
              {DynamicAddress}
              <ToastContainer />
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

const DynamicAddress = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [defName, setDefName] = useState([]);
  const [defAddress, setDefAddress] = useState([]);
  const [edit, setEdit] = useState(false);

  const finaluser = localStorage.getItem("userName") || [];
  const finalAddress = localStorage.getItem("userAddress") || [];

  const handleEdit = () => {
    setEdit(true);
  };

  const handleEditClose = () => {
    setEdit(false);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  let name = localStorage.getItem("addressName");
  let address = localStorage.getItem("addressLocation");

  const handleUpdate = () => {
    let updatedName = document.getElementById("updateName").value;
    let updatedEmail = document.getElementById("updatedAddress").value;

    localStorage.setItem("addressName", updatedName);
    localStorage.setItem("addressLocation", updatedEmail);
    setEdit(false);
  };

  return (
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
        {finaluser((response) => (
          <>
            <Grid item xs display={"flex"}>
              <Typography gutterBottom variant="p" component="div">
                <Radio
                  checked={selectedValue === "b"}
                  onChange={handleChange}
                  value="b"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "B" }}
                />
                {name}
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
                onClick={handleEdit}
                sx={{
                  backgroundColor: "green",
                  color: "white",
                  mr: 1,
                  borderRadius: 2,
                  "&:hover": {
                    background: "green",
                  },
                }}
              >
                <EditOutlined sx={{ fontSize: "large" }} />
              </IconButton>
              <Backdrop open={edit}>
                <Box sx={{ background: "white", p: 2, width: 300, zIndex: 1 }}>
                  <label>Name:</label>
                  <br />
                  <br />
                  <TextField placeholder={name} id="updateName" fullWidth>
                  </TextField>{" "}
                  <br /> <br />
                  <label>Address:</label>
                  <br />
                  <br />
                  <TextField
                    placeholder={address}
                    id="updatedAddress"
                    fullWidth
                  ></TextField>{" "}
                  <br /> <br />
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleUpdate}
                  >
                    Save
                  </Button>
                  <Button onClick={handleEditClose}>Close</Button>
                </Box>
              </Backdrop>

              <IconButton
                aria-label="delete"
                size="small"
                sx={{
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: 2,
                  "&:hover": {
                    background: "red",
                  },
                }}
              >
                <DeleteOutline sx={{ fontSize: "large" }} />
              </IconButton>
            </Grid>
          </>
        ))}
      </Grid>
      <Typography color="text.secondary" variant="body2">
        {address}
      </Typography>
    </Box>
  );
};
