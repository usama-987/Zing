import { useState } from "react";
import Button from "./ui/Button";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#" },
  { label: "Case Studies", href: "#" },
  { label: "Partners", href: "#" },
  { label: "Blog", href: "#" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#00000033] backdrop-blur-sm border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <img src="/Logo.svg" alt="Zing Logo" className="h-8" />

        {/* Tablet + Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[#C7C7CC] text-[17.06px] font-medium hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Tablet + Desktop CTA */}
        <div className="hidden md:block">
          <Button>Book a call</Button>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu only */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}>
        <ul className="flex flex-col px-6 pb-5 gap-5 border-t border-white/10 pt-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[#C7C7CC] text-base font-medium hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Button>Book a call</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
