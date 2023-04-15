import React from "react";
import Navbar from "./Navbar";
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
          <Outlet />
      </Box>
    </div>
  );
};

export default MasterLayout;
