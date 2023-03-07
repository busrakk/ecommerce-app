import React from "react";
import Title from "../UI/Title";
import ProductItem from "./ProductItem";

const Product = () => {
  return (
    <div className="mx-auto container">
      <div className="flex flex-col">
        <div className="flex items-center space-x-8">
          <Title className="sr-only">İlanlar</Title>
        </div>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8 items-center">
          <ProductItem />
        </div>
      </div>
    </div>
  );
};

export default Product;
