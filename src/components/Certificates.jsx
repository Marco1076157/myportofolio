import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import certificatesData from "../data/certificates.js";

export default function Certificates() {
  const [selected, setSelected] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const images = selected?.images || [];
  const hasMultiple = images.length > 1;

  const nextImage = () =>
    setActiveImage((p) => (p + 1) % images.length);
  const prevImage = () =>
    setActiveImage((p) => (p - 1 + images.length) % images.length);

  useEffect(() => {
    if (!selected) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  });

  const openCert = (cert) => {
    setActiveImage(0);
    setSelected(cert);
  };

  return (
    <section id="certificates" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-center"
        >
          Sertifikat & <span className="gradient-text">Pencapaian</span>
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6">
          {certificatesData.map((cert, index) => (
            <motion.button
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => openCert(cert)}
              className="text-left w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-2xl glass overflow-hidden hover:shadow-lg hover:shadow-sky-950/30 transition-shadow duration-300"
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src={cert.images[0]}
                  alt={cert.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                {cert.images.length > 1 && (
                  <span className="absolute bottom-2 right-2 text-xs bg-black/60 text-white px-2 py-0.5 rounded-full">
                    {cert.images.length} foto
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-white text-sm">{cert.title}</h3>
                <p className="text-xs text-slate-400 mt-1">
                  {cert.issuer} &middot; {cert.year}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal Preview Sertifikat */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full max-h-[90vh] rounded-2xl overflow-hidden glass bg-[#0f0f24]/95 flex flex-col"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Tutup"
                className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <FaTimes />
              </button>

              <div className="relative w-full bg-black/40 flex items-center justify-center p-4" style={{ maxHeight: "70vh" }}>
                <img
                  src={images[activeImage]}
                  alt={`${selected.title} ${activeImage + 1}`}
                  className="max-w-full max-h-[66vh] object-contain rounded-lg"
                />

                {hasMultiple && (
                  <>
                    <button
                      onClick={prevImage}
                      aria-label="Gambar sebelumnya"
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      onClick={nextImage}
                      aria-label="Gambar berikutnya"
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                    >
                      <FaChevronRight />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {images.map((_, i) => (
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

              <div className="p-5 border-t border-white/10">
                <h3 className="font-semibold text-white">{selected.title}</h3>
                <p className="text-sm text-slate-400 mt-1">
                  {selected.issuer} &middot; {selected.year}
                </p>
                {hasMultiple && (
                  <p className="text-xs text-slate-500 mt-2">
                    Gunakan tombol panah atau keyboard &larr; &rarr; untuk navigasi
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}