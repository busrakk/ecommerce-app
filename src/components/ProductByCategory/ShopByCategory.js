import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { categoryAllApi } from "../../service/serviceApi";

import Title from "../UI/Title";

const ShopByCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    categoryAllApi().then((res) => {
      if (res.data.success) {
        if (res.data.status === "success") {
          // setIsLoading(false);
          setCategories(res.data.data);
        }
      } else {
        setCategories([]);
      }
    });
  };

  return (
    <div className="mx-auto container mt-24">
      <div className="flex flex-col">
        <Title>Kategoriye Göre Alışveriş</Title>

        <div className="grid grid-cols-4 gap-6">
          {categories &&
            categories?.map((item) => (
              <div
                key={item.id}
                className="relative rounded-sm overflow-hidden group"
              >
                <img src={item.image} alt={item.name} className="w-full" />
                <Link
                  to={`/product/category/${item.id}`}
                  className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
                >
                  {item.name}
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
