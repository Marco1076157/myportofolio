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
    demo: "https://posmart.free.nf",
  },
  {
  id: 2,
  title: "RestoQR - Sistem Pemesanan Digital",
  shortDesc:
    "Aplikasi pemesanan restoran berbasis QR Code (Self-Ordering) dengan validasi lokasi Geofencing, integrasi pembayaran otomatis Midtrans, serta dashboard pengelolaan pesanan multi-role.",
  fullDesc:
    "RestoQR adalah sistem pemesanan restoran berbasis QR Code yang dirancang untuk merampingkan operasional secara otomatis. Alur penggunaan dimulai saat pelanggan melakukan scan QR di meja; sistem akan memvalidasi posisi pelanggan melalui fitur Geofencing. Setelah pelanggan memilih menu dan menyelesaikan checkout (via Midtrans atau Tunai), pesanan secara real-time masuk ke layar Kasir dan Dapur untuk diproses. Setelah makanan dimasak, Pelayan mendapat notifikasi untuk menyajikan hidangan ke meja pelanggan. Seluruh aktivitas transaksi, absensi staff, hingga laporan pendapatan otomatis terekap di dashboard eksekutif Owner.",
  thumbnail: "/images/project2-0.png",
  screenshots: [
    "/images/project2-1.png",
    "/images/project2-2.png",
    "/images/project2-3.png",
    "/images/project2-4.png",
    "/images/project2-5.png",
    "/images/project2-6.png",
  ],
  tech: [
    "Laravel",
    "Inertia.js",
    "React",
    "Tailwind CSS",
    "MySQL",
    "Midtrans API",
  ],
  features: [
    "Pelanggan: Scan QR Meja, Geofence Check, Katalog & Filter Menu, Midtrans Snap, Status Pesanan Live, Review & Rating",
    "POS Kasir & Pelayan: Input Order Walk-in, Live Order Tracking, Kelola Status Meja & Antrean Antar",
    "Dapur (Kitchen Display): Antrean Pembuatan Makanan Real-time & Penandaan Siap Saji",
    "Admin CRUD Multi-Role/User, Management QR & Geofence, Absensi Staff, serta Analytics & Revenue Report",
    "Owner Read-Only dashboard eksekutif, pesanan, revenue, rating, laporan absensi & staff.",
    "Keamanan: Server-side Geofence Validation (Anti-Spoofing), Middleware Auth Role, & Rate Limiting",
  ],
  github: "https://github.com/Marco1076157/qr-order-app",
  demo: "https://restoqr.page.gd",
  },
  {
  id: 2,
  title: "Web Managament Gudang",
  shortDesc:
    "Aplikasi Warehouse Management System (WMS) berbasis web untuk pengelolaan stok multi-gudang, pelacakan transaksi barang, serta kontrol hak akses pengguna secara real-time.",
  fullDesc:
    "Web Management Gudang (WMS) adalah sistem pengelolaan inventaris terintegrasi yang dirancang untuk mengoptimalkan operasional pergudangan secara efisien. Aplikasi ini memungkinkan Admin dan Manager untuk mengelola data master produk, kategori, serta lokasi gudang dan merchant secara terpusat. Dilengkapi dengan fitur pemantauan arus barang (transaksi masuk dan keluar), manajemen stok real-time, serta dashboard analitik visual untuk melihat ringkasan aktivitas pergudangan. Akses sistem dilindungi oleh otentikasi berbasis peran (Role-Based Access Control) yang membedakan hak akses pengguna secara aman.",
  thumbnail: "/images/project3-0.png",
  screenshots: [
    "/images/project3-0.png",
    "/images/project3-1.png",
    "/images/project3-2.png",
    "/images/project3-3.png",
    "/images/project3-4.png",
    "/images/project3-5.png",
    "/images/project3-6.png",
  ],
  tech: [
    "Laravel",
    "React",
    "Tailwind CSS",
    "MySQL",
  ],
  features: [
    "Dashboard Analytics: Ringkasan total stok, statistik barang masuk/keluar, serta aktivitas gudang secara visual",
    "Master Data Management: CRUD Produk, Kategori, Lokasi Gudang, dan Merchant lengkap dengan upload foto",
    "Transaction Tracking: Pencatatan arus transaksi barang masuk & keluar terintegrasi dengan filter & pencarian",
    "User & Role Management: Pengelolaan akun staf, penetapan hak akses bertingkat (Admin, Manager, Staff), & profil user",
    "Keamanan & Auth: Validasi Token/Middleware, Sanitasi Input, serta Sanitasi Upload File",
  ],
  github: "https://github.com/Marco1076157/Web-Managament-Gudang",
  demo: "https://managament-gudang.vercel.app/",
  },
];

export default projects;
