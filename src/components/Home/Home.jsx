import React from 'react'
import Products from './Products/Products'
import Slider from './Slider/Slider'
import "./Home.css"
import Banner from './Banner'
import Work from './Work/Work'
import Orders from './Orders/Orders'
const Home = () => {
  return (
    <>
      <Banner />
      <Slider />
      <Work/>
      <Products />
      <Orders/>
    </>
  )
}

export default Home