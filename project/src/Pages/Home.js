import React from 'react'
import Layout from '../Components/layout/Layout'
import HomePage from '../Components/Reusable/HomePage'
import HomeCategory from '../Components/Reusable/HomeCategory'

const Home = () => {
  return (
    <div>
        <Layout>
          {/* calling just two function for home page Homepage contained only image slider with inputs and HomeCategory contianed all services   */}
            <HomePage />
            <HomeCategory />
        </Layout>
    </div>
  )
}

export default Home