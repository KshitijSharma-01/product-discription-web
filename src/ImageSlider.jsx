import React, { useState } from "react";
import { motion } from "framer-motion";

const images = [
  "https://www.rhodeskin.com/cdn/shop/files/jelly-bean-carousel-1_1440x.jpg?v=1755963477",
  "https://www.rhodeskin.com/cdn/shop/files/jelly-bean-carousel-2_1440x.jpg?v=1755647052",
  "https://www.rhodeskin.com/cdn/shop/files/jelly-bean-carousel-3_1440x.jpg?v=1755963478",
  "https://www.rhodeskin.com/cdn/shop/files/jelly-bean-carousel-4_1440x.jpg?v=1755647141",
  "https://www.rhodeskin.com/cdn/shop/files/jelly-bean-carousel-5_1440x.jpg?v=1755647167",
  "https://www.rhodeskin.com/cdn/shop/files/jelly-bean-carousel-6_1440x.jpg?v=1755647200",
  "https://www.rhodeskin.com/cdn/shop/files/jelly-bean-carousel-7_1440x.jpg?v=1755647227",
];

const Images = () => {
  const [index, setIndex] = useState(0);
  const visibleCount = 4;

  const next = () => {
    if (index < images.length - visibleCount) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="relative w-full mx-auto p-4">
      {/* Slider Container */}
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex gap-4"
          animate={{ x: `-${index * 25}%` }}
          transition={{ duration: 0.5 }}
        >
          {images.map((img, i) => (
            <div key={i} className="flex-shrink-0 w-1/4">
              <img
                src={img}
                alt={`slide-${i}`}
                className="rounded-2xl shadow-lg w-full h-72 object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Buttons */}
      <button
        onClick={prev}
        className="absolute text-2xl font-bold left-2 top-1/2 -translate-y-1/2 bg-transparent shadow-md rounded-full p-2"
      >
        ←
      </button>
      <button
        onClick={next}
        className="absolute font-bold text-2xl right-2 top-1/2 -translate-y-1/2 bg-transparent shadow-md rounded-full p-2"
      >
        →
      </button>
    </div>
  );
};

export default Images;
