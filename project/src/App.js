import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Provider from "./Pages/Provider";
import PageNotFound from "./Pages/PageNotFound";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Footer from "./Components/layout/Footer";
import Review from "./Components/Reusable/Reviews";
import Navigation from "./Components/layout/Navigation";
import ProfileNavigation from "./Components/Reusable/Profile/ProfileNavigation";
import ProfilePayment from "./Components/Reusable/Profile/ProfilePayment";
import { Container } from "@mui/material";
import ProfileBooking from "./Components/Reusable/Profile/ProfileBooking";
import ProfileAddress from "./Components/Reusable/Profile/ProfileAddress";
import ProfileBookmark from "./Components/Reusable/Profile/ProfileBookmark";
import ProfileNotification from "./Components/Reusable/Profile/ProfileNotification";
// import Calander from "./Components/Reusable/Calander";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/providers" element={<Provider />}></Route>
          <Route path="/categorys" element={<Category />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/reviews" element={<Review />}></Route>
          <Route path="/profile/address" element={<ProfileAddress />}></Route>
          <Route path="/profile/payment" element={<ProfilePayment />}></Route>
          <Route path="/profile/booking" element={<ProfileBooking />}></Route>
          <Route path="/profile/bookmark" element={<ProfileBookmark />}></Route>
          <Route path="/profile/notifications" element={<ProfileNotification />}></Route>
          {/* <Route path="/calander" element={<Calander />}></Route> */}
          <Route
            path="/profile"
            element={
              <>
                <Container>
                  <ProfileNavigation />
                </Container>
              </>
            }
          ></Route>
          
          <Route path="/*" element={<PageNotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
