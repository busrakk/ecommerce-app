import React, { useEffect } from "react";
import { getAllBrands } from "../../../../features/brandSlice";
import { getAllCategories } from "../../../../features/categorySlice";
import { getBrands, getCategories } from "../../../../redux/services";
import { useDispatch, useSelector } from "react-redux";
import Filter from "./Filter";

const ProductByFilter = () => {
  const brands = useSelector(getAllBrands);
  const categories = useSelector(getAllCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const prices = [
    {
      name: "0 TL - 100 TL",
    },
    {
      name: "100 TL - 500 TL",
    },
    {
      name: "500 TL - 1000 TL",
    },
    {
      name: "1000 TL - 10000 TL",
    },
  ];

  return (
    <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden">
      <div className="divide-y divide-gray-200 space-y-5">
        <div className="grid gap-y-6 md:grid-cols-2 lg:grid-cols-4 pt-5 md:pt-10">
          <Filter items={brands} title="Markalar" />
        </div>
        <div className="grid gap-y-6 md:grid-cols-2 lg:grid-cols-4 pt-5 md:pt-10">
          <Filter items={categories} title="Kategoriler" />
        </div>
        <div className="grid gap-y-6 md:grid-cols-2 lg:grid-cols-4 pt-5 md:pt-10">
          <Filter items={prices} title="Fiyatlar" />
        </div>
      </div>
    </div>
  );
};

export default ProductByFilter;
