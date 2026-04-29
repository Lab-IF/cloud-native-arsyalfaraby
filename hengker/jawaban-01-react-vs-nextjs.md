# 📝 Jawaban — 01. React vs Next.js

| Info | Detail |
|------|--------|
| **Nama** | Muhammad Arsy AL Faraby H |
| **NIM** | 10581105523 |
| **Halaman** | 01. React vs Next.js |
| **Tanggal** | 29 April 2026, 15.45 |

---

## 📝 Kuis Singkat

### 1. Next.js adalah...

**Jawaban:** Next.js adalah framework yang membungkus React. Dibuat oleh Vercel. Dia menambahkan semua yang React tidak punya:

Routing otomatis — buat file = buat halaman
API backend — bisa buat endpoint langsung
Build system — next build langsung jalan
SSR & SSG — rendering di server, SEO lebih bagus
Deployment mudah — deploy ke Vercel dengan 1 klik

### 2. Mana yang TIDAK perlu di-install manual di Next.js?

**Jawaban:** React dan ReactDOM

### 3. Saat install Next.js, agar menggunakan JavaScript (bukan TypeScript), kita harus pilih...

**Jawaban:** no

### 4. Apakah komponen React bisa dipakai di Next.js?

**Jawaban:** bisa

### 5. Sebutkan minimal 3 fitur yang Next.js berikan di atas React biasa!

**Jawaban:** Server-Side Rendering (SSR) - Halaman bisa dirender di server sebelum dikirim ke client

Static Site Generation (SSG) - Halaman bisa di-generate saat build time untuk performa maksimal

File-based Routing - Routing otomatis berdasarkan struktur folder (tidak perlu React Router)

API Routes - Bisa membuat backend API langsung di dalam proyek Next.js

Image Optimization - Komponen next/image untuk optimasi gambar otomatis

---

## ✏️ Jawaban Latihan

### Latihan 1 — Halaman Utama

export default function Home() {
  return (
    <main>
      <h1>🎓 Halo Mahasiswa!</h1>
      <p>Ini proyek Next.js pertama saya.</p>
      <p>Menggunakan <strong>JavaScript</strong>, bukan TypeScript.</p>
    </main>
  );
}

### Latihan 2 — Halaman About

// pages/about.js atau app/about/page.js
export default function About() {
  return (
    <main>
      <h1>📖 Tentang Proyek Ini</h1>
      <p>Proyek ini dibuat sebagai contoh pembelajaran Next.js dengan JavaScript murni.</p>
      <p>📌 Tujuan:</p>
      <ul>
        <li>Memahami struktur dasar Next.js</li>
        <li>Belajar membuat komponen dengan JavaScript</li>
        <li>Mengenal routing di Next.js</li>
      </ul>
      <p>👨‍💻 Dibuat oleh: Tim Pengembang</p>
      <p>📅 Versi: 1.0.0</p>
    </main>
  );
}

### Latihan 3 — Tantangan: Bandingkan Routing

Routing manual seperti menggunakan React Router mengharuskan developer menginstal library routing dan mengatur sendiri jalur navigasi aplikasi melalui konfigurasi kode. Setiap halaman atau URL, seperti /about atau /profile, harus didefinisikan secara manual sehingga memberi kontrol penuh untuk membuat nested route, protected route, hingga lazy loading. Kelebihannya sangat fleksibel dan cocok untuk aplikasi kompleks, tetapi proses setup lebih banyak dan butuh konfigurasi tambahan.

Sebaliknya, routing otomatis dari struktur folder seperti pada Next.js bekerja berdasarkan susunan folder dan file. Nama folder otomatis menjadi URL, sehingga developer tidak perlu menulis konfigurasi route secara manual. Pendekatan ini lebih cepat, rapi, dan praktis karena framework menangani routing secara otomatis. Namun, fleksibilitasnya lebih terbatas karena harus mengikuti aturan struktur yang ditentukan framework. Singkatnya, routing manual berfokus pada kontrol penuh, sedangkan routing berbasis folder berfokus pada kemudahan dan efisiensi. Manusia suka bikin dua cara untuk satu hal, supaya dosen punya bahan ujian, tampaknya.
---

## 📊 Ringkasan

| Metrik | Nilai |
|--------|-------|
| Total dijawab | 0 / 8 |
| Skor kuis | 0 / 4 (0%) |
| Latihan terisi | 0 / 3 |

---

_Dibuat otomatis oleh Sistem Kuis Pertemuan 00_
