# RVC · Ruang Vibe Coders

> Belajar bareng, bukan cuma bisa menyuruh AI, tapi paham apa yang ada di baliknya.

(Sebelumnya: AI Engineer Fundamentals)

Platform belajar interaktif dengan 5 jalur dan 29 modul.

| Jalur | Modul | Isi |
|---|---|---|
| 1. Dasar Programmer | 10-14 | Cara komputer bekerja, variabel & tipe data, alur kendali & fungsi, struktur data dasar, debugging/test/Git |
| 2. Algoritma & Struktur Data | 15-20 | Pseudocode, Big-O, searching & sorting, rekursi, linked list/hash/tree/graph, greedy & DP |
| 3. Bahasa Pemrograman | 21-24 | Peta bahasa & paradigma, Python/JS/TS/PHP/Ruby/Bash, Java/C#/Kotlin/Go/Swift/Dart, C/C++/Rust/SQL |
| 4. Secure Coding & Vibe Coding Aman | 25-29 | Review kode AI, injection & XSS, auth & access control, secrets/validasi/API/webhook, dependency & deployment |
| 5. AI Engineer | 1-9 | Jalur lama, kini dilengkapi cara kerja, contoh tambahan, peringatan, dan kuis tambahan |

Setiap modul punya tab: Analogi, Sub-Materi, Cara Kerja, Contoh Kode (beberapa contoh + output), Waspada (jebakan vibe coding), dan Kuis (3 soal).

## Menjalankan
```
npm install
npm run dev
npm run build
```

## Struktur data
- `src/data/types.ts`: tipe data
- `src/data/tracks.ts`: definisi jalur, tahapan, hasil akhir
- `src/data/modules-*.ts`: modul tiap jalur baru
- `src/data/enrichments-ai.ts`: materi pelengkap modul 1-9
- `src/data/curriculum.ts`: penggabung semua modul
- `src/data/helpers.ts`: tag `c` untuk menulis kode. Tulis ‵ sebagai backtick dan ¤ sebagai tanda dolar di dalam contoh kode.

## Menambah modul baru
Tambahkan objek ke salah satu `modules-*.ts` dengan `id` unik dan `track` yang sesuai. Progress lama (localStorage) otomatis dimigrasikan.
