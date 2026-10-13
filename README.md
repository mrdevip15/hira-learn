# KanaMaster (かなマスター)

> Aplikasi web interaktif untuk menguasai membaca & menulis 142 aksara Hiragana & Katakana serta 320+ kosakata bahasa Jepang, dirancang dengan **Mondrian Design System** (Claro Red `#D52B1E`, Slate `#ADAFAF`, Neoplasticism) dan **Glassmorphism**.

---

## ✨ Fitur Utama

- **Cakupan Aksara Penuh (142 Kana):**
  - **Hiragana:** 46 huruf dasar + 25 Dakuon/Handakuon (が・ざ・だ・ば・ぱ).
  - **Katakana:** 46 huruf dasar + 25 Dakuon/Handakuon (ガ・ザ・ダ・バ・パ).
  - Setiap huruf dilengkapi romaji baku Hepburn dan tips mnemonik visual.
- **Kamus 327+ Kosakata:**
  - 260 kata Hiragana sehari-hari yang dikelompokkan per baris vokal/konsonan.
  - 67 kata Katakana populer (Gairaigo) mencakup makanan, teknologi, tempat, dan kehidupan modern.
  - Toleransi pengetikan Romaji fleksibel (mendukung vokal panjang `ー` seperti `kohi` & `koohii`).
- **Alur Belajar Bertingkat (Roadmap 22 Level):**
  - 5 Stage terstruktur dari vokal dasar (Level 1) hingga evaluasi Grand Master (Level 22).
  - Sistem bintang 1–3 dengan ambang kelulusan akurasi minimal 80% untuk membuka level berikutnya.
  - Tersimpan permanen di peramban pengguna melalui `localStorage`.
- **Kanvas Latihan Menulis (Genkouyoushi 原稿用紙):**
  - Kanvas grid bergaris interaktif (mendukung mouse & sentuhan layar).
  - Tombol bayangan/watermark huruf panduan serta pemilih cepat 142 karakter.
- **Audio Fallback Otomatis:**
  - Mendeteksi ketersediaan sintesis suara Jepang (`ja-JP`) pada perangkat klien; tombol suara disembunyikan secara bersih jika mesin TTS Jepang tidak terpasang.
- **Tanpa Ikon AI Slop / Emojis:**
  - 100% menggunakan ikon vektor inline SVG modern yang tajam dan konsisten.

---

## 🎨 Desain: Mondrian & Neoplasticism

Lihat dokumentasi token dan filosofi antarmuka lengkap pada [DESIGN.md](file:///Users/astrea/code/hira-learn/DESIGN.md).

- **Primary:** `#D52B1E` (Claro Red)
- **Primary Dark:** `#B32419`
- **Secondary Neutral:** `#ADAFAF`
- **Ink:** `#000000`
- **Canvas:** `#FFFFFF`

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
