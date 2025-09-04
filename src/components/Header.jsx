import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  const navigate = useNavigate();
  const navItems = [
    "Home",
    "Student Resources",
    "Learning",
    "Internships",
    "Employment",
  ];
  return (
    <header className="w-screen bg-white px-6 py-4 flex items-center justify-between border-b relative z-20">
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-white border border-teal-500 p-2">
          <svg
            className="w-8 h-8 text-teal-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        </span>
        <span className="text-2xl font-extrabold text-gray-800 tracking-tight">
          FYNALLY
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-2 md:gap-6">
        {navItems.map((item) => (
          <span
            key={item}
            className={`font-medium px-2 py-1 rounded transition-colors cursor-pointer ${
              activeNav === item
                ? "bg-blue-500 text-white"
                : "text-gray-800 hover:text-teal-600"
            }`}
            onClick={() => {
              setActiveNav(item);
              item === "Home"
                ? navigate(`/`)
                : navigate(`/${item.toLowerCase().replace(/\s+/g, "-")}`);
            }}
          >
            {item}
          </span>
        ))}
        <button
          className="ml-2 md:ml-4 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors shadow-sm"
          onClick={() => navigate("/get-started")}
        >
          Get Started
        </button>
      </nav>

      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation menu"
      >
        <span
          className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-gray-800 transition-all ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 gap-2 md:hidden animate-fade-in z-30">
          {navItems.map((item) => (
            <span
              key={item}
              className={`font-medium px-2 py-2 rounded transition-colors cursor-pointer w-full text-center ${
                activeNav === item
                  ? "bg-blue-500 text-white"
                  : "text-gray-800 hover:text-teal-600"
              }`}
              onClick={() => {
                setActiveNav(item);
                setMenuOpen(false);
                item === "Home"
                  ? navigate(`/home`)
                  : navigate(`/${item.toLowerCase().replace(/\s+/g, "-")}`);
              }}
            >
              {item}
            </span>
          ))}
          <button
            className="mt-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors shadow-sm w-3/4"
            onClick={() => {
              setMenuOpen(false);
              navigate("/get-started");
            }}
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}
export default Header;
