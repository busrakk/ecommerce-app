import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineUser, HiOutlinePhone } from "react-icons/hi";
import { BiMap } from "react-icons/bi";
import { MdLocationCity } from "react-icons/md";
import { BsSignpost } from "react-icons/bs";
import { RxUpdate } from "react-icons/rx";

const User = () => {
  return (
    <div>
      <div className="flex h-auto flex-col space-y-2 border-r-2 border-gray-200 bg-white shadow rounded-lg p-3 col-span-1 lg:col-span-3">
          <div className="w-full px-4 mx-auto mt-6">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
              <div className="rounded-t bg-white mb-0 px-6 py-6">
                <div className="text-center flex justify-between px-4 items-center">
                  <h6 className="text-blueGray-700 text-xl uppercase font-bold">
                    Bİlgİlerİm
                  </h6>
                  <div className="md:w-3/12 text-center md:pl-4">
                    <button className="text-white w-full mx-auto max-w-sm rounded-md text-center bg-indigo-400 hover:bg-indigo-600 py-2 px-4 inline-flex items-center focus:outline-none md:float-right">
                      <RxUpdate className="w-4 mr-2" size={20} />
                      Güncelle
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
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
                          <input
                            defaultValue={localStorage.getItem("auth_name")}
                            type="text"
                            className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                            disabled
                          />
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
                          <input
                            type="email"
                            className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="text-sm text-gray-400">İsim</label>
                        <div className="w-full inline-flex border">
                          <div className="w-1/12 pt-2 bg-gray-100">
                            <HiOutlineUser
                              className="w-6 text-gray-400 mx-auto"
                              size={20}
                            />
                          </div>
                          <input
                            type="text"
                            className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="text-sm text-gray-400">Soyisim</label>
                        <div className="w-full inline-flex border">
                          <div className="w-1/12 pt-2 bg-gray-100">
                            <HiOutlineUser
                              className="w-6 text-gray-400 mx-auto"
                              size={20}
                            />
                          </div>
                          <input
                            type="text"
                            className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className="mt-6 border-b-1 border-blueGray-300" />

                  <h6 className="text-blueGray-400 font-semibold text-sm mt-3 mb-6 uppercase">
                    İLETİŞİM BİLGİLERİ
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="text-sm text-gray-400">Adres</label>
                        <div className="w-full inline-flex border">
                          <div className="pt-2 w-1/12 bg-gray-100">
                            <BiMap
                              className="w-6 text-gray-400 mx-auto"
                              size={20}
                            />
                          </div>
                          <input
                            type="text"
                            className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="text-sm text-gray-400">
                          Telefon Numarası
                        </label>
                        <div className="w-full inline-flex border">
                          <div className="pt-2 w-1/12 bg-gray-100">
                            <HiOutlinePhone
                              className="w-6 text-gray-400 mx-auto"
                              size={20}
                            />
                          </div>
                          <input
                            type="tel"
                            className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="text-sm text-gray-400">Şehir</label>
                        <div className="w-full inline-flex border">
                          <div className="w-1/12 pt-2 bg-gray-100">
                            <MdLocationCity
                              className="w-6 text-gray-400 mx-auto"
                              size={20}
                            />
                          </div>
                          <input
                            type="text"
                            className="w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="text-sm text-gray-400">Ülke</label>
                        <div className="w-full inline-flex border">
                          <div className="w-1/12 pt-2 bg-gray-100">
                            <MdLocationCity
                              className="w-6 text-gray-400 mx-auto"
                              size={20}
                            />
                          </div>
                          <input
                            type="text"
                            className="w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="text-sm text-gray-400">
                          Posta Kodu
                        </label>
                        <div className="w-full inline-flex border">
                          <div className="pt-2 w-1/12 bg-gray-100">
                            <BsSignpost
                              className="w-6 text-gray-400 mx-auto"
                              size={20}
                            />
                          </div>
                          <input
                            className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                            type="number"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                  <h6 className="text-blueGray-400 font-semibold text-sm mt-3 mb-6 uppercase">
                    Şİfre Değİştİr
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="text-sm text-gray-400">Şifre</label>
                        <div className="w-full inline-flex border">
                          <div className="w-1/12 pt-2 bg-gray-100">
                            <RiLockPasswordLine
                              className="w-6 text-gray-400 mx-auto"
                              size={20}
                            />
                          </div>
                          <input
                            type="password"
                            className="w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label className="text-sm text-gray-400">
                          Şifre Onayla
                        </label>
                        <div className="w-full inline-flex border">
                          <div className="w-1/12 pt-2 bg-gray-100">
                            <RiLockPasswordLine
                              className="w-6 text-gray-400 mx-auto"
                              size={20}
                            />
                          </div>
                          <input
                            type="password"
                            className="w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default User
