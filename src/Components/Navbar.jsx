
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `transition duration-200 hover:text-rose-500 ${
      isActive ? "font-bold text-rose-500" : "text-gray-600"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-black tracking-tight text-gray-900">
          STYLE<span className="text-rose-500">.</span>
          STORE
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact Us
          </NavLink>
        </div>

        <Link
          to="/"
          className="hidden rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-rose-500 md:block"
        >
          Shop Now →
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="rounded-lg p-2 text-2xl text-gray-900 hover:bg-gray-100 md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="space-y-1 border-t border-gray-100 bg-white px-6 py-4 md:hidden">
          <NavLink
            to="/"
            end
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `block rounded-lg px-4 py-3 hover:bg-rose-50 ${
                isActive ? "font-bold text-rose-500" : "text-gray-700"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `block rounded-lg px-4 py-3 hover:bg-rose-50 ${
                isActive ? "font-bold text-rose-500" : "text-gray-700"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `block rounded-lg px-4 py-3 hover:bg-rose-50 ${
                isActive ? "font-bold text-rose-500" : "text-gray-700"
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
