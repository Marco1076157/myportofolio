import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { usePerfMode } from "../hooks/usePerfMode.js";

export default function ProjectCard({ project, index, onOpen }) {
  const cardRef = useRef(null);
  const perf = usePerfMode();
  const tiltEnabled = perf.tiltEnabled;

  // Posisi kursor relatif terhadap kartu, dipakai untuk efek 3D tilt & glow
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Rotasi berdasarkan posisi kursor (3D tilt)
  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), {
    stiffness: 200,
    damping: 20,
  });

  // Posisi glow mengikuti kursor
  const glowX = useTransform(x, [-100, 100], [0, 100]);
  const glowY = useTransform(y, [-100, 100], [0, 100]);
  const glowBackground = useTransform(
    [glowX, glowY],
    ([gx, gy]) =>
      `radial-gradient(circle at ${gx}% ${gy}%, rgba(147,51,234,0.35), transparent 60%)`
  );

  // Di HP/touch: tidak ada tilt 3D, glow kursor, maupun delay beruntun panjang
  const handleMouseMove = (e) => {
    if (!tiltEnabled) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    if (!tiltEnabled) return;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: perf.duration(0.5), delay: perf.stagger(index, 0.1) }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        tiltEnabled
          ? {
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              perspective: 1000,
              willChange: "transform, opacity",
            }
          : { willChange: "transform, opacity" }
      }
      whileHover={tiltEnabled ? { scale: 1.03 } : undefined}
      className="group relative rounded-2xl glass overflow-hidden cursor-pointer shadow-lg hover:shadow-sky-950/30 transition-shadow duration-300"
    >
      {/* Glow yang mengikuti kursor (hanya desktop, agar tidak memaksa repaint background tiap frame) */}
      {tiltEnabled && (
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: glowBackground }}
        />
      )}

      {/* Border gradient saat hover */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-amber-200/50 transition-colors duration-300 pointer-events-none" />

      <div style={tiltEnabled ? { transform: "translateZ(40px)" } : undefined}>
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            width={1280}
            height={720}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
          <p className="text-sm text-slate-400 mb-4 line-clamp-2">{project.shortDesc}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="text-[11px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>

          <button
            onClick={() => onOpen(project)}
            className="w-full text-center px-4 py-2 rounded-xl bg-brand-gradient text-[#17304a] text-sm font-bold hover:opacity-90 transition-opacity"
          >
            Lihat Detail
          </button>
        </div>
      </div>
    </motion.div>
  );
}
