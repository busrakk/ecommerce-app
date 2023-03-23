import React from 'react'
import Brand from '../Brand'
import HomeSlider from '../HomeSlider'
import Product from "../Product"
import ShopByCategory from '../ProductByCategory/ShopByCategory'

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <Brand />
      <Product />
      <ShopByCategory />
    </div>
  )
}

export default Home
