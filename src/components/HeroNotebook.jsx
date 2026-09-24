import { motion, useReducedMotion } from "framer-motion";

/*
 * HeroNotebook.jsx — Notebook melayang di hero section.
 *
 * - notebook-base-removebg.png : buku kosong (terbuka, sudah removebg)
 * - pen.png                    : pulpen
 *
 * Teks & foto ditampilkan langsung di atas base buku
 * (tanpa halaman PNG terpisah agar menyatu dengan tekstur buku).
 */

const INK_STYLE = {
  fontFamily: "'IM Fell English', Georgia, serif",
  textShadow: "0 1px 2px rgba(120, 80, 40, 0.15)",
};

export default function HeroNotebook() {
  // Hormati prefers-reduced-motion: animasi otomatis dimatikan.
  const reduce = useReducedMotion();
  // Layar kecil (HP): matikan animasi melayang/orbit agar tidak nge-frame.
  const isMobile =
    typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;
  const paused = reduce || isMobile;

  return (
    <div
      aria-hidden="true"
      className="relative z-10 mx-auto w-full max-w-[300px] select-none sm:max-w-[400px] md:max-w-[500px]"
    >
      {/* Notebook melayang */}
      <motion.div
        animate={paused ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex justify-center"
      >
        {/* ===== Buku (base) dengan konten langsung di atasnya ===== */}
        <div className="relative aspect-square w-full">
          <img
            src="/images/notebook-base-removebg.png"
            alt=""
            draggable="false"
            className="pointer-events-none absolute inset-0 z-0 h-full w-full object-contain drop-shadow-[0_28px_34px_rgba(4,8,18,0.55)]"
          />

          {/* Konten halaman kiri — menyatu dengan kertas buku */}
          <div className="pointer-events-none absolute left-[10%] top-[22%] z-30 w-[35%] mix-blend-multiply text-center">
            <p
              style={INK_STYLE}
              className="text-[8px] font-serif uppercase tracking-[0.3em] text-amber-900/70 sm:text-[10px]"
            >
              Salam Kenal,
            </p>
            <h3 style={INK_STYLE} className="mt-1 font-serif text-base italic text-amber-950 sm:text-2xl md:text-3xl">
              Nama Anda
            </h3>
            <p style={INK_STYLE} className="mt-2 text-[8px] leading-tight text-amber-900/90 sm:text-[11px] md:text-sm">
              Frontend Developer
              <br />
              UI Designer
              <br />
              Indonesia
            </p>
          </div>

          {/* Konten halaman kanan — menyatu dengan kertas buku */}
          <div className="pointer-events-none absolute right-[10%] top-[20%] z-30 flex w-[35%] mix-blend-multiply flex-col items-center">
            <img
              src="/images/profile.jpg"
              alt=""
              draggable="false"
              className="h-10 w-10 rounded-sm border border-amber-900/30 object-cover shadow-md sm:h-14 sm:w-14 md:h-20 md:w-20"
            />
            <p
              style={INK_STYLE}
              className="mt-2 text-center font-serif text-[7px] tracking-widest text-amber-900/80 sm:text-[10px] md:text-xs"
            >
              Creative
              <br />
              Developer
            </p>
          </div>
        </div>

        {/* ===== Pulpen mengorbit pelan mengelilingi notebook ===== */}
        <motion.img
          src="/images/pen.png"
          alt=""
          draggable="false"
          animate={
            paused
              ? undefined
              : {
                  x: [0, 20, 0, -20, 0],
                  y: [0, -10, -20, -10, 0],
                  rotate: [0, 15, 0, -15, 0],
                }
          }
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute right-[8%] bottom-[15%] z-20 w-16 object-contain"
        />
      </motion.div>
    </div>
  );
}