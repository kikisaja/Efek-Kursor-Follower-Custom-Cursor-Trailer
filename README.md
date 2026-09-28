# 🎯 Custom Cursor Trailer

Fitur efek pergerakan kursor kustom (*Custom Cursor Trailer*) berbasis web dengan animasi halus (*smooth lerp interpolation*). Pengguna dapat melihat titik kursor utama (*dot*) beserta trailer pembawa yang mengikuti pergerakan mouse dan memberikan respons visual saat melakukan *hover* pada elemen interaktif.

---

## 🎯 Konsep Pembelajaran RPL / Pemrograman Web

1. **Efek Interpolasi LERP (Linear Interpolation):**
   Memahami cara membuat pergerakan mengejar yang mulus menggunakan rumus math:
   `position += (target - position) * factor;`
2. **`requestAnimationFrame()` untuk Animasi Kinerja Tinggi:**
   Menggunakan API browser native untuk menjalankan pergerakan trailer pada 60 FPS secara efisien tanpa membebankan memori.
3. **Pemanfaatan `pointer-events: none;` pada CSS:**
   Memastikan elemen overlay kursor buatan tidak menghalangi fungsionalitas klik tombol atau teks di bawahnya.
4. **Mouse Events Listener:**
   Menggunakan event `mousemove`, `mouseenter`, `mouseleave`, `mousedown`, dan `mouseup` untuk merespons interaksi pengguna secara real-time.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Elemen DOM kursor kustom dan area uji interaktif
├── style.css        # Sembunyikan kursor sistem & styling Neobrutalism
└── script.js        # Logika perhitungan posisi kursor dan efek LERP
