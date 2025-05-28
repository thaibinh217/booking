import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-2">SMTH</h2>
          <p className="text-gray-800">
            Because little something makes everything
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-800">
            <li>
              <Link to="/" className="hover:text-black">
                Home
              </Link>
            </li>
            <li>
              <Link to="/rooms" className="hover:text-black">
                Rooms
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-black">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-black">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-black">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex flex-col gap-2 text-gray-800 text-sm">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-black"
            >
              <FaFacebookF /> Facebook
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-black"
            >
              <FaInstagram /> Instagram
            </a>
          </div>
        </div>

        {/* Email Subscribe */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Subscribe</h3>
          <p className="text-gray-800 text-sm mb-2">
            Get the latest news & offers right in your inbox.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed successfully!");
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Your email"
              required
              className="w-full px-4 py-2 rounded-md bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-black hover:bg-gray-800 text-white text-sm font-semibold transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-400 mt-10 pt-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} smth. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
