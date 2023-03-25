import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { BsArchive} from "react-icons/bs";
import { productByUserCountApi } from "../../service/serviceApi";

const UserDashboard = () => {

  const [count, setCount] = useState('');

  useEffect(() => {
    getProductCount();
  }, [count]);

  const getProductCount = () => {
    productByUserCountApi().then((res) => {
      if (res.data.success) {
        if (res.data.status === "success") {
          setCount(res.data.data);
        }
      } else {
        setCount('');
      }
    });
  };

  return (
    <div className="px-4 col-span-9 grid grid-cols-3 gap-4">
      <Link
        to="/profile/list-product"
        className="transform  hover:scale-105 transition duration-300 shadow-md rounded-lg col-span-3 md:col-span-1 intro-y bg-white"
      >
        <div className="p-3">
          <div className="flex justify-between">
            <AiOutlineShopping className="h-7 w-7 text-blue-400" />
          </div>
          <div className="ml-2 w-full flex-1">
            <div>
              <div className="mt-3 text-3xl font-bold leading-8">{count ? <div>{count}</div> : <div>0</div>}</div>

              <div className="mt-1 text-base text-gray-600">Ürünlerim</div>
            </div>
          </div>
        </div>
      </Link>
      <Link
        to="/#"
        className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-3 md:col-span-1 intro-y bg-white"
        href="#"
      >
        <div className="p-3">
          <div className="flex justify-between">
            <MdFavoriteBorder className="h-7 w-7 text-yellow-400" />
          </div>
          <div className="ml-2 w-full flex-1">
            <div>
              <div className="mt-3 text-3xl font-bold leading-8">4.510</div>

              <div className="mt-1 text-base text-gray-600">Siparişlerim</div>
            </div>
          </div>
        </div>
      </Link>
      <Link
        to="/#"
        className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-3 md:col-span-1 intro-y bg-white"
        href="#"
      >
        <div className="p-3">
          <div className="flex justify-between">
            <BsArchive className="h-7 w-7 text-pink-600" />
          </div>
          <div className="ml-2 w-full flex-1">
            <div>
              <div className="mt-3 text-3xl font-bold leading-8">4.510</div>

              <div className="mt-1 text-base text-gray-600">Favorilerim</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UserDashboard;
