import React, { useEffect, useState } from "react";
import Title from "../UI/Title";
import ProductItem from "./ProductItem";

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = () => {
    fetch("http://127.0.0.1:8000/api/allproduct")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="mx-auto container">
      <div className="flex flex-col">
        <div className="flex items-center space-x-8">
          <Title className="sr-only">İlanlar</Title>
        </div>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8 items-center">
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
