import React, { useState } from "react";

const products = [
  {
    id: 1,
    title: "PEPTIDE LIP TINT",
    subtitle: "The tinted lip layer",
    price: "$20.00",
    img1: "//www.rhodeskin.com/cdn/shop/files/glazing-milk-standing_medium.jpg?v=1746171080",
    img2: "https://www.rhodeskin.com/cdn/shop/files/glazing-milk-hover_1440x.jpg?v=1752874765",
  },
  {
    id: 2,
    title: "PEPTIDE LIP TREATMENT",
    subtitle: "The nourishing lip layer",
    price: "$20.00",
    img1: "https://www.rhodeskin.com/cdn/shop/files/product_card_-_strawberryglaze_-_standing_1440x.jpg?v=1756101902",
    img2: "https://www.rhodeskin.com/cdn/shop/files/strawberry-hover_1440x.jpg?v=1756074247",
  },
  {
    id: 3,
    title: "GLAZING MILK",
    subtitle: "Ceramide facial essence",
    price: "$29.00",
    img1: "https://www.rhodeskin.com/cdn/shop/files/mist-product-card_1440x.jpg?v=1749337193",
    img2: "https://www.rhodeskin.com/cdn/shop/files/mist-hover_1440x.jpg?v=1748989422",
  },
  {
    id: 4,
    title: "PEPTIDE CREAM",
    subtitle: "Barrier restore cream",
    price: "$30.00",
    img1: "https://www.rhodeskin.com/cdn/shop/files/product_card_-_toasted_teddy_1440x.jpg?v=1717624265",
    img2: "https://www.rhodeskin.com/cdn/shop/files/toastedteddy-hero-m-3_1440x.jpg?v=1743538794",
  },
  {
    id: 5,
    title: "LIP MASK",
    subtitle: "Hydrating night mask",
    price: "$18.00",
    img1: "https://www.rhodeskin.com/cdn/shop/files/lip-case-vanilla-product-card_f3c74983-dec3-4ebb-a310-aa298db9a675_1440x.jpg?v=1714095171",
    img2: "https://www.rhodeskin.com/cdn/shop/files/lip-case-hb-hover-1_1440x.jpg?v=1713833373",
  },
  {
    id: 6,
    title: "FACE SERUM",
    subtitle: "Daily glow booster",
    price: "$25.00",
    img1: "https://www.rhodeskin.com/cdn/shop/files/rhode-barrier-butter-product-card_1440x.jpg?v=1749078231",
    img2: "https://www.rhodeskin.com/cdn/shop/files/bb-hover_5108f718-6e5f-4c0e-9ea1-867e84efc525_1440x.jpg?v=1749340189",
  },
];

const ProductSlider = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="w-full overflow-x-auto scroll-smooth flex space-x-6 p-6">
      {products.map((p) => (
        <div
          key={p.id}
          className="min-w-[300px] bg-gray-50 rounded-2xl p-4 flex flex-col items-center shadow-sm hover:shadow-md transition"
          onMouseEnter={() => setHovered(p.id)}
          onMouseLeave={() => setHovered(null)}>
          <img
            src={hovered === p.id ? p.img2 : p.img1}
            alt={p.title}
            className="w-60 h-60 object-cover rounded-xl transition-all duration-300"
          />
          <div className="text-center mt-4">
            <h2 className="text-lg font-semibold">{p.title}</h2>
            <p className="text-gray-500 text-sm">{p.subtitle}</p>
            <p className="text-gray-900 font-medium mt-1">{p.price}</p>
            <button className="mt-3 bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSlider;
