import React from 'react'
import Brand from '../Brand'
import HomeSlider from './HomeSlider'
import ProductByFeatured from "./ProductByFeatured"
import Category from '../Category'

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
