import React from 'react'
import { Link } from "react-router-dom";
import { RiShoppingBasketLine } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineSearch, AiOutlineLogout } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
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
                <Link to="#" className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
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
                <Link to="#" className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
                  <div className="relative">
                    <MdOutlineShoppingCart size={20} />
                    <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                      3
                    </span>
                  </div>
                  <span className="text-sm font-normal">Sepetim</span>
                </Link>

                <Link to="#" className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
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
                <Link
                  to="/"
                  className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100"
                >
                  <AiOutlineLogout size={20} />
                  <span className="text-sm font-normal">Logout</span>
                </Link>
              </div>

            </>
          )}

        </div>
      </div>
    </div>
  )
}

export default Navbar
