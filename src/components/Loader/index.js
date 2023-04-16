import React from "react";
import { BallTriangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className='flex justify-center m-52'>
      <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#5c6bc0"
      ariaLabel="ball-triangle-loading"
      wrapperClass={{}}
      wrapperStyle=""
      visible={true}
    />
    </div>
  );
};

export default Loader;
