// components/Contact.tsx
export default function Contact() {
  return (
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
  );
}
