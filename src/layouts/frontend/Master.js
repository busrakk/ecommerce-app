import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer';
import MegaMenu from './MegaMenu';

const Master = () => {
  return (
    <>
       <Navbar />
       <MegaMenu />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Master
