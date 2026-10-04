import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt- bg-gray-900 text-white">

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">

        {/* About */}
        <div>
          <h2 className="text-2xl font-bold">
            My E-Commerce
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-400">
            Shop smart and discover quality products
            at affordable prices.
          </p>

          {/* Social Media */}
          <div className="mt-5 flex gap-3">

            <a
              href="https://www.facebook.com/share/19bgdTUVZE/"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/yadav_ajay__999?stkn=ajM3MDd1cnpvODF4"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-600 hover:bg-pink-700"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 hover:bg-sky-600"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.linkedin.com/in/ajay-kumar-544081373/"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 hover:bg-blue-800"
            >
              <FaLinkedinIn />
            </a>

          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">
            Company
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>

            <li>
              <Link to="/products" className="hover:text-white">
                Products
              </Link>
            </li>

            <li>
              <Link to="/cart" className="hover:text-white">
                Cart
              </Link>
            </li>

            <li>
              <Link to="/Login" className="hover:text-white">
                Login
              </Link>
            </li>

          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">
            Customer Service
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>
              <Link to="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>

            <li>
              <Link to="/help" className="hover:text-white">
                Help Center
              </Link>
            </li>

            <li>
              <Link to="/shipping" className="hover:text-white">
                Shipping
              </Link>
            </li>

            <li>
              <Link to="/returns" className="hover:text-white">
                Returns
              </Link>
            </li>

          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>
              <Link to="/products" className="hover:text-white">
                All Products
              </Link>
            </li>

            <li>
              <Link to="/cart" className="hover:text-white">
                Shopping Cart
              </Link>
            </li>

            <li>
              <Link to="/login" className="hover:text-white">
                Login
              </Link>
            </li>

            <li>
              <Link to="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>

          </ul>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-gray-400 md:flex-row">

          <p>
            © 2026 My E-Commerce. All Rights Reserved.
          </p>

          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-white">
              Privacy
            </Link>

            <Link to="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;