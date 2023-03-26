import React from 'react'
import Brand from '../Brand'
import HomeSlider from '../HomeSlider'
import ProductByFeatured from "../ProductByFeatured"
import ShopByCategory from '../ProductByCategory/ShopByCategory'

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <Brand />
      <ProductByFeatured />
      <ShopByCategory />
    </div>
  )
}

export default Home
