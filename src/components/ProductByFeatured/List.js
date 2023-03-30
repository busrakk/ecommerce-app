import React, { useEffect } from "react";
import ProductItem from "../Product/ProductItem";
import ProductByFilter from "../ProductByFilter";
import Subtitle from "../UI/Subtitle";
import TypeFilter from "../ProductByFilter/TypeFilter";
//import useDelayCallback from "../helpers/useDelayCallback";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducstFeatured,
  getSingleProductsFeturedStatus,
} from "../../features/productSlice";
import { getProductFeatured } from "../../redux/services";
import { STATUS } from "../../utils/status";
import Loader from "../Loader";

const List = () => {
  const productFetured = useSelector(getProducstFeatured);
  const productFeaturedStatus = useSelector(getSingleProductsFeturedStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductFeatured());
  }, [dispatch]);

  // randomizing the products in the list
  const tempProductsFetured = [];
  if (productFetured.length > 0) {
    for (let i in productFetured) {
      let randomIndex = Math.floor(Math.random() * productFetured.length);

      while (tempProductsFetured.includes(productFetured[randomIndex])) {
        randomIndex = Math.floor(Math.random() * productFetured.length);
      }
      tempProductsFetured[i] = productFetured[randomIndex];
    }
  }

  return (
    <div className="mx-16 mt-24">
      <Subtitle>Ürünler</Subtitle>
      <div className="grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
        <ProductByFilter />

        <div className="col-span-3">
          <TypeFilter />

          <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {productFeaturedStatus === STATUS.LOADING ? (
            <Loader />
          ) : (
            <>
              {tempProductsFetured.map((item, key) => (
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

export default List;
