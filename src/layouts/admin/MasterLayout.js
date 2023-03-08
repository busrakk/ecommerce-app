import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const MasterLayout = () => {
  return (
    <div>
      <Navbar />
        <Sidebar />
        <div>
          <Outlet />
        </div>
      <Footer />
    </div>
  )
}

export default MasterLayout
