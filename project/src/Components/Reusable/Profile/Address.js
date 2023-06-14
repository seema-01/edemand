import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import {
  Backdrop,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
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

  let name = localStorage.getItem("userName");
  let address = localStorage.getItem("userAddress");

  const handleUpdate = () => {
    let updatedName = document.getElementById("updateName").value;
    let updatedEmail = document.getElementById("updatedAddress").value;

    localStorage.setItem("addressName", updatedName);
    localStorage.setItem("addressLocation", updatedEmail);
    setEdit(false);
  };

  return (
    <div>
      <Box>
        <DynamicAddress />
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

    const userName = JSON.parse(localStorage.getItem("userName")) || [];
    const userAddress = JSON.parse(localStorage.getItem("userAddress")) || [];
    userName.push(name);
    userAddress.push(location);
    localStorage.setItem("userName", JSON.stringify(userName));
    localStorage.setItem("userAddress", JSON.stringify(userAddress));

    toast.success("Address Added Success");
    setCopy(true);

    isOpenAdd(false);
  };

  return (
    <>
      <Box
        sx={{
          mx: 2,
        }}
      >
        <Button
          variant="outlined"
          sx={{ marginTop: 3, height: 100 }}
          fullWidth
          onClick={handleOpenAddress}
        >
          +Add New Address
        </Button>

        <Backdrop open={openAdd}>
          <Box sx={{ background: "white" }} borderRadius={"10px"} padding={3}>
            <Typography>Add New Address</Typography>
            <Divider />
            <br />
            <AddressForm />
            <br />
            <Button variant="outlined" fullWidth onClick={handleCloseAdderss}>
              Cancel
            </Button>
          </Box>
        </Backdrop>
      </Box>
    </>
  );
};

export default Address;

const DynamicAddress = () => {
  const [addressList, setAddressList] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);

  useEffect(() => {
    const storedAddresses = localStorage.getItem("addresses");
    if (storedAddresses) {
      setAddressList(JSON.parse(storedAddresses));
    }
  }, []);

  const handleSelect = (index) => {
    setSelectedAddress(index);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleEditClose = () => {
    setEditIndex(null);
  };

  const handleDelete = (index) => {
    setDeleteIndex(index);
  };

  const handleDeleteClose = () => {
    setDeleteIndex(null);
  };

  const handleUpdate = (index) => {
    const updatedAddresses = [...addressList];
    const nameInput = document.getElementById(`updateName${index}`);
    const addressInput = document.getElementById(`updateAddress${index}`);
    const newName = nameInput.value.trim();
    const newAddress = addressInput.value.trim();

    if (newName === '' || newAddress === '') {
      toast.error("Name and address cannot be empty");
      return;
    }

    updatedAddresses[index].name = newName;
    updatedAddresses[index].address = newAddress;
    localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
    setAddressList(updatedAddresses);
    setEditIndex(null);
  };

  const handleDeleteAddress = (index) => {
    const updatedAddresses = [...addressList];
    updatedAddresses.splice(index, 1);
    localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
    setAddressList(updatedAddresses);
    setDeleteIndex(null);
  };

  return (
    <>
      {addressList.map((address, index) => (
        <Box
          key={index}
          sx={{
            my: 3,
            mx: 2,
            maxWidth: "100%",
            border: "1px solid gray",
            borderRadius: "10px",
            p: 2,
          }}
        >
          <Box sx={{ display: "flex", textAlign: "center" }}>
            <Grid container>
              <Grid item xs display={"flex"}>
                <Typography gutterBottom variant="p" component="div">
                  <Radio
                    checked={index === selectedAddress}
                    onChange={() => handleSelect(index)}
                    value={index}
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                  />
                  {address.name}
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
                  {address.location}
                </Button>
              </Grid>
              <Grid item>
                <IconButton
                  aria-label="edit"
                  size="small"
                  onClick={() => handleEdit(index)}
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
                <Backdrop open={editIndex === index}>
                  <Box sx={{ background: "white", p: 2, width: 300, zIndex: 1 }}>
                    <label>Name:</label>
                    <br />
                    <br />
                    <TextField
                      defaultValue={address.name}
                      id={`updateName${index}`}
                      fullWidth
                    />
                    <br />
                    <br />
                    <label>Address:</label>
                    <br />
                    <br />
                    <TextField
                      defaultValue={address.address}
                      id={`updateAddress${index}`}
                      fullWidth
                    />
                    <br />
                    <br />
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => handleUpdate(index)}
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
                  onClick={() => handleDelete(index)}
                >
                  <DeleteOutline sx={{ fontSize: "large" }} />
                </IconButton>
                <Backdrop open={deleteIndex === index}>
                  <Box sx={{ background: "white", p: 4 }}>
                    <Typography>
                      Are You Sure You Want to Delete This Address?
                    </Typography>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDeleteAddress(index)}
                    >
                      Delete
                    </Button>
                    <Button onClick={handleDeleteClose}>Close</Button>
                  </Box>
                </Backdrop>
              </Grid>
            </Grid>
          </Box>
          <Typography color="text.secondary" variant="body2">
            {address.address}
          </Typography>
        </Box>
      ))}
    </>
  );
};


const AddressForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("home");
  const [addressList, setAddressList] = useState([]);

  useEffect(() => {
    const storedAddresses = localStorage.getItem("addresses");
    if (storedAddresses) {
      setAddressList(JSON.parse(storedAddresses));
    }
  }, []);

  const handleAddAddress = () => {
    if (name.trim() !== "" && address.trim() !== "") {
      const newAddress = {
        name,
        address,
        location,
      };
      const updatedAddressList = [...addressList, newAddress];
      setAddressList(updatedAddressList);
      localStorage.setItem("addresses", JSON.stringify(updatedAddressList));
      setName("");
      setAddress("");
      setLocation("home");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        style={{ width: "200px", height: "30px" }}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <br /> <br />
      <input
        type="text"
        style={{ width: "200px", height: "30px" }}
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />{" "}
      <br /> <br />
      <select value={location} onChange={(e) => setLocation(e.target.value)}>
        <option value="home">Home</option>
        <option value="office">Office</option>
      </select>{" "}
      <br /> <br />
      <Button variant="contained" fullWidth onClick={handleAddAddress}>
        Add Address
      </Button>
      {/* <Button variant="outlined" fullWidth >cancle</Button> */}
    </div>
  );
};
