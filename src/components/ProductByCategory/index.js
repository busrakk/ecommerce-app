import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { productByCategoryApi } from "../../service/serviceApi";

import ProductByFilter from "../ProductByFilter";
import Subtitle from "../UI/Subtitle";
import TypeFilter from "../ProductByFilter/TypeFilter";
import useDelayCallback from "../helpers/useDelayCallback";
import ProductItem from "../Product/ProductItem";

const ProductByCategory = () => {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useDelayCallback(() => {
    productByCategoryApi(params.id).then((res) => {
      if (res.data.success) {
        if (res.data.status === "success") {
          setProduct(res.data.data);
        }
      } else {
        setProduct([]);
      }
      setIsLoading(false);
    });
  }, [params]);

  return (
    <div className="mx-16 mt-24">
      <Subtitle>Ürünler</Subtitle>
      <div className="grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
        <ProductByFilter />

        <div className="col-span-3">
          <TypeFilter />

          <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6">
            {isLoading && <div>Loading...</div>}
            {product &&
              product.map((item, key) => <ProductItem key={key} item={item} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductByCategory;
