import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";

const Subtitle = ({ children }) => {
  return (
    <div className="py-4 flex items-center gap-3 mt-32">
      <Link to="/" className="text-primary text-base">
        <AiOutlineHome />
      </Link>
      <span className="text-sm text-gray-400">
        <AiOutlineRight />
      </span>
      <p className="text-gray-600 font-medium">{children}</p>
    </div>
  );
};

export default Subtitle;
