import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import { productAllApi } from "../../service/serviceApi";
import ProductByFilter from "../ProductByFilter";
import Subtitle from "../UI/Subtitle";
import TypeFilter from "../ProductByFilter/TypeFilter";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProductList();
  }, [products]);

  const getProductList = () => {
    productAllApi().then((res) => {
      if (res.data.success) {
        if (res.data.status === "success") {
          setIsLoading(false);
          setProducts(res.data.data);
        }
      } else {
        setProducts([]);
      }
    });
  };

  return (
    <div className="mx-auto container mt-24">
      <Subtitle>Ürünler</Subtitle>
      <div className="grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
        <ProductByFilter />

        <div className="col-span-3">
          <TypeFilter />

          <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6">
            {isLoading && <div>Loading...</div>}
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
