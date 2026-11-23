
import { useState } from "react";

function Header() {
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const handleNavClick = (name) => {
    setActiveLink(name);
  };

  const navClass = (name) =>
    `block rounded-xl px-3 py-2 text-sm font-semibold transition-all duration-300 sm:px-4 sm:py-2.5 sm:text-base ${
      activeLink === name
        ? "bg-gradient-to-r from-[#FB7185] to-[#FDA4AF] text-[#2B0A16] shadow-lg shadow-rose-500/30 ring-1 ring-rose-200/30"
        : "text-rose-100 hover:bg-[#451525] hover:text-[#FB7185]"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-rose-400/20 bg-[#2B0A16]/95 backdrop-blur-md">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-3 py-3 sm:px-6 sm:py-4 lg:flex-row lg:gap-0 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavClick("Home")}
          className="text-xl font-bold tracking-wide text-[#FB7185] sm:text-2xl lg:absolute lg:left-8"
        >
          Portfolio <span className="text-rose-100">.</span>
        </a>

        {/* Navigation */}
        <nav className="flex w-full flex-wrap items-center justify-center gap-1 sm:gap-2 lg:w-auto lg:gap-3">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => handleNavClick(item.name)}
              className={navClass(item.name)}
            >
              {item.name}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}

export default Header;
