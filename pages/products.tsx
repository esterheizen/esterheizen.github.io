import Head from "next/head";
import Image from "next/image";
import { useMemo, useState } from "react";
import Footer from "../components/Footer";
import { products } from "../components/Products";

export default function ProductsPage() {
  const [query, setQuery] = useState("");

  // AI-generated summary (small, editable copy)
  const aiSummary = useMemo(
    () =>
      "Explore our curated range of garment trims and accessories — premium buttons, care labels and woven labels crafted for durability, consistency and style. Whether you're producing high-volume retail lines or bespoke pieces, our products are produced with quality control and customizable finishes to fit your brand.",
    []
  );

  const filtered = products.filter((p) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      (p.description || "").toLowerCase().includes(q)
    );
  });

  return (
    <>
      <Head>
        <title>Products — Fast Trim International</title>
        <meta name="description" content="All products: Buttons, Care Labels, Woven Labels" />
      </Head>

      <div className="min-h-screen flex flex-col bg-white font-sans">
        <main className="flex-1">
          <section className="bg-gradient-to-r from-blue-500 from-yellow-500 via-purple-600 to-pink-500 to-red-600 animate-gradient-x py-16 px-4 text-white">
            <div className="max-w-6xl mx-auto space-y-10 text-center">
              <div className="mx-auto max-w-3xl">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Products</h1>
                <p className="text-lg sm:text-xl leading-9">{aiSummary}</p>
              </div>

              <div className="mx-auto max-w-3xl">
                <label className="block text-sm font-medium text-white mb-2">Search products</label>
                <input
                  aria-label="Search products"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by name or description..."
                  className="w-full rounded-md border border-white/30 bg-white/15 text-white placeholder:text-white/70 px-3 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-white/70"
                />
              </div>
            </div>
          </section>

          <section className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p, i) => (
                <article
                  key={i}
                  className="bg-white rounded-xl shadow p-4 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-[260px] h-[260px] relative rounded-md overflow-hidden">
                    <Image
                      src={p.images && p.images.length ? p.images[0] : "/products/placeholder.png"}
                      alt={p.name}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 260px, (min-width: 640px) 260px, 100vw"
                    />
                  </div>

                  <h3 className="mt-4 text-blue-900 font-semibold text-lg">{p.name}</h3>
                  {p.description && <p className="text-gray-600 text-sm mt-2">{p.description}</p>}
                </article>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
