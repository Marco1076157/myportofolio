import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const YOUR_EMAIL = "mm1076157@gmail.com";
const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Nama wajib diisi";
    if (!form.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Format email tidak valid";
    }
    if (!form.subject.trim()) newErrors.subject = "Subjek wajib diisi";
    if (!form.message.trim()) newErrors.message = "Pesan wajib diisi";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const body = [
      "Pesan dari form kontak portofolio",
      "",
      "=========================================",
      "Dari:",
      `  Nama  : ${form.name}`,
      `  Email : ${form.email}`,
      `  Balas ke: ${form.email}`,
      "=========================================",
      "",
      "Pesan:",
      form.message,
    ].join("\n");

    const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${YOUR_EMAIL}&su=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailCompose, "_blank");

    setStatus("success");
    setForm(initialForm);
    setTimeout(() => setStatus("idle"), 3000);
  };

  const fields = [
    { name: "name", label: "Nama", type: "text", placeholder: "Nama lengkap Anda" },
    { name: "email", label: "Email", type: "email", placeholder: "email@contoh.com" },
    { name: "subject", label: "Subject", type: "text", placeholder: "Topik pesan" },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Hubungi <span className="gradient-text">Saya</span>
          </h2>

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {fields.map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name} className="block text-sm text-amber-100/70 mb-1.5">
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  value={form[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className={`w-full rounded-xl glass px-4 py-3 text-sm text-amber-50 placeholder:text-sky-100/40 outline-none focus:ring-2 focus:ring-amber-200 transition-shadow ${
                    errors[field.name] ? "ring-2 ring-red-500/70" : ""
                  }`}
                />
                {errors[field.name] && (
                  <p className="text-xs text-rose-300 mt-1">{errors[field.name]}</p>
                )}
              </div>
            ))}

            <div>
              <label htmlFor="message" className="block text-sm text-amber-100/70 mb-1.5">
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Tulis pesan Anda di sini..."
                className={`w-full rounded-xl glass px-4 py-3 text-sm text-amber-50 placeholder:text-sky-100/40 outline-none focus:ring-2 focus:ring-amber-200 transition-shadow resize-none ${
                  errors.message ? "ring-2 ring-red-500/70" : ""
                }`}
              />
              {errors.message && <p className="text-xs text-rose-300 mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto px-7 py-3 rounded-2xl bg-brand-gradient text-[#17304a] font-bold shadow-lg shadow-sky-950/30 hover:-translate-y-1 transition-transform duration-200 disabled:opacity-60 disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {status === "loading" && (
                <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              )}
              {status === "loading" ? "Mengirim..." : status === "success" ? "Terkirim ✓" : "Kirim Pesan"}
            </button>
          </form>
        </motion.div>

        {/* Info Kontak */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center gap-6"
        >
          <div className="glass rounded-2xl p-5 flex items-center gap-4">
            <FaEnvelope className="text-xl text-amber-200" />
            <div>
              <p className="text-xs text-slate-500">Email</p>
              <p className="text-sm text-white">mm1076157@gmail.com</p>
            </div>
          </div>
          <div className="glass rounded-2xl p-5 flex items-center gap-4">
            <FaPhone className="text-xl text-amber-200" />
            <div>
              <p className="text-xs text-slate-500">No. HP</p>
              <p className="text-sm text-white">+62 888-0985-3356</p>
            </div>
          </div>
          <div className="glass rounded-2xl p-5 flex items-center gap-4">
            <FaMapMarkerAlt className="text-xl text-amber-200" />
            <div>
              <p className="text-xs text-slate-500">Lokasi</p>
              <p className="text-sm text-white">Jakarta, Indonesia</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
