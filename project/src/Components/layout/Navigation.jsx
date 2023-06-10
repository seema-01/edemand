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
  Backdrop,
  createTheme,
  Avatar,
  Tabs,
  Tab,
  Badge,
  Divider,
} from "@mui/material";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../../firebase/config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import ClearIcon from "@mui/icons-material/Clear";
import "intl-tel-input/build/css/intlTelInput.css";
import { NavLink, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "@emotion/react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CloseIcon from "@mui/icons-material/Close";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import CartItem from "../Reusable/CartItem";
import Cart from "../Reusable/CartItem";

//for creating logo
const StyledToolBar = styled(Toolbar)({
  display: "flex",
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

const label = { inputProps: { "area-label": "switch demo" } };

const Navigation = ({ check, changeLight, changeDark }) => {
  let id = localStorage.getItem("Data");
  const input = document.querySelector("#phone");

  const [open, setOpen] = React.useState(false);
  const [login, isLogin] = React.useState(false);
  const [openSetting, setOpenSetting] = useState(false);
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const [value, setValue] = useState(0);
  const [cart, setCart] = useState(false);
  const [phoneNo, setPhoneNo] = useState("");
  // First Attempts => set here to second goes from 60 to 0
  // const [counter, setCounter] = React.useState(60);

  const handleOpenSetting = () => {
    setOpenSetting(true);
  };
  const handleCloseSetting = () => {
    setOpenSetting(false);
  };
  const handleOpen = () => {
    isLogin(true);
  };
  const handleClose = () => {
    isLogin(false);
  };

  const handleOpenCart = () => {
    setCart(true);
  };

  const handleCloseCart = () => {
    setCart(false);
  };

  let finalNo = "";

  // mode change toggle
  const [view, setView] = React.useState("list");
  // tsx file
  // const handleChange = (
  //   event: React.MouseEvent<HTMLElement>,
  //   nextView: string
  // ) => {
  //   setView(nextView);
  // };
  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  const theme = useTheme();

  // function for Capture Code Verification
  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  // Function for SignUP
  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  //Function for Otp Verification
  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  const islogined = localStorage.getItem("isLoggedIn");
  const navigate = useNavigate();

  const myLink = {
    color: theme.palette.color.navLink,
    textDecoration: "none",
  };

  return (
    <Box zIndex={1000}>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: theme.palette.background.box,
          boxShadow: "none",
        }}
      >
        <Container>
          <Box>
            <StyledToolBar>
              <Box display={"flex"} sx={{ alignItems: "center" }}>
                <IconButton
                  color="inherit"
                  aria-label="open-drawer"
                  edge="start"
                  sx={{ mr: 2, display: { lg: "none" } }}
                  onClick={() => setOpen(true)}
                >
                  <MenuIcon />
                </IconButton>
                {/* #Phone Menu  */}
                {/* Set logo and burger menu in one side */}
                <div>
                  <Drawer open={open} onClose={() => setOpen(false)}>
                    <Box
                      display={"block"}
                      width={140}
                      padding={3}
                      marginLeft={3}
                    >
                      <NavLink style={myLink} to="/">
                        Home
                      </NavLink>
                      <br />
                      <br />
                      <NavLink style={myLink} to="/about">
                        About us
                      </NavLink>
                      <br />
                      <br />
                      <NavLink style={myLink} to="/categorys">
                        Categories
                      </NavLink>
                      <br />
                      <br />
                      <NavLink style={myLink} to="/providers">
                        Providers
                      </NavLink>
                      <br />
                      <br />
                      <NavLink style={myLink} to="/contact">
                        Contact
                      </NavLink>
                      <br />
                      <br />
                    </Box>
                  </Drawer>

                  {/* # PC Navigation  */}
                  {/* logo  */}
                  <NavLink
                    style={{
                      textDecoration: "none",
                      fontSize: 20,
                      marginLeft: -23,
                      color: theme.palette.color.logo,
                    }}
                    to="/"
                  >
                    eDemmand
                  </NavLink>
                </div>

                {/* Navigation Links  */}
              </Box>
              <Box sx={{ display: { xs: "none", lg: "block" } }}>
                <Tabs
                  sx={{ marginLeft: "auto" }}
                  indicatorColor="primary"
                  // defaultValue={value}
                  value={value}
                  onChange={(e, value) => setValue(value)}
                >
                  <Tab
                    value={0}
                    onClick={() => navigate("/")}
                    sx={{ color: theme.palette.color.navLink }}
                    label="Home"
                  />
                  <Tab
                    value={1}
                    onClick={() => navigate("/about")}
                    label="About Us"
                    sx={{ color: theme.palette.color.navLink }}
                  />
                  <Tab
                    value={2}
                    onClick={() => navigate("/categorys")}
                    label="Category"
                    sx={{ color: theme.palette.color.navLink }}
                  />
                  <Tab
                    value={3}
                    onClick={() => navigate("/providers")}
                    label="Providers"
                    sx={{ color: theme.palette.color.navLink }}
                  />
                  <Tab
                    value={4}
                    onClick={() => navigate("/contact")}
                    label="Contact"
                    sx={{ color: theme.palette.color.navLink }}
                  />
                </Tabs>
              </Box>

              {/* #Navigation Button functionality */}
              <Box sx={{ display: "flex", marginRight: -4 }}>
                {islogined === "" ? (
                  <Button
                    id="sign_in"
                    variant="contained"
                    startIcon={<AccountCircleIcon />}
                    onClick={handleOpen}
                  >
                    Sign in
                  </Button>
                ) : (
                  <IconButton
                    id="logined_user"
                    style={{
                      borderRadius: "100px",
                      "&:hover": {
                        backgroundColor: "white",
                      },
                    }}
                    onClick={() => navigate("/profile")}
                  >
                    <Avatar sx={{ height: "30px", width: "30px" }} />
                  </IconButton>
                )}

                <IconButton aria-label="cart" onClick={handleOpenCart}>
                  <ShoppingCartOutlinedIcon />
                </IconButton>

                {islogined === "" ? (
                  <Drawer anchor="right" open={cart} onClose={handleCloseCart}>
                    <Box sx={{ width: 400 }}>
                      <Box sx={{ textAlign: "center" }}>
                        <img
                          src="https://img.freepik.com/free-vector/corrugated-box-white-background_1308-111117.jpg"
                          style={{
                            width: "220px",
                            borderRadius: "500px",
                            marginTop: "150px",
                          }}
                        />
                        <br />
                        <br />
                        <br />
                        <br />
                        <h3>No Products here!</h3>
                        <br />
                        Your cart is empt.y. Login & Add products <br /> to that
                        we
                        <h4 style={{ color: "gray" }}>can serve you!</h4>
                      </Box>
                    </Box>
                  </Drawer>
                ) : (
                  <Drawer anchor="right" open={cart} onClose={handleCloseCart}>
                    <Box sx={{ width: 500 }}>
                      <Cart />
                    </Box>
                  </Drawer>
                )}

                <IconButton onClick={handleOpenSetting}>
                  <SettingsOutlinedIcon />{" "}
                </IconButton>
              </Box>

              <Drawer anchor="right" open={openSetting}>
                <Box width="400px">
                  <Box>
                    {/* Heading  */}
                    <AppBar position="static">
                      <Toolbar>
                        <IconButton
                          size="medium"
                          edge="start"
                          color="inherit"
                          aria-label="menu"
                          // sx={{ mr: 2 }}
                        >
                          <SettingsOutlinedIcon />
                        </IconButton>

                        <Typography
                          variant="h6"
                          component="div"
                          sx={{ flexGrow: 1 }}
                        >
                          eDemmand&nbsp;Setting
                        </Typography>
                        <IconButton
                          onClick={handleCloseSetting}
                          sx={{ color: theme.palette.color.navLink }}
                        >
                          <CloseIcon />
                        </IconButton>
                      </Toolbar>
                    </AppBar>

                    {/* Toggle Button for Modes  */}
                    <Box
                      justifyContent={"space-around"}
                      display={"flex"}
                      marginTop={3}
                    >
                      <ToggleButtonGroup
                        value={view}
                        exclusive
                        onChange={handleChange}
                      >
                        <ToggleButton
                          onClick={changeLight}
                          value="list"
                          aria-label="list"
                        >
                          <Brightness7Icon /> Light Theme
                        </ToggleButton>
                        <ToggleButton
                          onClick={changeDark}
                          value="module"
                          aria-label="module"
                        >
                          <Brightness4Icon /> Dark Theme
                        </ToggleButton>
                      </ToggleButtonGroup>
                    </Box>
                  </Box>
                </Box>
              </Drawer>
              {/* ------------------------------------------------- */}
              {/* =================Authentication=================  */}
              {/* ------------------------------------------------- */}
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={login}
              >
                <Box
                  sx={{
                    color: "black",
                    background: theme.palette.background.box,
                    width: "400px",
                    borderRadius: "10px",
                    textAlign: "center",
                    margin: 30,
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
                        Login
                      </Typography>
                      {<ClearIcon onClick={handleClose} />}
                    </Box>
                    <Box id="recaptcha-container"></Box>
                    {user ? (
                      <Box>
                        <Typography>👍Login Success</Typography>
                        {(finalNo = ph)}
                        {
                          (localStorage.setItem("ContactInfo", finalNo),
                          localStorage.setItem("isLoggedIn", "true"))
                        }
                      </Box>
                    ) : (
                      <Box sx={{ justifyContent: "center" }}>
                        <Box
                          sx={{ textAlign: "center", marginTop: "60px" }}
                        ></Box>
                        {showOTP ? (
                          <>
                            <label
                              htmlFor="otp"
                              className="font-bold text-xl text-white text-center"
                            >
                              <Typography
                                sx={{ color: theme.palette.color.navLink }}
                              >
                                Enter Verification Code
                              </Typography>
                              <Typography
                                sx={{ color: theme.palette.color.navLink }}
                              >
                                We have Sent a Verification code to <br />
                                <Typography>Your Number</Typography>
                              </Typography>
                            </label>
                            <Box marginTop={5}>
                              <OtpInput
                                value={otp}
                                onChange={setOtp}
                                OTPLength={6}
                                otpType="number"
                                disabled={false}
                                autoFocus
                                className="opt-container "
                              ></OtpInput>
                            </Box>{" "}
                            <br />
                            <Button
                              onClick={onOTPVerify}
                              className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                            >
                              {loading && (
                                <CgSpinner
                                  size={20}
                                  className="mt-1 animate-spin"
                                />
                              )}

                              <Button
                                variant="contained"
                                size="medium"
                                sx={{ width: "350px" }}
                              >
                                Verify and Process
                              </Button>
                            </Button>
                          </>
                        ) : (
                          <>
                            <Typography
                              sx={{ color: theme.palette.color.navLink }}
                              marginBottom={2}
                            >
                              Welcome!
                            </Typography>
                            <Typography
                              sx={{ color: theme.palette.color.navLink }}
                            >
                              Enter Phone number to continue and we will a
                              verification code to this number.{" "}
                            </Typography>
                            <Box
                              sx={{
                                marginTop: 5,
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <PhoneInput
                                country={"in"}
                                value={ph}
                                onChange={setPh}
                                containerStyle={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              />
                            </Box>
                            <br />
                            <br />
                            <Button
                              onClick={onSignup}
                              variant="contained"
                              size="large"
                            >
                              {loading && (
                                <CgSpinner
                                  size={20}
                                  className="mt-1 animate-spin"
                                />
                              )}
                              <span>Login to continue</span>
                            </Button>{" "}
                            <br /> <br />
                            <Typography sx={{ color: "gray" }}>
                              By Continue you agree to out
                            </Typography>
                            <Typography
                              display={"flex"}
                              justifyContent={"center"}
                            >
                              <NavLink
                                style={{ color: theme.palette.color.navLink }}
                              >
                                Terms of services
                              </NavLink>{" "}
                              &nbsp;
                              <p style={{ color: theme.palette.color.navLink }}>
                                &
                              </p>{" "}
                              &nbsp;
                              <NavLink
                                style={{ color: theme.palette.color.navLink }}
                              >
                                Privacy Policy
                              </NavLink>
                            </Typography>
                          </>
                        )}
                      </Box>
                    )}
                  </Box>
                </Box>
              </Backdrop>
            </StyledToolBar>
          </Box>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navigation;
