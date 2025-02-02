import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useWindowWidth } from "@react-hook/window-size";
import slider1 from "../../../../assets/images/slider1.jpg";
import slider2 from "../../../../assets/images/slider2.jpg";
import slider3 from "../../../../assets/images/slider3.jpg";
import { Link } from "react-router-dom";

const HomeSlider = () => {
  const windowWidth = useWindowWidth();

  const settings = {
    dots: false,
    infinite: true,
    speed: 750,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };

  return (
    <div className="relative h-auto mt-[100px] md:h-[450px] before:bg-gradient-to-r before:from-black before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      {windowWidth >= 768 && (
        <Slider {...settings}>
          <div>
            <img
              className="w-full h-[450px] object-cover"
              src={slider1}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-[450px] object-cover"
              src={slider2}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-[450px] object-cover"
              src={slider3}
              alt=""
            />
          </div>
        </Slider>
      )}

      <div className="md:container flex justify-between mt-10 xl:px-20 items-center relative md:absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20">
        <div className="hidden md:block">
          <div className="sm:max-w-lg">
            <h1 className="font text-3xl font-bold uppercase tracking-tight text-white sm:text-5xl">
              hoşgeldİnİz
            </h1>
            <div className="flex flex-col mt-4">
              <p className="text-xl text-gray-300 mt-4">
                <span>Tek Bir Platformda</span>
              </p>
              <p className="text-2xl text-gray-300 mt-2">
                <span>
                  Hem Ürün Aramak Hem de Ürün Satmak İster Misiniz ...
                </span>
              </p>
            </div>
          </div>
          <div className="flex mt-10">
            <Link to="/productlist">
              <button className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700">
                Şimdi keşfedin
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
