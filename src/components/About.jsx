import { motion } from "framer-motion";

const INFO = [
  { label: "Nama", value: "Bonivasius Marco Tri Admaja" },
  { label: "Umur", value: "19 Tahun" },
  { label: "Lokasi", value: "Jakarta, Indonesia" },
  { label: "Status", value: "Tersedia untuk Bekerja" },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Ilustrasi / Foto */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-2 rounded-3xl bg-brand-gradient opacity-20 blur-2xl" />
          <img
            src="/images/about.jpeg"
            alt="Tentang saya"
            loading="lazy"
            className="relative w-full rounded-3xl border border-white/10 object-cover aspect-[4/5]"
          />
        </motion.div>

        {/* Deskripsi */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Tentang <span className="gradient-text">Saya</span>
          </h2>

          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              Saya adalah seorang full-stack web developer dengan pengalaman membangun aplikasi
              web modern menggunakan beberapa framework, seperti laravel dan react.js. Saya senang mengembangkan
               website yang fungsional, responsif, terstruktur, dan nyaman digunakan.
            </p>
            <p>
              Selain menulis kode, saya juga tertarik pada sisi desain — memastikan setiap
              produk yang saya bangun tidak hanya berfungsi dengan baik, tapi juga enak
              dilihat dan dipakai.
            </p>
            <p>
              Di luar pekerjaan, saya terus belajar teknologi baru dan mengerjakan proyek
              pribadi untuk mengasah kemampuan.
            </p>
          </div>

          {/* Info Grid */}
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {INFO.map((item) => (
              <div key={item.label} className="glass rounded-2xl px-4 py-3">
                <dt className="text-xs text-slate-500">{item.label}</dt>
                <dd className="text-sm font-medium text-white mt-1">{item.value}</dd>
              </div>
            ))}
          </dl>

          <a
            href="/cv.pdf"
            download
            className="inline-block mt-8 px-6 py-3 rounded-2xl bg-brand-gradient text-[#17304a] font-bold shadow-lg shadow-sky-950/30 hover:-translate-y-1 transition-transform duration-200"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
