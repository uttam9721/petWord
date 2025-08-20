import React, { useState } from "react";
import logo from "../assets/attachment_81886229.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(""); // track active menu

  const menuItems = ["About", "Services", "Contact"];

  return (
    <header className="w-full bg-green-200 shadow-md">
      <div className="flex justify-between items-center px-6 py-3 sm:px-10">
        {/* Logo */}
        <img className="w-16 sm:w-20 mix-blend-multiply" src={logo} alt="logo" />

        {/* Hamburger button for mobile */}
        <button
          className="sm:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <nav className="hidden sm:flex items-center gap-10 text-lg font-semibold">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`relative pb-1 ${
                active === item ? "text-blue-600" : "text-gray-800"
              }`}
            >
              {item}
              {/* underline */}
              {active === item && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 rounded"></span>
              )}
            </button>
          ))}
          <input
            className="border-2 px-3 py-1 rounded-xl focus:outline-none"
            type="text"
            placeholder="Search here..."
          />
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden flex flex-col items-center gap-4 pb-4 text-lg font-semibold">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`relative pb-1 ${
                active === item ? "text-blue-600" : "text-gray-800"
              }`}
            >
              {item}
              {/* underline for mobile */}
              {active === item && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 rounded"></span>
              )}
            </button>
          ))}
          <input
            className="border-2 px-3 py-1 rounded-xl w-4/5 focus:outline-none"
            type="text"
            placeholder="Search here..."
          />
        </div>
      )}
    </header>
  );
};

export default Navbar;
