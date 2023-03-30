import React, { useEffect } from "react";
import ProductItem from "../../Product/ProductItem";
// import useDelayCallback from "../../helpers/useDelayCallback";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserProducts,
  getUserProductsStatus,
} from "../../../features/userSlice";
import { getProductByUser } from "../../../redux/services";
import { STATUS } from "../../../utils/status";
import Loader from "../../Loader";

const UserProductList = () => {
  const dispatch = useDispatch();
  const userProducts = useSelector(getUserProducts);
  const userProductsStatus = useSelector(getUserProductsStatus);

  useEffect(() => {
    dispatch(getProductByUser());
  }, [dispatch]);

  const products = userProducts.length;

  return (
    <div className="col-span-9 px-4 pb-4">
      <div className="rounded-t bg-white mb-0 px-6 py-6">
        <div className="text-center flex justify-between px-4 items-center">
          <h6 className="text-blueGray-700 text-xl uppercase font-bold">
            Ürünlerİm ({products})
          </h6>
        </div>
      </div>
      <div className="flex flex-col bg-white">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-8 items-center px-6 py-5">
          {userProductsStatus === STATUS.LOADING ? (
            <Loader />
          ) : (
            <>
              {userProducts.map((item, key) => (
                <ProductItem key={key} item={item} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProductList;
