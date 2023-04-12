import { useEffect } from 'react';
import api from './API/Fetch_data_Api';
import './App.css';

function App() {
  /*Just For check it working or not...*/
  useEffect(()=>{
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
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
