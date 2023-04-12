import { useEffect } from 'react';
import api from './API/Fetch_data_Api';
import './App.css';

function App() {
  useEffect(()=>{
    api.get_Api_Category()
    api.get_categories_home()
  },[])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
