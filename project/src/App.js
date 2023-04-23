import Aboutpage from "./Pages/Aboutpage";
import Contact from "./Pages/Contact";
import ContactForm from "./Components/ContactForm";
import DrawerComponent from "./Components/DrawerComponent";
import Navigation from "./Components/Navigation";
import Navigation1 from "./Components/Navigation1";
import Providers from "./Pages/Providers";
import Header from "./Components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
      {/* <Header /> */}
      <Routes>
        <Route path="/about" element={<Aboutpage />}></Route>
        <Route path="/provider" element={<Providers />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
      </BrowserRouter>
      {/* <Aboutpage /> */}
      {/* <ContactForm /> */}
      
    </div>
  );
}

export default App;
