import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Subtitle from "../../UI/Subtitle";
import { clearCart, getAllCarts } from "../../../features/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts);
  const { itemsCount, totalAmount } = useSelector((state) => state.cart);

  if (carts.length === 0) {
    return (
      <div className="flex justify-center mt-40">
        <div className="flex w-full max-w-5xl overflow-hidden bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-center w-12 bg-blue-500">
            <HiOutlineShoppingBag className="w-5 h-5 text-white" />
          </div>

          <div className="px-4 py-2 -mx-3">
            <div className="mx-3">
              <p className="text-base font-medium m-2 text-gray-800">
                Sepetinde ürün bulunmamaktadır.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="container">
        <Subtitle>Sepetim</Subtitle>
      </div>
      <div className="bg-gray-50 pb-10">
        <h1 className="mb-10 pt-4 text-center text-2xl font-medium">
          Sepetim ({itemsCount} Ürün)
        </h1>
        {/* {totalQuantity > 0 ? ( */}
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {carts.map((data, key) => (
              <Item key={key} data={data} />
            ))}
          </div>
          {/* <!-- Sub total --> */}

          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            {/* <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Ürün Sayısı</p>
              <p className="text-gray-700">x {itemsCount}</p>
            </div> */}
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Ürünün Toplamı</p>
              <p className="text-gray-700">{totalAmount} TL</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Kargo Toplam</p>
              <p className="text-gray-700">4.99 TL</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Toplam</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">{totalAmount} TL</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
            <button onClick={() => dispatch(clearCart())} className="mt-6 w-full rounded-md bg-red-500 py-1.5 font-medium text-red-50 hover:bg-red-600">
              Sepeti Temizle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
