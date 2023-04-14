import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Sidenav from "./Sidenav";
import Box from "@mui/material/Box";
import "../../assets/css/adminDashboard.css";

const MasterLayout = () => {
  return (
    <div className="bgcolor">
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        {/* <Sidebar />  */}
          <Outlet />
        {/* <Footer /> */}
      </Box>
    </div>
  );
};

export default MasterLayout;
