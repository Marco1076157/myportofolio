import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const QUICK_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Footer() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-amber-100/20 px-6 sm:px-10 lg:px-24 py-10 bg-[#0c2035]/35">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-lg font-bold gradient-text">Bonivasius Marco</span>

        <ul className="flex flex-wrap items-center gap-6 text-sm text-sky-100/60">
          {QUICK_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="hover:text-amber-100 transition-colors"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 text-amber-100/60">
          <a href="https://github.com/Marco1076157" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/bonivasius-marco?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaLinkedin /></a>
          <a href="https://www.instagram.com/bonivasius_marco?stkn=MXhucXJwbXByazZkcA==" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaInstagram /></a>
          <a href="mm1076157@gmail.com" className="hover:text-white transition-colors"><FaEnvelope /></a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
        <span>&copy; 2025 Bonivasius Marco. All rights reserved.</span>
      </div>
    </footer>
  );
}
