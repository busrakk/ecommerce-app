import React from "react";
import { TbCategory } from "react-icons/tb";
import { MdOutlineCategory } from "react-icons/md";
import "./style.css";

const TypeFilter = (props) => {
  return (
    <div className="flex items-center mb-4">
      <button
        className="button-filter"
        onClick={() => props.handleSort("name", "asc")}
      >
        Sort by Name (A-Z)
      </button>
      <button
        className="button-filter"
        onClick={() => props.handleSort("name", "desc")}
      >
        Sort by Name (Z-A)
      </button>
      <button
        className="button-filter"
        onClick={() => props.handleSort("price", "asc")}
      >
        Sort by Price (Low to High)
      </button>
      <button
        className="button-filter"
        onClick={() => props.handleSort("price", "desc")}
      >
        Sort by Price (High to Low)
      </button>

      <div className="flex gap-2 ml-auto my-2">
        <button
          className={`mr-2 icon-filter  px-3 py-1 rounded ${
            props.isThreeColumn
              ? "bg-gray-300 border-gray-300 text-gray-600"
              : "bg-indigo-500 border-indigo text-white"
          }`}
          onClick={props.toggleColumnLayout}
        >
          <TbCategory />
        </button>
        <button
          className={`icon-filter px-3 py-1 rounded ${
            !props.isThreeColumn
              ? "bg-gray-300 border-gray-300 text-gray-600"
              : "bg-indigo-500 border-indigo text-white"
          }`}
          onClick={props.toggleColumnLayout}
        >
          <MdOutlineCategory />
        </button>
      </div>
    </div>
  );
};

export default TypeFilter;
