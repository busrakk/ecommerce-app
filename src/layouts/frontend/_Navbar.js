import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiShoppingBasketLine } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import axios from "axios";
import swal from "sweetalert";

import {
  RiUserLine,
  RiUserSettingsLine,
  RiUserReceivedLine,
} from "react-icons/ri";

const Navbar = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    axios.post("/api/logout").then((res) => {
      if (res.data.success) {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_name");
        swal("Success", res.data.message, "success");
        navigate("/");
      }
    });
  };

  return (
    <div className="bg-white fixed top-0 z-50 w-full">
      <div className="border py-3 px-6 container">
        <div className="flex justify-between container">
          <Link to="/" className="flex items-center">
            <RiShoppingBasketLine size={28} className="text-gray-900" />
            <span className="ml-2 text-2xl font-bold uppercase text-gray-900">
              Shopper
            </span>
          </Link>

          <div className="mx-20 flex flex-1 gap-x-3 relative">
            <input
              type="text"
              className="w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-sm"
              placeholder="Aradığınız ürün, kategori veya markayı yazınız"
            />
            <button
              type="button"
              className="absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
            >
              <span className="sr-only">Submit Search</span>
              <AiOutlineSearch size={18} />
            </button>
          </div>

          {!localStorage.getItem("auth_token") ? (
            <>
              <div className="ml-2 flex space-x-1">
                <Link
                  to="#"
                  className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100"
                >
                  <div className="relative">
                    <MdOutlineShoppingCart size={20} />
                    <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                      3
                    </span>
                  </div>
                  <span className="text-sm font-normal">Sepetim</span>
                </Link>
                <Link
                  to="/login"
                  className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100"
                >
                  <HiOutlineUser size={20} />
                  <span className="text-sm font-normal">Giriş Yap</span>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="ml-2 flex space-x-1">
                <Link
                  to="#"
                  className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100"
                >
                  <div className="relative">
                    <MdOutlineShoppingCart size={20} />
                    <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                      3
                    </span>
                  </div>
                  <span className="text-sm font-normal">Sepetim</span>
                </Link>

                <Link
                  to="#"
                  className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100"
                >
                  <MdFavoriteBorder size={20} />
                  <span className="text-sm font-normal">Favorilerim</span>
                </Link>

                <Link
                  to="/notification"
                  className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100"
                >
                  <div className="relative">
                    <IoIosNotificationsOutline size={20} />
                    <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                      5
                    </span>
                  </div>
                  <span className="text-sm font-normal">Bildirimlerim</span>
                </Link>
                <div
                  className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100"
                  onClick={() => setOpen(!open)}
                >
                  <div className="relative">
                    <FaRegUserCircle size={24} />
                    {open && (
                      <div className="bg-white z-0 hover:z-50 p-4 w-52 shadow-lg absolute -left-28 top-10">
                        <div className="space-x-4">
                          <div
                            onClick={() => setOpen(false)}
                            className="text-sm cursor-pointer flex flex-col"
                          >
                            <Link
                              to="/profile"
                              className="text-gray-900 font-normal hover:text-gray-900 hover:bg-gray-100 p-2 rounded"
                            >
                              <div className="flex hover:font-bold items-center space-x-4">
                                <RiUserLine />
                                <span>Profilim</span>
                              </div>
                            </Link>
                            <Link
                              to="#"
                              className="text-gray-900 font-normal hover:text-gray-900 hover:bg-gray-100 p-2 rounded"
                            >
                              <div className="flex hover:font-bold items-center space-x-4">
                                <RiUserSettingsLine />
                                <span>Ayarlar</span>
                              </div>
                            </Link>
                            <Link
                              to="#"
                              className="text-gray-900 font-normal hover:text-gray-900 hover:bg-gray-100 p-2 rounded"
                              onClick={handleLogout}
                            >
                              <div className="flex hover:font-bold items-center space-x-4">
                                <RiUserReceivedLine />
                                <span>Logout</span>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <span className="text-sm font-normal">
                    {localStorage.getItem("auth_name")
                      ? localStorage.getItem("auth_name")
                      : "UNDEFIND"}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
