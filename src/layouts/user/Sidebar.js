import React from "react";
import { Link } from "react-router-dom";
import {
  RiUserSettingsLine,
  RiUserHeartLine,
  RiUserFollowLine,
  RiUserAddLine,
  RiUserStarLine,
} from "react-icons/ri";

const Sidebar = () => {
  return (
    <aside className="flex w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white shadow rounded-lg p-3 justify-center">
      <Link
        to="#"
        className="flex items-center space-x-4 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
      >
        <span className="text-2xl">
          <RiUserSettingsLine size={20} />
        </span>
        <span>Bilgilerim</span>
      </Link>

      <Link
        to="#"
        className="flex items-center space-x-4 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
      >
        <span className="text-2xl">
          <RiUserAddLine size={20} />
        </span>
        <span>Ürünlerim</span>
      </Link>

      <Link
        to="#"
        className="flex items-center space-x-4 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
      >
        <span className="text-2xl">
          <RiUserFollowLine size={20} />
        </span>
        <span>Siparişlerim</span>
      </Link>

      <Link
        to="#"
        className="flex items-center space-x-4 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
      >
        <span className="text-2xl">
          <RiUserStarLine size={20} />
        </span>
        <span>Bildirimler</span>
      </Link>

      <Link
        to="#"
        className="flex items-center space-x-4 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600"
      >
        <span className="text-2xl">
          <RiUserHeartLine size={20} />
        </span>
        <span>Favorilerim</span>
      </Link>
    </aside>
  );
};

export default Sidebar;
