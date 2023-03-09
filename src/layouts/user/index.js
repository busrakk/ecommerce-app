import React from "react";
import { Link } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineEdit, AiOutlineMail } from "react-icons/ai";
import {
  RiUserSettingsLine,
  RiUserHeartLine,
  RiUserFollowLine,
  RiUserAddLine,
  RiUserStarLine,
  RiLockPasswordLine,
} from "react-icons/ri";
import { HiOutlineUser, HiOutlinePhone } from "react-icons/hi";
import { BiMap } from "react-icons/bi";
import { MdLocationCity } from "react-icons/md";
import { BsSignpost } from "react-icons/bs";
import { RxUpdate } from "react-icons/rx";

const UserProfile = () => {
  return (
    <div className="container bg-gray-100">
      <main className="grid grid-cols-1 mt-1 w-2xl px-2 mx-auto pt-12">
        navbar
      </main>

      <div className="py-3 w-2xl px-2 mx-auto gap-5 grid grid-cols-1 lg:grid-cols-4">
        <div>
          sidebar
        </div>

        outlet
      </div>
    </div>
  )
};

export default UserProfile;
