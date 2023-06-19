import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductByFilter from "../ProductByFilter";
import Subtitle from "../../../UI/Subtitle";
import TypeFilter from "../ProductByFilter/TypeFilter";
// import useDelayCallback from "../helpers/useDelayCallback";
import ProductItem from "../../Product/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProductByCategory,
  getAllProductByCategoryStatus,
} from "../../../../features/categorySlice";
import { productByCategory } from "../../../../redux/services";
import { STATUS } from "../../../../utils/status";
import Loader from "../../../Loader";

const ProductByCategory = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const categoryProducts = useSelector(getAllProductByCategory);
  const categoryProductsStatus = useSelector(getAllProductByCategoryStatus);
  const [isThreeColumn, setIsThreeColumn] = useState(true);

  useEffect(() => {
    dispatch(productByCategory(id));
  }, [dispatch, id]);

  const toggleColumnLayout = () => {
    setIsThreeColumn((prevState) => !prevState);
  };

  return (
    <div className="mx-16 mt-24">
      <Subtitle>Ürünler</Subtitle>
      <div className="grid md:grid-cols-5 grid-cols-1 pt-4 pb-16 items-start space-x-4">
        <ProductByFilter />

        <div className="col-span-4">
          <TypeFilter
            isThreeColumn={isThreeColumn}
            toggleColumnLayout={toggleColumnLayout}
          />

          {categoryProductsStatus === STATUS.LOADING ? (
            <Loader />
          ) : (
            <div
              className={`grid grid-cols-1 ${
                isThreeColumn ? "xl:grid-cols-3" : "xl:grid-cols-4"
              } lg:grid-cols-2 sm:grid-cols-2 gap-6`}
            >
              {categoryProducts &&
                categoryProducts.map((item, key) => (
                  <ProductItem key={key} item={item} />
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductByCategory;
