import React, { useEffect, useState } from "react";
import ProductItem from "../../Product/ProductItem";
import { productByUserApi } from "../../../service/serviceApi";

const UserProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProductList();
  }, [products]);

  const getProductList = () => {
    productByUserApi().then((res) => {
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
    <div className="col-span-9 px-4 pb-4">
      <div className="rounded-t bg-white mb-0 px-6 py-6">
        <div className="text-center flex justify-between px-4 items-center">
          <h6 className="text-blueGray-700 text-xl uppercase font-bold">
            Ürünlerİm ({products.length})
          </h6>
        </div>
      </div>
      <div className="flex flex-col bg-white">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-8 items-center px-6 py-5">
          {isLoading && <div>Loading...</div>}
          {products.map((item, key) => (
            <ProductItem key={key} item={item} />
            // <div>{item.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProductList;
