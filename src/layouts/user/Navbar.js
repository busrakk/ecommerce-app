import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProducts } from "../../features/userproductSlice";
import { getProductByUser } from "../../redux/services";
import { Link } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const dispatch = useDispatch();
  const userProducts = useSelector(getUserProducts);

  useEffect(() => {
    dispatch(getProductByUser());
  }, [dispatch]);

  const productCount = userProducts.length;
  return (
    <>
      <div className="bg-white shadow rounded-lg p-3">
        <div className="flex flex-col gap-1 text-center items-center">
          {/* <img
                className="h-32 w-32 bg-white p-2 rounded-full shadow mb-4"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"
                alt=""
              /> */}
          <FaRegUserCircle className="rounded-full w-20 h-20 border p-1 object-cover" />
          <div className="font-semibold">
            <Link
              to="/profile/info"
              className="flex items-center justify-around gap-3"
            >
              {localStorage.getItem("auth_name")
                ? localStorage.getItem("auth_name")
                : "NULL"}
              <AiOutlineEdit className="hover:text-gray-600" />
            </Link>
          </div>
          <div className="text-sm leading-normal text-gray-400 flex justify-center items-center">
            <FiMapPin />
            Los Angeles, California
          </div>
        </div>
        <div className="flex justify-center items-center my-3">
          <div className="grid grid-cols-2 lg:grid-cols-3">
            <Link to="/profile/list-product">
              <div className="font-semibold text-center mx-4">
                <p className="text-gray-800">{productCount}</p>
                <span className="text-gray-400">Ürünlerim</span>
              </div>
            </Link>
            <div className="font-semibold text-center mx-4">
              <p className="text-gray-800">{productCount}</p>
              <span className="text-gray-400">Siparişlerim</span>
            </div>
            <div className="font-semibold text-center mx-4">
              <p className="text-gray-800">{productCount}</p>
              <span className="text-gray-400">Favorilerim</span>
            </div>
            {/* <div className="font-semibold text-center mx-4">
                  <p className="text-gray-800">0</p>
                  <span className="text-gray-400">Bildirimler</span>
                </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
