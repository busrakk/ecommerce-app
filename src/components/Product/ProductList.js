import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import ProductByFilter from "../ProductByFilter";
import Subtitle from "../UI/Subtitle";
import TypeFilter from "../ProductByFilter/TypeFilter";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/services";
import {
  getAllProducts,
  getAllProductsStatus,
} from "../../features/productSlice";
import { STATUS } from "../../utils/status";
import Loader from "../Loader";
// import useDelayCallback from "../helpers/useDelayCallback";

const ProductList = () => {
  const products = useSelector(getAllProducts);
  const productStatus = useSelector(getAllProductsStatus);
  const dispatch = useDispatch();

  // randomizing the products in the list
  const tempProducts = [];
  if (products.length > 0) {
    for (let i in products) {
      let randomIndex = Math.floor(Math.random() * products.length);

      while (tempProducts.includes(products[randomIndex])) {
        randomIndex = Math.floor(Math.random() * products.length);
      }
      tempProducts[i] = products[randomIndex];
    }
  }

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="mx-16 mt-24">
      <Subtitle>Ürünler</Subtitle>
      <div className="grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
        <ProductByFilter />

        <div className="col-span-3">
          <TypeFilter />

          <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6">
            {productStatus === STATUS.LOADING ? (
              <Loader />
            ) : (
              <>
                {tempProducts.map((item, key) => (
                  <ProductItem key={key} item={item} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
