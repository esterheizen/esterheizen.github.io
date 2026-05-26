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
      "/products/woven-label.webp",
      "/products/woven-label1.jpg",
      "/products/woven-label2.jpg"
    ],
    description: "Durable, fabric-based tags"
  },
  {
    name: "Elastic",
    images: ["/products/elastic.webp"],
    description: "Various elastic types for waistbands and trims."
  },
  {
    name: "Embroidery Badge",
    images: ["/products/custom-logo.webp"],
    description: "Custom embroidered badges and patches."
  },
  {
    name: "Gum Tape",
    images: ["/products/gum-tape.webp"],
    description: "High-adhesion gum tape for trims and labels."
  },
  {
    name: "Hang Tag",
    images: ["/products/hang-tag.webp"],
    description: "Printed hang tags for branding and pricing."
  },
  {
    name: "Hang Tag Sting",
    images: ["/products/hang-tag-string.webp"],
    description: "String and attachments for hang tags."
  },
  {
    name: "Heat Transfer Label",
    images: ["/products/heat-transfer-label.webp"],
    description: "Heat-applied labels for seamless application."
  },
  {
    name: "Hole Elastic",
    images: ["/products/elastic.webp"],
    description: "Elastic with eyelets for drawstrings and closures."
  },
  {
    name: "Lace",
    images: ["/products/lace.webp"],
    description: "Decorative lace trims in various widths and patterns."
  },
  {
    name: "Leather Patch",
    images: ["/products/leather-patch.webp"],
    description: "Genuine and faux leather patches for garments."
  },
  {
    name: "Logo",
    images: [],
    description: "Custom logo printing and embroidery services."
  },
  {
    name: "Silica Gel",
    images: ["/products/silica-gel.webp"],
    description: "Desiccant packets for product protection."
  },
  {
    name: "Silicone Badge",
    images: [],
    description: "Flexible silicone badges and tags."
  },
  {
    name: "Size Label",
    images: ["/products/size-label.jpg"],
    description: "Clear, durable size labels for apparel."
  },
  {
    name: "Stopper",
    images: ["/products/stopper.jpg"],
    description: "Cord stoppers and adjusters for garments."
  },
  {
    name: "Zipper",
    images: ["/products/zipper.webp"],
    description: "Zippers and fastenings in multiple finishes."
  }
];



export default function Products() {
  const featuredProducts = products.filter((product) =>
    ["Buttons", "Care Labels", "Woven Labels"].includes(product.name)
  );

  return (
    <section
      id="products"
      className="py-12 sm:py-16 px-4 sm:px-8 bg-gray-50"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-blue-900">
        Our Products
      </h2>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        {featuredProducts.map((product, index) => (
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
