// import api from './API/Fetch_data_Api';
import './App.css';
import Home from './Pages/Home'
import Navigation from './Components/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import './Responsive/responsive.css'
import './Style/style.css'
import Category from './Pages/Category';
import About from './Pages/About';
import MobileNavigation from './Components/MobileNavigation';

function App() {
 
/*  useEffect(()=>{
    api.get_Api_Category()
    .then(console.log("default"))

    api.get_categories_home()
    .then(console.log("Home Services"))

    api.get_categories_car()
    .then(console.log("Car Section"))

    api.get_categories_laundry()
    .then(console.log("Laundry Section"))

    api.get_categories_plumbing()
    .then(console.log("Plumnig Section"))
  },[])
*/  
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <MobileNavigation />
        <Routes>
          <Route path='/' element={<Home /> }></Route>
          <Route path='/about' element={<About /> }></Route>
          <Route path='/category' element={<Category /> }></Route>
          {/* <Route path='/contact' element={<Contactus /> }></Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
