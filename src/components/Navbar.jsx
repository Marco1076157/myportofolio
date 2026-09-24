import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Certificates", id: "certificates" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Highlight menu aktif sesuai posisi scroll menggunakan Intersection Observer
  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(
      Boolean
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Ubah background navbar saat halaman di-scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#102a43]/75 backdrop-blur-md border-b border-amber-200/20" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 sm:px-10 lg:px-24 py-4">
        {/* Logo / Nama */}
        <button
          onClick={() => scrollToSection("home")}
          className="text-2xl font-bold gradient-text tracking-tight"
        >
          Bonivasius Marco
        </button>

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors duration-200 relative ${
                  activeSection === link.id
                    ? "text-amber-100"
                    : "text-sky-100/60 hover:text-amber-100"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-brand-gradient rounded-full"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Tombol Hamburger Mobile */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden text-2xl text-amber-100"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Dropdown Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden glass mx-4 rounded-2xl mb-4"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left px-6 py-3 text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? "text-amber-100 bg-amber-100/10"
                      : "text-sky-100/65 hover:text-amber-100"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
