import { useState } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import bookingLogo from "../assets/booking.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoggedIn = false;

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Website Name */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-black hover:text-gray-900 focus:text-gray-900 transition-all
            duration-200 hover:scale-105 focus:scale-105"
        >
          <img
            src={bookingLogo}
            alt="Logo"
            className="w-10 h-10 object-contain "
          />
          <span>smth</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-14 text-black font-medium">
          <Link
            to="/"
            className="text-base hover:text-gray-900  focus:bg-gray-900 transition-all
            duration-200 hover:scale-105 focus:scale-105"
          >
            Home
          </Link>

          <Link
            to="/rooms"
            className="text-base hover:text-gray-900 focus:text-gray-900 transition-all
            duration-200 hover:scale-105 focus:scale-105"
          >
            Rooms
          </Link>
          <Link
            to="/about"
            className="text-base hover:text-gray-900 focus:text-gray-900 transition-all
            duration-200 hover:scale-105 focus:scale-105"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-base hover:text-gray-900 focus:text-gray-900 transition-all
            duration-200 hover:scale-105 focus:scale-105"
          >
            Contact
          </Link>
          <Link
            to="/blog"
            className="text-base hover:text-gray-900 focus:text-gray-900 transition-all
            duration-200 hover:scale-105 focus:scale-105"
          >
            Blog
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/cart"
            className="text-black x hover:text-gray-900 focus:text-gray-900 transition-all
            duration-200 hover:scale-105 focus:scale-105"
          >
            <ShoppingCart size={22} />
          </Link>
          {isLoggedIn ? (
            <Link to="/profile" className="text-black ">
              <User size={22} />
            </Link>
          ) : (
            <Link
              to="/signin"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900 focus:bg-gray-900 transition-all duration-200 hover:scale-105 focus:scale-105"
            >
              Sign In
            </Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 py-4 flex flex-col gap-4 bg-white shadow-lg text-black">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/rooms" onClick={() => setMenuOpen(false)}>
            Rooms
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-gray-500 focus:text-indigo-600 transition-colors duration-200"
          >
            About
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link to="/blog" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>
            Cart
          </Link>
          {isLoggedIn ? (
            <Link to="/profile" onClick={() => setMenuOpen(false)}>
              Profile
            </Link>
          ) : (
            <Link to="/signin" onClick={() => setMenuOpen(false)}>
              Sign In
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
