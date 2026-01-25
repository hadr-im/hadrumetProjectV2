import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const links = [
  { href: "/", label: "Home" },
  { href: "/meetup-pro", label: "MeetupPro" },
  { href: "/global-village", label: "Global Village" },
  { href: "/tulds", label: "TULDS" },
  { href: "/about-us", label: "About Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`relative rounded-2xl transition-all duration-500 ${
            scrolled
              ? "bg-white shadow-xl shadow-blue-900/5 border border-gray-200"
              : "bg-white shadow-lg border border-gray-100"
          }`}
        >
          <div className="flex items-center justify-between h-16 px-6">
            {/* Left: Logo/Name */}
            <Link
              to="/"
              className="flex items-center gap-2 group flex-shrink-0"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <span className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 hidden sm:block">
                Hadrumet <span className="text-blue-600">Projects</span>
              </span>
            </Link>

            {/* Center: Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 absolute left-1/2 -translate-x-1/2">
              {links.map((l) =>
                l.href.startsWith("http") ? (
                  <a
                    key={l.label}
                    href={l.href}
                    className="relative px-3 xl:px-4 py-2 text-gray-600 hover:text-blue-600 font-semibold text-sm whitespace-nowrap transition-all duration-300 rounded-lg hover:bg-blue-50/50 group"
                  >
                    {l.label}
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-1/2 transition-all duration-300 rounded-full"></span>
                  </a>
                ) : (
                  <Link
                    key={l.label}
                    to={l.href}
                    className="relative px-3 xl:px-4 py-2 text-gray-600 hover:text-blue-600 font-semibold text-sm whitespace-nowrap transition-all duration-300 rounded-lg hover:bg-blue-50/50 group"
                  >
                    {l.label}
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-1/2 transition-all duration-300 rounded-full"></span>
                  </Link>
                ),
              )}
            </nav>

            {/* Right: CTA Button + Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-4">
              <Link
                to="/become-partner"
                className="hidden lg:flex items-center justify-center px-4 xl:px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all duration-300 whitespace-nowrap"
              >
                Become a Partner
              </Link>

              {/* Mobile menu button */}
              <button
                aria-label="Toggle menu"
                onClick={() => setOpen((v) => !v)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 focus:outline-none flex-shrink-0"
              >
                <div className="relative w-6 h-5">
                  <span
                    className={`absolute left-0 block w-6 h-0.5 bg-current transition-all duration-300 ${open ? "top-2 rotate-45" : "top-0"}`}
                  ></span>
                  <span
                    className={`absolute left-0 top-2 block w-6 h-0.5 bg-current transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`}
                  ></span>
                  <span
                    className={`absolute left-0 block w-6 h-0.5 bg-current transition-all duration-300 ${open ? "top-2 -rotate-45" : "top-4"}`}
                  ></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 py-8 space-y-6 border-t border-gray-100 bg-white rounded-b-2xl">
              <nav className="flex flex-col gap-2">
                {links.map((l, idx) =>
                  l.href.startsWith("http") ? (
                    <a
                      key={l.label}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="px-4 py-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-between group"
                      style={{
                        animation: open
                          ? `slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.1}s both`
                          : "none",
                      }}
                    >
                      {l.label}
                      <svg
                        className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  ) : (
                    <Link
                      key={l.label}
                      to={l.href}
                      onClick={() => setOpen(false)}
                      className="px-4 py-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-between group"
                      style={{
                        animation: open
                          ? `slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.1}s both`
                          : "none",
                      }}
                    >
                      {l.label}
                      <svg
                        className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  ),
                )}
              </nav>

              <div className="pt-4">
                <Link
                  to="/become-partner"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg rounded-2xl shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
                >
                  Become a Partner
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}
