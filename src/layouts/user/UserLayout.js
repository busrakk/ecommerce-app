import React from "react";
import { Link, Outlet } from "react-router-dom";
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";

import Sidebar from "./Sidebar";

const UserLayout = () => {
  return (
    <div className="bg-gray-50">
      <div className="mt-24 container ">
        <div className="py-4 flex items-center gap-3">
          <Link to="/" className="text-primary text-base">
            <AiOutlineHome />
          </Link>
          <span className="text-sm text-gray-400">
            <AiOutlineRight />
          </span>
          <p className="text-gray-600 font-medium">Hesap</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-6 pt-4 pb-16">
          <Sidebar />

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
