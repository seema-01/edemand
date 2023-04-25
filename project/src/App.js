import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Provider from "./Pages/Provider";
import PageNotFound from "./Pages/PageNotFound";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Footer from "./Components/layout/Footer";
import Review from "./Components/Reusable/Reviews";
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/provider" element={<Provider />}></Route>
          <Route path="/category" element={<Category />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/review" element={<Review />}></Route>
          <Route path="/*" element={<PageNotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
