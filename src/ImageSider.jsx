import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const images = [
  "https://www.rhodeskin.com/cdn/shop/files/salty-tan-hero1-desktop_87b51a88-8fba-4484-982b-aaa216cf4112_1440x.jpg?v=1756011896",
  "https://www.rhodeskin.com/cdn/shop/files/salty-tan-hero2-desktop_fbd38f7f-636a-4e48-bb32-570543ed0882_1440x.jpg?v=1755963314",
  "https://www.rhodeskin.com/cdn/shop/files/salty-tan-hero4-desktop_61d0a37a-869d-410c-8240-77f0c34cd8fa_1440x.jpg?v=1755974451",
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="relative flex justify-center items-center w-full max-w-3xl mx-auto">
      {/* Left Arrow */}
      <FaArrowAltCircleLeft
        onClick={prevSlide}
        className="absolute left-5 text-white text-4xl cursor-pointer z-10"
      />
      {/* Right Arrow */}
      <FaArrowAltCircleRight
        onClick={nextSlide}
        className="absolute right-5 text-white text-4xl cursor-pointer z-10"
      />

      {images.map((img, index) => (
        <div
          className={`transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          key={index}
        >
          {index === current && (
            <img
              src={img}
              alt="slider"
              className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
            />
          )}
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-5 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
