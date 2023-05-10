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
  // Modal,
  // TextField,
  // Checkbox,
  // Grid,
  // Avatar,
  // Link,
  // FormControlLabel,
  Backdrop,
  // Switch,
} from "@mui/material";
// import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../../firebase/config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import ClearIcon from "@mui/icons-material/Clear";
import "intl-tel-input/build/css/intlTelInput.css";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React, { useState, useRef, useEffect } from "react";
// import ThemeButton from "./ThemeButton";
// import intlTelInput from "intl-tel-input";
// import CssBaseline from "@mui/material/CssBaseline";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import OTPInput, { ResendOTP } from "otp-input-react";
// import ToggleColorMode from "../../Theme";

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
  // const OtphandleClose = () => {
  //   setOtp(false);
  // };
  // const OtphandleOpen = () => {
  //   setOtp(true);
  // };
  //
  const handleOpen = () => {
    isLogin(true);
  };
  const handleClose = () => {
    isLogin(false);
  };
  const telInputRef = useRef(null);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  // First Attempts => set here to second goes from 60 to 0
  const [counter, setCounter] = React.useState(60);

  // Third Attempts
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

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
                    <ListItemButton href="/">Home</ListItemButton>
                    <ListItemButton href="/about">About us</ListItemButton>
                    <ListItemButton href="/categorys">
                      Categories
                    </ListItemButton>
                    <ListItemButton href="/providers">
                      Providers
                    </ListItemButton>
                    <ListItemButton href="/contact">
                      Contact
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
                    background: "white",
                    color: "black",
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
                      <Typography>👍Login Success</Typography>
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
                              <Typography>Enter Verification Code</Typography>
                              <Typography>
                                We have Sent a Verification code to <br />
                                <Typography>+91 -9876543210</Typography>
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
                            <Typography marginBottom={2}>Welcome!</Typography>
                            <Typography color={"gray"}>
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
                            <Typography>
                              <NavLink>Terms of services</NavLink> &
                              <NavLink>Privacy Policy</NavLink>
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
        </AppBar>
      </Container>
    </Box>
  );
};

export default Navigation;
