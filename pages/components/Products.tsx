// components/Products.tsx
import ProductCard from "./ProductCard";

export const products = [
  {
    name: "Buttons",
    images: [
      "/products/button1.jpg",
      "/products/button2.jpg",
      "/products/button3.jpg",
    ],
    description: "Premium buttons in various styles and finishes for every garment.",
  },
  {
    name: "Care Labels",
    images: [
      "/products/care-label1.jpeg",
      "/products/care-label2.jpeg",
      "/products/care-label3.jpeg"
    ],
    description: "Durable and stylish care labels for your garments.",
  },
  {
    name: "Woven Labels",
    images: [
      "/products/woven-label1.jpg",
      "/products/woven-label2.jpg"
    ],
    description: "Durable, fabric-based tags"
  }
  // add other products similarly
];



export default function Products() {
  return (
    <section
      id="products"
      className="py-12 sm:py-16 px-4 sm:px-8 bg-gray-50"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-blue-900">
        Our Products
      </h2>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            images={product.images}
            description={product.description}
          />
        ))}
      </div>
    </section>
  );
}
