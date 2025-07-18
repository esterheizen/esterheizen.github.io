import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 shadow-inner py-4">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Contact Info */}
        <div className="text-blue-900 text-center sm:text-left space-y-1 text-sm">
          <p className="font-semibold">Contact Us</p>
          <p>
            Email:{" "}
            <a
              href="mailto:shafiqul@fasttrimbd.com"
              className="text-teal-500 hover:underline"
            >
              shafiqul@fasttrimbd.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+8801713013968"
              className="text-teal-500 hover:underline"
            >
              +880 1713013968
            </a>
          </p>
          <p>Address: 9/26-Humayun Road, Mohammadpur, Dhaka-1207</p>
        </div>

        {/* Social Media */}
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/pages/Fast-Trim-International/556944687650205"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-teal-500"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M22 12a10 10 0 10-11.62 9.85v-6.97h-2.9v-2.88h2.9V9.77c0-2.87 1.7-4.46 4.3-4.46 1.25 0 2.56.22 2.56.22v2.8h-1.44c-1.42 0-1.86.88-1.86 1.79v2.14h3.17l-.51 2.88h-2.66v6.97A10 10 0 0022 12z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="mt-4 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Fast Trim International. All rights reserved.
      </div>
    </footer>
  );
}
