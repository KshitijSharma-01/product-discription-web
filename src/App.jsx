import { useState } from "react";
import ImageSlider from "./ImageSider";
import Images from "./ImageSlider";
import ProductSlider from "./ProductSider";

function App() {
  const [quantity, setQuantity] = useState(1);
  const [shade, setShade] = useState("Salty Tan");

  const shades = [
    { name: "Salty Tan", hex: "#C6865B" },
    { name: "Ribbon Pink", hex: "#F3A6B0" },
    { name: "Espresso", hex: "#4B2E2B" },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="animate-fade-in text-center m-4 bg-gray-200 font-bold p-2 border-none rounded-xl w-7xl ml-9">
        <h2>FREE US SHIPPING ON ORDER OVER $45</h2>
      </div>
      <header className="animate-fade-in flex justify-between items-center px-8 py-4 bg-gray-200 w-7xl ml-9 rounded-t-2xl">
        <div>
          <nav className="flex gap-10 text-sm justify-between">
            <a href="#" className="font-bold text-xl text-gray-600">
              SHOP
            </a>
            <a href="#" className="font-bold text-xl text-gray-600">
              ABOUT
            </a>
            <a href="#" className="font-bold text-xl text-gray-600">
              FUTURES
            </a>
          </nav>
        </div>

        <div>
          <h1 className="text-5xl font-bold text-gray-600 ml-10">rhode</h1>
        </div>

        <div>
          <nav className="flex gap-10 text-sm justify-between">
            <a href="#" className="font-bold text-xl text-gray-600">
              SEARCH
            </a>
            <a href="#" className="font-bold text-xl text-gray-600">
              ACCOUNT
            </a>
            <a href="#" className="font-bold text-xl text-gray-600">
              CART (0)
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 py-12 max-w-7xl mx-auto">
        {/* Left: Product Images */}
        <div>
          <ImageSlider />
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col gap-6 md:overflow-visible md:h-175 text-gray-600 bg-gray-200 p-5 rounded-2xl lg:overflow-auto lg:h-125">
          <h2 className="text-5xl font-sans font-bold ">peptide lip tint</h2>
          <div className="flex justify-between gap-6 text-xl font-bold mt-2 mb-2">
            <div>
              <h2>The TINTED LIP LAYER</h2>
            </div>
            <div>★★★★★ (411)</div>
          </div>
          <p className="text-neutral-500 text-lg">
            Peptide Lip Tint in Jelly Bean has joined the rhode lineup forever.
            Originally made as a limited edition shade for Hailey’s 27th
            birthday, it’s a nourishing formula with a hint of tint and shimmer
            that hydrates and replenishes lips while leaving a glossy,
            high-shine finish. Smells like a sweet pink jelly bean. Size: 10ml /
            .3 fl oz.
          </p>
          <p className="text-neutral-500 font-xl pb-5 b border-b-1">
            The complete collection is now available in our improved formula.
            <br />
            Same nourishing gloss you know and love, with a lasting smooth
            texture.
          </p>

          <p>
            Shade:{" "}
            <span className="underline">
              <strong>jelly bean</strong> - shimmery sheer pink
            </span>
          </p>

          {/* Shades */}
          <div>
            <p className="text-medium font-bold mb-2">Core Shade:</p>
            <div className="flex gap-3">
              {shades.map((s) => (
                <button
                  key={s.name}
                  onClick={() => setShade(s.name)}
                  className={`w-10 h-10 rounded-full border-2 ${
                    shade === s.name ? "border-black" : "border-gray-200"
                  }`}
                  style={{ backgroundColor: s.hex }}
                />
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-neutral-600">
            A silky, hydrating lip tint with a natural finish. Infused with
            peptides for a plump, nourished look.
          </p>

          {/* Quantity + Add to Bag */}
          <div className="flex gap-4 items-center">
            <div className="flex items-center border rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2">
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2">
                +
              </button>
            </div>
            <button className="flex-1 bg-black text-white py-3 rounded-xl shadow-md hover:bg-neutral-800 transition">
              Buy Now at $20
            </button>
          </div>

          {/* Supporting Info */}
          <div className="flex gap-6 text-xs text-neutral-500 mt-2">
            <span>✔ Cruelty-Free</span>
            <span>✔ Vegan</span>
            <span>✔ Free Shipping $40+</span>
          </div>
        </div>
      </main>

      <div className="bg-gray-200 w-330 ml-5 rounded-2xl mt-5 mb-10">
        <div className="pt-10 text-4xl ml-15 text-gray-600 font-bold">
          <h1>
            meet jelly bean —<br /> a shimmery sheer
            <br /> baby pink lip tint
          </h1>
        </div>

        <div className="w-310 ml-11 p-4">
          <Images />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 py-12 max-w-9xl mx-auto">
        {/* left: Product Info */}
        <div className="flex flex-col gap-6 text-gray-600 bg-gray-200 p-5 rounded-2xl h-auto">
          <h2 className="text-4xl font-sans mt-10 mb-8 font-semibold ">
            Nourishing GLAZE with a hint of <br /> TINT and SHIMMER.
          </h2>
          <div className="flex justify-between border-b-1 text-gray-600">
            <div className="mb-4 font-bold text-xl">
              <h2>FEELS LIKE:</h2>
            </div>
            <div className="font-semiBold">
              Rich, velvety gloss that melts onto lips
            </div>
          </div>

          <div className="flex justify-between border-b-1 text-gray-600">
            <div className="mb-4 font-bold text-xl">
              <h2>LOOKS LIKE:</h2>
            </div>
            <div className="font-semiBold">
              Your favorite lip gloss from middle school, all grown up
            </div>
          </div>

          <div className="flex justify-between border-b-1 text-gray-600">
            <div className="mb-4 font-bold text-xl">
              <h2>SMELLS LIKE:</h2>
            </div>
            <div className="font-semiBold">A sweet pink jelly bean</div>
          </div>

          <div className="flex justify-between text-gray-600">
            <div className="mb-4 font-bold text-xl">
              <h2>AWARDS:</h2>
            </div>
            <div className="font-semiBold">
              The Vogue Beauty Awards 2024:
              <br /> The Modern Make-Up Must Have
            </div>
          </div>

          <div className="flex justify-between border-b-1 text-gray-600">
            <div className="mb-4 font-bold text-xl">
              <h2> </h2>
            </div>
            <div className="font-semiBold text-end mb-2">
              Byrdie Beauty Awards 2023:
              <br />
              Best Tinted Lip Balm
            </div>
          </div>

          <div className="flex justify-between text-gray-600">
            <div className="mb-4 font-bold text-xl">
              <h2>FYI:</h2>
            </div>
            <div className="font-semiBold text-end">
              Cruelty-Free • Vegan • Gluten-Free
              <br />
              Dermatologist-Tested
            </div>
          </div>
        </div>

        {/* right: Product Images */}
        <div>
          <img
            src="https://www.rhodeskin.com/cdn/shop/files/jelly-bean-featured_1440x.jpg?v=1755970999"
            alt=""
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 py-12 max-w-7xl mx-auto">
        <div>
          <button className="absolute ml-80 mt-10 text-xl border-1 pl-5 pr-5 rounded-3xl hover:border-2 bg-white cursor-pointer">
            FULL INGREGIENT LIST
          </button>
          <img
            src="https://www.rhodeskin.com/cdn/shop/files/jelly-bean-ingred_1440x.jpg?v=1755647279"
            alt=""
            className="rounded-xl relative -z-1"
          />
        </div>

        <div className="bg-gray-300 rounded-2xl">
          <div className="flex h-80 items-center justify-start">
            <h2 className="text-5xl rotate-90 transform text-gray-500 font-bold">
              what’s inside
            </h2>
          </div>
          <div className="w-100 ml-40">
            <p className="text-black">
              Peptides are our go-to skincare ingredient and come in many forms
              with unique benefits. Get to know the one in this formula.
            </p>
            <h2 className="text-2xl mt-5 mb-5 font-bold">
              PALMITOYL TRIPEPTIDE-1
            </h2>
            <p className="border-b pb-10">
              a short chain of amino acids that hydrates, smooths, and plumps
              lips while reducing the look of fine lines
            </p>
            <p className="mt-5">
              also made with <strong>SHEA BUTTER, BABASSU, CUPUAÇU</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="w-320 md:w-auto md:mr-6 ml-10">
        <img
          src="https://www.rhodeskin.com/cdn/shop/files/jelly-bean-full-bleed-desktop_1440x.jpg?v=1755963485"
          alt=""
          className="rounded-2xl"
        />
      </div>

       <div className="min-h-screen bg-[#f5f4f2] flex flex-col md:flex-row justify-between px-6 w-320 mt-10 ml-10 rounded-2xl mb-5 md:px-16 py-10 md:py-16">
      
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#55504A] mb-4">
          less harm, more tint.
        </h1>
        <p className="text-[#5F5B55] text-base md:text-lg leading-relaxed max-w-md">
          Peptide Lip Tint packaging is made with post-consumer recycled (PCR) materials.
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex justify-center items-center relative mt-10 md:mt-0 ">
        {/* Product visuals */}
        <div className="flex gap-10">

          {/* Unit Carton */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-72 bg-[#E889AE] rounded-sm"></div>
            <p className="text-sm text-[#5F5B55] text-center mt-2">
              <span className="font-semibold">Unit Carton</span><br />
              100% recyclable and made from<br />FSC-certified paper
            </p>
          </div>

          {/* Tube & Cap */}
          <div className="flex flex-col items-center">
            {/* Cap */}
            <div className="w-8 h-12 bg-[#E889AE] rounded-t-xl"></div>
            <p className="text-sm text-[#5F5B55] mt-1 mb-4 text-center">
              <span className="font-semibold">Cap</span><br />
              30% PCR PP #5
            </p>

            {/* Tube */}
            <div className="w-10 h-64 bg-[#E889AE] rounded-b-xl"></div>
            <p className="text-sm text-[#5F5B55] mt-2 text-center">
              <span className="font-semibold">Tube</span><br />
              30% PCR HDPE #2<br />
              and 70% LDPE #4
            </p>
          </div>
        </div>

        {/* Side banner */}
        <div className="absolute right-[-60px] top-0 h-full w-16 bg-[#7E7A75] hidden md:flex flex-col justify-center">
          <p className="text-white font-semibold rotate-90 whitespace-nowrap">
            how to recycle
          </p>
        </div>
      </div>
    </div>

    <div className="min-h-screen bg-white flex justify-center items-center">
      <ProductSlider />
    </div>

       <footer className="bg-[#f5f4f1] text-[#5e5b55] w-320 ml-10 rounded-2xl">
      {/* Top Logo Section */}
      <div className="flex justify-center py-10 border-b border-gray-300">
        <h1 className="text-[140px] font-bold tracking-tight leading-none font-sans lowercase">
          rhode
        </h1>
      </div>

      {/* Bottom Section */}
      <div className="grid md:grid-cols-5 gap-8 px-10 py-10 text-sm">
        {/* Newsletter */}
        <div className="md:col-span-2">
          <p className="mb-2">
            Join us on the rhode to an effortless glow.
          </p>
          <p className="mb-4">
            Glaze your inbox with tips, tricks & exclusive content from Hailey.
          </p>
          <div className="flex mb-2">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button className="bg-[#5e5b55] text-white px-4 rounded-r-md hover:bg-[#44423d] transition">
              SUBSCRIBE
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            By signing up, you agree to our <span className="underline">Privacy Policy*</span>.
          </p>
        </div>

        {/* NAVIGATE */}
        <div>
          <h3 className="font-semibold mb-3">NAVIGATE</h3>
          <ul className="space-y-1">
            <li>Shop</li>
            <li>Our Story</li>
            <li>Rhode Futures</li>
            <li>Impact</li>
            <li>VLOG</li>
            <li>Where to Find Us</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="font-semibold mb-3">SOCIAL</h3>
          <ul className="space-y-1">
            <li>Instagram</li>
            <li>Youtube</li>
            <li>TikTok</li>
          </ul>
        </div>

        {/* OFFICIAL */}
        <div>
          <h3 className="font-semibold mb-3">OFFICIAL</h3>
          <ul className="space-y-1">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Accessibility</li>
            <li>FAQ</li>
            <li>Contact</li>
            <li>Events</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="font-semibold mb-3">SUPPORT</h3>
          <ul className="space-y-1">
            <li>We’re here M-F 9am - 5pm PST.</li>
            <li>Drop us a note anytime.</li>
            <li>Do Not Sell or Share My Personal Information</li>
            <li>Cookie Preferences</li>
          </ul>
          <p className="text-xs mt-4">© rhode 2025</p>
          <div className="flex items-center gap-2 mt-1">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/72/Afterpay_logo.svg" alt="Afterpay" className="h-4" />
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default App;
