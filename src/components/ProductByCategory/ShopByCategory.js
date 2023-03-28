import React, { useState } from "react";
import { categoryAllApi } from "../../service/serviceApi";
import useDelayCallback from "../helpers/useDelayCallback";

import Title from "../UI/Title";
import CategoryItem from "./CategoryItem";

const ShopByCategory = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCategoryList = () => {
    categoryAllApi().then((res) => {
      if (res.data.success) {
        if (res.data.status === "success") {
          setCategories(res.data.data);
        }
      } else {
        setCategories([]);
      }
      setIsLoading(false);
    });
  };

  useDelayCallback(() => {
    getCategoryList();
  }, [categories]);

  // console.log(categories);

  return (
    <div className="mx-auto container mt-16">
      <div className="flex flex-col">
        <Title>Kategoriye Göre Alışveriş</Title>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {isLoading && <div>Loading...</div>}
          {categories &&
            categories.map((item, key) => (
              <CategoryItem item={item} key={key} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
