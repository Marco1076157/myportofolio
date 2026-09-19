# Portofolio Pribadi — React + Tailwind + Framer Motion

Website portofolio modern dengan kartu proyek 3D tilt dan modal detail proyek.

## Cara Menjalankan

Karena Anda sudah menginstal React + Tailwind, cukup:

1. Salin folder `src/` dan `public/` ini ke dalam proyek Anda (timpa file yang sudah ada
   jika perlu, atau gunakan langsung folder `portfolio` ini sebagai proyek baru).
2. Install dependency tambahan yang dipakai (framer-motion & react-icons):

   ```bash
   npm install framer-motion react-icons
   ```

3. Jika belum ada, install juga dependency dasar:

   ```bash
   npm install
   ```

4. Jalankan development server:

   ```bash
   npm run dev
   ```

5. Buka `http://localhost:5173` di browser.

## Yang Perlu Anda Ganti

- **Data pribadi**: nama, tagline, deskripsi di `src/components/Hero.jsx` dan `About.jsx`.
- **Data proyek**: `src/data/projects.js` — ganti title, deskripsi, gambar, link GitHub & demo.
- **Data skill**: `src/data/skills.js`.
- **Data sertifikat**: `src/data/certificates.js`.
- **Gambar**: taruh di `public/images/` — lihat `public/images/README.txt` untuk daftar nama file yang dibutuhkan.
- **CV**: taruh file `cv.pdf` Anda di `public/cv.pdf`.
- **Link sosial media**: di `Hero.jsx`, `Contact.jsx`, dan `Footer.jsx`.
- **Form kontak**: saat ini disimulasikan (loading lalu sukses). Untuk mengirim email sungguhan,
  integrasikan dengan [EmailJS](https://www.emailjs.com/) atau [Formspree](https://formspree.io/)
  di `src/components/Contact.jsx` (lihat komentar `TODO` di dalam file).

## Struktur Folder

```
src/
├── components/       # Semua komponen UI (Navbar, Hero, Projects, dll)
├── data/              # Data proyek, skill, sertifikat (edit di sini)
├── App.jsx
├── main.jsx
└── index.css
public/
├── cv.pdf             # Taruh CV Anda di sini
└── images/            # Taruh semua gambar di sini
```

## Catatan Teknis

- Efek 3D tilt pada kartu proyek dibuat dengan `useMotionValue` + `useTransform` dari Framer Motion (`ProjectCard.jsx`).
- Modal proyek mendukung navigasi galeri (prev/next), lightbox perbesar gambar, tutup dengan tombol ESC atau klik backdrop (`ProjectModal.jsx`).
- Menu navbar otomatis ter-highlight sesuai section yang sedang dilihat menggunakan `IntersectionObserver` (`Navbar.jsx`).
- Tema warna & efek glassmorphism diatur lewat utility class custom di `src/index.css` (`.gradient-text`, `.glass`) dan `tailwind.config.js`.
