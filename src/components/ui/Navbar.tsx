import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { href: "/", label: "Home" },
  {
    label: "Projects",
    children: [
      { href: "/meetup", label: "Meetup" },
      { href: "/global-village", label: "Global Village" },
      { href: "/tulds", label: "TULDS" },
    ],
  },
  { href: "/about us", label: "About Us" },
  { href: "#contact", label: "Become a Partner" }
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className={`relative rounded-full transition-all duration-300 ${scrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg shadow-black/5"
            : "bg-white/70 backdrop-blur-sm shadow-sm"
            }`}
        >
          <div className="flex items-center justify-between h-16 px-6">
            {/* Left: Logo */}
            <div className="">
            </div>

            {/* Center: Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {links.map((l) => (
                l.children ? (
                  <div key={l.label} className="relative group">
                    <button className="flex items-center gap-1 px-4 py-2 text-gray-600 hover:text-blue-600 font-medium text-base transition-colors duration-300">
                      {l.label}
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[200px]">
                        {l.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  l.href && (l.href.startsWith("/") ? (
                    <Link
                      key={l.href}
                      to={l.href}
                      className="relative px-4 py-2 text-gray-600 hover:text-blue-600 font-medium text-base transition-colors duration-300 group"
                    >
                      {l.label}
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
                    </Link>
                  ) : (
                    <a
                      key={l.href}
                      href={l.href}
                      className="relative px-4 py-2 text-gray-600 hover:text-blue-600 font-medium text-base transition-colors duration-300 group"
                    >
                      {l.label}
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
                    </a>
                  ))
                )
              ))}
            </nav>

            {/* Right: CTA Button + Mobile Toggle */}
            <div className="flex items-center gap-3">


              {/* Mobile menu button */}
              <button
                aria-label="Toggle menu"
                onClick={() => setOpen((v) => !v)}
                className="md:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {open ? (
                    <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
          >
            <div className="px-4 py-4 border-t border-gray-100">
              <nav className="flex flex-col gap-1">
                {links.map((l, idx) => (
                  l.children ? (
                    <div key={l.label} className="mt-2 mb-2">
                      <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        {l.label}
                      </div>
                      <div className="flex flex-col gap-1 ml-2">
                        {l.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            onClick={() => setOpen(false)}
                            className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    l.href && (l.href.startsWith("/") ? (
                      <Link
                        key={l.href}
                        to={l.href}
                        onClick={() => setOpen(false)}
                        className="px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-300 transform hover:translate-x-1"
                        style={{
                          animation: open ? `slideIn 0.3s ease-out ${idx * 0.05}s both` : 'none'
                        }}
                      >
                        {l.label}
                      </Link>
                    ) : (
                      <a
                        key={l.href}
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-300 transform hover:translate-x-1"
                        style={{
                          animation: open ? `slideIn 0.3s ease-out ${idx * 0.05}s both` : 'none'
                        }}
                      >
                        {l.label}
                      </a>
                    ))
                  )
                ))}

              </nav>
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