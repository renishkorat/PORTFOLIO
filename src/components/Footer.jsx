import github from"../assets/github.svg"
import gmail from"../assets/gmail.svg"
function Footer() {
  return (
    <footer className="border-t border-rose-400/20 bg-[#1A0710] px-6 py-10 text-white">

      <div className="mx-auto max-w-6xl">

        {/* Footer Main */}
        <div className="flex flex-row items-center justify-between gap-6 text-left">

          {/* Logo and Description */}
          <div>
            <a
              href="#home"
              className="text-2xl font-bold tracking-wide text-[#FB7185]"
            >
              Portfolio <span className="text-rose-100">.</span>
            </a>

            <p className="mt-2 text-sm text-rose-100/70">
              Designing modern experiences for the web.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex items-center gap-7 text-sm">
            <a href="#home" className="text-rose-100 transition hover:text-[#FB7185]">
              Home
            </a>
            <a href="#about" className="text-rose-100 transition hover:text-[#FB7185]">
              About
            </a>
            <a href="#projects" className="text-rose-100 transition hover:text-[#FB7185]">
              Projects
            </a>
            <a href="#contact" className="text-rose-100 transition hover:text-[#FB7185]">
              Contact
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/renishkorat"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-rose-400/20 bg-[#451525] text-sm font-bold text-rose-100 transition hover:border-[#FB7185] hover:text-[#FB7185]"
            >
              <img src={github} alt="GitHub" width="30" height="30" />
            </a>


            <a
              href="mailto:koratrenish350@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-rose-400/20 bg-[#451525] text-sm text-rose-100 transition hover:border-[#FB7185] hover:text-[#FB7185]"
            >
              <img src={gmail} alt="GitHub" width="30" height="30" />
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="my-7 border-t border-rose-400/15" />

        {/* Copyright */}
        <div className="flex flex-row items-center justify-between gap-3 text-sm text-rose-100/60">

          <p>
            © {new Date().getFullYear()} Renish Korat. All rights reserved.
          </p>

          <a
            href="#home"
            className="transition hover:text-[#FB7185]"
          >
            Back to Top ↑
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
