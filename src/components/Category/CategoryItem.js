import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <>
      {item.featured === 1 && (
        <Link to={`/product/category/${item.id}`}>
          {/* <div key={item.id} className="flex items-center justify-center px-2">
          <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
            <img
              src={item.image} alt={item.name}
              className="w-[240px] h-[150px]"
            />
            <div className="p-5">
              <button className="w-full py-2 text-md font-medium text-black duration-75">
              {item.name}
              </button>
            </div>
          </div>
        </div> */}
        <div  key={item.id} className="flex flex-col md:flex-row items-strech justify-between bg-white border-gray-100 border-2 p-3 max-w-sm overflow-hidden shadow-sm duration-200 hover:shadow-xl">
                    <div className="flex flex-col justify-center md:w-1/2">
                        <h1 className="text-2xl lg:text-3xl font-semibold text-gray-800">{item.name}</h1>
                        {/* <p className="text-base lg:text-xl text-gray-800 mt-2">Save upto <span className="font-bold">50%</span></p> */}
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                        <img src={item.image} alt={item.name}  className="w-[240px] h-[150px]" />
                    </div>
                </div>
        </Link>
      )}
    </>
  );
};

export default CategoryItem;
