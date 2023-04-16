import React, { useEffect } from "react";
import Title from "../../../UI/Title";
import ProductItem from "../../Product/ProductItem";
// import useDelayCallback from "../helpers/useDelayCallback";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductFeatured,
  getProductsFeturedStatus,
} from "../../../../features/productSlice";
import { getProductFeaturedAsync } from "../../../../redux/services";
import { STATUS } from "../../../../utils/status";
import Loader from "../../../Loader";

function ProductByFeatured() {
  const productFetured = useSelector(getProductFeatured);
  const productFeaturedStatus = useSelector(getProductsFeturedStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductFeaturedAsync());
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

  console.log(tempProductsFetured)

  return (
    <div className="mx-auto container mt-8 bg-gray-100">
      <div className="flex flex-col pb-10">
        <Title>Öne Çıkan İlanlar</Title>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-8 items-center">
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
  );
}

export default ProductByFeatured;
