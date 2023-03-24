import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { categoryAllApi } from "../../../service/serviceApi";
// import useDelayCallback from "../../../components/helpers/useDelayCallback";
import MenuLinks from "./MenuLinks";
import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import {
  RiUserLine,
  RiShoppingBasketLine,
  RiUserSettingsLine,
  RiUserReceivedLine,
} from "react-icons/ri";
// import { IoIosNotificationsOutline } from "react-icons/io";
// import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import axios from "axios";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../../features/cartSlice";

const MegaMenu = () => {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const { cart, totalQuantity } = useSelector((state) => state.allcart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal())
  }, [cart, dispatch])

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

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    categoryAllApi().then((res) => {
      if (res.data.success) {
        if (res.data.status === "success") {
          // setIsLoading(false);
          setCategories(res.data.data);
        }
      } else {
        setCategories([]);
      }
    });
  };

 // console.log(categories);

  return (
    <nav className="bg-white fixed z-50 w-full top-0">
      <div className="flex items-center font-medium shadow-lg justify-around">
        <div className="z-50 p-4 md:w-auto w-full flex justify-between">
          <Link to="/" className="flex items-center">
            <RiShoppingBasketLine size={32} className="text-gray-900" />
            <span className="ml-2 text-2xl font-bold uppercase text-gray-900">
              Shopper
            </span>
          </Link>
          {/* <img src="" alt="logo" className="md:cursor-pointer h-9" /> */}
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden z-50 uppercase text-sm items-center gap-2 font-semibold">
          {/* <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li> */}
          <MenuLinks categories={categories} setCategories={setCategories} />
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              İndİrİmlİ Ürünler
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Öne Çıkan Ürünler
            </Link>
          </li>
        </ul>
        <div className="flex flex-row space-x-4">
          <div className="md:block hidden">
            {!localStorage.getItem("auth_token") ? (
              <>
                <div className="ml-2 flex space-x-1">
                  <Link
                    to="/cart"
                    className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100"
                  >
                    <div className="relative">
                      <HiOutlineShoppingBag size={25} />
                      <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                      { totalQuantity }
                      </span>
                    </div>
                    <span className="text-sm font-normal">Sepetim</span>
                  </Link>

                  <div
                    className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100"
                    onClick={() => setOpen(!open)}
                  >
                    <div className="relative">
                      <HiOutlineUser size={25} />
                      {open && (
                        <div className="bg-white z-0 hover:z-50 p-4 w-52 shadow-lg absolute -left-28 top-10">
                          <div className="space-x-4">
                            <div
                              onClick={() => setOpen(false)}
                              className="text-sm cursor-pointer flex flex-col"
                            >
                              <Link
                                to="/login"
                                className="text-gray-900 font-normal hover:text-gray-900 hover:bg-gray-100 p-2 rounded"
                              >
                                <div className="flex hover:font-bold items-center space-x-4">
                                  {/* <RiUserLine /> */}
                                  <span>Giriş Yap</span>
                                </div>
                              </Link>
                              <Link
                                to="/register"
                                className="text-gray-900 font-normal hover:text-gray-900 hover:bg-gray-100 p-2 rounded"
                              >
                                <div className="flex hover:font-bold items-center space-x-4">
                                  {/* <RiUserSettingsLine /> */}
                                  <span>Kayıt Ol</span>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <span className="text-sm font-normal">Giriş Yap</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="ml-2 flex space-x-1">
                  <Link
                    to="/cart"
                    className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100"
                  >
                    <div className="relative">
                      <HiOutlineShoppingBag size={25} />
                      <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                      { totalQuantity }
                      </span>
                    </div>
                    <span className="text-sm font-normal">Sepetim</span>
                  </Link>
                  <div
                    className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100"
                    onClick={() => setOpen(!open)}
                  >
                    <div className="relative">
                      <FaRegUserCircle size={25} />
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
                                to="/profile/setting"
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
        {/* Mobile nav */}
        <ul
          className={`
      md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
      duration-500 ${open ? "left-0" : "left-[-100%]"}
      `}
        > 
          <MenuLinks categories={categories} setCategories={setCategories}  />
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              İndirimli Ürünler
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Öne Çıkan Ürünler
            </Link>
          </li>
          <div className="py-5">
            <Link to="/login">
              <button className="bg-gray-800 hover:bg-gray-600 text-white  px-6 py-2 rounded-full">
                Giriş Yap
              </button>
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default MegaMenu;
