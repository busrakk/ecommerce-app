import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import ProductByFilter from "../Home/ProductByFilter";
import Subtitle from "../../UI/Subtitle";
import TypeFilter from "../Home/ProductByFilter/TypeFilter";
import Loader from "../../Loader";
// import useDelayCallback from "../../helpers/useDelayCallback";
import { getProductListApi } from "../../../service/serviceApi";
import axios from "axios";

const ProductList = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isThreeColumn, setIsThreeColumn] = useState(true);

  // useDelayCallback(() => {
  //   getProductList();
  // }, []);
  useEffect(() => {
    getProductList();
  }, []);

  const getProductList = () => {
    getProductListApi().then((res) => {
      if (res.data.success) {
        if (res.data.status === "success") {
          setIsLoading(false);
          setProduct(res.data.data);
        }
      } else {
        setProduct([]);
      }
    });
  };

  const handleSort = async (sortBy, sortOrder) => {
    try {
      const response = await axios.get("/api/sorting", {
        params: {
          sortBy,
          sortOrder,
        },
      });
      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleColumnLayout = () => {
    setIsThreeColumn((prevState) => !prevState);
  };

  return (
    <div className="mx-16 mt-24">
      <Subtitle>Ürünler</Subtitle>
      <div className="grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
        <ProductByFilter />

        <div className="col-span-3">
          <TypeFilter
            handleSort={handleSort}
            isThreeColumn={isThreeColumn}
            toggleColumnLayout={toggleColumnLayout}
          />

          {isLoading ? (
            <Loader />
          ) : (
            <div
              className={`grid grid-cols-1 ${
                isThreeColumn ? "xl:grid-cols-3" : "xl:grid-cols-4"
              } lg:grid-cols-2 sm:grid-cols-2 gap-6`}
            >
              {product.map((item, key) => (
                <ProductItem key={key} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
