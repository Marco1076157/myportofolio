import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ProjectModal({ project, onClose }) {
  const [activeImage, setActiveImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Tutup modal dengan tombol ESC, navigasi galeri dengan panah kiri/kanan
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        isLightboxOpen ? setIsLightboxOpen(false) : onClose();
      }
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLightboxOpen, project]);

  if (!project) return null;

  const nextImage = () =>
    setActiveImage((prev) => (prev + 1) % project.screenshots.length);
  const prevImage = () =>
    setActiveImage((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length);

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl glass border border-white/10 bg-[#0f0f24]/95"
        >
          {/* Tombol Close */}
          <button
            onClick={onClose}
            aria-label="Tutup"
            className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <FaTimes />
          </button>

          {/* Image Gallery */}
          <div className="relative aspect-video w-full bg-black/40">
            <img
              src={project.screenshots[activeImage]}
              alt={`${project.title} screenshot ${activeImage + 1}`}
              onClick={() => setIsLightboxOpen(true)}
              className="w-full h-full object-cover cursor-zoom-in"
            />
            {project.screenshots.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  aria-label="Gambar sebelumnya"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-white"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={nextImage}
                  aria-label="Gambar berikutnya"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-white"
                >
                  <FaChevronRight />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {project.screenshots.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      aria-label={`Ke gambar ${i + 1}`}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i === activeImage ? "bg-white" : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Konten */}
          <div className="p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-slate-400 leading-relaxed mb-6">{project.fullDesc}</p>

            <h4 className="text-sm font-semibold text-slate-300 mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <h4 className="text-sm font-semibold text-slate-300 mb-2">Fitur Utama</h4>
            <ul className="list-disc list-inside space-y-1 text-slate-400 mb-8">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass hover:bg-white/10 text-white text-sm font-semibold transition-colors"
              >
                <FaGithub /> Lihat di GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-gradient text-[#17304a] text-sm font-bold hover:opacity-90 transition-opacity"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Lightbox untuk memperbesar gambar */}
        <AnimatePresence>
          {isLightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => {
                e.stopPropagation();
                setIsLightboxOpen(false);
              }}
              className="fixed inset-0 z-[110] bg-black/90 flex items-center justify-center p-6"
            >
              <img
                src={project.screenshots[activeImage]}
                alt={`${project.title} full view`}
                className="max-w-full max-h-full rounded-lg object-contain"
              />
              <button
                onClick={() => setIsLightboxOpen(false)}
                aria-label="Tutup lightbox"
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white"
              >
                <FaTimes />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
