// pages/index.tsx
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/MainHead";
import About from "@/components/About";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fast Trim International</title>
        <meta name="description" content="Garment accessories supplier - Buttons, Zippers, Labels" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-100 font-sans">
        <Header />
        <main className="flex-1 w-full">
  <Hero />
  <Products />
</main>

        <Footer />
      </div>
    </>
  );
}
