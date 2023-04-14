import React from "react";

const Title = ({ children }) => {
  return (
    <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
    <div className="text-center">
        <h2 className="font-bold tracking-tight lg:text-4xl text-3xl lg:leading-5 md:leading-6 leading-7 text-gray-800 md:w-full w-9/12 mx-auto">{children}</h2>
        <p className="font-normal text-lg leading-6 text-gray-600 mt-6 lg:w-5/12 md:w-9/12 mx-auto">
        There are many variations of passages of Lorem Ipsum available
        </p>
    </div>
    </div>
    // <h3 className="text-2xl tracking-tighter font-semibold mt-8 mb-6 px-6 md:px-0">
    //   {children}
    // </h3>
  );
};

export default Title;
