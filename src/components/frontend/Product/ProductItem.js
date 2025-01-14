import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { GoGitCompare } from "react-icons/go";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../features/cartSlice";
// import moment from "moment";

const ProductItem = ({ item, isThreeColumn }) => {
  const [quantity] = useState(1);
  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    let totalPrice = quantity * product?.price;

    dispatch(addToCart({ ...product, quantity: quantity, totalPrice }));
  };

  //console.log(item)

  return (
    <div
      className={`group group-hover:bg-opacity-10 transition duration-500 relative transform  hover:scale-105 shadow-md bg-gray-50 sm:p-25 py-28 px-10 flex justify-center items-center`}
    >
      <img
        className={`group-hover:opacity-60 transition duration-500 ${
          isThreeColumn ? "w-[250px] h-[180px]" : "w-[200px] h-[100px]"
        }`}
        src={item.image}
        alt={item.name}
      />
      <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
        <div>
          <p className="group-hover:opacity-60 pt-10 transition duration-500 text-lg leading-5 text-gray-600">
            {item.name} - {item.user.name}
            {/* {moment(item.created_at).format("DD/MM/YYYY")} */}
          </p>
        </div>
        <div>
          {/* <p className="group-hover:opacity-60 transition duration-500 text-md font-semibold leading-5 text-gray-800">
            $ {item.price}
          </p> */}
        </div>
      </div>

      <div className="group-hover:opacity-60 transition duration-500 absolute bottom-8 right-8 flex justify-start items-start flex-row space-x-2">
        <p className="group-hover:opacity-60 transition duration-500 text-2xl font-bold leading-5 text-gray-800 mr-10">
           {item.price} ₺
        </p>
        <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5" />
        <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5" />
      </div>
      <div className="flex flex-col bottom-8 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
        {item.type ? (
          <button
            onClick={() => {
              addToCartHandler(item);
            }}
          >
            <MdAddCircle size={21} />
          </button>
        ) : (
          <Link to="/#">
            <GoGitCompare size={21} />
          </Link>
        )}
        <Link to={`/product/${item?.id}`}>
          <AiFillEye size={21} />
        </Link>
        <button>
          <FaHeart size={21} />
        </button>
      </div>
      <div className="absolute top-4 right-6">
        {item.type ? (
          // <span className="text-base p-4 leading-4 pb-0.25 px-4 py-2 rounded-full text-green-600  bg-green-200">
          //   Satılık
          // </span>
          <div className="inline-block relative py-1 text-lg">
            <div className="absolute inset-0 text-green-200 flex">
              <svg height="100%" viewBox="0 0 50 100">
                <path
                  d="M49.9,0a17.1,17.1,0,0,0-12,5L5,37.9A17,17,0,0,0,5,62L37.9,94.9a17.1,17.1,0,0,0,12,5ZM25.4,59.4a9.5,9.5,0,1,1,9.5-9.5A9.5,9.5,0,0,1,25.4,59.4Z"
                  fill="currentColor"
                />
              </svg>
              <div className="flex-grow h-full -ml-px bg-green-200 rounded-md rounded-l-none"></div>
            </div>
            <span className="relative text-green-500 uppercase font-semibold pr-px">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>Satılık<span>&nbsp;</span>
            </span>
          </div>
        ) : (
          <div className="inline-block relative py-1 text-lg">
            <div className="absolute inset-0 text-red-200 flex">
              <svg height="100%" viewBox="0 0 50 100">
                <path
                  d="M49.9,0a17.1,17.1,0,0,0-12,5L5,37.9A17,17,0,0,0,5,62L37.9,94.9a17.1,17.1,0,0,0,12,5ZM25.4,59.4a9.5,9.5,0,1,1,9.5-9.5A9.5,9.5,0,0,1,25.4,59.4Z"
                  fill="currentColor"
                />
              </svg>
              <div className="flex-grow h-full -ml-px bg-red-200 rounded-md rounded-l-none"></div>
            </div>
            <span className="relative text-red-500 uppercase font-semibold pr-px">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>Aranıyor<span>&nbsp;</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
