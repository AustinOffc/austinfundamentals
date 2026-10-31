import type { ModuleItem } from './types';
import { c } from './helpers';

export const ALGORITMA_MODULES: ModuleItem[] = [
  {
    id: 15,
    track: 'algoritma',
    stage: 1,
    stageLabel: 'Tahap 1: Berpikir Algoritmik',
    level: 'Pemula',
    title: 'Berpikir Algoritmik & Pseudocode',
    subtitle: 'Memecah masalah menjadi langkah jelas sebelum menulis satu baris kode pun.',
    accentColor: 'from-emerald-400 to-teal-500',
    iconName: 'Workflow',
    analogyTitle: 'Analogi Resep dan Navigasi GPS',
    analogyContent:
      'Algoritma adalah resep: daftar langkah berurutan, jelas, dan pasti berhenti dengan hasil yang diharapkan. GPS tidak langsung "tahu" rute, ia memecah perjalanan menjadi belokan-belokan kecil. Pseudocode adalah resep yang kamu tulis dengan bahasa manusia dulu sebelum masuk dapur (kode). Kalau resepnya kacau, bahasa pemrograman apa pun tidak akan menyelamatkan hasilnya.',
    whyItMatters:
      'AI bisa menulis kode, tapi kamu yang harus tahu masalah apa yang sedang diselesaikan. Dengan berpikir algoritmik, kamu bisa memberi instruksi yang tepat, membaca logika kode AI, dan menemukan kasus yang terlewat.',
    subTopics: [
      { id: 'm15-1', title: 'Decomposition (memecah masalah)', casualExplanation: 'Pecah masalah besar menjadi sub-masalah kecil yang bisa diselesaikan satu per satu. "Bikin toko online" menjadi login, katalog, keranjang, bayar.' },
      { id: 'm15-2', title: 'Pseudocode', casualExplanation: 'Menulis langkah algoritma dengan bahasa setengah manusia setengah kode, tanpa terikat sintaks bahasa tertentu.' },
      { id: 'm15-3', title: 'Flowchart', casualExplanation: 'Diagram alur: kotak untuk proses, belah ketupat untuk keputusan, panah untuk arah. Berguna melihat alur if dan loop sekilas.' },
      { id: 'm15-4', title: 'Dry run dan trace table', casualExplanation: 'Menjalankan algoritma di atas kertas langkah demi langkah sambil mencatat nilai variabel untuk memastikan logikanya benar.' },
      { id: 'm15-5', title: 'Edge case dan kriteria benar', casualExplanation: 'Pikirkan kasus ekstrem: data kosong, satu data, data duplikat, angka negatif, atau input sangat besar.' }
    ],
    codeSnippet: {
      language: 'python',
      title: 'Dari Pseudocode ke Kode: Mencari Nilai Terbesar',
      code: c`
# PSEUDOCODE:
#   jika daftar kosong -> kembalikan tidak ada
#   terbesar <- elemen pertama
#   untuk setiap elemen berikutnya:
#       jika elemen > terbesar -> terbesar <- elemen
#   kembalikan terbesar

def cari_terbesar(daftar):
    if not daftar:
        return None
    terbesar = daftar[0]
    for nilai in daftar[1:]:
        if nilai > terbesar:
            terbesar = nilai
    return terbesar

print(cari_terbesar([4, 9, 2, 7]))   # 9
print(cari_terbesar([]))             # None
`,
      takeaway: 'Pseudocode membuat logika jelas lebih dulu. Perhatikan baris pertama pseudocode: kasus kosong ditangani sebelum yang lain.',
      output: '9\nNone'
    },
    howItWorksTitle: 'Langkah Menyelesaikan Masalah Apa Pun',
    howItWorks: [
      { title: '1. Pahami masalah', description: 'Tulis ulang dengan kata-katamu: apa input, apa output, apa batasannya?' },
      { title: '2. Buat contoh manual', description: 'Selesaikan 2-3 contoh kecil dengan tangan agar kamu tahu langkah yang kamu lakukan sendiri.' },
      { title: '3. Tulis pseudocode', description: 'Terjemahkan langkah manualmu menjadi urutan instruksi yang pasti.' },
      { title: '4. Dry run', description: 'Uji pseudocode dengan contoh, termasuk data kosong dan ekstrem.' },
      { title: '5. Baru tulis kode', description: 'Terjemahkan ke bahasa pemrograman (atau minta AI), lalu bandingkan hasilnya dengan dry run.' }
    ],
    moreExamples: [
      {
        language: 'python',
        title: 'Trace Table Otomatis untuk Melihat Alur',
        code: c`
def jumlah_genap(daftar):
    total = 0
    for n in daftar:
        if n % 2 == 0:
            total += n
        print("n =", n, "| total =", total)   # jejak nilai variabel
    return total

print(jumlah_genap([3, 4, 7, 10]))
`,
        takeaway: 'Mencetak jejak variabel adalah trace table versi komputer. Cocok untuk memeriksa apakah kode AI benar-benar bekerja sesuai yang dijelaskan.',
        output: 'n = 3 | total = 0\nn = 4 | total = 4\nn = 7 | total = 4\nn = 10 | total = 14\n14'
      }
    ],
    vibeWarnings: [
      {
        severity: 'warning',
        title: 'Kode AI hanya benar untuk "happy path"',
        problem: 'AI cenderung menulis kode untuk kasus normal. Data kosong, angka negatif, atau karakter aneh sering tidak ditangani.',
        fix: 'Minta AI menuliskan daftar edge case, lalu uji sendiri satu per satu sebelum menerima kodenya.'
      },
      {
        severity: 'info',
        title: 'Meminta kode tanpa menjelaskan masalah',
        problem: 'Prompt kabur seperti "buatkan sistem order" menghasilkan asumsi liar yang tidak kamu sadari.',
        fix: 'Tulis input, output, aturan bisnis, dan batasan sebelum meminta kode. Minta AI menjelaskan algoritmanya dalam pseudocode lebih dulu.'
      }
    ],
    quiz: {
      question: 'Apa fungsi utama pseudocode?',
      options: ['Menggantikan compiler', 'Menuliskan logika langkah demi langkah tanpa terikat sintaks bahasa tertentu', 'Membuat program lebih cepat', 'Mengenkripsi kode'],
      correctIndex: 1,
      explanation: 'Pseudocode membantu merancang dan memeriksa logika lebih dulu sehingga kesalahan ketahuan sebelum kode ditulis.'
    },
    moreQuizzes: [
      {
        question: 'Mana yang termasuk edge case saat membuat fungsi mencari nilai terbesar dari daftar?',
        options: ['Daftar kosong', 'Daftar berisi satu elemen', 'Daftar berisi angka negatif semua', 'Semua jawaban benar'],
        correctIndex: 3,
        explanation: 'Semua itu kasus ekstrem yang sering terlewat dan harus diuji.'
      },
      {
        question: 'Kenapa dry run penting meski kamu memakai AI?',
        options: ['Supaya kode lebih pendek', 'Untuk memverifikasi bahwa logika kode benar-benar sesuai yang kamu inginkan', 'Agar AI bekerja lebih cepat', 'Tidak penting'],
        correctIndex: 1,
        explanation: 'AI bisa salah dengan penuh percaya diri. Dry run adalah cara murah dan cepat untuk membuktikan logika.'
      }
    ]
  },
  {
    id: 16,
    track: 'algoritma',
    stage: 2,
    stageLabel: 'Tahap 2: Ukur Efisiensi',
    level: 'Junior',
    title: 'Kompleksitas & Big-O',
    subtitle: 'Mengukur seberapa cepat kode melambat ketika datanya membesar.',
    accentColor: 'from-teal-400 to-cyan-500',
    iconName: 'Gauge',
    analogyTitle: 'Analogi Mencari Nama di Buku',
    analogyContent:
      'Bayangkan mencari satu nama di buku telepon. Cara bodoh: baca dari halaman pertama satu per satu (O(n)). Cara pintar: buka tengah, tentukan kiri atau kanan, lalu bagi dua lagi (O(log n)). Kalau bukunya jadi 1000 kali lebih tebal, cara bodoh menjadi 1000 kali lebih lama, sementara cara pintar hanya bertambah sekitar 10 langkah. Big-O adalah cara menyatakan "seberapa parah melambatnya" saat data membesar.',
    whyItMatters:
      'Kode yang cepat dengan 10 data bisa membuat server mati dengan 100.000 data. Kode AI sering memakai loop bersarang tanpa kamu sadari. Menguasai Big-O membantumu menemukan titik lambat dan juga celah serangan denial-of-service.',
    subTopics: [
      { id: 'm16-1', title: 'O(1) dan O(log n)', casualExplanation: 'O(1) waktu tetap berapa pun datanya (akses array via indeks). O(log n) membagi dua masalah tiap langkah (binary search).' },
      { id: 'm16-2', title: 'O(n) dan O(n log n)', casualExplanation: 'O(n) menyisir semua data satu kali. O(n log n) adalah batas efisiensi sorting umum seperti merge sort.' },
      { id: 'm16-3', title: 'O(n²) dan lebih buruk', casualExplanation: 'Loop di dalam loop. Data 10.000 berarti 100 juta operasi. Eksponensial O(2ⁿ) bahkan lebih parah.' },
      { id: 'm16-4', title: 'Kompleksitas ruang', casualExplanation: 'Selain waktu, hitung juga memori tambahan yang dipakai. Cepat tapi menghabiskan RAM juga masalah.' },
      { id: 'm16-5', title: 'Mengenali pola dari kode', casualExplanation: 'Satu loop = O(n), loop bersarang = O(n²), membagi dua terus = O(log n), memanggil .includes()/in di dalam loop menambah satu tingkat.' }
    ],
    codeSnippet: {
      language: 'python',
      title: 'Cek Duplikat: O(n²) vs O(n)',
      code: c`
def ada_duplikat_lambat(data):        # O(n^2): loop bersarang
    for i in range(len(data)):
        for j in range(i + 1, len(data)):
            if data[i] == data[j]:
                return True
    return False

def ada_duplikat_cepat(data):         # O(n): pakai set
    terlihat = set()
    for nilai in data:
        if nilai in terlihat:
            return True
        terlihat.add(nilai)
    return False

import time
data = list(range(5000))
for fungsi in (ada_duplikat_lambat, ada_duplikat_cepat):
    mulai = time.time()
    fungsi(data)
    print(fungsi.__name__, round(time.time() - mulai, 4), "detik")
`,
      takeaway: 'Hasil sama persis, tapi versi set jauh lebih cepat karena pengecekan in pada set adalah O(1). Selisihnya makin besar seiring data bertambah.',
      output: 'ada_duplikat_lambat 0.62 detik\nada_duplikat_cepat 0.0004 detik'
    },
    howItWorksTitle: 'Cara Menghitung Big-O dari Kode',
    howItWorks: [
      { title: '1. Tentukan n', description: 'n adalah ukuran input yang bisa membesar, misalnya jumlah item dalam daftar atau jumlah user.' },
      { title: '2. Hitung seberapa sering operasi inti terulang', description: 'Satu loop atas n berarti n kali. Loop di dalam loop berarti n kali n.' },
      { title: '3. Buang konstanta dan suku kecil', description: '3n + 10 dianggap O(n). n² + n dianggap O(n²) karena n² mendominasi saat n besar.' },
      { title: '4. Perhatikan operasi tersembunyi', description: 'if x in list, list.index, string concat di dalam loop, dan sort() semuanya punya biaya sendiri.' },
      { title: '5. Bandingkan dan putuskan', description: 'Jika n bisa jutaan, hindari O(n²). Jika n pasti kecil (misal 20), kode sederhana sudah cukup.' }
    ],
    moreExamples: [
      {
        language: 'javascript',
        title: 'Operasi Tersembunyi di Dalam Loop',
        code: c`
const a = Array.from({ length: 50000 }, (_, i) => i);
const b = Array.from({ length: 50000 }, (_, i) => i * 2);

// O(n * m): includes() menyisir array b untuk SETIAP elemen a
const lambat = a.filter((x) => b.includes(x));

// O(n + m): ubah b menjadi Set dulu
const setB = new Set(b);
const cepat = a.filter((x) => setB.has(x));

console.log(lambat.length === cepat.length);   // true
`,
        takeaway: 'Satu baris .includes() di dalam .filter() diam-diam membuat kode O(n²). Pola ini sangat sering muncul pada kode hasil AI.',
        output: 'true'
      }
    ],
    vibeWarnings: [
      {
        severity: 'danger',
        title: 'Regex berbahaya (ReDoS)',
        problem: 'Pola regex seperti (a+)+$ bisa membutuhkan waktu eksponensial pada input tertentu sehingga satu request dapat membekukan server.',
        fix: 'Hindari kuantifier bersarang, batasi panjang input sebelum regex dijalankan, dan gunakan library validasi yang sudah teruji.'
      },
      {
        severity: 'warning',
        title: 'Loop bersarang pada data yang dikontrol user',
        problem: 'Jika jumlah data berasal dari request pengguna, penyerang bisa mengirim input besar untuk memaksa server bekerja berlebihan.',
        fix: 'Batasi ukuran input, gunakan pagination, dan pilih struktur data yang efisien.'
      }
    ],
    quiz: {
      question: 'Berapa kompleksitas waktu loop di dalam loop yang sama-sama berjalan sebanyak n kali?',
      options: ['O(1)', 'O(n)', 'O(n²)', 'O(log n)'],
      correctIndex: 2,
      explanation: 'n putaran luar dikali n putaran dalam menghasilkan n x n = n² operasi.'
    },
    moreQuizzes: [
      {
        question: 'Algoritma yang membagi dua ruang pencarian setiap langkah (seperti binary search) memiliki kompleksitas...',
        options: ['O(n)', 'O(n²)', 'O(log n)', 'O(2ⁿ)'],
        correctIndex: 2,
        explanation: 'Membagi dua berulang kali berarti jumlah langkah tumbuh secara logaritmik terhadap ukuran data.'
      },
      {
        question: 'Kenapa regex yang rumit bisa menjadi celah keamanan?',
        options: ['Karena regex terlalu pendek', 'Karena input tertentu bisa memicu backtracking eksponensial sehingga server hang', 'Karena regex mengenkripsi data', 'Tidak bisa'],
        correctIndex: 1,
        explanation: 'Serangan ReDoS memanfaatkan pola regex yang buruk untuk menghabiskan CPU server.'
      }
    ]
  },
  {
    id: 17,
    track: 'algoritma',
    stage: 3,
    stageLabel: 'Tahap 3: Cari & Urutkan',
    level: 'Junior',
    title: 'Searching & Sorting',
    subtitle: 'Mencari dan mengurutkan data: algoritma yang dipakai di hampir semua aplikasi.',
    accentColor: 'from-lime-400 to-emerald-500',
    iconName: 'ArrowUpDown',
    analogyTitle: 'Analogi Perpustakaan',
    analogyContent:
      'Linear search itu seperti mengecek tiap rak sampai ketemu buku. Binary search hanya bisa dipakai kalau buku sudah tersusun urut: buka tengah, tentukan kiri/kanan, ulangi. Sorting itu seperti merapikan buku: bubble sort menukar pasangan bertetangga berulang-ulang (lambat tapi mudah dipahami), merge sort membagi tumpukan jadi dua, merapikan masing-masing, lalu menggabungkannya (cepat dan stabil).',
    whyItMatters:
      'Hampir semua fitur (pencarian produk, leaderboard, riwayat transaksi) memakai pencarian dan pengurutan. Dengan memahaminya, kamu tahu kapan memakai fungsi bawaan dan kenapa hasil sort bisa mengejutkan (misal angka 10 dianggap lebih kecil dari 9).',
    subTopics: [
      { id: 'm17-1', title: 'Linear search', casualExplanation: 'Periksa elemen satu per satu. O(n), bekerja untuk data tak berurutan.' },
      { id: 'm17-2', title: 'Binary search', casualExplanation: 'Syaratnya data harus terurut. Bagi dua ruang pencarian tiap langkah. O(log n).' },
      { id: 'm17-3', title: 'Bubble, selection, insertion sort', casualExplanation: 'Sorting sederhana O(n²). Bagus untuk belajar, jarang dipakai di produksi untuk data besar.' },
      { id: 'm17-4', title: 'Merge sort dan quick sort', casualExplanation: 'Divide and conquer, rata-rata O(n log n). Dasar dari fungsi sort() bawaan banyak bahasa.' },
      { id: 'm17-5', title: 'Stabilitas dan pitfall sorting', casualExplanation: 'Sort stabil menjaga urutan item sama. Di JavaScript, [10, 9, 1].sort() mengurutkan sebagai teks sehingga hasilnya [1, 10, 9].' }
    ],
    codeSnippet: {
      language: 'python',
      title: 'Binary Search',
      code: c`
def binary_search(data, target):
    kiri, kanan = 0, len(data) - 1
    while kiri <= kanan:
        tengah = (kiri + kanan) // 2
        if data[tengah] == target:
            return tengah
        elif data[tengah] < target:
            kiri = tengah + 1         # buang separuh kiri
        else:
            kanan = tengah - 1        # buang separuh kanan
    return -1                         # tidak ditemukan

angka = [2, 5, 8, 12, 16, 23, 38, 56]
print(binary_search(angka, 23))   # 5
print(binary_search(angka, 7))    # -1
`,
      takeaway: 'Setiap langkah membuang separuh data. Untuk 1 miliar data cukup sekitar 30 langkah. Tapi data HARUS sudah terurut.',
      output: '5\n-1'
    },
    howItWorksTitle: 'Cara Merge Sort Bekerja',
    howItWorks: [
      { title: '1. Bagi', description: 'Belah daftar menjadi dua bagian sampai tiap bagian berisi satu elemen (sudah pasti terurut).' },
      { title: '2. Selesaikan bagian kecil', description: 'Daftar satu elemen tidak perlu diurutkan lagi.' },
      { title: '3. Gabung dengan membandingkan', description: 'Ambil elemen terkecil dari depan dua daftar terurut, taruh ke hasil, ulangi sampai habis.' },
      { title: '4. Ulangi ke atas', description: 'Penggabungan berlanjut hingga seluruh daftar menyatu menjadi satu daftar terurut: O(n log n).' }
    ],
    moreExamples: [
      {
        language: 'python',
        title: 'Merge Sort',
        code: c`
def merge_sort(data):
    if len(data) <= 1:
        return data
    tengah = len(data) // 2
    kiri = merge_sort(data[:tengah])
    kanan = merge_sort(data[tengah:])

    hasil, i, j = [], 0, 0
    while i < len(kiri) and j < len(kanan):
        if kiri[i] <= kanan[j]:
            hasil.append(kiri[i]); i += 1
        else:
            hasil.append(kanan[j]); j += 1
    return hasil + kiri[i:] + kanan[j:]

print(merge_sort([38, 27, 43, 3, 9, 82, 10]))
`,
        takeaway: 'Di proyek nyata pakai sorted() atau list.sort() bawaan. Mengerti merge sort membantumu paham kenapa fungsi bawaan itu cepat.',
        output: '[3, 9, 10, 27, 38, 43, 82]'
      },
      {
        language: 'javascript',
        title: 'Jebakan sort() di JavaScript',
        code: c`
const angka = [10, 9, 1, 100, 25];
console.log([...angka].sort());                 // [1, 10, 100, 25, 9]  (urut teks!)
console.log([...angka].sort((a, b) => a - b));  // [1, 9, 10, 25, 100]  (benar)

const produk = [{ nama: "A", harga: 30 }, { nama: "B", harga: 10 }];
produk.sort((x, y) => x.harga - y.harga);
console.log(produk.map((p) => p.nama));         // ["B", "A"]
`,
        takeaway: 'Selalu berikan fungsi pembanding saat mengurutkan angka di JavaScript.',
        output: '[ 1, 10, 100, 25, 9 ]\n[ 1, 9, 10, 25, 100 ]\n[ "B", "A" ]'
      }
    ],
    vibeWarnings: [
      {
        severity: 'warning',
        title: 'Binary search pada data yang belum terurut',
        problem: 'Hasilnya salah tanpa error. Item yang ada dinyatakan tidak ditemukan.',
        fix: 'Pastikan data terurut dan konsisten dengan fungsi pembanding yang dipakai.'
      },
      {
        severity: 'info',
        title: 'Menulis ulang sort sendiri',
        problem: 'AI kadang menulis bubble sort manual untuk fitur produksi sehingga lambat pada data besar.',
        fix: 'Gunakan sort bawaan bahasa atau database (ORDER BY) yang sudah dioptimalkan dan teruji.'
      }
    ],
    quiz: {
      question: 'Syarat utama agar binary search dapat dipakai adalah...',
      options: ['Datanya berisi angka genap', 'Datanya sudah terurut', 'Datanya kurang dari 100', 'Datanya berupa teks'],
      correctIndex: 1,
      explanation: 'Binary search membuang separuh data berdasarkan perbandingan, sehingga hanya valid jika data sudah terurut.'
    },
    moreQuizzes: [
      {
        question: 'Apa hasil [10, 9, 1].sort() tanpa fungsi pembanding di JavaScript?',
        options: ['[1, 9, 10]', '[1, 10, 9]', '[10, 9, 1]', 'Error'],
        correctIndex: 1,
        explanation: 'Tanpa pembanding, elemen dikonversi ke teks lalu diurutkan secara alfabet, sehingga "10" mendahului "9".'
      },
      {
        question: 'Kompleksitas rata-rata merge sort adalah...',
        options: ['O(n²)', 'O(n log n)', 'O(log n)', 'O(1)'],
        correctIndex: 1,
        explanation: 'Pembagian log n tingkat dan penggabungan n elemen per tingkat menghasilkan O(n log n).'
      }
    ]
  },
  {
    id: 18,
    track: 'algoritma',
    stage: 4,
    stageLabel: 'Tahap 4: Pola Lanjutan',
    level: 'Junior',
    title: 'Rekursi & Divide and Conquer',
    subtitle: 'Fungsi yang memanggil dirinya sendiri untuk memecahkan masalah besar.',
    accentColor: 'from-green-400 to-emerald-600',
    iconName: 'Repeat',
    analogyTitle: 'Analogi Boneka Matryoshka',
    analogyContent:
      'Rekursi itu seperti boneka Rusia: buka satu boneka, di dalamnya ada boneka yang sama tapi lebih kecil, terus sampai ketemu boneka terkecil yang tidak bisa dibuka lagi (base case). Setelah itu kamu menutup kembali satu per satu. Tanpa boneka terkecil (base case), kamu akan membuka selamanya sampai memori habis (stack overflow).',
    whyItMatters:
      'Banyak struktur di dunia nyata berbentuk rekursif: folder di dalam folder, komentar berbalas komentar, JSON bersarang. Rekursi juga menjadi dasar divide and conquer. Tapi rekursi yang salah bisa membuat aplikasi crash atau diserang dengan input bersarang dalam.',
    subTopics: [
      { id: 'm18-1', title: 'Base case dan recursive case', casualExplanation: 'Base case adalah kondisi berhenti. Recursive case adalah bagian yang memanggil diri sendiri dengan masalah lebih kecil.' },
      { id: 'm18-2', title: 'Call stack', casualExplanation: 'Setiap pemanggilan fungsi menumpuk di memori. Terlalu dalam berarti stack overflow.' },
      { id: 'm18-3', title: 'Memoization', casualExplanation: 'Menyimpan hasil yang sudah dihitung agar tidak dihitung ulang, mengubah Fibonacci dari eksponensial menjadi linear.' },
      { id: 'm18-4', title: 'Divide and conquer', casualExplanation: 'Bagi masalah, selesaikan bagian-bagian, gabungkan hasilnya (merge sort, binary search).' },
      { id: 'm18-5', title: 'Rekursi vs iterasi', casualExplanation: 'Semua rekursi bisa diganti loop. Rekursi lebih ringkas untuk struktur bersarang, loop lebih hemat memori.' }
    ],
    codeSnippet: {
      language: 'python',
      title: 'Faktorial dan Jejak Pemanggilan',
      code: c`
def faktorial(n):
    if n <= 1:                    # BASE CASE: berhenti di sini
        return 1
    return n * faktorial(n - 1)   # RECURSIVE CASE: masalah lebih kecil

print(faktorial(5))   # 120

# Jejak: faktorial(5) = 5 * faktorial(4)
#                     = 5 * 4 * faktorial(3)
#                     = 5 * 4 * 3 * faktorial(2)
#                     = 5 * 4 * 3 * 2 * faktorial(1)
#                     = 5 * 4 * 3 * 2 * 1 = 120
`,
      takeaway: 'Setiap rekursi butuh base case yang pasti tercapai dan langkah yang mendekatkan ke base case.',
      output: '120'
    },
    howItWorksTitle: 'Apa yang Terjadi di Call Stack',
    howItWorks: [
      { title: '1. Panggilan menumpuk', description: 'faktorial(5) menunggu hasil faktorial(4), yang menunggu faktorial(3), dan seterusnya. Setiap panggilan memakai memori stack.' },
      { title: '2. Base case tercapai', description: 'faktorial(1) langsung mengembalikan 1 tanpa memanggil lagi.' },
      { title: '3. Hasil dikembalikan berantai', description: 'Tumpukan dibuka dari atas: 2*1, lalu 3*2, lalu 4*6, sampai 5*24 = 120.' },
      { title: '4. Jika base case hilang', description: 'Tumpukan tumbuh terus sampai batas rekursi terlampaui dan program crash.' }
    ],
    moreExamples: [
      {
        language: 'python',
        title: 'Fibonacci: Lambat vs Memoization',
        code: c`
from functools import lru_cache

def fib_lambat(n):                     # O(2^n): menghitung ulang berkali-kali
    return n if n < 2 else fib_lambat(n - 1) + fib_lambat(n - 2)

@lru_cache(maxsize=None)
def fib_cepat(n):                      # O(n): hasil disimpan
    return n if n < 2 else fib_cepat(n - 1) + fib_cepat(n - 2)

print(fib_cepat(80))       # 23416728348467685 (instan)
# fib_lambat(80) akan berjalan berjam-jam
`,
        takeaway: 'Memoization menyimpan hasil sub-masalah. Satu dekorator mengubah algoritma yang mustahil menjadi instan.',
        output: '23416728348467685'
      },
      {
        language: 'python',
        title: 'Rekursi pada Struktur Bersarang (Folder / JSON)',
        code: c`
def hitung_file(folder):
    total = 0
    for isi in folder["isi"]:
        if isi["tipe"] == "file":
            total += 1
        else:
            total += hitung_file(isi)     # folder di dalam folder
    return total

root = {"isi": [
    {"tipe": "file"},
    {"tipe": "folder", "isi": [{"tipe": "file"}, {"tipe": "file"}]},
]}
print(hitung_file(root))   # 3
`,
        takeaway: 'Struktur yang bentuknya berulang (pohon folder, komentar bersarang) paling alami diproses dengan rekursi.',
        output: '3'
      }
    ],
    vibeWarnings: [
      {
        severity: 'danger',
        title: 'Rekursi pada input bersarang dari user',
        problem: 'JSON atau struktur yang dibuat penyerang dengan kedalaman ekstrem dapat memicu stack overflow dan membuat server crash.',
        fix: 'Batasi kedalaman maksimal dan ukuran input, atau pakai versi iteratif dengan stack eksplisit.'
      },
      {
        severity: 'warning',
        title: 'Rekursi tanpa memoization',
        problem: 'Fungsi rekursif yang menghitung ulang sub-masalah sama (seperti fibonacci naif) tampak benar tetapi sangat lambat.',
        fix: 'Gunakan memoization (lru_cache, Map) atau ubah menjadi dynamic programming.'
      }
    ],
    quiz: {
      question: 'Apa yang terjadi jika fungsi rekursif tidak memiliki base case yang tercapai?',
      options: ['Berjalan lebih cepat', 'Memanggil diri sendiri terus sampai stack overflow', 'Menghasilkan 0', 'Dihentikan otomatis dengan hasil benar'],
      correctIndex: 1,
      explanation: 'Tanpa kondisi berhenti, tumpukan pemanggilan terus tumbuh hingga memori stack habis.'
    },
    moreQuizzes: [
      {
        question: 'Apa tujuan memoization?',
        options: ['Mengurangi ukuran file', 'Menyimpan hasil sub-masalah agar tidak dihitung ulang', 'Mengenkripsi hasil', 'Membuat kode lebih pendek'],
        correctIndex: 1,
        explanation: 'Dengan menyimpan hasil, sub-masalah yang sama hanya dihitung sekali.'
      },
      {
        question: 'Mana pilihan aman untuk memproses struktur bersarang yang dikirim user?',
        options: ['Rekursi tanpa batas', 'Batasi kedalaman dan ukuran input', 'Matikan error handling', 'Percaya saja pada input'],
        correctIndex: 1,
        explanation: 'Membatasi kedalaman mencegah serangan yang memicu stack overflow.'
      }
    ]
  },
  {
    id: 19,
    track: 'algoritma',
    stage: 4,
    stageLabel: 'Tahap 4: Pola Lanjutan',
    level: 'Mid-Level',
    title: 'Linked List, Hash Table, Tree & Graph',
    subtitle: 'Struktur data lanjutan yang mendasari database, peta, dan jaringan sosial.',
    accentColor: 'from-teal-400 to-green-500',
    iconName: 'Network',
    analogyTitle: 'Analogi Kota dan Silsilah Keluarga',
    analogyContent:
      'Linked list seperti kereta api: tiap gerbong tahu gerbong berikutnya. Hash table seperti lemari loker bernomor: nomor ditentukan dari namamu sehingga langsung ketemu. Tree seperti silsilah keluarga: satu leluhur bercabang ke anak-anak. Graph seperti peta kota: persimpangan (node) dihubungkan jalan (edge), bisa berputar dan punya banyak rute.',
    whyItMatters:
      'Database memakai tree (B-tree) untuk indeks, cache memakai hash table, peta dan rekomendasi teman memakai graph. Memahami ini membantumu mengerti kenapa query lambat tanpa index dan bagaimana fitur "rute terdekat" atau "teman dari teman" bekerja.',
    subTopics: [
      { id: 'm19-1', title: 'Linked list', casualExplanation: 'Rangkaian node, tiap node menyimpan nilai dan penunjuk ke node berikutnya. Sisip/hapus cepat, akses indeks lambat.' },
      { id: 'm19-2', title: 'Hash table dan collision', casualExplanation: 'Fungsi hash mengubah key jadi posisi. Dua key bisa bertabrakan (collision) dan harus ditangani.' },
      { id: 'm19-3', title: 'Binary search tree', casualExplanation: 'Setiap node memiliki anak kiri lebih kecil dan anak kanan lebih besar sehingga pencarian ideal O(log n).' },
      { id: 'm19-4', title: 'Graph dan representasinya', casualExplanation: 'Node dan edge, bisa berarah atau tidak, dengan atau tanpa bobot. Disimpan sebagai adjacency list/dictionary.' },
      { id: 'm19-5', title: 'BFS dan DFS', casualExplanation: 'BFS menjelajah lapis demi lapis (cocok mencari rute terpendek tanpa bobot). DFS menyelam sedalam mungkin lebih dulu.' }
    ],
    codeSnippet: {
      language: 'python',
      title: 'BFS: Rute Terpendek di Graph',
      code: c`
from collections import deque

peta = {
    "A": ["B", "C"],
    "B": ["D"],
    "C": ["D", "E"],
    "D": ["F"],
    "E": ["F"],
    "F": [],
}

def rute_terpendek(graph, awal, tujuan):
    antrean = deque([[awal]])
    dikunjungi = {awal}               # cegah berputar selamanya
    while antrean:
        jalur = antrean.popleft()
        simpul = jalur[-1]
        if simpul == tujuan:
            return jalur
        for tetangga in graph[simpul]:
            if tetangga not in dikunjungi:
                dikunjungi.add(tetangga)
                antrean.append(jalur + [tetangga])
    return None

print(rute_terpendek(peta, "A", "F"))   # ['A', 'B', 'D', 'F']
`,
      takeaway: 'Queue membuat BFS menjelajah lapis demi lapis, jadi rute pertama yang sampai pasti yang paling sedikit langkahnya. Set dikunjungi mencegah loop tak berujung pada graph berputar.',
      output: "['A', 'B', 'D', 'F']"
    },
    howItWorksTitle: 'Cara Hash Table Menyimpan dan Mencari',
    howItWorks: [
      { title: '1. Hitung hash', description: 'Key "kopi" diubah fungsi hash menjadi angka besar.' },
      { title: '2. Tentukan slot', description: 'Angka itu di-modulo dengan jumlah slot untuk mendapat posisi array.' },
      { title: '3. Simpan di slot', description: 'Value diletakkan di slot tersebut. Jika sudah terisi key lain (collision), disimpan dalam daftar kecil di slot itu.' },
      { title: '4. Cari dengan cara yang sama', description: 'Hitung hash lagi, lompat ke slot, bandingkan key. Rata-rata O(1).' }
    ],
    moreExamples: [
      {
        language: 'python',
        title: 'Binary Search Tree',
        code: c`
class Node:
    def __init__(self, nilai):
        self.nilai, self.kiri, self.kanan = nilai, None, None

def sisip(akar, nilai):
    if akar is None:
        return Node(nilai)
    if nilai < akar.nilai:
        akar.kiri = sisip(akar.kiri, nilai)
    else:
        akar.kanan = sisip(akar.kanan, nilai)
    return akar

def cari(akar, nilai):
    if akar is None:
        return False
    if nilai == akar.nilai:
        return True
    return cari(akar.kiri if nilai < akar.nilai else akar.kanan, nilai)

akar = None
for n in [8, 3, 10, 1, 6, 14]:
    akar = sisip(akar, n)
print(cari(akar, 6), cari(akar, 7))   # True False
`,
        takeaway: 'Tiap perbandingan membuang separuh pohon. Jika data disisipkan terurut, pohon bisa miring menjadi seperti list dan kehilangan keunggulannya, sebab itu ada pohon seimbang (AVL, B-tree).',
        output: 'True False'
      },
      {
        language: 'python',
        title: 'DFS Mendeteksi Siklus',
        code: c`
def ada_siklus(graph):
    status = {}                      # 1 = sedang diproses, 2 = selesai
    def dfs(simpul):
        status[simpul] = 1
        for tetangga in graph.get(simpul, []):
            if status.get(tetangga) == 1:
                return True          # ketemu simpul yang sedang diproses: ada siklus
            if tetangga not in status and dfs(tetangga):
                return True
        status[simpul] = 2
        return False
    return any(dfs(s) for s in graph if s not in status)

print(ada_siklus({"A": ["B"], "B": ["C"], "C": ["A"]}))   # True
print(ada_siklus({"A": ["B"], "B": ["C"], "C": []}))       # False
`,
        takeaway: 'Deteksi siklus dipakai pada resolusi dependency paket dan urutan tugas. Siklus dependency adalah sumber error build yang umum.',
        output: 'True\nFalse'
      }
    ],
    vibeWarnings: [
      {
        severity: 'warning',
        title: 'Traversal graph tanpa set "dikunjungi"',
        problem: 'Pada graph yang punya siklus, BFS/DFS tanpa penanda kunjungan akan berputar selamanya dan menghabiskan memori.',
        fix: 'Selalu simpan simpul yang sudah dikunjungi.'
      },
      {
        severity: 'info',
        title: 'Menulis struktur data sendiri padahal sudah ada di library',
        problem: 'Implementasi buatan sendiri (apalagi hasil AI) lebih rentan bug dibanding Map, Set, deque, atau database index.',
        fix: 'Pakai struktur bawaan atau library teruji, pelajari versi manual hanya untuk memahami konsepnya.'
      }
    ],
    quiz: {
      question: 'Algoritma mana yang tepat untuk mencari rute dengan jumlah langkah paling sedikit pada graph tanpa bobot?',
      options: ['DFS', 'BFS', 'Bubble sort', 'Binary search'],
      correctIndex: 1,
      explanation: 'BFS menjelajah lapis demi lapis, sehingga jalur pertama yang mencapai tujuan pasti yang paling sedikit langkahnya.'
    },
    moreQuizzes: [
      {
        question: 'Apa itu collision pada hash table?',
        options: ['Dua key menghasilkan posisi slot yang sama', 'Hash table penuh', 'Key hilang', 'Program crash'],
        correctIndex: 0,
        explanation: 'Collision terjadi saat dua key berbeda dipetakan ke slot yang sama dan harus ditangani, misalnya dengan chaining.'
      },
      {
        question: 'Keunggulan linked list dibanding array biasa adalah...',
        options: ['Akses indeks lebih cepat', 'Menyisip atau menghapus di tengah tanpa menggeser semua elemen', 'Memakai memori lebih sedikit selalu', 'Otomatis terurut'],
        correctIndex: 1,
        explanation: 'Pada linked list cukup mengubah penunjuk node, tanpa menggeser elemen lain.'
      }
    ]
  },
  {
    id: 20,
    track: 'algoritma',
    stage: 4,
    stageLabel: 'Tahap 4: Pola Lanjutan',
    level: 'Mid-Level',
    title: 'Greedy & Dynamic Programming',
    subtitle: 'Strategi memecahkan masalah optimasi: ambil yang terbaik sekarang, atau ingat hasil sub-masalah.',
    accentColor: 'from-emerald-500 to-lime-500',
    iconName: 'Puzzle',
    analogyTitle: 'Analogi Kembalian Kasir dan Buku Catatan',
    analogyContent:
      'Greedy seperti kasir yang memberi kembalian dengan uang pecahan terbesar dulu: sederhana dan sering berhasil, tapi tidak selalu optimal. Dynamic Programming seperti murid pintar yang mencatat jawaban sub-soal di buku, jadi saat soal yang sama muncul lagi ia tinggal membuka catatan, tidak menghitung ulang.',
    whyItMatters:
      'Masalah optimasi muncul di mana-mana: rute pengiriman, penjadwalan, kompresi, rekomendasi. Mengenali pola greedy dan DP membuatmu bisa menilai apakah solusi AI benar-benar optimal atau hanya tampak benar.',
    subTopics: [
      { id: 'm20-1', title: 'Greedy', casualExplanation: 'Pilih opsi terbaik di setiap langkah tanpa menengok kembali. Cepat, tapi hanya benar untuk masalah tertentu.' },
      { id: 'm20-2', title: 'Kapan greedy gagal', casualExplanation: 'Kembalian 6 dengan koin {1, 3, 4}: greedy memilih 4+1+1 (3 koin) padahal 3+3 (2 koin) lebih baik.' },
      { id: 'm20-3', title: 'Dynamic programming', casualExplanation: 'Masalah punya sub-masalah yang tumpang tindih. Simpan hasilnya di tabel agar dihitung sekali saja.' },
      { id: 'm20-4', title: 'Top-down vs bottom-up', casualExplanation: 'Top-down: rekursi + memoization. Bottom-up: isi tabel dari kasus terkecil ke terbesar.' },
      { id: 'm20-5', title: 'Mengenali masalah DP', casualExplanation: 'Cari kata kunci: minimum/maksimum, jumlah cara, atau keputusan berurutan dengan sub-masalah berulang.' }
    ],
    codeSnippet: {
      language: 'python',
      title: 'Greedy Gagal, DP Berhasil: Koin Kembalian',
      code: c`
def koin_greedy(koin, total):
    jumlah = 0
    for k in sorted(koin, reverse=True):
        jumlah += total // k
        total %= k
    return jumlah if total == 0 else None

def koin_dp(koin, total):
    INF = float("inf")
    dp = [0] + [INF] * total          # dp[x] = koin minimum untuk nilai x
    for x in range(1, total + 1):
        for k in koin:
            if k <= x and dp[x - k] + 1 < dp[x]:
                dp[x] = dp[x - k] + 1
    return dp[total] if dp[total] != INF else None

print(koin_greedy([1, 3, 4], 6))   # 3  (4+1+1)  <- tidak optimal
print(koin_dp([1, 3, 4], 6))       # 2  (3+3)    <- optimal
`,
      takeaway: 'Greedy cepat tapi tidak selalu benar. DP menyimpan jawaban untuk setiap nilai sehingga menjamin hasil optimal.',
      output: '3\n2'
    },
    howItWorksTitle: 'Langkah Merancang Solusi DP',
    howItWorks: [
      { title: '1. Definisikan sub-masalah', description: 'Tentukan arti dp[x], misalnya "jumlah koin minimum untuk membentuk nilai x".' },
      { title: '2. Tentukan hubungan antar sub-masalah', description: 'dp[x] = 1 + min(dp[x - koin]) untuk setiap koin yang muat.' },
      { title: '3. Tentukan kasus dasar', description: 'dp[0] = 0 karena tidak butuh koin untuk nilai nol.' },
      { title: '4. Isi dari kecil ke besar', description: 'Hitung dp[1], dp[2], dan seterusnya sampai dp[total]. Tiap nilai dihitung sekali.' }
    ],
    moreExamples: [
      {
        language: 'python',
        title: 'Cara Naik Tangga (DP Bottom-up)',
        code: c`
def cara_naik(n):
    if n <= 2:
        return n
    sebelum, sekarang = 1, 2
    for _ in range(3, n + 1):
        sebelum, sekarang = sekarang, sebelum + sekarang
    return sekarang

print(cara_naik(5))    # 8
print(cara_naik(50))   # 20365011074
`,
        takeaway: 'Banyak DP bisa dihemat memorinya: cukup simpan dua nilai terakhir, tidak perlu seluruh tabel.',
        output: '8\n20365011074'
      },
      {
        language: 'python',
        title: 'Greedy yang Benar: Penjadwalan Aktivitas',
        code: c`
def jadwal_maksimal(aktivitas):
    # urutkan berdasarkan waktu selesai paling awal
    aktivitas.sort(key=lambda a: a[1])
    terpilih, akhir = [], 0
    for mulai, selesai in aktivitas:
        if mulai >= akhir:
            terpilih.append((mulai, selesai))
            akhir = selesai
    return terpilih

print(jadwal_maksimal([(1, 4), (3, 5), (0, 6), (5, 7), (8, 9), (5, 9)]))
`,
        takeaway: 'Untuk penjadwalan aktivitas, memilih yang selesai paling awal terbukti optimal. Greedy benar jika ada bukti, bukan asumsi.',
        output: '[(1, 4), (5, 7), (8, 9)]'
      }
    ],
    vibeWarnings: [
      {
        severity: 'warning',
        title: 'Solusi greedy yang terlihat meyakinkan tapi salah',
        problem: 'AI sering menawarkan greedy karena singkat. Pada banyak kasus (kembalian, ransel) hasilnya tidak optimal.',
        fix: 'Uji dengan contoh kecil dan bandingkan dengan brute force. Jika tidak ada bukti greedy valid, pakai DP.'
      },
      {
        severity: 'info',
        title: 'Cache memoization tumbuh tanpa batas',
        problem: 'Menyimpan hasil untuk setiap input unik dapat menghabiskan memori pada server yang berjalan lama.',
        fix: 'Batasi ukuran cache (misal lru_cache(maxsize=1000)) atau pakai TTL.'
      }
    ],
    quiz: {
      question: 'Pada koin {1, 3, 4} dengan total 6, kenapa greedy memberikan hasil tidak optimal?',
      options: ['Greedy selalu salah', 'Memilih koin terbesar di awal (4) menghalangi kombinasi terbaik 3+3', 'Koin 1 tidak valid', 'Totalnya terlalu kecil'],
      correctIndex: 1,
      explanation: 'Greedy mengunci pilihan lokal terbaik (4) dan tidak bisa menengok kembali, padahal 3+3 hanya butuh 2 koin.'
    },
    moreQuizzes: [
      {
        question: 'Ciri utama masalah yang cocok diselesaikan dengan DP adalah...',
        options: ['Tidak punya sub-masalah', 'Sub-masalah tumpang tindih dan bisa disimpan hasilnya', 'Selalu butuh sorting', 'Input selalu string'],
        correctIndex: 1,
        explanation: 'DP efektif jika sub-masalah yang sama muncul berulang kali sehingga hasilnya layak disimpan.'
      },
      {
        question: 'Perbedaan top-down dan bottom-up pada DP adalah...',
        options: ['Top-down pakai rekursi + memoization, bottom-up mengisi tabel dari kasus kecil', 'Tidak ada beda', 'Top-down hanya untuk graph', 'Bottom-up tidak memakai tabel'],
        correctIndex: 0,
        explanation: 'Keduanya menyimpan hasil sub-masalah, bedanya arah pengerjaannya.'
      }
    ]
  }
];
