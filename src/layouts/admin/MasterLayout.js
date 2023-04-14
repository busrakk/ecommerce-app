import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Sidenav from "./Sidenav";
import Box from "@mui/material/Box";

const MasterLayout = () => {
  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        {/* <Sidebar />  */}
        <div>
          <Outlet />
        </div>
        {/* <Footer /> */}
      </Box>
    </>
  );
};

export default MasterLayout;
