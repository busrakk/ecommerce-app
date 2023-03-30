import React, { useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getUserStatus } from "../../../features/userSlice";
import { getUserAsync } from "../../../redux/services";
import { STATUS } from "../../../utils/status";
import Loader from "../../Loader";

const User = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const userStatus = useSelector(getUserStatus);

  useEffect(() => {
    dispatch(getUserAsync())
  }, [dispatch]);

  console.log(user)
  return (
    <div className="col-span-9">
      <div className="w-full px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between px-4 items-center">
              <h6 className="text-blueGray-700 text-xl uppercase font-bold">
                Bİlgİlerİm
              </h6>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            {
              userStatus === STATUS.LOADING ? (<Loader />) : (
                <form>
              <hr className="mt-6 border-b-1 border-blueGray-300" />
              <h6 className="text-blueGray-400 font-semibold text-sm mt-3 mb-6 uppercase">
                KULLANICI BİLGİSİ
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="text-sm text-gray-400">
                      Kullanıcı Adı
                    </label>
                    <div className="w-full inline-flex border">
                      <div className="w-1/12 pt-2 bg-gray-100">
                        <HiOutlineUser
                          className="w-6 text-gray-400 mx-auto"
                          size={20}
                        />
                      </div>
                      <label className="w-11/12 focus:outline-none focus:text-gray-600 p-2">
                        {user.name}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="text-sm text-gray-400">Email</label>
                    <div className="w-full inline-flex border">
                      <div className="pt-2 w-1/12 bg-gray-100">
                        <AiOutlineMail
                          className="w-6 text-gray-400 mx-auto"
                          size={20}
                        />
                      </div>
                      <label
                        className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                      >{user.email}</label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
