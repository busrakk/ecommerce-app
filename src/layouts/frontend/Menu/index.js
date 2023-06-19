import React, { useEffect } from "react";
import MenuLinks from "./MenuLinks";
import { Link } from "react-router-dom";
import { getAllCategories } from "../../../features/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../redux/services";

const Menu = () => {
  const categories = useSelector(getAllCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <nav className="order-2 bg-white fixed z-40 w-full top-[72px]">
      <div className="border-gray-200 border-t-[1px]"></div>
      <ul className="container md:flex hidden uppercase text-sm items-center gap-2 font-semibold">
        {/* <li>
            <Link to="/" className="py-7 px-4 inline-block">
              Home
            </Link>
          </li> */}
        <MenuLinks categories={categories} />
        <li>
          <Link to="/product/sale" className="py-2 px-4 inline-block">
            Satılan Ürünler
          </Link>
        </li>
        <li>
          <Link to="/product/search" className="py-2 px-4 inline-block">
            Aranan Ürünler
          </Link>
        </li>
        <li>
          <Link to="/product/featured" className="py-2 px-4 inline-block">
            Öne Çıkan Ürünler
          </Link>
        </li>
      </ul>
      <div className="border-gray-200 border-t-[1px]"></div>
    </nav>
  );
};

export default Menu;
