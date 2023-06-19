import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import useDelayCallback from "../../../components/helpers/useDelayCallback";
import MenuLinks from "../Menu/MenuLinks";
import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import {
  RiUserLine,
  RiShoppingBasketLine,
  RiUserSettingsLine,
  RiUserReceivedLine,
} from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import axios from "axios";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../redux/services";
import { getAllCategories } from "../../../features/categorySlice";
import {
  getAllCarts,
  getCartItemsCount,
  getCartTotal,
} from "../../../features/cartSlice";
import CartModal from "../../../components/frontend/Cart/CartModal";
import SearchBar from "./SearchBar";

const MegaMenu = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  const carts = useSelector(getAllCarts);
  const itemsCount = useSelector(getCartItemsCount);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, carts]);

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
    <nav className="bg-white fixed z-50 w-full top-0">
      <div className="flex items-center font-medium shadow-sm justify-between">
        <div className=" p-4 md:w-auto w-full flex justify-between">
          <Link to="/" className="flex items-center ml-6">
            <RiShoppingBasketLine size={40} className="text-gray-900" />
            <span className="ml-4 text-2xl font-bold uppercase text-gray-900">
              Shopper
            </span>
          </Link>
          {/* <img src="" alt="logo" className="md:cursor-pointer h-9" /> */}
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>

        <div className="w-[850px] z-50 justify-center md:flex hidden">
          <SearchBar />
        </div>

        <div className="flex flex-row space-x-4 mr-6">
          <div className="md:block hidden">
            {!localStorage.getItem("auth_token") ? (
              <>
                <div className="ml-2 flex space-x-1">
                  <button
                    onClick={() => setOpen1(!open1)}
                    className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100"
                  >
                    <div className="relative">
                      <HiOutlineShoppingBag size={25} />
                      <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                        {itemsCount}
                      </span>
                      <CartModal
                        carts={carts}
                        open1={open1}
                        setOpen1={setOpen1}
                      />
                    </div>
                    <span className="text-sm font-normal">Sepetim</span>
                  </button>
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
                  <button
                    onClick={() => setOpen1(!open1)}
                    className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100"
                  >
                    <div className="relative">
                      <HiOutlineShoppingBag size={25} />
                      <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                        {itemsCount}
                      </span>
                      <CartModal
                        carts={carts}
                        open1={open1}
                        setOpen1={setOpen1}
                      />
                    </div>
                    <span className="text-sm font-normal">Sepetim</span>
                  </button>

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
                                to="/profile/list-product"
                                className="text-gray-900 font-normal hover:text-gray-900 hover:bg-gray-100 p-2 rounded"
                              >
                                <div className="flex hover:font-bold items-center space-x-4">
                                  <RiUserLine />
                                  <span>Profilim</span>
                                </div>
                              </Link>
                              <Link
                                to="/profile/info"
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
          <MenuLinks categories={categories} />
          <li>
            <Link to="/product/sale" className="py-7 px-3 inline-block">
              Satılan Ürünler
            </Link>
          </li>
          <li>
            <Link to="/product/search" className="py-7 px-3 inline-block">
              Aranan Ürünler
            </Link>
          </li>
          <li>
            <Link to="/product/featured" className="py-7 px-3 inline-block">
              Öne Çıkan Ürünler
            </Link>
          </li>
          <div className="py-5">
            <Link to="/">
              <button className="bg-gray-800 hover:bg-gray-600 text-white  px-6 py-2 rounded-full">
                Şimdi Keşfedin
              </button>
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default MegaMenu;
