// import api from './API/Fetch_data_Api';
import './App.css';
import Home from './Pages/Home'
import Navigation from './Components/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
        <Routes>
          <Route path='/' element={<Home /> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
