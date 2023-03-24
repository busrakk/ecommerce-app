import React, { useEffect, useState } from "react";
import Title from "../UI/Title";
import ProductItem from "./ProductItem";
//import useDelayCallback from "../helpers/useDelayCallback";
import { productAllApi } from "../../service/serviceApi";

function Product() {
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
    <div className="mx-auto container mt-6">
      <div className="flex flex-col">
        <Title>Öne Çıkan İlanlar</Title>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-8 items-center">
          {isLoading && <div>Loading...</div>}
          {products.map((item, key) => (
            <ProductItem key={key} item={item} />
          ))}
          {/* {data.name} */}
        </div>
      </div>
    </div>
  );
}

export default Product;
