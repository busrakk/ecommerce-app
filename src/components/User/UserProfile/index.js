import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../Loader";
import { FiMapPin } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import ProductItem from "../../frontend/Product/ProductItem";

function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  console.log(user);

  useEffect(() => {
    setIsLoading(true);
    axios
      .post(`/api/users/${id}`)
      .then((response) => {
        setUser(response.data.user);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [id]);

  if (!user && <Loader />) {
    return (
      <div className="flex justify-center mt-40">
        <div className="flex w-full max-w-5xl overflow-hidden bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-center w-12 bg-red-400">
            <FaRegUserCircle className="w-5 h-5 text-white" />
          </div>

          <div className="px-4 py-2 -mx-3">
            <div className="mx-3">
              <p className="text-base font-medium m-2 text-gray-800">
                Kullanıcı Bulunamadı...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 mt-20">
      <div className="mx-28">
        <main className="grid grid-cols-1 mt-1 px-2 justify-center pt-12">
          <div className="bg-white shadow rounded-lg p-3">
            <div className="flex flex-col gap-1 text-center items-center">
              <FaRegUserCircle className="rounded-full w-20 h-20 border p-1 object-cover" />
              <div className="font-semibold">
                <div className="flex items-center justify-around gap-3">
                  {user.name}
                </div>
              </div>
              <div className="text-sm leading-normal text-gray-400 flex justify-center items-center">
                <FiMapPin />
                Los Angeles, California
              </div>
            </div>
            <div className="flex justify-center items-center my-3">
              <div className="grid grid-cols-2 lg:grid-cols-3">
                <Link to="/profile/list-product">
                  <div className="font-semibold text-center mx-4">
                    <p className="text-gray-800">{user.products.length}</p>
                    <span className="text-gray-400">Ürünleri</span>
                  </div>
                </Link>
                <div className="font-semibold text-center mx-4">
                  <p className="text-gray-800">{user.products.length}</p>
                  <span className="text-gray-400">Siparişleri</span>
                </div>
                <div className="font-semibold text-center mx-4">
                  <p className="text-gray-800">{user.products.length}</p>
                  <span className="text-gray-400">Favorileri</span>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className="py-3 px-2 mx-auto gap-5">
          <div className="col-span-10 pb-4">
            <div className="rounded-t rounded-md bg-white mb-0 px-6 pt-10">
              <div className="text-center pb-6 flex justify-between px-2 items-center">
                <h6 className="text-blueGray-700 text-xl uppercase font-bold">
                  Ürünlerİ
                </h6>
              </div>
            </div>
            {isLoading && <Loader />}
            <div className="flex flex-col pb-10 bg-white">
              <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 gap-x-8 gap-y-8 items-center px-6">
                {!isLoading &&
                  user.products.map((item, key) => (
                    <ProductItem key={key} item={item} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
