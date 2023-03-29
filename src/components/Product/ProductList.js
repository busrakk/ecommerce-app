import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import ProductByFilter from "../ProductByFilter";
import Subtitle from "../UI/Subtitle";
import TypeFilter from "../ProductByFilter/TypeFilter";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/services";
import { getAllProducts } from "../../features/productSlice";
// import useDelayCallback from "../helpers/useDelayCallback";

const ProductList = () => {
  const products = useSelector(getAllProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch]);

  return (
    <div className="mx-16 mt-24">
      <Subtitle>Ürünler</Subtitle>
      <div className="grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
        <ProductByFilter />

        <div className="col-span-3">
          <TypeFilter />

          <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6">
            {products.map((item, key) => (
              <ProductItem key={key} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
