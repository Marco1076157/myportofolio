// Ganti data di bawah ini dengan proyek Anda sendiri.
// thumbnail & screenshots bisa berupa path lokal ("/images/xxx.jpg")
// atau URL gambar dari internet.

const projects = [
  {
    id: 1,
    title: "Posmart",
    shortDesc: "Aplikasi Point of Sale (POS) berbasis React, PHP Native, dan MySQL.",
    fullDesc:
      "POSMart adalah aplikasi point of sale (POS) dan katalog belanja sederhana. Pelanggan dapat melihat produk, memasukkan produk ke keranjang, lalu checkout. Admin dapat mengelola produk dan pengguna serta melihat ringkasan penjualan.",
    thumbnail: "/images/project1-1.png",
    screenshots: [
      "/images/project1-1.png",
      "/images/project1-2.png",
      "/images/project1-3.png",
      "/images/project1-4.png",
    ],
    tech: ["React", "Tailwind CSS", "Node.js", "PHP", "MySQL"],
    features: [
      "Katalog produk dengan pencarian, kategori, filter promo, pengurutan harga, dan pagination",
      "Registrasi, login email/password, autentikasi Google OAuth, dan JWT",
      "Keranjang belanja, pilihan pengiriman, checkout, serta validasi dan pengurangan stok dalam transaksi database",
      "Pengiriman ringkasan pesanan ke WhatsApp setelah checkout",
      "Invoice pesanan yang dapat dicetak dan QR code invoice.",
      "Dashboard admin untuk mengelola produk dan pengguna, serta melihat data penjualan.",
    ],
    github: "https://github.com/Marco1076157/Posmart",
    demo: "https://demo-link.com",
  },
  {
    id: 2,
    title: "Aplikasi Manajemen Tugas",
    shortDesc: "Aplikasi to-do list kolaboratif dengan fitur drag & drop.",
    fullDesc:
      "Aplikasi manajemen tugas berbasis board (mirip Trello) yang memungkinkan tim mengatur pekerjaan dalam beberapa kolom status. Mendukung drag & drop antar kolom, penugasan anggota tim, label prioritas, dan sinkronisasi data secara real-time.",
    thumbnail: "/images/project2-thumb.jpg",
    screenshots: ["/images/project2-1.jpg", "/images/project2-2.jpg"],
    tech: ["React", "Tailwind CSS", "Firebase"],
    features: [
      "Drag & drop antar kolom status",
      "Kolaborasi tim secara real-time",
      "Label prioritas & tenggat waktu",
      "Mode gelap/terang",
    ],
    github: "https://github.com/username/task-manager",
    demo: "",
  },
  {
    id: 3,
    title: "Website Company Profile",
    shortDesc: "Landing page company profile dengan animasi scroll yang halus.",
    fullDesc:
      "Website company profile untuk perusahaan jasa konsultasi, menampilkan layanan, portofolio klien, dan formulir kontak. Dioptimalkan untuk SEO dan performa loading, dengan animasi scroll reveal di tiap section.",
    thumbnail: "/images/project3-thumb.jpg",
    screenshots: [
      "/images/project3-1.jpg",
      "/images/project3-2.jpg",
      "/images/project3-3.jpg",
    ],
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    features: [
      "Animasi scroll reveal di setiap section",
      "Formulir kontak terintegrasi email",
      "SEO-friendly & responsif penuh",
    ],
    github: "https://github.com/username/company-profile",
    demo: "https://demo-link.com",
  },
];

export default projects;
