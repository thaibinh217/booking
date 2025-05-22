import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-indigo-600 text-white px-6 py-3 flex justify-between">
    <h1 className="text-xl font-bold">🏨 Booking App</h1>
    <div className="space-x-4">
      <Link to="/" className="hover:underline">
        Home
      </Link>
      <Link to="/booking" className="hover:underline">
        Booking
      </Link>
    </div>
  </nav>
);

export default Navbar;
