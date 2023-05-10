import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Providers from "./Pages/Provider";
import PageNotFound from "./Pages/PageNotFound";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Footer from "./Components/layout/Footer";
import Reviews from "./Components/Reusable/Reviews";
import Navigation from "./Components/layout/Navigation";
import ProfileNavigation from "./Components/Reusable/Profile/ProfileNavigation";
import ProfilePayment from "./Components/Reusable/Profile/ProfilePayment";
import { Box, Container, Paper } from "@mui/material";
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import ProfileBooking from "./Components/Reusable/Profile/ProfileBooking";
import ProfileAddress from "./Components/Reusable/Profile/ProfileAddress";
import ProfileBookmark from "./Components/Reusable/Profile/ProfileBookmark";
import ProfileNotification from "./Components/Reusable/Profile/ProfileNotification";
import ProviderServices from "./Components/Reusable/ProviderServices";
import PaymentPage from "./Components/Reusable/Payment";
import "./CSS/style.css";
import { createStore } from "redux";
import allReducers from "./reducer";
// Provider can connect our global state our store to app
import { Provider } from "react-redux";
import theme from "./Theme";
// import MyProvider from "./Components/Reusable/MyProvider";
// import Countervalue from "./reducer/Countervalue";
// import HandleSubmit, { GetCities } from "./Components/Reusable/Firebase";
// import Firebase from "./Components/Reusable/Firebase";
// import CssBaseline from "@mui/material/CssBaseline";
// import MyApp from "./Components/layout/ThemeButton";
// import ToggleColorMode from "./Components/layout/ThemeButton";

// Store -> Globalized State
let myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{background: "#f2f1f6"}}>
        <Provider store={myStore}>
          <div className="App">
            <BrowserRouter>
              <Navigation />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/providers" element={<Providers />}></Route>
                <Route
                  path="/providers/services"
                  element={<ProviderServices />}
                ></Route>
                <Route
                  path="/providers/services/payment"
                  element={<PaymentPage />}
                ></Route>
                <Route
                  path="/providers/services/reviews"
                  element={<Reviews />}
                ></Route>
                <Route path="/categorys" element={<Category />}></Route>
                <Route path="/contact" element={<Contact />}></Route>

                {/* profile section  */}

                <Route
                  path="/profile/address"
                  element={<ProfileAddress />}
                ></Route>
                <Route
                  path="/profile/payment"
                  element={<ProfilePayment />}
                ></Route>
                <Route
                  path="/profile/booking"
                  element={<ProfileBooking />}
                ></Route>
                <Route
                  path="/profile/bookmark"
                  element={<ProfileBookmark />}
                ></Route>
                <Route
                  path="/profile/notifications"
                  element={<ProfileNotification />}
                ></Route>
                <Route
                  path="/profile"
                  element={
                    <>
                      <Container>
                        {" "}
                        <ProfileNavigation />{" "}
                      </Container>{" "}
                    </>
                  }
                ></Route>
                {/* <Route path="/calander" element={<Calander />}></Route> */}

                {/* 404 Page Not Found */}
                <Route path="/*" element={<PageNotFound />}></Route>
              </Routes>
              <Footer />
            </BrowserRouter>
          </div>
        </Provider>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
