import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-900 px-6 py-4">

      {/* Navbar Top */}
      <div className="flex items-center justify-between">

        {/* Logo */}
        <h2 className="text-2xl font-bold text-white">
          My E-Commerce
        </h2>

        {/* Desktop Menu */}
        <div className="hidden gap-6 md:flex">

          <Link
            to="/"
            className="text-white hover:text-blue-400"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="text-white hover:text-blue-400"
          >
            Products
          </Link>

          <Link
            to="/cart"
            className="text-white hover:text-blue-400"
          >
            Cart
          </Link>

          <Link
            to="/login"
            className="text-white hover:text-blue-400"
          >
            Login
          </Link>

        </div>

        {/* Hamburger */}
        <button
          className="text-3xl text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-4 flex flex-col gap-4 border-t border-gray-700 pt-4 md:hidden">

          <Link
            to="/"
            onClick={closeMenu}
            className="text-white hover:text-blue-400"
          >
            Home
          </Link>

          <Link
            to="/products"
            onClick={closeMenu}
            className="text-white hover:text-blue-400"
          >
            Products
          </Link>

          <Link
            to="/cart"
            onClick={closeMenu}
            className="text-white hover:text-blue-400"
          >
            Cart
          </Link>

          <Link
            to="/login"
            onClick={closeMenu}
            className="text-white hover:text-blue-400"
          >
            Login
          </Link>

        </div>
      )}

    </nav>
  );
}

export default Navbar;