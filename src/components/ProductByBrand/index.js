import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { productByBrandApi } from "../../service/serviceApi";
import Item from "./Item";
import ProductByFilter from "../ProductByFilter";
import Subtitle from "../UI/Subtitle";
import TypeFilter from "../ProductByFilter/TypeFilter";
import useDelayCallback from "../helpers/useDelayCallback";

const ProductByBrand = () => {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useDelayCallback(() => {
    productByBrandApi(params.id).then((res) => {
      if (res.data.success) {
        if (res.data.status === "success") {
          setIsLoading(false);
          setProduct(res.data.data);
        }
      } else {
        setProduct([]);
      }
    });
  }, [params]);

  return (
    <div className="mx-auto container mt-24">
      <Subtitle>Ürünler</Subtitle>
      <div className="grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
        <ProductByFilter />

        <div className="col-span-3">
          <TypeFilter />

          <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6">
            {isLoading && <div>Loading...</div>}
            {product &&
              product.map((item, key) => <Item key={key} item={item} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductByBrand;
