import React, { useEffect, useState } from "react";
import Title from "../UI/Title";
import { brandAllApi } from "../../service/serviceApi";
import BrandItem from "./BrandItem";


function Brand() {

  const [brands, setBrands] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBrandList();
  }, []);

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
    <div className="container mx-auto">
      <Title>Markalar</Title>
      <div className='grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8'>
      {isLoading && <div>Loading...</div>}
          {brands.map((item, key) => (
            <BrandItem key={key} item={item} />
          ))}
      </div>
    </div>
  )
}

export default Brand
