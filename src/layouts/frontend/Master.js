import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer';
import Menu from './Menu';

const Master = () => {
  return (
    <>
       <Navbar />
       <Menu />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Master
