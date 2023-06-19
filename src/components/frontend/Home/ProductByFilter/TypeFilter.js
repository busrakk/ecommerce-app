import React from "react";
import { TbCategory } from "react-icons/tb";
import "./style.css"

const TypeFilter = ({ handleSort }) => {
  return (
    <div className="flex items-center mb-4">
      <button
        className="button-filter"
        onClick={() => handleSort("name", "asc")}
      >
        Sort by Name (A-Z)
      </button>
      <button
        className="button-filter"
        onClick={() => handleSort("name", "desc")}
      >
        Sort by Name (Z-A)
      </button>
      <button
        className="button-filter"
        onClick={() => handleSort("price", "asc")}
      >
        Sort by Price (Low to High)
      </button>
      <button
        className="button-filter"
        onClick={() => handleSort("price", "desc")}
      >
        Sort by Price (High to Low)
      </button>

      <div className="flex gap-2 ml-auto">
        <div className="icon-filter border-primary text-white bg-primary">
          <TbCategory />
        </div>
        <div className="icon-filter border-gray-300 text-gray-600">
          <TbCategory />
        </div>
      </div>
    </div>
  );
};

export default TypeFilter;
