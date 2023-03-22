import React from "react";
import { Link } from "react-router-dom";

const BrandItem = ({ item }) => {
  return (
    <div>
      <Link
        to=""
        className="hover:scale-105 duration-300 flex flex-col group items-center gap-y-1 text-center p-3 transition hover:bg-gray-50 hover:rounded"
      >
        <img
          src={item.logo}
          alt={item.name}
          className="h-[120px] w-[120px] rounded-full border border-gray-200"
        />
        <span className="text-sm font-semibold text-gray-700 whitespace-nowrap group-hover:text-gray-900 tracking-tighter">
          {item.name}
        </span>
      </Link>
    </div>
  );
};

export default BrandItem;
