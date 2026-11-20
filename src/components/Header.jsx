
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
    `block rounded-xl px-4 py-2.5 font-semibold transition-all duration-300 ${
      activeLink === name
        ? "bg-gradient-to-r from-[#FB7185] to-[#FDA4AF] text-[#2B0A16] shadow-lg shadow-rose-500/30 ring-1 ring-rose-200/30"
        : "text-rose-100 hover:bg-[#451525] hover:text-[#FB7185]"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-rose-400/20 bg-[#2B0A16]/95 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavClick("Home")}
          className="shrink-0 text-xl font-bold tracking-wide text-[#FB7185] sm:text-2xl"
        >
          Portfolio <span className="text-rose-100">.</span>
        </a>

        <nav className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2 lg:gap-3">
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
