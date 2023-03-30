import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <>
      {item.featured === 1 && (
        <div
          key={item.id}
          className="relative rounded-sm overflow-hidden group w-[120px] h-[120px] md:w-[240px] md:h-[240px]"
        >
          <img src={item.image} alt={item.name} className="w-full" />
          <Link
            to={`/product/category/${item.id}`}
            className="absolute inset-0 hover:scale-105 duration-300 bg-black bg-opacity-30 rounded-xl flex items-center justify-center text-sm md:text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition"
          >
            {item.name}
          </Link>
        </div>
      )}
    </>
  );
};

export default CategoryItem;
