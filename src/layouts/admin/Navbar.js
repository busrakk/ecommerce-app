import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { RiUserReceivedLine } from "react-icons/ri";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    axios.post("/api/logout").then((res) => {
      if (res.data.success) {
        localStorage.removeItem("__rea_token");
        localStorage.removeItem("__rea_auth_name");
        swal("Success", res.data.message, "success");
        navigate("/login");
      }
    });
  };

  return (
    <div>
      <Link
        to="#"
        className="text-gray-900 font-medium hover:text-indigo-900 hover:bg-indigo-100 p-2 rounded"
        onClick={handleLogout}
      >
        <div className="flex hover:font-bold items-center space-x-4">
          <RiUserReceivedLine />
          <span>Logout</span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
