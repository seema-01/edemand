import React from 'react'
import Layout from '../Components/layout/Layout'
import HomePage from '../Components/Reusable/HomePage'
import HomeCategory from '../Components/Reusable/HomeCategory'

const Home = () => {
  return (
    <div>
        <Layout>
            <HomePage />
            <HomeCategory />
        </Layout>
    </div>
  )
}

export default Home