import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useWindowWidth } from "@react-hook/window-size";
import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.jpg";
import slider3 from "../../assets/images/slider3.jpg";
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
    <div className="relative h-auto md:h-[550px] before:bg-gradient-to-r before:from-black before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      {windowWidth >= 768 && (
        <Slider {...settings}>
          <div>
            <img
              className="w-full h-[550px] object-cover"
              src={slider1}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-[550px] object-cover"
              src={slider2}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-[550px] object-cover"
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
              Summer styles are finally here
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              This year, our new summer collection will shelter you from the
              harsh elements of a world that doesn't care if you live or die.
            </p>
          </div>
          <div className="flex mt-10">
            <Link to="/productlist">
              <button className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700">
                İlanlara Göz At
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
