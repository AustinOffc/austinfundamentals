import type { ModuleItem } from './types';
import { c } from './helpers';

export const DASAR_MODULES: ModuleItem[] = [
  {
    id: 10,
    track: 'dasar',
    stage: 1,
    stageLabel: 'Tahap 1: Kenali Cara Kerja Komputer',
    level: 'Pemula',
    title: 'Cara Komputer & Program Bekerja',
    subtitle: 'Pahami apa yang sebenarnya terjadi saat kode kamu dijalankan.',
    accentColor: 'from-cyan-400 to-blue-500',
    iconName: 'Cpu',
    analogyTitle: 'Analogi Dapur Restoran',
    analogyContent:
      'Komputer itu seperti dapur restoran. CPU adalah koki yang mengerjakan instruksi satu per satu. RAM adalah meja kerja koki: cepat dijangkau tapi sempit dan dibersihkan saat tutup. Storage (SSD/HDD) adalah gudang bahan: luas dan permanen tapi lebih lambat diambil. Program adalah resep, sedangkan sistem operasi adalah manajer yang mengatur siapa boleh memakai kompor dan meja. Kode yang kamu tulis hanyalah resep, dan tanpa koki serta dapur yang benar resep itu tidak jadi makanan.',
    whyItMatters:
      'Vibe coder sering menjalankan kode atau perintah terminal dari AI tanpa tahu efeknya. Kalau kamu paham bahwa perintah itu dieksekusi langsung oleh sistem operasi dengan hak aksesmu, kamu akan berpikir dua kali sebelum menjalankan sesuatu yang tidak kamu mengerti.',
    subTopics: [
      { id: 'm10-1', title: 'CPU, RAM, dan Storage', casualExplanation: 'CPU mengeksekusi instruksi, RAM menyimpan data sementara yang sedang dipakai, storage menyimpan data permanen. Variabel hidup di RAM dan hilang saat program berhenti.' },
      { id: 'm10-2', title: 'Source code, compiler, dan interpreter', casualExplanation: 'Komputer hanya mengerti kode mesin (0 dan 1). Compiler menerjemahkan seluruh kode sekaligus (C, Go, Rust), interpreter menerjemahkan sambil jalan (Python, JavaScript).' },
      { id: 'm10-3', title: 'Sistem operasi, proses, dan file', casualExplanation: 'OS memuat program ke RAM sebagai proses, mengatur izin akses file, dan membagi waktu CPU ke banyak proses sekaligus.' },
      { id: 'm10-4', title: 'Terminal dan command line', casualExplanation: 'Cara mengontrol komputer lewat teks. Perintah seperti cd, ls, mkdir, dan cat adalah dasar yang dipakai setiap developer setiap hari.' },
      { id: 'm10-5', title: 'Input, proses, output', casualExplanation: 'Setiap program, sebesar apa pun, pada dasarnya menerima input, memprosesnya, lalu menghasilkan output (layar, file, atau jaringan).' }
    ],
    codeSnippet: {
      language: 'python',
      title: 'Program Paling Dasar: Input, Proses, Output',
      code: c`
nama = input("Siapa namamu? ")       # INPUT dari keyboard
panjang = len(nama)                   # PROSES di CPU, data tersimpan di RAM
print("Halo", nama)                   # OUTPUT ke layar
print("Namamu punya", panjang, "huruf")
`,
      takeaway: 'Semua program mengikuti pola yang sama. Variabel nama dan panjang disimpan di RAM, jadi begitu program selesai nilainya hilang.',
      output: 'Siapa namamu? Austi\nHalo Austi\nNamamu punya 5 huruf'
    },
    howItWorksTitle: 'Dari Kode Sampai Jadi Aksi di Layar',
    howItWorks: [
      { title: '1. Kamu menulis source code', description: 'File teks biasa (app.py, index.js). Komputer belum bisa langsung menjalankannya.' },
      { title: '2. Diterjemahkan', description: 'Compiler membuat file executable sekali jalan, atau interpreter membaca dan mengeksekusi baris demi baris.' },
      { title: '3. OS memuat ke RAM', description: 'Sistem operasi membuat proses baru, mengalokasikan memori, dan memberikan izin sesuai akun yang menjalankan.' },
      { title: '4. CPU menjalankan instruksi', description: 'Siklus fetch, decode, execute berulang miliaran kali per detik: ambil instruksi, pahami, kerjakan.' },
      { title: '5. Hasil keluar', description: 'Output ditulis ke layar, file, database, atau dikirim lewat jaringan. Saat selesai, memori proses dibersihkan OS.' }
    ],
    moreExamples: [
      {
        language: 'bash',
        title: 'Perintah Terminal yang Wajib Dikenal',
        code: c`
pwd                      # di folder mana aku sekarang?
ls -la                   # lihat isi folder (termasuk file tersembunyi)
mkdir proyek-baru        # buat folder
cd proyek-baru           # masuk ke folder
echo "print('hai')" > app.py   # tulis teks ke file
cat app.py               # tampilkan isi file
python3 app.py           # jalankan program
`,
        takeaway: 'Terminal tidak menanyakan "yakin?" untuk kebanyakan perintah. Apa yang kamu ketik langsung dieksekusi dengan hak aksesmu.',
        output: '/home/austi\n...\nhai'
      }
    ],
    vibeWarnings: [
      {
        severity: 'danger',
        title: 'Menjalankan perintah terminal dari AI tanpa dibaca',
        problem: 'Perintah seperti curl ... | bash, sudo rm -rf, atau chmod 777 dapat menghapus data atau membuka akses server. Terminal tidak meminta konfirmasi.',
        fix: 'Baca tiap bagian perintah, cari tahu arti flag yang tidak kamu kenal, dan coba dulu di folder/VM percobaan. Jangan pernah menjalankan sudo dari AI jika belum paham tujuannya.'
      },
      {
        severity: 'warning',
        title: 'Menyimpan data penting hanya di variabel',
        problem: 'Variabel hidup di RAM. Saat server restart atau proses crash, semua data hilang. Ini sering terjadi pada bot buatan AI yang menyimpan saldo atau order di array.',
        fix: 'Simpan data penting di database atau file (storage), bukan hanya di variabel.'
      }
    ],
    quiz: {
      question: 'Di mana nilai sebuah variabel biasanya disimpan saat program sedang berjalan?',
      options: ['Di RAM', 'Di monitor', 'Di dalam kabel listrik', 'Di dalam file source code selamanya'],
      correctIndex: 0,
      explanation: 'Variabel disimpan sementara di RAM. Saat program berhenti, RAM proses itu dibersihkan sehingga nilai variabel hilang.'
    },
    moreQuizzes: [
      {
        question: 'Apa perbedaan utama compiler dan interpreter?',
        options: [
          'Compiler menerjemahkan seluruh program sebelum dijalankan, interpreter menerjemahkan sambil dijalankan',
          'Compiler hanya untuk game, interpreter hanya untuk web',
          'Interpreter selalu lebih cepat',
          'Tidak ada perbedaan'
        ],
        correctIndex: 0,
        explanation: 'Compiler menghasilkan executable lebih dulu (misal C, Go, Rust). Interpreter membaca dan mengeksekusi kode langsung (misal Python, JavaScript).'
      },
      {
        question: 'AI memberimu perintah terminal yang diawali sudo rm -rf. Apa langkah paling tepat?',
        options: ['Langsung jalankan karena AI pasti benar', 'Pahami dulu arti tiap bagian, lalu uji di folder percobaan', 'Tambahkan chmod 777 agar lancar', 'Abaikan semua peringatan'],
        correctIndex: 1,
        explanation: 'rm -rf menghapus file secara permanen tanpa konfirmasi. Selalu pahami dan uji perintah berbahaya di lingkungan aman lebih dulu.'
      }
    ]
  },
  {
    id: 11,
    track: 'dasar',
    stage: 2,
    stageLabel: 'Tahap 2: Kuasai Logika Dasar',
    level: 'Pemula',
    title: 'Variabel, Tipe Data & Operator',
    subtitle: 'Bahan baku semua program: menyimpan nilai dan mengoperasikannya dengan benar.',
    accentColor: 'from-sky-400 to-indigo-500',
    iconName: 'Variable',
    analogyTitle: 'Analogi Toples Berlabel',
    analogyContent:
      'Variabel itu seperti toples berlabel di dapur. Label (nama variabel) memberi tahu isinya, dan isi (nilai) boleh diganti. Tipe data adalah jenis isi toples: toples garam tidak boleh diisi air. Operator adalah aksi yang kamu lakukan pada isi toples, misalnya menimbang, mencampur, atau membandingkan. Kalau kamu mencampur toples "angka" dengan toples "teks", hasilnya bisa aneh dan itu sumber bug yang sangat umum.',
    whyItMatters:
      'Banyak bug dan celah keamanan lahir dari salah tipe data: uang disimpan sebagai float, input pengguna dipercaya sebagai angka, atau perbandingan longgar yang meloloskan login. Memahami tipe data membuatmu bisa melihat masalah itu dalam kode AI.',
    subTopics: [
      { id: 'm11-1', title: 'Variabel dan konstanta', casualExplanation: 'Variabel adalah nama untuk nilai yang bisa berubah. Konstanta adalah nama untuk nilai yang tidak boleh berubah (const di JavaScript, huruf kapital di Python).' },
      { id: 'm11-2', title: 'Tipe data dasar', casualExplanation: 'Integer (bilangan bulat), float (desimal), string (teks), boolean (true/false), dan null/None (kosong). Tiap tipe punya aturan operasinya sendiri.' },
      { id: 'm11-3', title: 'Operator aritmatika, perbandingan, dan logika', casualExplanation: '+ - * / % untuk hitung, == != < > untuk membandingkan, dan and/or/not (atau && || !) untuk menggabungkan kondisi.' },
      { id: 'm11-4', title: 'Konversi tipe dan jebakannya', casualExplanation: 'Mengubah "5" menjadi 5 harus eksplisit. Hati-hati dengan float seperti 0.1 + 0.2 yang tidak persis 0.3.' },
      { id: 'm11-5', title: 'Scope variabel', casualExplanation: 'Variabel hanya terlihat di area tertentu (di dalam fungsi, blok, atau global). Variabel global yang dipakai di mana-mana adalah sumber bug yang sulit dilacak.' }
    ],
    codeSnippet: {
      language: 'python',
      title: 'Tipe Data dan Operator di Python',
      code: c`
nama = "Austi"          # str
umur = 25                # int
tinggi = 1.7             # float
aktif = True             # bool
kosong = None            # kosong

print(type(umur), type(tinggi))
print(umur // 2, umur % 2)         # bagi bulat dan sisa bagi
print(umur >= 17 and aktif)        # kondisi gabungan
print("5" + "5", int("5") + 5)     # string digabung, angka dijumlah
`,
      takeaway: 'Tanda + berperilaku berbeda tergantung tipe datanya. Selalu tahu tipe variabelmu sebelum mengoperasikannya.',
      output: "<class 'int'> <class 'float'>\n12 1\nTrue\n55 10"
    },
    howItWorksTitle: 'Apa yang Terjadi Saat Kamu Menulis umur = 25',
    howItWorks: [
      { title: '1. Nilai dibuat di memori', description: 'Komputer menyiapkan ruang di RAM dan menyimpan angka 25 sebagai bilangan bulat.' },
      { title: '2. Nama dihubungkan ke nilai', description: 'Nama umur dicatat sebagai petunjuk (reference) ke lokasi nilai tersebut.' },
      { title: '3. Ekspresi dievaluasi', description: 'Saat menulis umur + 1, nilai diambil lewat nama, dihitung sesuai tipe, lalu hasil baru dibuat.' },
      { title: '4. Tipe menentukan aturan', description: 'Angka + angka berarti penjumlahan, teks + teks berarti penggabungan. Campuran bisa error atau dikonversi diam-diam (JavaScript).' }
    ],
    moreExamples: [
      {
        language: 'javascript',
        title: 'Jebakan Tipe Data di JavaScript',
        code: c`
console.log("5" + 3);          // "53"  (digabung jadi teks)
console.log("5" - 3);          // 2     (diubah jadi angka)
console.log(0.1 + 0.2);        // 0.30000000000000004
console.log(0 == "");          // true  (perbandingan longgar!)
console.log(0 === "");         // false (perbandingan ketat)

// Uang: simpan dalam satuan terkecil (sen/rupiah utuh), bukan float
const hargaRupiah = 15000;
const diskon = Math.round(hargaRupiah * 0.1);
console.log(hargaRupiah - diskon);
`,
        takeaway: 'Gunakan === bukan ==, dan jangan pernah memakai float untuk uang. Simpan sebagai integer atau pakai library desimal.',
        output: '53\n2\n0.30000000000000004\ntrue\nfalse\n13500'
      }
    ],
    vibeWarnings: [
      {
        severity: 'danger',
        title: 'Memakai == longgar untuk pengecekan keamanan',
        problem: 'Di JavaScript dan PHP, perbandingan longgar bisa meloloskan nilai yang seharusnya ditolak (contoh: 0 == "abc" di PHP lama, atau "0" == false). Ini pernah menjadi celah bypass login.',
        fix: 'Pakai === (JavaScript) atau hash_equals / perbandingan ketat (PHP) untuk token, password hash, dan ID.'
      },
      {
        severity: 'warning',
        title: 'Saldo atau harga disimpan sebagai float',
        problem: 'Float punya galat pembulatan. Hitungan saldo, diskon, atau fee bisa meleset sedikit, lalu menumpuk menjadi selisih uang sungguhan.',
        fix: 'Simpan uang sebagai integer (rupiah/sen) atau tipe Decimal, dan bulatkan secara eksplisit.'
      }
    ],
    quiz: {
      question: 'Berapa hasil dari "5" + 3 di JavaScript?',
      options: ['8', '"53"', 'Error', 'undefined'],
      correctIndex: 1,
      explanation: 'JavaScript mengubah angka 3 menjadi teks lalu menggabungkannya, sehingga hasilnya string "53". Inilah contoh konversi tipe diam-diam.'
    },
    moreQuizzes: [
      {
        question: 'Cara paling aman menyimpan nominal uang dalam program adalah...',
        options: ['Float agar ada koma', 'Integer dalam satuan terkecil atau tipe Decimal', 'String bebas', 'Variabel global'],
        correctIndex: 1,
        explanation: 'Integer atau Decimal menghindari galat pembulatan float sehingga perhitungan uang tetap akurat.'
      },
      {
        question: 'Mana perbandingan yang lebih aman di JavaScript?',
        options: ['a == b', 'a === b', 'a = b', 'a => b'],
        correctIndex: 1,
        explanation: '=== membandingkan nilai sekaligus tipe tanpa konversi diam-diam, sehingga lebih bisa diprediksi dan aman.'
      }
    ]
  },
  {
    id: 12,
    track: 'dasar',
    stage: 2,
    stageLabel: 'Tahap 2: Kuasai Logika Dasar',
    level: 'Pemula',
    title: 'Percabangan, Perulangan & Fungsi',
    subtitle: 'Alur kendali program: memilih jalan, mengulang pekerjaan, dan membungkus logika.',
    accentColor: 'from-indigo-400 to-purple-500',
    iconName: 'GitBranch',
    analogyTitle: 'Analogi Resep dan Persimpangan Jalan',
    analogyContent:
      'Percabangan (if/else) adalah persimpangan: kalau hujan bawa payung, kalau tidak pakai topi. Perulangan (loop) adalah mengaduk adonan sampai tiga puluh kali, atau sampai tekstur pas. Fungsi adalah resep dasar yang bisa dipanggil berkali-kali, misalnya "bikin saus" dipakai oleh banyak menu. Dengan tiga alat ini, program bisa memutuskan, mengulang, dan memakai ulang logika tanpa menulis kode yang sama berulang-ulang.',
    whyItMatters:
      'Kode buatan AI biasanya penuh if bersarang, loop, dan fungsi. Kalau kamu bisa membaca alurnya, kamu bisa menemukan kondisi yang terlewat (edge case), loop tanpa ujung, atau fungsi yang percaya begitu saja pada input pengguna.',
    subTopics: [
      { id: 'm12-1', title: 'if, else if, else', casualExplanation: 'Program memilih satu jalur berdasarkan kondisi true/false. Urutan kondisi penting karena yang pertama cocok akan dieksekusi.' },
      { id: 'm12-2', title: 'for dan while loop', casualExplanation: 'for dipakai kalau jumlah pengulangan diketahui, while dipakai selama kondisi masih benar. Selalu pastikan ada cara untuk berhenti.' },
      { id: 'm12-3', title: 'break, continue, dan off-by-one', casualExplanation: 'break menghentikan loop, continue melompati satu putaran. Off-by-one adalah salah hitung batas awal/akhir yang jadi bug klasik.' },
      { id: 'm12-4', title: 'Fungsi, parameter, dan return', casualExplanation: 'Fungsi menerima input (parameter), mengerjakan sesuatu, lalu mengembalikan hasil (return). Satu fungsi sebaiknya satu tugas.' },
      { id: 'm12-5', title: 'Validasi input dan edge case', casualExplanation: 'Selalu tanyakan: bagaimana kalau kosong, negatif, sangat besar, atau tipenya salah? Di sinilah banyak bug dan celah keamanan bersembunyi.' }
    ],
    codeSnippet: {
      language: 'python',
      title: 'FizzBuzz: if + loop dalam satu contoh',
      code: c`
for angka in range(1, 16):
    if angka % 15 == 0:
        print("FizzBuzz")
    elif angka % 3 == 0:
        print("Fizz")
    elif angka % 5 == 0:
        print("Buzz")
    else:
        print(angka)
`,
      takeaway: 'Urutan if penting: kondisi paling spesifik (kelipatan 15) harus dicek lebih dulu, kalau tidak "FizzBuzz" tidak akan pernah muncul.',
      output: '1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz'
    },
    howItWorksTitle: 'Bagaimana Loop dan Fungsi Dijalankan',
    howItWorks: [
      { title: '1. Cek kondisi', description: 'Pada while/for, kondisi dicek sebelum tiap putaran. Jika false, loop berhenti.' },
      { title: '2. Jalankan isi blok', description: 'Seluruh baris di dalam blok dikerjakan berurutan dari atas ke bawah.' },
      { title: '3. Perbarui penghitung', description: 'for memperbarui otomatis. Di while kamu wajib mengubah variabel sendiri, kalau lupa jadilah infinite loop.' },
      { title: '4. Pemanggilan fungsi', description: 'Saat fungsi dipanggil, argumen disalin ke parameter, blok fungsi dijalankan di call stack, lalu return mengembalikan nilai ke pemanggil.' }
    ],
    moreExamples: [
      {
        language: 'python',
        title: 'Fungsi dengan Validasi Input',
        code: c`
def hitung_diskon(harga, persen):
    if not isinstance(harga, (int, float)) or harga < 0:
        raise ValueError("Harga harus angka >= 0")
    if not 0 <= persen <= 100:
        raise ValueError("Persen harus 0 sampai 100")
    return harga - (harga * persen / 100)

print(hitung_diskon(100000, 10))      # 90000.0
print(hitung_diskon(100000, 150))     # ValueError
`,
        takeaway: 'Fungsi yang baik tidak mempercayai input. Tanpa validasi, diskon 150% akan menghasilkan harga negatif, yaitu bug bisnis sekaligus celah penyalahgunaan.',
        output: '90000.0\nValueError: Persen harus 0 sampai 100'
      },
      {
        language: 'javascript',
        title: 'Loop yang Sama di JavaScript',
        code: c`
for (let i = 1; i <= 5; i++) {
  console.log(i % 2 === 0 ? i + " genap" : i + " ganjil");
}

let percobaan = 0;
while (percobaan < 3) {
  console.log("Percobaan ke-" + (percobaan + 1));
  percobaan++;           // jangan lupa! tanpa ini loop tidak akan berhenti
}
`,
        takeaway: 'Konsepnya sama di semua bahasa, hanya sintaksnya yang berbeda. Kalau paham logikanya, pindah bahasa jadi mudah.',
        output: '1 ganjil\n2 genap\n...\nPercobaan ke-3'
      }
    ],
    vibeWarnings: [
      {
        severity: 'warning',
        title: 'Fungsi yang percaya penuh pada input',
        problem: 'AI sering menulis fungsi yang langsung memakai parameter tanpa validasi. Input negatif, kosong, atau tipe salah dapat memicu crash atau penyalahgunaan (misal transfer saldo negatif).',
        fix: 'Tambahkan pengecekan tipe, rentang, dan panjang di awal fungsi, lalu tolak input yang tidak valid dengan error jelas.'
      },
      {
        severity: 'warning',
        title: 'Infinite loop dan off-by-one',
        problem: 'Loop while tanpa perubahan kondisi atau batas range yang meleset satu angka dapat membuat server hang atau data terlewat.',
        fix: 'Uji dengan 0, 1, dan banyak data. Pastikan setiap while punya jalur untuk berhenti.'
      },
      {
        severity: 'info',
        title: 'If bersarang terlalu dalam',
        problem: 'Kode AI sering memiliki 5 level if. Sulit dibaca dan mudah menyembunyikan kondisi yang terlewat.',
        fix: 'Gunakan early return (tolak kasus buruk di awal) agar alur utama tetap rata dan jelas.'
      }
    ],
    quiz: {
      question: 'Pada FizzBuzz, kenapa kondisi kelipatan 15 harus dicek sebelum kelipatan 3 dan 5?',
      options: [
        'Karena angka 15 lebih besar',
        'Karena if/elif memakai cabang pertama yang cocok, jadi kondisi spesifik harus lebih dulu',
        'Supaya lebih cepat saja, tidak ada pengaruh pada hasil',
        'Karena Python mewajibkannya'
      ],
      correctIndex: 1,
      explanation: 'Cabang pertama yang benar akan dieksekusi dan sisanya dilewati. Jika kelipatan 3 dicek lebih dulu, angka 15 akan berhenti di "Fizz".'
    },
    moreQuizzes: [
      {
        question: 'Apa penyebab paling umum infinite loop pada while?',
        options: ['Variabel dalam kondisi tidak pernah diubah', 'Terlalu banyak komentar', 'Nama variabel terlalu panjang', 'Memakai tab'],
        correctIndex: 0,
        explanation: 'Jika nilai yang dicek kondisi tidak berubah di dalam loop, kondisinya selalu benar dan loop tidak pernah berhenti.'
      },
      {
        question: 'Manakah praktik fungsi yang baik?',
        options: ['Satu fungsi mengerjakan banyak hal sekaligus', 'Satu fungsi satu tugas dan memvalidasi inputnya', 'Semua logika dalam satu fungsi raksasa', 'Fungsi tanpa return agar singkat'],
        correctIndex: 1,
        explanation: 'Fungsi kecil dengan satu tugas lebih mudah dibaca, diuji, dan diperiksa keamanannya.'
      }
    ]
  },
  {
    id: 13,
    track: 'dasar',
    stage: 3,
    stageLabel: 'Tahap 3: Olah Data',
    level: 'Pemula',
    title: 'Struktur Data Dasar',
    subtitle: 'Array, dictionary, set, stack, dan queue: wadah yang tepat untuk setiap jenis data.',
    accentColor: 'from-violet-400 to-fuchsia-500',
    iconName: 'Boxes',
    analogyTitle: 'Analogi Perabot Penyimpanan',
    analogyContent:
      'List/array adalah rak buku bernomor: ambil buku ke-3 dengan cepat, tapi mencari judul tertentu harus menyisir satu per satu. Dictionary/object adalah lemari dengan label: sebut labelnya, langsung dapat isinya. Set adalah kotak yang menolak barang kembar. Stack adalah tumpukan piring (terakhir masuk, pertama keluar). Queue adalah antrean kasir (pertama masuk, pertama dilayani). Memilih perabot yang tepat membuat program cepat dan rapi.',
    whyItMatters:
      'AI sering memakai list untuk semua hal, padahal pencarian di list besar lambat. Kamu perlu tahu kapan harus memakai dictionary atau set, dan kenapa salah menyalin (copy vs reference) bisa mengubah data yang tidak seharusnya.',
    subTopics: [
      { id: 'm13-1', title: 'Array / List', casualExplanation: 'Kumpulan nilai berurutan dengan indeks mulai dari 0. Cepat diakses lewat indeks, lambat untuk dicari berdasarkan nilai.' },
      { id: 'm13-2', title: 'Dictionary / Object / Map', casualExplanation: 'Pasangan key dan value. Pencarian berdasarkan key sangat cepat dan cocok untuk data berlabel seperti profil user.' },
      { id: 'm13-3', title: 'Set dan Tuple', casualExplanation: 'Set menyimpan nilai unik tanpa urutan dan cepat untuk cek keanggotaan. Tuple adalah daftar yang tidak bisa diubah.' },
      { id: 'm13-4', title: 'Stack dan Queue', casualExplanation: 'Stack LIFO (undo, call stack), queue FIFO (antrean job, antrean order).' },
      { id: 'm13-5', title: 'Copy vs reference', casualExplanation: 'Menyalin variabel list tidak menyalin isinya, hanya menunjuk ke list yang sama. Mengubah satu bisa mengubah yang lain.' }
    ],
    codeSnippet: {
      language: 'python',
      title: 'List, Dictionary, dan Set Beraksi',
      code: c`
produk = ["kopi", "teh", "susu", "kopi"]       # list: boleh duplikat
unik = set(produk)                             # set: otomatis unik
harga = {"kopi": 15000, "teh": 8000}           # dict: key -> value

print(produk[0], len(produk))        # akses via indeks
print(unik)                          # {'kopi', 'teh', 'susu'}
print(harga["kopi"])                 # akses via key, cepat
print("susu" in harga)               # cek key: False
print(harga.get("susu", 0))          # aman: default 0 bila tidak ada
`,
      takeaway: 'Gunakan .get() atau cek keberadaan key lebih dulu agar program tidak crash saat key tidak ada.',
      output: 'kopi 4\n{"kopi", "teh", "susu"}\n15000\nFalse\n0'
    },
    howItWorksTitle: 'Kenapa Dictionary Lebih Cepat dari List untuk Mencari',
    howItWorks: [
      { title: '1. List dicari satu per satu', description: 'Untuk mengecek "susu" di list 1 juta item, program bisa memeriksa hingga 1 juta elemen (O(n)).' },
      { title: '2. Dictionary memakai hash', description: 'Key diubah menjadi angka (hash) yang langsung menunjuk ke posisi penyimpanan.' },
      { title: '3. Lompat langsung ke lokasi', description: 'Program tidak menyisir data, jadi waktu pencarian hampir konstan (O(1)) walau datanya jutaan.' },
      { title: '4. Konsekuensinya', description: 'Key harus unik dan tidak berubah (hashable). Urutan dan penggunaan memori menjadi tradeoff.' }
    ],
    moreExamples: [
      {
        language: 'python',
        title: 'Stack dan Queue',
        code: c`
from collections import deque

# Stack (LIFO): terakhir masuk, pertama keluar
tumpukan = []
tumpukan.append("halaman1"); tumpukan.append("halaman2")
print(tumpukan.pop())                 # halaman2 (seperti tombol back)

# Queue (FIFO): pertama masuk, pertama keluar
antrean = deque()
antrean.append("order1"); antrean.append("order2")
print(antrean.popleft())              # order1 (dilayani duluan)
`,
        takeaway: 'Gunakan deque untuk queue karena popleft() cepat, sedangkan list.pop(0) lambat pada data besar.',
        output: 'halaman2\norder1'
      },
      {
        language: 'python',
        title: 'Jebakan Copy vs Reference',
        code: c`
a = [1, 2, 3]
b = a                  # BUKAN salinan, keduanya menunjuk list yang sama
b.append(99)
print(a)               # [1, 2, 3, 99]  <- a ikut berubah!

c = a.copy()           # salinan sungguhan
c.append(100)
print(a)               # tetap [1, 2, 3, 99]

def tambah(item, daftar=[]):     # JEBAKAN: default list dipakai bersama
    daftar.append(item)
    return daftar
print(tambah(1), tambah(2))      # [1, 2] [1, 2]
`,
        takeaway: 'Default argument berupa list/dict di Python dibuat sekali dan dipakai bersama semua pemanggilan. Pakai None lalu buat list baru di dalam fungsi.',
        output: '[1, 2, 3, 99]\n[1, 2, 3, 99]\n[1, 2] [1, 2]'
      }
    ],
    vibeWarnings: [
      {
        severity: 'warning',
        title: 'Cek keanggotaan memakai list pada data besar',
        problem: 'Kode AI sering memakai if x in daftar_list di dalam loop. Dengan 100.000 data, program bisa jutaan kali lebih lambat dari yang perlu.',
        fix: 'Ubah daftar yang sering dicari menjadi set atau dictionary.'
      },
      {
        severity: 'warning',
        title: 'Data user bercampur karena reference',
        problem: 'Variabel global list/dict yang dipakai bersama banyak request dapat membuat data satu user bocor ke user lain.',
        fix: 'Buat objek baru per request atau per user, dan hindari state global yang bisa diubah.'
      }
    ],
    quiz: {
      question: 'Struktur data mana yang paling cocok untuk mengecek "apakah username ini sudah dipakai?" pada jutaan user dengan cepat?',
      options: ['List biasa', 'Set atau Dictionary', 'String panjang', 'Stack'],
      correctIndex: 1,
      explanation: 'Set dan dictionary memakai hash sehingga pengecekan keanggotaan hampir langsung, tidak perlu menyisir seluruh data.'
    },
    moreQuizzes: [
      {
        question: 'Setelah b = a (a adalah list) lalu b.append(5), apa yang terjadi pada a?',
        options: ['Tidak berubah', 'Ikut berubah karena a dan b menunjuk list yang sama', 'Error', 'a menjadi kosong'],
        correctIndex: 1,
        explanation: 'Assignment pada list hanya menyalin referensi. Gunakan a.copy() jika ingin salinan terpisah.'
      },
      {
        question: 'Struktur data yang cocok untuk antrean job yang dilayani sesuai urutan datang adalah...',
        options: ['Stack', 'Queue', 'Set', 'Tuple'],
        correctIndex: 1,
        explanation: 'Queue bersifat FIFO: yang pertama masuk dilayani pertama.'
      }
    ]
  },
  {
    id: 14,
    track: 'dasar',
    stage: 4,
    stageLabel: 'Tahap 4: Baca, Uji, dan Lacak Kode',
    level: 'Junior',
    title: 'Debugging, Testing, Git & Membaca Kode',
    subtitle: 'Skill paling penting bagi vibe coder: memeriksa kode AI, menguji, dan bisa kembali jika salah.',
    accentColor: 'from-blue-400 to-cyan-500',
    iconName: 'Bug',
    analogyTitle: 'Analogi Dokter, Rekam Medis, dan Mesin Waktu',
    analogyContent:
      'Debugging itu seperti dokter yang mendiagnosis: baca gejala (pesan error), kumpulkan bukti, pasang hipotesis, lalu uji. Testing adalah pemeriksaan rutin supaya penyakit ketahuan sebelum parah. Git adalah mesin waktu dan rekam medis kode: setiap commit adalah save point, jadi saat AI mengubah sesuatu yang rusak, kamu bisa kembali ke kondisi sehat dalam hitungan detik.',
    whyItMatters:
      'Vibe coder yang tidak bisa membaca error hanya akan menempel pesan error ke AI berulang kali sampai kodenya makin kusut. Dengan debugging, test, dan Git, kamu tetap memegang kendali walau kode ditulis AI.',
    subTopics: [
      { id: 'm14-1', title: 'Membaca error dan stack trace', casualExplanation: 'Baca dari baris paling bawah (jenis error dan pesan) lalu telusuri ke atas untuk menemukan baris kode milikmu yang memicunya.' },
      { id: 'm14-2', title: 'Teknik debugging', casualExplanation: 'Reproduksi bug, persempit lokasinya dengan print/log atau debugger, ubah satu hal pada satu waktu, lalu verifikasi.' },
      { id: 'm14-3', title: 'Unit test dasar', casualExplanation: 'Kode kecil yang mengecek fungsi menghasilkan output yang benar. Sekali ditulis, bisa dijalankan ulang setiap kali kode diubah.' },
      { id: 'm14-4', title: 'Git: commit, branch, diff, revert', casualExplanation: 'Commit menyimpan titik aman, branch memisahkan percobaan, diff menunjukkan apa yang berubah, revert/restore membatalkan perubahan.' },
      { id: 'm14-5', title: 'Cara me-review kode AI', casualExplanation: 'Baca baris demi baris, jelaskan dengan kata-katamu sendiri, jalankan dengan input aneh, dan cek apa yang diubah lewat git diff.' }
    ],
    codeSnippet: {
      language: 'python',
      title: 'Membaca Stack Trace',
      code: c`
def ambil_harga(data, nama):
    return data[nama] * 2

katalog = {"kopi": 15000}
print(ambil_harga(katalog, "teh"))

# Traceback (most recent call last):
#   File "app.py", line 5, in <module>
#     print(ambil_harga(katalog, "teh"))
#   File "app.py", line 2, in ambil_harga
#     return data[nama] * 2
# KeyError: 'teh'
`,
      takeaway: 'Baca dari bawah: jenis error KeyError dan nilainya "teh". Lalu ke atas: terjadi di baris 2 saat key "teh" tidak ada di dictionary. Tidak perlu bertanya ke AI untuk diagnosis sederhana ini.',
      output: "KeyError: 'teh'"
    },
    howItWorksTitle: 'Alur Debugging yang Sistematis',
    howItWorks: [
      { title: '1. Reproduksi', description: 'Pastikan bug bisa diulang dengan langkah dan input yang sama. Bug yang tidak bisa diulang tidak bisa diperbaiki.' },
      { title: '2. Baca pesan error', description: 'Catat jenis error, file, dan nomor baris. Mulai menelusuri dari baris kodemu sendiri, bukan dari library.' },
      { title: '3. Persempit lokasi', description: 'Tambahkan print/log atau breakpoint untuk melihat nilai variabel di tiap tahap sampai ketemu titik nilai mulai salah.' },
      { title: '4. Perbaiki satu hal', description: 'Ubah satu hal pada satu waktu supaya kamu tahu perubahan mana yang berhasil.' },
      { title: '5. Tulis test dan commit', description: 'Buat test supaya bug tidak kembali, lalu commit dengan pesan jelas.' }
    ],
    moreExamples: [
      {
        language: 'python',
        title: 'Unit Test Sederhana',
        code: c`
def hitung_diskon(harga, persen):
    return harga - (harga * persen / 100)

def test_diskon_normal():
    assert hitung_diskon(100000, 10) == 90000

def test_diskon_nol():
    assert hitung_diskon(50000, 0) == 50000

def test_diskon_penuh():
    assert hitung_diskon(50000, 100) == 0

# Jalankan dengan: pytest
`,
        takeaway: 'Test adalah jaring pengaman. Saat AI mengubah fungsi, jalankan test untuk memastikan perilaku lama tidak rusak.',
        output: '3 passed in 0.01s'
      },
      {
        language: 'bash',
        title: 'Git: Alur Aman Saat Memakai AI',
        code: c`
git status                          # apa yang berubah?
git switch -c eksperimen-ai         # buat cabang khusus percobaan
# ... minta AI mengubah kode ...
git diff                            # PERIKSA perubahan baris demi baris
git add -p                          # pilih potongan perubahan yang kamu setujui
git commit -m "feat: tambah validasi input"

# Kalau hasilnya kacau:
git restore .                       # buang perubahan yang belum di-commit
git switch main                     # kembali ke cabang utama yang aman
`,
        takeaway: 'Jangan pernah membiarkan AI mengubah banyak file di cabang utama tanpa save point. git diff adalah cara tercepat mengetahui apa yang sebenarnya diubah AI.',
        output: 'Switched to a new branch eksperimen-ai'
      }
    ],
    vibeWarnings: [
      {
        severity: 'danger',
        title: 'Meng-commit file rahasia (.env) ke Git',
        problem: 'API key, token bot, dan password database yang masuk ke repository (apalagi publik) dapat dipakai orang lain dalam hitungan menit oleh bot pemindai.',
        fix: 'Masukkan .env ke .gitignore sebelum commit pertama. Jika sudah terlanjur, anggap secret bocor: ganti (rotate) semua key-nya.'
      },
      {
        severity: 'warning',
        title: 'AI menghapus atau melemahkan test agar lulus',
        problem: 'Saat test gagal, beberapa AI mengubah test-nya alih-alih memperbaiki bug.',
        fix: 'Periksa git diff pada folder test. Perubahan pada test harus kamu pahami dan setujui.'
      },
      {
        severity: 'info',
        title: 'Menempel error ke AI tanpa membacanya',
        problem: 'Siklus tempel error, tempel solusi, tempel error baru membuat kode makin kusut dan kamu tidak belajar apa pun.',
        fix: 'Baca error sendiri dulu, tulis hipotesismu, lalu minta AI membantu memverifikasinya.'
      }
    ],
    quiz: {
      question: 'Saat melihat stack trace Python, bagian mana yang pertama kali sebaiknya dibaca?',
      options: ['Baris paling atas saja', 'Baris paling bawah (jenis dan pesan error), lalu telusuri ke atas', 'Tidak perlu dibaca', 'Hanya nama file'],
      correctIndex: 1,
      explanation: 'Baris paling bawah berisi jenis dan pesan error. Dari sana kamu telusuri ke atas untuk menemukan baris kodemu yang memicunya.'
    },
    moreQuizzes: [
      {
        question: 'Sebelum meminta AI melakukan refactor besar, apa langkah paling aman?',
        options: ['Langsung minta saja', 'Buat commit atau branch baru sebagai save point', 'Hapus semua file lama', 'Matikan Git'],
        correctIndex: 1,
        explanation: 'Dengan commit atau branch, kamu bisa kembali ke kondisi sehat jika perubahan AI merusak sesuatu.'
      },
      {
        question: 'File .env berisi API key sebaiknya...',
        options: ['Di-commit ke GitHub agar tim bisa pakai', 'Dimasukkan ke .gitignore dan tidak pernah di-commit', 'Dikirim lewat chat publik', 'Ditulis langsung di dalam kode'],
        correctIndex: 1,
        explanation: 'Secret tidak boleh masuk ke repository. Gunakan .gitignore dan environment variable di server.'
      }
    ]
  }
];
