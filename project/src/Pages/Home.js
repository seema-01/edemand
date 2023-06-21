import React, { useEffect } from 'react'
import Layout from '../Components/layout/Layout'
import HomePage from '../Components/Reusable/HomePage'
import HomeCategory from '../Components/Reusable/HomeCategory'

const Home = () => {
  useEffect(()=>{
    document.title = "home | eDemand"
  },[])
  return (
    <div>
          {/* calling just two function for home page Homepage contained only image slider with inputs and HomeCategory contianed all services   */}
            <HomePage />
            <HomeCategory />
    </div>
  )
}

export default Home