// pages/mahasiswa/[id].js atau app/mahasiswa/[id]/page.js
// Catatan: Untuk menggunakan parameter dinamis, struktur folder perlu disesuaikan

import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;

  // Data contoh (biasanya dari API berdasarkan ID)
  const dataMahasiswa = {
    1: { nama: "Budi Santoso", nim: "20240001", jurusan: "Informatika", angkatan: 2024, email: "budi@univ.ac.id" },
    2: { nama: "Siti Amalia", nim: "20240002", jurusan: "Sistem Informasi", angkatan: 2024, email: "siti@univ.ac.id" },
    3: { nama: "Andi Wijaya", nim: "20240003", jurusan: "Teknik Komputer", angkatan: 2024, email: "andi@univ.ac.id" },
  };

  const mahasiswa = dataMahasiswa[id];

  if (!mahasiswa) {
    return (
      <main>
        <h1>⚠️ Mahasiswa tidak ditemukan</h1>
        <p>ID: {id} tidak memiliki data.</p>
        <button onClick={() => router.back()}>Kembali</button>
      </main>
    );
  }

  return (
    <main>
      <h1>📄 Detail Mahasiswa</h1>
      <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px", maxWidth: "400px" }}>
        <p><strong>ID:</strong> {id}</p>
        <p><strong>NIM:</strong> {mahasiswa.nim}</p>
        <p><strong>Nama Lengkap:</strong> {mahasiswa.nama}</p>
        <p><strong>Jurusan:</strong> {mahasiswa.jurusan}</p>
        <p><strong>Angkatan:</strong> {mahasiswa.angkatan}</p>
        <p><strong>Email:</strong> {mahasiswa.email}</p>
      </div>
      <button onClick={() => router.back()} style={{ marginTop: "20px" }}>
        ⬅ Kembali ke Daftar Mahasiswa
      </button>
    </main>
  );
}