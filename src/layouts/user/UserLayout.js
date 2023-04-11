import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const UserLayout = () => {
  return (
    <div className="bg-gray-50 mt-20">
      <div className="mx-16">
        <main className="grid grid-cols-1 mt-1 px-2 justify-center pt-12">
          <Navbar />
        </main>

        <div className="py-3 px-2 mx-auto gap-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
