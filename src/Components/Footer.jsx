
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="text-2xl font-black text-white">
            STYLE<span className="text-rose-500">.</span>STORE
          </Link>

          <p className="mt-4 max-w-xs leading-7 text-gray-400">
            Discover your style with modern clothing and simple,
            timeless designs for your everyday look.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-bold text-white">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li>
              <Link to="/" className="transition hover:text-rose-400">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="transition hover:text-rose-400">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/contact" className="transition hover:text-rose-400">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-bold text-white">
            Our Collection
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>T-Shirts</li>
            <li>Hoodies</li>
            <li>Jeans</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-bold text-white">
            Get In Touch
          </h3>

          <p className="leading-7 text-gray-400">
            Have a question? We'd love to hear from you.
          </p>

          <Link
            to="/contact"
            className="mt-5 inline-block rounded-lg bg-rose-500 px-5 py-3 font-semibold text-white transition hover:bg-rose-600"
          >
            Contact Us →
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center text-sm text-gray-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Style Store. All rights reserved.
          </p>

          <p>
            Made with <span className="text-rose-500">♥</span> for fashion lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;