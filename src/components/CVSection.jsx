import { motion } from "framer-motion";
import { FaHandshake, FaArrowRight } from "react-icons/fa";

export default function CVSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto glass rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden"
      >
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-200/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sky-200/10 rounded-full blur-3xl" />

        <div className="relative">
          <FaHandshake className="text-5xl gradient-text mx-auto mb-5" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Tertarik bekerja sama?
          </h2>
          <p className="text-slate-400 max-w-md mx-auto mb-8">
            Mari diskusikan proyek Anda. Saya terbuka untuk kolaborasi, freelance, atau peluang karier baru.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-2xl bg-brand-gradient text-[#17304a] font-bold shadow-lg shadow-sky-950/30 hover:-translate-y-1 transition-transform duration-200"
          >
            Hubungi Saya <FaArrowRight />
          </button>
        </div>
      </motion.div>
    </section>
  );
}