import React from "react";
import { Link } from "react-router-dom";
import { ImProfile } from "react-icons/im";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsArchive, BsCreditCard } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div className="col-span-3 rounded-lg pb-4">
      <div className="px-4 py-3 shadow-xl bg-white flex items-center gap-4">
        <div className="flex-shrink-0">
          <img
            src=""
            alt="/profile"
            className="rounded-full w-14 h-14 border p-1 object-cover"
          />
        </div>
        <div className="flex-grow">
          <p className="text-gray-600">Merhaba,</p>
          <h4 className="text-gray-800 font-medium">
            {localStorage.getItem("auth_name")
              ? localStorage.getItem("auth_name")
              : "UNDEFIND"}
          </h4>
        </div>
      </div>

      <div className="mt-6 bg-white shadow-lg rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
        <div className="space-y-1 pl-8">
          <Link
            to="/profile"
            className="relative hover:text-primary block font-medium capitalize transition"
          >
            <span className="absolute -left-8 top-0 text-base">
              <AiOutlineDashboard size={22} />
            </span>
            Dashboard
          </Link>
        </div>

        <div className="space-y-1 pl-8 pt-4">
          <div className="relative text-primary block font-medium capitalize transition">
            <span className="absolute -left-8 top-0 text-base">
              <HiOutlineShoppingBag size={22} />
            </span>
            Ürünlerim
          </div>
          <Link
            to="#"
            className="relative hover:text-primary block capitalize transition"
          >
            Ürün Listem
          </Link>
          <Link
            to="/profile/add-product"
            className="relative hover:text-primary block capitalize transition"
          >
            Ürün Ekle
          </Link>
        </div>

        <div className="space-y-1 pl-8 pt-4">
          <div className="relative text-primary block font-medium capitalize transition">
            <span className="absolute -left-8 top-0 text-base">
              <BsArchive size={22} />
            </span>
            Siparişlerim
          </div>
          <Link
            to="#"
            className="relative hover:text-primary block capitalize transition"
          >
            Sipariş Listem
          </Link>
          <Link
            to="#"
            className="relative hover:text-primary block capitalize transition"
          >
            İadelerim
          </Link>
        </div>

        <div className="space-y-1 pl-8 pt-4">
          <div className="relative text-primary block font-medium capitalize transition">
            <span className="absolute -left-8 top-0 text-base">
              <BsCreditCard size={22} />
            </span>
            Ödeme Yöntemleri
          </div>
          <Link
            to="#"
            className="relative hover:text-primary block capitalize transition"
          >
            Kupon
          </Link>
        </div>

        <div className="space-y-1 pl-8 pt-4">
          <Link
            to="/profile/setting"
            className="relative hover:text-primary block font-medium capitalize transition"
          >
            <span className="absolute -left-8 top-0 text-base">
              <ImProfile size={22} />
            </span>
            Hesap Ayarları
          </Link>
        </div>

        <div className="space-y-1 pl-8 pt-4">
          <Link
            to="#"
            className="relative hover:text-primary block font-medium capitalize transition"
          >
            <span className="absolute -left-8 top-0 text-base">
              <MdFavoriteBorder size={22} />
            </span>
            Favorilerim
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
