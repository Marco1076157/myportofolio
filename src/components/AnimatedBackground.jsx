import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#071321]"
    >
      {/* Layer 1: langit. Statis agar tidak membebani GPU / repaint backdrop-blur. */}
      <div
        className="absolute -inset-8 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/sky.jpg')" }}
      />

      {/* Awan bergerak sangat pelan di atas langit (hanya transform, amplitude kecil). */}
      <motion.div
        animate={reduceMotion ? undefined : { x: ["-1.5%", "1.5%", "-1.5%"] }}
        transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[30%] left-[-8%] h-[38%] w-[116%] bg-contain bg-center bg-no-repeat opacity-40 mix-blend-multiply [will-change:transform]"
        style={{ backgroundImage: "url('/images/clouds.jpg')" }}
      />

      {/* Overlay menjaga seluruh teks dan kartu portofolio tetap kontras. */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />
      <div className="absolute inset-0 shadow-[inset_0_0_130px_rgba(0,0,0,0.7)]" />
    </div>
  );
}
