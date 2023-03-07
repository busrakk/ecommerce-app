import React from "react";
import { FaHeart } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";

const ProductItem = () => {
  return (
    <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 sm:p-25 py-28 px-10 flex justify-center items-center">
      <img
        className="group-hover:opacity-60 transition duration-500"
        src=""
        alt=""
      />
      <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
        <div>
          <p className="group-hover:opacity-60 transition duration-500 text-lg leading-5 text-gray-600">
            product.title
          </p>
        </div>
        <div>
          <p className="group-hover:opacity-60 transition duration-500 text-md font-semibold leading-5 text-gray-800">
            $ product.price
          </p>
        </div>
      </div>
      <div className="group-hover:opacity-60 transition duration-500 absolute bottom-8 right-8 flex justify-start items-start flex-row space-x-2">
        <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5" />
        <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5" />
      </div>
      <div className="flex flex-col bottom-8 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
        <button>
          <MdAddCircle size={21} />
        </button>
        <button>
          <AiFillEye size={21} />
        </button>
        <button>
          <FaHeart size={21} />
        </button>
      </div>
      <div className="absolute top-4 right-6">
        <p className="text-base leading-4 pb-0.5 text-gray-600 border-b-2 border-gray-600">
          New
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
