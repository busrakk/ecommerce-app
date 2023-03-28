import React, { useState } from "react";
// import Title from "../UI/Title";
import { brandAllApi } from "../../service/serviceApi";
import BrandItem from "./BrandItem";
import useDelayCallBack from "../helpers/useDelayCallback";


function Brand() {

  const [brands, setBrands] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useDelayCallBack(() => {
    getBrandList();
  }, [brands]);

  const getBrandList = () =>{
    brandAllApi().then(res => {
      if(res.data.success){
        if(res.data.status === 'success'){
          setIsLoading(false)
          setBrands(res.data.data)
        }
      }
      else{
        setBrands([]);
      }
      
    });
  }

 // console.log(brands)

  return (
    <div className="container mx-auto py-8">
      {/* <Title>Markalar</Title> */}
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8'>
      {isLoading && <div>Loading...</div>}
          {brands.map((item, key) => (
            <BrandItem key={key} item={item} />
          ))}
      </div>
    </div>
  )
}

export default Brand
