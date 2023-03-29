import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../features/categorySlice";
import { getCategories } from "../../redux/services";
// import useDelayCallback from "../helpers/useDelayCallback";

import Title from "../UI/Title";
import CategoryItem from "./CategoryItem";

const ShopByCategory = () => {
  const categories = useSelector(getAllCategories);
  // const isLoading = useSelector((state) => state.categories.isLoading);
  // const error = useSelector((state) => state.categories.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch]);

  // if(isLoading) {
  //   return 'Loading...'
  // }

  // if(error){
  //   return error
  // }
  
  // console.log(categories);

  return (
    <div className="mx-auto container mt-16">
      <div className="flex flex-col">
        <Title>Kategoriye Göre Alışveriş</Title>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-2 xl:grid-cols-4">
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
