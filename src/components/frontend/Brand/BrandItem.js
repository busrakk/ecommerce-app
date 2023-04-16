import React from "react";
import { Link } from "react-router-dom";

const BrandItem = ({ item }) => {
  return (
    <>
      {item.featured === 1 && (
        <Link
          to={`/product/brand/${item.id}`}
          className="hover:scale-105 duration-300 p-2 flex flex-col group items-center gap-y-1 text-center transition hover:bg-sky-50 hover:rounded"
        >
          <img
            src={item.logo}
            alt={item.name}
            className="w-20 h-20 p-2 rounded-full border border-gray-200"
          />
          <span className="text-sm font-semibold text-gray-700 whitespace-nowrap group-hover:text-gray-900 tracking-tighter">
            {item.name}
          </span>
        </Link>
      )}
    </>
  );
};

export default BrandItem;
