import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductByFilter from "../ProductByFilter";
import Subtitle from "../../../UI/Subtitle";
import TypeFilter from "../ProductByFilter/TypeFilter";
// import useDelayCallback from "../helpers/useDelayCallback";
import ProductItem from "../../Product/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProductByBrand,
  getAllProductByBrandStatus,
} from "../../../../features/brandSlice";
import { productByBrand } from "../../../../redux/services";
import { STATUS } from "../../../../utils/status";
import Loader from "../../../Loader";

const ProductByBrand = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const brandProducts = useSelector(getAllProductByBrand);
  const brandProductsStatus = useSelector(getAllProductByBrandStatus);
  const [isThreeColumn, setIsThreeColumn] = useState(true);

  useEffect(() => {
    dispatch(productByBrand(id));
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
          {brandProductsStatus === STATUS.LOADING ? (
            <Loader />
          ) : (
            <div
              className={`grid grid-cols-1 ${
                isThreeColumn ? "xl:grid-cols-3" : "xl:grid-cols-4"
              } lg:grid-cols-2 sm:grid-cols-2 gap-6`}
            >
              {brandProducts &&
                brandProducts.map((item, key) => (
                  <ProductItem key={key} item={item} />
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductByBrand;
