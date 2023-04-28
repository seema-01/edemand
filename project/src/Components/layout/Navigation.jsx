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
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

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
  borderRadius:"10px",
  boxShadow: 24,
};

const Navigation = () => {
  const [open, setOpen] = React.useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [isopen, setisOpen] = React.useState(false);
  const handleOpen = () => setisOpen(true);
  const handleClose = () => setisOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Container>
      <AppBar position="sticky" style={{ background: "none", boxShadow: "none" }}>
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
                  <ListItemButton href="/conatct us">CONATCT US</ListItemButton>
                </List>
              </Drawer>
              <Typography variant="h6">eDemand</Typography>
            </div>

            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <NavLink
                to="/"
                style={{
                  paddingLeft: "1%",
                  textDecoration: "none",
                  color: "black",
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

            <Modal
              open={isopen}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Container component="main" maxWidth="xs" >
                  <CssBaseline />
                  <Box
                    sx={{
                      marginTop: 8,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      background: "white",
                      borderRadius: "10px",
                      padding: 2,
                      margin:0,
                    }}
                  >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                      <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                      Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                      />
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                      />
                      <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                      />
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Sign In
                      </Button>
                      <Grid container>
                        <Grid item xs>
                          <Link href="#" variant="body2">
                            Forgot password?
                          </Link>
                        </Grid>
                        <Grid item>
                          <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                          </Link>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Container>
              </Box>
            </Modal>
          </StyledToolBar>
        </Box>
      </AppBar>
      </Container>
    </Box>
  );
};

export default Navigation;
