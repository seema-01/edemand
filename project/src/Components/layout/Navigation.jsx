import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  styled,
  IconButton,
  List,
  ListItemButton,
  Drawer,
  Container,
  Modal,
  TextField,
  Checkbox,
  Grid,
  Avatar,
  Link,
  FormControlLabel,
  Backdrop,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import CssBaseline from "@mui/material/CssBaseline";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React, { useState, useRef, useEffect } from "react";

//for creating logo
const StyledToolBar = styled(Toolbar)({
  display: "flex",
  backgroundColor: "white",
  color: "blue",
  maxWidth: "lg",
  justifyContent: "space-between",
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
};

const Navigation = () => {
  const [open, setOpen] = React.useState(false);
  const input = document.querySelector("#phone");
  const [login, isLogin] = React.useState(false);
  const [otp, setOtp] = React.useState(false);
  const OtphandleClose = () => {
    setOtp(false);
  };
  const OtphandleOpen = () => {
    setOtp(true);
  };
  const handleClose = () => {
    isLogin(false);
  };
  const handleOpen = () => {
    isLogin(true);
  };
  const telInputRef = useRef(null);
  useEffect(() => {
    const telInput = intlTelInput(telInputRef.current, {
      // Options go here
    });
  }, []);
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Container>
        <AppBar
          position="sticky"
          style={{ background: "none", boxShadow: "none" }}
        >
          <Box>
            <StyledToolBar>
              <IconButton
                color="inherit"
                aria-label="open-drawer"
                edge="start"
                sx={{ mr: 2, display: { md: "none" } }}
                onClick={() => setOpen(true)}
              >
                <MenuIcon />
              </IconButton>

              {/* Set logo and burger menu in one side */}
              <div>
                <Drawer open={open} onClose={() => setOpen(false)}>
                  <List>
                    <ListItemButton href="/home">HOME</ListItemButton>
                    <ListItemButton href="/about us">ABOUT US</ListItemButton>
                    <ListItemButton href="/all categories">
                      ALL CATEGORIES{" "}
                    </ListItemButton>
                    <ListItemButton href="/all providers">
                      ALL PROVIDERS
                    </ListItemButton>
                    <ListItemButton href="/conatct us">
                      CONATCT US
                    </ListItemButton>
                  </List>
                </Drawer>

                <NavLink
                  style={{ textDecoration: "none", fontSize: 20 }}
                  to="/"
                >
                  eDemand
                </NavLink>
              </div>

              <Box sx={{ display: { xs: "none", lg: "block" } }}>
                <NavLink
                  to="/"
                  style={({ isActive }) => {
                    return {
                      paddingLeft: "5%",
                      textDecoration: "none",
                      color: "black",
                      borderBottom: isActive ? "1px sloid " : "",
                    };
                  }}
                >
                  Home
                </NavLink>
                
                <NavLink
                  to="/about"
                  style={{
                    paddingLeft: "5%",
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  About
                </NavLink>
                <NavLink
                  to="/categorys"
                  style={{
                    paddingLeft: "5%",
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Category
                </NavLink>
                <NavLink
                  to="/providers"
                  style={{
                    paddingLeft: "5%",
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Provider
                </NavLink>
                <NavLink
                  to="/contact"
                  style={{
                    paddingLeft: "5%",
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Contact
                </NavLink>
              </Box>

              <Button
                variant="contained"
                startIcon={<AccountCircleIcon />}
                onClick={handleOpen}
              >
                Sign in
              </Button>
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={login}
              >
                <Box
                  sx={{
                    background: "white",
                    color: "black",
                    width: "380px",
                    borderRadius: "10px",
                  }}
                >
                  <Box
                    marginLeft={3}
                    marginRight={3}
                    marginTop={3}
                    marginBottom={3}
                  >
                    <Box display={"flex"}>
                      <Typography marginRight={"auto"} color={"gray"}>
                        <strong>Login</strong>
                      </Typography>
                      {<ClearIcon onClick={handleClose} />}
                    </Box>
                    {/* img */}

                    <Box sx={{ textAlign: "center", marginTop: "60px" }}>
                      <Typography marginBottom={2}>Welcome!</Typography>
                      <Typography color={"gray"}>
                        Enter Phone number to continue and we will <br /> a
                        verification code to this number.{" "}
                      </Typography>
                    </Box>
                    <Box display={"block"}>
                      <br />
                      <br />
                      <br />
                      {/* form */}
                      <Box display={"flex"}>
                        <input
                          ref={telInputRef}
                          type="tel"
                          style={{
                            width: "10px",
                            background: "#f2f1f6",
                            height: "30px",
                            borderRadius: "4px",
                            border: "1px solid grey",
                          }}
                        />
                        <input
                          type="tel"
                          style={{
                            paddingLeft: 10,
                            marginLeft: 5,
                            width: "260px",
                            background: "#f2f1f6",
                            borderRadius: "4px",
                            border: "1px solid grey",
                          }}
                          placeholder="Enter Phone number"
                        />
                      </Box>
                      <br />

                      {/* --------------------------------------------------------------------------------------- */}
                      {/* on this button click login page open and user give opt to this page  */}
                      <Button
                        onClick={OtphandleOpen}
                        variant="contained"
                        size="medium"
                        fullWidth
                      >
                        <Typography>Login to Continue</Typography>
                      </Button>
                      <Backdrop
                        sx={{
                          color: "#fff",
                          zIndex: (theme) => theme.zIndex.drawer + 1,
                        }}
                        open={otp}
                      >
                        <Box
                          sx={{
                            background: "white",
                            color: "black",
                            width: "380px",
                            height: "430px",
                            borderRadius: "10px",
                          }}
                        >
                          <Box
                            marginLeft={3}
                            marginRight={3}
                            marginTop={3}
                            marginBottom={3}
                          >
                            <Box display={"flex"}>
                              <Typography marginRight={"auto"}>
                                Login
                              </Typography>
                              {<ClearIcon onClick={OtphandleClose} />}
                            </Box>

                            {/*  */}
                            <Box alignItems={"center"} textAlign={"center"}>
                              <Typography>Enter Verification Code</Typography>
                              <Typography>
                                We have Sent a Verification code to <br />
                                <Typography>+91 -9876543210</Typography>
                              </Typography>
                              <Box display={"block"}>
                                <br />
                                <br />

                                {/*  */}

                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <TextField
                                    size="small"
                                    sx={{
                                      width: "40px",
                                      borderRadius: 2,
                                      backgroundColor: "#F2F1F6",
                                    }}
                                  ></TextField>
                                  <TextField
                                    size="small"
                                    sx={{
                                      width: "40px",
                                      borderRadius: 2,
                                      backgroundColor: "#F2F1F6",
                                    }}
                                  ></TextField>
                                  <TextField
                                    size="small"
                                    sx={{
                                      width: "40px",
                                      borderRadius: 2,
                                      backgroundColor: "#F2F1F6",
                                    }}
                                  ></TextField>
                                  <TextField
                                    size="small"
                                    sx={{
                                      width: "40px",
                                      borderRadius: 2,
                                      backgroundColor: "#F2F1F6",
                                    }}
                                  ></TextField>
                                  <TextField
                                    size="small"
                                    sx={{
                                      width: "40px",
                                      fontSize: "small",
                                      borderRadius: 2,
                                      backgroundColor: "#F2F1F6",
                                    }}
                                  ></TextField>
                                  <TextField
                                    size="small"
                                    sx={{
                                      width: "40px",
                                      fontSize: "small",
                                      borderRadius: 2,
                                      backgroundColor: "#F2F1F6",
                                    }}
                                  ></TextField>
                                </Box>
                                {/*  */}
                                <Button
                                  variant="outlined"
                                  display={"flex"}
                                  alignItems={"center"}
                                  sx={{ mt: 6 }}
                                >
                                  Resend OTP:<Typography>26s</Typography>
                                </Button>
                              </Box>
                              <br />
                              <br />
                              <br />
                              <Box>
                                <Button
                                  variant="contained"
                                  size="medium"
                                  sx={{}}
                                  fullWidth
                                >
                                  Verify and Process
                                </Button>
                              </Box>
                            </Box>
                            {/* form */}
                          </Box>
                        </Box>
                      </Backdrop>

                      {/* form */}
                      <Box sx={{ textAlign: "center", mt: 3 }}>
                        <Typography
                          sx={{ mb: 0.1 }}
                          color={"gray"}
                          fontSize={14}
                        >
                          By Continuing you agree to out
                        </Typography>
                        <Link fontSize={14}>Terms of Service </Link> &{" "}
                        <Link fontSize={14}>Privacy Policy</Link>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Backdrop>
            </StyledToolBar>
          </Box>
        </AppBar>
      </Container>
    </Box>
  );
};

export default Navigation;
