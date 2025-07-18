// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full bg-white/80 py-6 mt-auto">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 text-gray-500 text-sm">
        <span>&copy; {new Date().getFullYear()} Fast Trim International. All rights reserved.</span>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-teal-500 transition">Privacy Policy</a>
          <a href="#" className="hover:text-teal-500 transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
