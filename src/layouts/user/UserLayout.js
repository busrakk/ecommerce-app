import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
// import { Outlet } from "react-router-dom";

const MasterLayout = () => {
  return (
    <div className="container bg-gray-100">
      <main className="grid grid-cols-1 mt-1 w-2xl px-2 mx-auto pt-12">
        <Navbar />
      </main>

      <div className="py-3 w-2xl px-2 mx-auto gap-5 grid grid-cols-1 lg:grid-cols-4">
        <div>
          <Sidebar />
        </div>
        {/* <Outlet /> */}
      </div>
    </div>
  );
};

export default MasterLayout;
