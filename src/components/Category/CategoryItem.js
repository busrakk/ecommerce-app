import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <>
      {item.featured === 1 && (
        // <div
        //   key={item.id}
        //   className="relative rounded-sm overflow-hidden group w-[120px] h-[120px] md:w-[240px] md:h-[240px]"
        // >
        //   <img src={item.image} alt={item.name} className="w-full" />
        //   <Link
        //     to={`/product/category/${item.id}`}
        //     className="absolute inset-0 duration-300 bg-black bg-opacity-30 flex items-center justify-center text-sm md:text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition"
        //   >
        //     {item.name}
        //   </Link>
        // </div>
        <Link to={`/product/category/${item.id}`}>
          <div key={item.id} className="flex items-center justify-center px-2">
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
        </div>
        </Link>
      )}
    </>
  );
};

export default CategoryItem;
