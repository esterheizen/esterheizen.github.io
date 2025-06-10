import React from "react";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-100 font-sans">
      {/* Header with Navigation */}
      <header className="w-full bg-white/80 backdrop-blur shadow-md">
        <nav className="max-w-5xl mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Fast Trim Logo" className="w-10 h-10 rounded-full shadow" />
            <span className="text-xl font-bold text-blue-900 tracking-tight">Fast Trim International</span>
          </div>
          <ul className="flex space-x-8 text-blue-900 font-medium">
            <li>
              <a href="#" className="hover:text-teal-500 transition">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-teal-500 transition">About</a>
            </li>
            <li>
              <a href="#products" className="hover:text-teal-500 transition">Products</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-teal-500 transition">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <section className="bg-white rounded-2xl shadow-xl p-10 max-w-2xl w-full text-center mt-16 mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 tracking-tight">
            The Perfect Finish, For Every Garment Accessories
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            Fast Trim International delivers high-quality trims and accessories trusted by leading fashion brands worldwide.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-900 to-teal-400 text-white rounded-full font-semibold shadow hover:from-blue-800 hover:to-teal-500 transition"
          >
            Contact Us
          </a>
        </section>

        {/* About Section */}
        <section id="about" className="max-w-3xl w-full bg-white/80 rounded-xl shadow p-8 mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-3">About Us</h2>
          <p className="text-gray-700 text-base">
            With years of experience, Fast Trim International is a leading supplier of garment accessories. 
            Our commitment to quality, innovation, and customer satisfaction sets us apart in the garments industry.
          </p>
        </section>

        {/* Products Section */}
        <section id="products" className="max-w-5xl w-full mb-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <img src="/buttons.jpg" alt="Buttons" className="w-20 h-20 object-cover rounded-full mb-4" />
              <h3 className="font-semibold text-blue-800 mb-2">Buttons</h3>
              <p className="text-gray-600 text-sm text-center">Premium buttons in various styles and finishes for every garment.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <img src="/zippers.jpg" alt="Zippers" className="w-20 h-20 object-cover rounded-full mb-4" />
              <h3 className="font-semibold text-blue-800 mb-2">Zippers</h3>
              <p className="text-gray-600 text-sm text-center">Durable, smooth zippers available in multiple colors and sizes.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <img src="/labels.jpg" alt="Labels" className="w-20 h-20 object-cover rounded-full mb-4" />
              <h3 className="font-semibold text-blue-800 mb-2">Labels</h3>
              <p className="text-gray-600 text-sm text-center">Custom woven and printed labels to showcase your brand identity.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-xl w-full bg-white/80 rounded-xl shadow p-8 mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-3">Contact Us</h2>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-900 to-teal-400 text-white rounded-full px-6 py-2 font-semibold shadow hover:from-blue-800 hover:to-teal-500 transition"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-white/80 py-6 mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 text-gray-500 text-sm">
          <span>
            &copy; {new Date().getFullYear()} Fast Trim International. All rights reserved.
          </span>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-teal-500 transition">Privacy Policy</a>
            <a href="#" className="hover:text-teal-500 transition">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}