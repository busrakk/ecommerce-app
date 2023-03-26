import React, { useEffect, useState } from "react";
import ProductItem from "../Product/ProductItem";
import { productByFeaturedApi } from "../../service/serviceApi";
import ProductByFilter from "../ProductByFilter";
import Subtitle from "../UI/Subtitle";
import TypeFilter from "../ProductByFilter/TypeFilter";

const List = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProductList();
  }, [products]);

  const getProductList = () => {
    productByFeaturedApi().then((res) => {
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

export default List;
