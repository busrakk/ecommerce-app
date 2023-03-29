import React, { useEffect } from "react";
// import Title from "../UI/Title";
import BrandItem from "./BrandItem";
// import useDelayCallBack from "../helpers/useDelayCallback";
import { useSelector, useDispatch } from "react-redux";
import { getBrands } from "../../redux/services";
import { getAllBrands } from "../../features/brandSlice";

function Brand() {

  const brands = useSelector(getAllBrands);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);



 console.log(brands)

  return (
    <div className="container mx-auto py-8">
      {/* <Title>Markalar</Title> */}
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8'>
          {brands.map((item, key) => (
            <BrandItem key={key} item={item} />
          ))}
      </div>
    </div>
  )
}

export default Brand
