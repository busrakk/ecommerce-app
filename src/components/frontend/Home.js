import React from 'react'
import Brand from './Brand'
import HomeSlider from './Home/HomeSlider'
import ProductByFeatured from "./Home/ProductByFeatured"
import Category from './Category'

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <Brand />
      <ProductByFeatured />
      <Category />
    </div>
  )
}

export default Home
