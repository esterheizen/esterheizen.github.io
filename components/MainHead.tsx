import { useRef } from "react";

export default function Hero() {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center
          px-6 text-center
          bg-gradient-to-r from-blue-500 from-yellow-500 via-purple-600 to-pink-500 to-red-600 animate-gradient-x text-white">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
        The Perfect Finish, <br /> For Every Garment Accessories
      </h1>
      <p className="max-w-xl text-lg mb-10 opacity-90">
        Fast Trim International delivers high-quality trims and accessories trusted by leading fashion brands worldwide.
      </p>
      <button
        onClick={scrollToProducts}
        className="inline-block px-10 py-4 bg-yellow-400 text-blue-900 font-bold rounded-full shadow-lg hover:bg-yellow-500 transition"
      >
        View Products
      </button>
    </section>
  );
}
