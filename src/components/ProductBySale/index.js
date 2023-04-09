import React, { useEffect } from "react";
import ProductItem from "../Product/ProductItem";
import ProductByFilter from "../ProductByFilter";
import Subtitle from "../UI/Subtitle";
import TypeFilter from "../ProductByFilter/TypeFilter";
//import useDelayCallback from "../helpers/useDelayCallback";
import { useDispatch, useSelector } from "react-redux";
import { getProductSaleAsync } from "../../redux/services";
import {
  getProductSell,
  getProductSellStatus,
} from "../../features/productSlice";
import { STATUS } from "../../utils/status";
import Loader from "../Loader";

const ProductBySale = () => {
  const productSell = useSelector(getProductSell);
  const productSellStatus = useSelector(getProductSellStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductSaleAsync());
  }, [dispatch]);

  // randomizing the products in the list
  const tempProductsSell = [];
  if (productSell.length > 0) {
    for (let i in productSell) {
      let randomIndex = Math.floor(Math.random() * productSell.length);

      while (tempProductsSell.includes(productSell[randomIndex])) {
        randomIndex = Math.floor(Math.random() * productSell.length);
      }
      tempProductsSell[i] = productSell[randomIndex];
    }
  }

  return (
    <div className="mx-16 mt-24">
      <Subtitle>Ürünler</Subtitle>
      <div className="grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
        <ProductByFilter />

        <div className="col-span-3">
          <TypeFilter />

          <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 gap-6">
            {productSellStatus === STATUS.LOADING ? (
              <Loader />
            ) : (
              <>
                {tempProductsSell.map((item, key) => (
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

export default ProductBySale;
