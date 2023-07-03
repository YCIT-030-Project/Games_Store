import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://i5.walmartimages.com/dfw/8822aef6-4ca2/k2-_da0a5b5f-2bd2-4ae4-ae8d-13c63bb29549.v1.jpg",
    "https://media.gamestop.com/i/gamestop/HP_LOTF_856x480_2Up_Feature_D.webp",
    "https://media.gamestop.com/i/gamestop/AvatarESRB_856x480_2Up_Feature_DM.webp",
    "https://media.gamestop.com/i/gamestop/ACM_ESRB_856x480_2Up_Feature_DM.webp",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };
  console.log(currentSlide);
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div
          style={{ transform: `translateX(${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full flex transition-transform duration-1000  "
        >
          <img
            className="w-screen h-full object-cover"
            src={data[0]}
            alt="banner img"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[1]}
            alt="banner img"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[2]}
            alt="banner img"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[3]}
            alt="banner img"
            loading="priority"
          />
        </div>
        <div
          onClick={prevSlide}
          className=" absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44 "
        >
          <div className=" w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300 ">
            <BsArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className=" w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300 "
          >
            <BsArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
