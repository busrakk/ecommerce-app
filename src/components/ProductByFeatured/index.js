import React, { useEffect } from "react";
import Title from "../UI/Title";
import ProductItem from "../Product/ProductItem";
// import useDelayCallback from "../helpers/useDelayCallback";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducstFeatured,
  getSingleProductsFeturedStatus,
} from "../../features/productSlice";
import { getProductFeatured } from "../../redux/services";
import { STATUS } from "../../utils/status";
import Loader from "../Loader";

function ProductByFeatured() {
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
    <div className="mx-auto container mt-6">
      <div className="flex flex-col">
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
