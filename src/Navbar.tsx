import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

// Lives in src/ root for no reason

const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/history", label: "History" },
  { path: "/types", label: "Types" },
  { path: "/recipes", label: "Recipes" },
  { path: "/facts", label: "Fun Facts" },
  { path: "/about", label: "About" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-stone-900 text-amber-50 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-xl font-black tracking-wider text-amber-400 hover:text-amber-300"
          >
            SPAGHETTI
          </Link>

          {/* desktop nav */}
          <div className="hidden md:flex space-x-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={clsx(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  location.pathname === link.path
                    ? "bg-amber-600 text-white"
                    : "text-stone-300 hover:text-white hover:bg-stone-800"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-stone-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-1.5">
              <div
                className={clsx(
                  "w-6 h-0.5 bg-amber-400 transition-transform",
                  isOpen && "rotate-45 translate-y-2"
                )}
              />
              <div
                className={clsx(
                  "w-6 h-0.5 bg-amber-400 transition-opacity",
                  isOpen && "opacity-0"
                )}
              />
              <div
                className={clsx(
                  "w-6 h-0.5 bg-amber-400 transition-transform",
                  isOpen && "-rotate-45 -translate-y-2"
                )}
              />
            </div>
          </button>
        </div>

        {/* mobile menu */}
        <div
          className={clsx(
            "md:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={clsx(
                "block px-3 py-2 rounded-md text-sm font-medium transition-colors",
                location.pathname === link.path
                  ? "bg-amber-600 text-white"
                  : "text-stone-300 hover:text-white hover:bg-stone-800"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
