import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategories,
  getAllCategoriesStatus,
} from "../../../features/categorySlice";
import { getCategories } from "../../../redux/services";
// import useDelayCallback from "../helpers/useDelayCallback";

import Title from "../../UI/Title";
import CategoryItem from "./CategoryItem";
import { STATUS } from "../../../utils/status";
import Loader from "../../Loader";

const Category = () => {
  const categories = useSelector(getAllCategories);
  const categoryStatus = useSelector(getAllCategoriesStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="mx-auto container mt-16">
      <div className="flex flex-col">
        <Title>Kategoriye Göre Alışveriş</Title>
        {categoryStatus === STATUS.LOADING ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 w-full gap-6">
            {categories &&
              categories.map((item, key) => (
                <CategoryItem item={item} key={key} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
