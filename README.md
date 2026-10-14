# KanaMaster (かなマスター)

> Aplikasi web interaktif terlengkap untuk menguasai membaca & menulis **214+ aksara Hiragana & Katakana** (Dasar, Dakuon, dan Yōon 拗音) serta **436+ kosakata bahasa Jepang** (termasuk JLPT N5 esensial). Dirancang dengan **Mondrian Design System** (Claro Red `#D52B1E`, Slate `#ADAFAF`, Neoplasticism), **Glassmorphism**, dan **Dark Mode** penuh.

---

## ✨ Fitur Utama

- **Cakupan Aksara Lengkap (214+ Karakter Kana):**
  - **Hiragana:** 46 huruf dasar + 25 Dakuon/Handakuon (が・ざ・だ・ば・ぱ) + 36 kombinasi Yōon (きゃ・しゃ・ちゃ・びょ...).
  - **Katakana:** 46 huruf dasar + 25 Dakuon/Handakuon (ガ・ザ・ダ・バ・パ) + 36 kombinasi Yōon (キャ・シャ・チャ・ビョ...).
  - Panduan khusus untuk aksara peredam **Sokuon** (`っ`/`ッ`) dan vokal panjang **Chōonpu** (`ー`).
  - Setiap huruf dilengkapi romaji baku Hepburn dan tips mnemonik visual.
- **Kamus 436+ Kosakata (Termasuk JLPT N5):**
  - Kosakata Hiragana sehari-hari dikelompokkan per baris vokal/konsonan.
  - Kategori tematik baru: **Angka & Satuan**, **Salam & Ungkapan (Aisatsu)**, **Waktu & Hari**, **Makanan & Restoran**, dan **Keluarga**.
  - Kosakata Katakana populer (Gairaigo) dan kata yang memuat kombinasi bunyi majemuk Yōon.
- **4 Mode Kuis Interaktif (Multi-Modal Practice):**
  - **Mode 1 (Ketik Romaji):** Melatih produksi ejaan baku aktif.
  - **Mode 2 (Pilihan Ganda Cepat):** Melatih pengenalan aksara cepat dengan hotkey keyboard <kbd>1</kbd>–<kbd>4</kbd>.
  - **Mode 3 (Reverse Recall):** Membaca arti/romaji $\to$ memilih aksara Kana yang tepat.
  - **Mode 4 (Kuis Dengar Audio - Listening Drill):** Mendengarkan pelafalan audio Jepang langsung $\to$ menebak aksara/romaji tanpa bantuan teks visual awal.
- **Mode Flashcard 3D (Kartu Kilat Interaktif):**
  - Animasi putar 3D bolak-balik: sisi depan (aksara/audio), sisi belakang (romaji, arti, tips, contoh kata).
  - Pilihan dek: Hiragana Dasar/Dakuon/Yoon, Katakana Dasar/Dakuon/Yoon, dan Kosakata.
  - Penilaian mandiri ("Lupa / Butuh Latihan" vs "Sudah Ingat / Paham") dengan shortcut <kbd>Spasi</kbd>, <kbd>←</kbd>, <kbd>→</kbd>.
- **Tabel Matriks Interaktif Gojūon (50-Sound Chart):**
  - Kisi 5×10 (*A, Ka, Sa, Ta, Na, Ha, Ma, Ya, Ra, Wa*) + Dakuon + Yōon matrix.
  - Klik langsung sel mana pun untuk mendengar pelafalan audio atau langsung berpindah ke kanvas latihan menulis huruf tersebut.
- **Kanvas Menulis Genkouyoushi (原稿用紙) Berfitur Lengkap:**
  - **Panduan Urutan Goresan (Kakijun / 筆順):** Nomor langkah tarikan goresan (1, 2, 3...) dan panduan instruksi tekstual per karakter.
  - **Fitur Undo Non-Destruktif (<kbd>Ctrl+Z</kbd> / <kbd>Cmd+Z</kbd>):** Menghapus tarikan terakhir tanpa mengulang dari nol.
  - **Kontrol Kuas:** 3 tingkat ketebalan (*Tipis: 4px*, *Sedang: 8px*, *Tebal: 14px*) dan palet warna (*Hitam*, *Merah Claro*, *Abu-abu Slate*).
  - **Ekspor Gambar (Download PNG):** Unduh hasil latihan menulis dalam format gambar beresolusi tinggi.
  - Dukungan pemilih cepat untuk Hiragana, Katakana, Dakuon, dan Yōon.
- **UX, Gamifikasi & Manajemen Data:**
  - **Roadmap 25 Level (6 Stage):** Dari vokal dasar hingga tantangan Grand Master dan Yōon Mastery.
  - **Dark Mode Neoplasticism:** Tema gelap pekat (`#121212`, `#242426`) dengan aksen Claro Red `#D52B1E` yang nyaman di mata, auto-detect preferensi sistem.
  - **Backup & Restore (Ekspor/Impor JSON):** Simpan cadangan file progres bintang & level Anda, atau pulihkan kapan saja antar-perangkat.
  - **Dashboard Analisis Penguasaan Baris Konsonan:** Diagram akurasi persentase penguasaan per baris konsonan (*A, Ka, Sa, Ta, Na, Ha, Ma, Ya, Ra, Wa*).
- **Progressive Web App (PWA) & Offline Penuh:**
  - Dilengkapi `manifest.json` dan Service Worker (`sw.js`). Dapat di-*install* di Android, iOS, Windows, dan macOS serta digunakan 100% tanpa jaringan internet.
- **Arsitektur Modular & Bersih:**
  - Kode terstruktur secara modular dalam `data/` (`kana.js`, `strokes.js`, `vocab.js`, `levels.js`) dan `js/` (`audio.js`, `theme.js`, `storage.js`, `quiz.js`, `vocab.js`, `canvas.js`, `flashcards.js`, `chart.js`, `app.js`).

---

## 🎨 Desain: Mondrian & Neoplasticism

Lihat dokumentasi token dan filosofi antarmuka lengkap pada [DESIGN.md](file:///Users/astrea/code/hira-learn/DESIGN.md).

- **Primary:** `#D52B1E` (Claro Red)
- **Primary Dark:** `#B32419`
- **Secondary Neutral:** `#ADAFAF`
- **Ink:** `#000000` (Light) / `#F5F5F7` (Dark)
- **Canvas:** `#FFFFFF` (Light) / `#121212` (Dark)

---

## 🚀 Menjalankan Lokal

Karena KanaMaster adalah aplikasi web statis murni tanpa proses build yang rumit:

```bash
# Menggunakan Python
python3 -m http.server 8951

# Atau gunakan server HTTP statis apa pun pilihan Anda
npx serve .
```

Buka peramban pada `http://localhost:8951`.
