import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const HERO_TEXT = "Halo, saya Bonivasius Marco";
const HERO_PREFIX = "Halo, saya ";
const TYPE_SPEED = 85;

const SOCIALS = [
  { icon: FaGithub, href: "https://github.com/Marco1076157", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/bonivasius-marco?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://www.instagram.com/bonivasius_marco?stkn=MXhucXJwbXByazZkcA==", label: "Instagram" },
  { icon: FaEnvelope, href: "mm1076157@gmail.com", label: "Email" },
];

function useTypewriter(text, speed) {
  const [count, setCount] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? text.length
      : 0
  );

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      count >= text.length
    ) {
      setCount(text.length);
      return;
    }
    const id = setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(id);
  }, [count, text, speed]);

  return text.slice(0, count);
}

export default function Hero() {
  const reduce = useReducedMotion();
  const typed = useTypewriter(HERO_TEXT, TYPE_SPEED);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-24 pt-20 overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center text-center gap-6">
        {/* Nama & Tagline — typing effect */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-4xl text-5xl sm:text-7xl font-bold leading-[0.9] tracking-tight text-sky-50"
        >
          {typed.slice(0, HERO_PREFIX.length)}
          <span className="gradient-text">{typed.slice(HERO_PREFIX.length)}</span>
          <motion.span
            aria-hidden="true"
            animate={reduce ? undefined : { opacity: [1, 0, 1] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block font-light text-amber-100/80"
          >
            |
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-sky-100/75 max-w-xl leading-relaxed"
        >
          Full-Stack Web Developer

        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-1"
        >
          <button
            onClick={scrollToProjects}
            className="px-6 py-3 rounded-2xl bg-brand-gradient text-[#17304a] font-bold shadow-lg shadow-amber-950/30 hover:-translate-y-1 transition-transform duration-200"
          >
            Lihat Portofolio
          </button>
          <a
            href="/cv.pdf"
            download
            className="px-6 py-3 rounded-2xl glass text-amber-50 font-semibold hover:bg-white/10 transition-colors duration-200"
          >
            Download CV
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center gap-5 mt-4"
        >
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-amber-100/65 hover:text-amber-100 text-xl transition-colors duration-200"
            >
              <Icon />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}