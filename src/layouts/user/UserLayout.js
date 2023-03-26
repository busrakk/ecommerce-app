import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Subtitle from "../../components/UI/Subtitle";

const UserLayout = () => {
  return (
    <div>
      <div className="mt-24 bg-gray-50">
        <Subtitle>Hesap</Subtitle>

        <div className="grid px-20 grid-cols-1 md:grid-cols-12 items-start pt-4 pb-16">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
