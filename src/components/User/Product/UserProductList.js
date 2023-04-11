import React, { useState } from "react";
import {
  productListApi,
  categoryDropdownApi,
} from "../../../service/serviceApi";
import useDelayCallback from "../../helpers/useDelayCallback";
import { FaEdit } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const UserProductList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [show, setShow] = useState(false); //show of hide modal
  const [productId, setProductId] = useState(0);
  const DEFAULT_CATEGORY = { label: "Select Category", value: "" };
  const [categoryList, setCategoryList] = useState([DEFAULT_CATEGORY]);

  useDelayCallback(() => {
    getProductList();
    getCategoryDropdown();
  }, []);

  const getProductList = () => {
    productListApi().then((res) => {
      if (res.data.success) {
        if (res.data.status === "success") {
          setIsLoading(false);
          setProductList(res.data.data);
        }
      } else {
        setProductList([]);
      }
    });
  };


  const renderTableData = () => {
    let view = [];
    productList.map((item) => {
      // console.log(item)
      view.push(
        <div key={item.id}>
          <div className="group group-hover:bg-opacity-10 transition duration-500 relative transform  hover:scale-105 shadow-md bg-gray-50 sm:p-25 py-28 px-10 flex justify-center items-center">
            <img
              className="group-hover:opacity-60 w-[250px] h-[180px] transition duration-500"
              src={item.image1}
              alt={item.name}
            />
            <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
              <div>
                <p className="group-hover:opacity-60 pt-10 transition duration-500 text-lg leading-5 text-gray-600">
                  {item.name} - {item.user.name}
                </p>
              </div>
              <div>
                <p className="group-hover:opacity-60 transition duration-500 text-md font-semibold leading-5 text-gray-800">
                  $ {item.price}
                </p>
              </div>
            </div>
            <div className="group-hover:opacity-60 transition duration-500 absolute bottom-8 right-8 flex justify-start items-start flex-row space-x-2">
              <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5" />
              <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5" />
            </div>
            <div className="flex flex-col bottom-8 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
              <Link to={`/product/${item?.id}`}>
                <AiFillEye size={20} />
              </Link>
              <button>
                <FaEdit size={20} />
              </button>
              <button>
                <RiDeleteBin7Fill size={20} />
              </button>
            </div>
            <div className="absolute top-4 right-6">
              {item.type ? (
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
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>Satılık
                    <span>&nbsp;</span>
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
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>Aranıyor
                    <span>&nbsp;</span>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      );
      return view;
    });
    if (view.length === 0) {
      return (
        <div> No data found! </div>
      );
    } else {
      return view;
    }
  };

  const getCategoryDropdown = () => {
    categoryDropdownApi()
      .then((res) => {
        if (res.data.success) {
          if (res.data.status === "success") {
            let allOptions = [];
            if (res.data.data.length > 0) {
              allOptions = res.data.data.map((item) => {
                return {
                  value: item.id,
                  label: item.name,
                };
              });
              setCategoryList([DEFAULT_CATEGORY, ...allOptions]);
            }
          }
        }
      })
      .catch((error) => {
        console.log("something is wrong" + error);
      });
  };

  return (
    <div className="col-span-9 px-4 pb-4">
      <div className="rounded-t bg-white mb-0 px-6 py-6">
        <div className="text-center flex justify-between px-4 items-center">
          <h6 className="text-blueGray-700 text-xl uppercase font-bold">
            Ürünlerİm
          </h6>
        </div>
      </div>
      <div className="flex flex-col bg-white">
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 gap-x-8 gap-y-8 items-center px-6 py-5">
          {isLoading && <span className="visually-hidden">Loading...</span>}
          {!isLoading && renderTableData()}

        </div>
      </div>

    </div>
  );
};

export default UserProductList;
