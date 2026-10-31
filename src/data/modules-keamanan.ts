import type { ModuleItem } from './types';
import { c } from './helpers';

export const KEAMANAN_MODULES: ModuleItem[] = [
  {
    id: 25,
    track: 'keamanan',
    stage: 1,
    stageLabel: 'Tahap 1: Sadari Risiko Vibe Coding',
    level: 'Pemula',
    title: 'Risiko Vibe Coding & Cara Review Kode AI',
    subtitle: 'Kode yang jalan belum tentu aman. Pelajari cara memeriksa kode AI sebelum dipakai.',
    accentColor: 'from-rose-400 to-red-500',
    iconName: 'ShieldAlert',
    analogyTitle: 'Analogi Tukang Bangunan yang Sangat Cepat',
    analogyContent:
      'Bayangkan kamu menyewa tukang yang membangun rumah dalam satu hari. Rumahnya berdiri dan lampu menyala, tapi kamu tidak bertanya apakah pondasinya kuat, kabelnya aman, dan pintunya punya kunci. Vibe coding tanpa paham kode itu sama: aplikasi tampak jalan, tapi tidak ada yang tahu apakah ada pintu belakang yang terbuka. Tukang secepat apa pun tetap butuh pemilik rumah yang paham cara memeriksa hasil kerjanya.',
    whyItMatters:
      'AI dilatih untuk menghasilkan kode yang berjalan dan terlihat masuk akal, bukan kode yang pasti aman. Ia tidak tahu konteks bisnismu, sering mengambil jalan pintas (secret ditulis langsung, input dipercaya, tanpa validasi), dan bisa membuat kode yang terlihat profesional namun rentan. Karena kamu yang menjalankan dan bertanggung jawab atas datanya, kamu harus bisa memeriksanya.',
    subTopics: [
      { id: 'm25-1', title: 'Apa itu vibe coding dan di mana risikonya', casualExplanation: 'Membuat aplikasi dengan menyuruh AI menulis kode dan menerima hasilnya berdasarkan "rasanya jalan". Risikonya: kamu menjalankan kode yang tidak kamu pahami di server dengan data nyata.' },
      { id: 'm25-2', title: 'Kenapa kode AI sering tidak aman', casualExplanation: 'AI meniru pola dari kode publik (termasuk yang jelek), fokus pada happy path, tidak melihat seluruh sistem, dan sering menyederhanakan keamanan demi contoh singkat.' },
      { id: 'm25-3', title: 'Prinsip dasar keamanan', casualExplanation: 'Jangan percaya input apa pun, beri akses sekecil mungkin (least privilege), lapisi pertahanan (defense in depth), dan gagal dengan aman.' },
      { id: 'm25-4', title: 'OWASP Top 10 sekilas', casualExplanation: 'Daftar risiko aplikasi web paling umum: broken access control, injection, kegagalan kriptografi, desain tidak aman, konfigurasi salah, komponen usang, dan seterusnya.' },
      { id: 'm25-5', title: 'Checklist review kode AI', casualExplanation: 'Rutinitas tetap sebelum menerima kode: pahami, telusuri input, cek secret, cek izin, uji kasus aneh, pindai otomatis, lalu commit kecil.' }
    ],
    codeSnippet: {
      language: 'javascript',
      title: 'Kode AI yang "Jalan" tapi Penuh Masalah',
      code: c`
const express = require("express");
const mysql = require("mysql2");
const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost", user: "root", password: "admin123", database: "toko"   // (1)
});
const JWT_SECRET = "rahasia";                                                  // (2)

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const sql = ‵SELECT * FROM users WHERE email = '¤{email}' AND password = '¤{password}'‵;  // (3)(4)
  db.query(sql, (err, rows) => {
    if (err) return res.status(500).send(err.stack);                            // (5)
    if (rows.length === 0) return res.status(401).send("Salah");
    res.json({ token: JWT_SECRET + rows[0].id, user: rows[0] });                // (6)
  });
});
app.listen(3000);
`,
      takeaway: 'Ada 6 masalah serius: (1) kredensial database root ditulis langsung, (2) secret tertanam di kode, (3) SQL injection, (4) password disimpan/dibandingkan sebagai teks biasa, (5) stack trace bocor ke klien, (6) token buatan sendiri yang bisa ditebak dan mengembalikan seluruh data user termasuk password. Semua baris ini tampak "normal" kalau kamu tidak tahu apa yang dicari.',
      output: 'Login berhasil dengan akun valid, tetapi siapa pun bisa masuk tanpa password dengan input tertentu.'
    },
    howItWorksTitle: 'Alur Review Kode AI Sebelum Dipakai',
    howItWorks: [
      { title: '1. Pahami dulu, jelaskan dengan kata sendiri', description: 'Baca kode per bagian. Jika ada baris yang tidak kamu mengerti, minta AI menjelaskannya, lalu cocokkan dengan dokumentasi resmi.' },
      { title: '2. Telusuri semua pintu masuk data', description: 'Cari req.body, req.query, req.params, header, file upload, dan webhook. Semuanya adalah input tidak tepercaya.' },
      { title: '3. Telusuri semua tempat data sensitif', description: 'Cari password, token, API key, data pribadi, dan saldo. Pastikan tidak tertulis di kode, tidak masuk log, dan tidak dikirim berlebihan ke klien.' },
      { title: '4. Periksa izin dan akses', description: 'Untuk tiap endpoint tanyakan: siapa yang boleh memanggilnya, dan apakah itu benar-benar dicek di server?' },
      { title: '5. Uji dengan input aneh dan pindai otomatis', description: 'Coba kosong, sangat panjang, karakter khusus, dan data milik user lain. Jalankan npm audit dan pemindai secret.' },
      { title: '6. Commit kecil', description: 'Terima perubahan sedikit demi sedikit lewat git diff supaya mudah ditelusuri dan dibatalkan.' }
    ],
    moreExamples: [
      {
        language: 'text',
        title: 'Prompt Biasa vs Prompt yang Mengutamakan Keamanan',
        code: c`
PROMPT BIASA (hasil rawan):
  "Buatkan API login pakai Express dan MySQL."

PROMPT AMAN (hasil jauh lebih baik):
  "Buatkan API login Express + MySQL.
   Syarat keamanan:
   - Query wajib parameterized (tanpa string concatenation).
   - Password di-hash dengan bcrypt (cost >= 12), jangan simpan teks biasa.
   - Semua secret dibaca dari environment variable, tanpa nilai default.
   - Validasi email dan panjang password dengan schema validation.
   - Rate limit login: 5 percobaan per 15 menit per IP.
   - Pesan error generik ke klien, detail hanya di log server.
   - Jangan pernah mengembalikan field password.
   Setelah selesai, daftar asumsi keamanan dan risiko yang masih tersisa."
`,
        takeaway: 'AI mengikuti spesifikasi. Semakin jelas persyaratan keamananmu, semakin baik hasilnya. Tapi tetap review hasilnya, prompt bagus bukan jaminan.',
        output: 'Kode yang lebih aman, disertai daftar risiko tersisa.'
      },
      {
        language: 'text',
        title: 'Checklist Cepat Sebelum Deploy Kode AI',
        code: c`
[ ] Aku bisa menjelaskan fungsi setiap file dan endpoint dengan kata-kataku sendiri
[ ] Tidak ada password/API key/token di kode atau di riwayat Git
[ ] File .env sudah masuk .gitignore
[ ] Semua query database memakai parameter, bukan gabungan string
[ ] Semua input divalidasi (tipe, panjang, rentang, format)
[ ] Password di-hash (bcrypt/argon2), bukan MD5/SHA1/teks biasa
[ ] Setiap endpoint sensitif mengecek login DAN kepemilikan data
[ ] Harga, saldo, role tidak pernah dipercaya dari data yang dikirim klien
[ ] Error ke pengguna generik, tanpa stack trace
[ ] Rate limit aktif pada login, OTP, dan endpoint mahal
[ ] Dependency sudah diaudit (npm audit / pip-audit), tanpa paket asing
[ ] Server tidak berjalan sebagai root, port database tidak terbuka ke publik
[ ] Ada backup dan aku tahu cara rollback
`,
        takeaway: 'Simpan checklist ini di repo dan gunakan setiap kali menerima kode AI dalam jumlah besar.',
        output: 'Semua kotak tercentang sebelum deploy.'
      }
    ],
    vibeWarnings: [
      {
        severity: 'danger',
        title: 'Menempelkan secret ke chat AI',
        problem: 'API key, token bot, atau password database yang kamu tempel ke chat AI (atau ke file yang dibaca tool AI) bisa tersimpan di riwayat, log, atau ikut ke repository.',
        fix: 'Ganti nilai asli dengan placeholder (YOUR_API_KEY) saat bertanya. Jika secret sudah terlanjur terkirim, anggap bocor lalu ganti (rotate).'
      },
      {
        severity: 'danger',
        title: 'Menganggap "sudah jalan" berarti "sudah aman"',
        problem: 'Fitur yang berhasil dijalankan hanya membuktikan jalur normal bekerja. Celah keamanan baru muncul saat seseorang sengaja memberi input yang tidak biasa.',
        fix: 'Uji secara sengaja dengan input jahat dan akun user lain. Anggap kode belum selesai sampai kamu mencoba merusaknya.'
      },
      {
        severity: 'warning',
        title: 'Menerima perubahan besar sekaligus',
        problem: 'AI yang mengubah puluhan file dalam satu langkah membuat review mustahil dan kamu tidak tahu apa yang berubah.',
        fix: 'Minta perubahan kecil per fitur, lihat git diff, dan commit satu per satu.'
      }
    ],
    quiz: {
      question: 'Kenapa "kode sudah jalan" tidak cukup untuk menyatakan kode aman?',
      options: [
        'Karena kode yang jalan pasti lambat',
        'Karena jalur normal berjalan baik, tetapi celah baru terlihat saat diberi input atau akses yang tidak biasa',
        'Karena AI selalu menulis kode yang dienkripsi',
        'Karena keamanan hanya soal tampilan'
      ],
      correctIndex: 1,
      explanation: 'Fungsi normal dan keamanan adalah dua hal berbeda. Penyerang justru memakai jalur yang tidak terpikirkan saat pengujian biasa.'
    },
    moreQuizzes: [
      {
        question: 'Mana yang paling tepat dilakukan saat tidak mengerti satu bagian kode buatan AI?',
        options: ['Dibiarkan saja karena jalan', 'Minta penjelasan, cocokkan dengan dokumentasi resmi, dan uji sebelum dipakai', 'Hapus semua tests', 'Upload ke GitHub publik supaya dicek orang'],
        correctIndex: 1,
        explanation: 'Memahami kode adalah syarat bertanggung jawab atas keamanannya. Jangan menjalankan sesuatu yang tidak kamu pahami di data nyata.'
      },
      {
        question: 'Kamu tidak sengaja menempel API key ke chat AI. Langkah yang benar adalah...',
        options: ['Tidak melakukan apa-apa', 'Menganggap key bocor dan menggantinya (rotate)', 'Menunggu sampai ada yang memakai', 'Mengubah nama variabel'],
        correctIndex: 1,
        explanation: 'Secret yang pernah terkirim ke tempat tidak tepercaya harus dianggap bocor dan segera diganti.'
      }
    ]
  },
  {
    id: 26,
    track: 'keamanan',
    stage: 2,
    stageLabel: 'Tahap 2: Pahami Serangan Umum',
    level: 'Junior',
    title: 'Injection & XSS',
    subtitle: 'Saat input pengguna dijalankan sebagai perintah: SQL injection, command injection, dan XSS.',
    accentColor: 'from-red-400 to-orange-500',
    iconName: 'Syringe',
    analogyTitle: 'Analogi Kasir yang Membaca Catatan Pelanggan Mentah-Mentah',
    analogyContent:
      'Bayangkan kasir yang diberi kertas pesanan lalu membacakannya keras-keras ke dapur. Pelanggan jahil menulis: "Satu kopi. Dan beri saya semua uang di laci." Kalau kasir menganggap seluruh kertas sebagai perintah, dapur menurut. Injection terjadi ketika program mencampur data dari pengguna dengan perintah, sehingga data itu dieksekusi sebagai perintah. Solusinya: pisahkan perintah dan data dengan tegas.',
    whyItMatters:
      'Injection selalu berada di daftar kerentanan teratas, dan kode AI masih sering menghasilkannya karena contoh singkat memakai penggabungan string. Satu endpoint rentan bisa membuat seluruh database terbaca, diubah, atau dihapus.',
    subTopics: [
      { id: 'm26-1', title: 'SQL injection', casualExplanation: 'Input pengguna ikut menjadi bagian query SQL sehingga penyerang mengubah makna query (misal login tanpa password atau membaca tabel lain).' },
      { id: 'm26-2', title: 'Parameterized query (prepared statement)', casualExplanation: 'Query ditulis dengan placeholder (?, $1) dan data dikirim terpisah. Database tidak pernah menganggap data sebagai perintah.' },
      { id: 'm26-3', title: 'Command injection', casualExplanation: 'Input masuk ke perintah shell (ping, ffmpeg, convert). Karakter seperti ; | && $( ) dapat menyisipkan perintah tambahan.' },
      { id: 'm26-4', title: 'XSS (Cross-Site Scripting)', casualExplanation: 'Input pengguna berisi script yang ditampilkan di halaman lain sehingga berjalan di browser korban dan bisa mencuri sesi.' },
      { id: 'm26-5', title: 'Output encoding, CSP, dan NoSQL injection', casualExplanation: 'Escape data sesuai konteks (HTML, atribut, URL), batasi script dengan Content-Security-Policy, dan waspadai objek berbahaya pada query MongoDB.' }
    ],
    codeSnippet: {
      language: 'javascript',
      title: 'SQL Injection: Rentan vs Aman',
      code: c`
// RENTAN: input digabung ke string query
app.get("/user", async (req, res) => {
  const sql = ‵SELECT id, nama FROM users WHERE email = '¤{req.query.email}'‵;
  const [rows] = await db.query(sql);
  res.json(rows);
});
// Jika email = ' OR '1'='1  -> query menjadi:
// SELECT id, nama FROM users WHERE email = '' OR '1'='1'   (SEMUA user terbaca)

// AMAN: parameterized query, data dikirim terpisah dari perintah
app.get("/user", async (req, res) => {
  const email = String(req.query.email || "").slice(0, 254);
  const [rows] = await db.execute(
    "SELECT id, nama FROM users WHERE email = ?",
    [email]
  );
  res.json(rows);
});
`,
      takeaway: 'Dengan tanda tanya (?) sebagai placeholder, database memperlakukan seluruh input sebagai nilai biasa, walau isinya mengandung tanda petik atau kata SQL. Selalu pilih ini, bukan membersihkan karakter secara manual.',
      output: 'Versi rentan: mengembalikan semua user. Versi aman: hanya user dengan email persis tersebut (atau kosong).'
    },
    howItWorksTitle: 'Bagaimana SQL Injection Terjadi, Langkah demi Langkah',
    howItWorks: [
      { title: '1. Aplikasi menyusun query dari teks', description: 'Kode menyambung string: "... WHERE email = \'" + input + "\'".' },
      { title: '2. Penyerang mengirim input yang mengandung sintaks SQL', description: 'Misal tanda petik yang menutup string lebih awal, diikuti kondisi tambahan.' },
      { title: '3. Database membaca seluruh teks sebagai satu perintah', description: 'Ia tidak bisa membedakan bagian dari programmer dan bagian dari penyerang.' },
      { title: '4. Makna query berubah', description: 'Kondisi menjadi selalu benar, data lain terbaca, atau perintah berbahaya ikut dijalankan.' },
      { title: '5. Pencegahan', description: 'Parameterized query memisahkan struktur query (dikompilasi dulu) dari nilai (diberikan kemudian), sehingga input tidak pernah bisa mengubah struktur.' }
    ],
    moreExamples: [
      {
        language: 'python',
        title: 'Command Injection: Rentan vs Aman',
        code: c`
import subprocess

# RENTAN: input menjadi bagian string perintah shell
def ping_rentan(host):
    return subprocess.run("ping -c 1 " + host, shell=True, capture_output=True)
# host = "8.8.8.8; cat /etc/passwd"  -> perintah kedua ikut dijalankan!

# AMAN: tanpa shell, argumen dipisah, input divalidasi allowlist
import re
def ping_aman(host):
    if not re.fullmatch(r"[A-Za-z0-9.\-]{1,253}", host):
        raise ValueError("Host tidak valid")
    return subprocess.run(["ping", "-c", "1", host], capture_output=True, timeout=5)
`,
        takeaway: 'Hindari shell=True. Berikan argumen sebagai list sehingga setiap nilai menjadi satu argumen utuh, dan validasi dengan allowlist (apa yang diizinkan), bukan blocklist.',
        output: 'ping_aman("8.8.8.8; ls") -> ValueError: Host tidak valid'
      },
      {
        language: 'javascript',
        title: 'XSS di Browser: innerHTML vs textContent',
        code: c`
const komentar = '<img src=x onerror="alert(document.cookie)">';   // dari pengguna lain

// RENTAN: browser menafsirkan teks sebagai HTML, script berjalan
document.getElementById("daftar").innerHTML = komentar;

// AMAN: dianggap teks biasa
document.getElementById("daftar").textContent = komentar;

// React aman secara default ({komentar}). RENTAN jika memakai:
//   <div dangerouslySetInnerHTML={{ __html: komentar }} />
// Jika harus menampilkan HTML dari user, bersihkan dengan DOMPurify:
//   el.innerHTML = DOMPurify.sanitize(komentar);
`,
        takeaway: 'Jangan masukkan teks dari pengguna ke innerHTML. Kata "dangerously" pada dangerouslySetInnerHTML adalah peringatan nyata.',
        output: 'Versi rentan: alert muncul. Versi aman: teks tampil apa adanya.'
      },
      {
        language: 'javascript',
        title: 'NoSQL Injection pada MongoDB',
        code: c`
// RENTAN: req.body.password bisa berupa objek { "$ne": null } (selalu benar)
const user = await Users.findOne({ email: req.body.email, password: req.body.password });

// AMAN: paksa tipe string dan bandingkan dengan hash
const email = String(req.body.email);
const user2 = await Users.findOne({ email });
const ok = user2 && (await bcrypt.compare(String(req.body.password), user2.passwordHash));
`,
        takeaway: 'Injection tidak hanya SQL. Database apa pun yang menerima objek query dari input pengguna bisa dimanipulasi. Selalu validasi tipe.',
        output: 'Versi rentan: login lolos tanpa tahu password. Versi aman: ditolak.'
      }
    ],
    vibeWarnings: [
      {
        severity: 'danger',
        title: 'ORM dengan raw query bergaya string',
        problem: 'Memakai ORM tidak otomatis aman. Fungsi seperti sequelize.query, prisma.$queryRawUnsafe, atau knex.raw dengan interpolasi string tetap rentan.',
        fix: 'Pakai versi parameter (replacements/bind, prisma.$queryRaw dengan tagged template) dan cari kata raw/unsafe/query( ketika me-review.'
      },
      {
        severity: 'danger',
        title: 'Membersihkan input dengan replace atau blocklist',
        problem: 'Menghapus tanda petik atau kata SELECT hampir selalu bisa dilewati (encoding, huruf besar-kecil, variasi).',
        fix: 'Jangan mengandalkan filter manual. Gunakan parameterized query dan allowlist pada validasi.'
      },
      {
        severity: 'warning',
        title: 'Menampilkan HTML dari user tanpa sanitasi',
        problem: 'Fitur komentar, profil, atau pesan bot yang merender HTML mentah menjadi sarang XSS.',
        fix: 'Tampilkan sebagai teks, atau sanitasi dengan library teruji (DOMPurify), dan pasang header Content-Security-Policy.'
      }
    ],
    quiz: {
      question: 'Cara paling tepat mencegah SQL injection adalah...',
      options: ['Menghapus tanda petik dari input', 'Memakai parameterized query / prepared statement', 'Menyembunyikan nama tabel', 'Menaruh query di file terpisah'],
      correctIndex: 1,
      explanation: 'Parameterized query memisahkan struktur perintah dari data, sehingga input tidak pernah bisa mengubah maksud query.'
    },
    moreQuizzes: [
      {
        question: 'Kenapa subprocess.run(["ping", "-c", "1", host]) lebih aman dari subprocess.run("ping -c 1 " + host, shell=True)?',
        options: ['Karena lebih singkat', 'Karena tanpa shell, host dianggap satu argumen utuh dan tidak bisa menyisipkan perintah lain', 'Karena memakai Python 3', 'Tidak ada bedanya'],
        correctIndex: 1,
        explanation: 'Shell menafsirkan karakter seperti ; dan |. Tanpa shell dan dengan argumen terpisah, karakter itu hanya menjadi teks biasa.'
      },
      {
        question: 'Mana yang aman untuk menampilkan komentar user di halaman?',
        options: ['element.innerHTML = komentar', 'element.textContent = komentar', 'eval(komentar)', 'document.write(komentar)'],
        correctIndex: 1,
        explanation: 'textContent memperlakukan isi sebagai teks biasa sehingga script tidak dieksekusi.'
      }
    ]
  },
  {
    id: 27,
    track: 'keamanan',
    stage: 3,
    stageLabel: 'Tahap 3: Amankan Akses & Rahasia',
    level: 'Junior',
    title: 'Autentikasi, Password & Kontrol Akses',
    subtitle: 'Cara memastikan siapa yang masuk dan apa yang boleh ia lakukan.',
    accentColor: 'from-orange-400 to-amber-500',
    iconName: 'KeyRound',
    analogyTitle: 'Analogi Gedung Apartemen',
    analogyContent:
      'Autentikasi adalah satpam yang mengecek kartu identitasmu di lobi (siapa kamu). Otorisasi adalah kunci kartu akses: kamu hanya bisa membuka unit milikmu sendiri, bukan unit tetangga (apa yang boleh kamu lakukan). Banyak aplikasi mengecek satpam di lobi tetapi lupa mengunci pintu tiap unit, sehingga siapa pun yang sudah masuk bisa membuka semua pintu dengan mengganti nomor unit.',
    whyItMatters:
      'Broken access control adalah risiko nomor satu di OWASP Top 10, dan AI sering menulis endpoint yang hanya mengecek "sudah login" tanpa mengecek apakah data itu milik user tersebut. Selain itu penyimpanan password yang salah membuat satu kebocoran database berubah menjadi kebocoran akun seluruh pengguna.',
    subTopics: [
      { id: 'm27-1', title: 'Hash vs enkripsi vs encoding', casualExplanation: 'Hash satu arah (untuk password), enkripsi dua arah dengan kunci (untuk data yang perlu dibaca lagi), encoding hanya format (Base64 BUKAN keamanan).' },
      { id: 'm27-2', title: 'Hashing password yang benar', casualExplanation: 'Pakai algoritma lambat khusus password (bcrypt, scrypt, argon2) dengan salt otomatis. Jangan MD5, SHA1, atau SHA256 polos.' },
      { id: 'm27-3', title: 'Session dan JWT', casualExplanation: 'Setelah login, server memberi bukti identitas (cookie sesi atau token). Token harus punya masa berlaku, ditandatangani dengan secret kuat, dan diverifikasi setiap request.' },
      { id: 'm27-4', title: 'Otorisasi dan IDOR', casualExplanation: 'IDOR terjadi saat pengguna mengganti ID di URL (/pesanan/5 menjadi /pesanan/6) dan melihat data orang lain karena server tidak mengecek kepemilikan.' },
      { id: 'm27-5', title: 'Role, MFA, dan batas percobaan', casualExplanation: 'Peran (user/admin) dicek di server, bukan dari data yang dikirim klien. Tambahkan MFA dan batasi percobaan login untuk menahan brute force.' }
    ],
    codeSnippet: {
      language: 'javascript',
      title: 'Menyimpan dan Memeriksa Password dengan bcrypt',
      code: c`
const bcrypt = require("bcrypt");

// SALAH: password teks biasa atau hash cepat tanpa salt
//   await db.execute("INSERT INTO users (email, password) VALUES (?, ?)", [email, password]);
//   const hash = crypto.createHash("md5").update(password).digest("hex");

// BENAR: hash lambat + salt otomatis
async function daftar(email, password) {
  if (typeof password !== "string" || password.length < 10) throw new Error("Password terlalu pendek");
  const hash = await bcrypt.hash(password, 12);              // cost factor 12
  await db.execute("INSERT INTO users (email, password_hash) VALUES (?, ?)", [email, hash]);
}

async function login(email, password) {
  const [rows] = await db.execute("SELECT id, password_hash FROM users WHERE email = ?", [email]);
  const user = rows[0];
  // bandingkan walau user tidak ada agar waktu respons tidak membocorkan keberadaan akun
  const hash = user ? user.password_hash : "$2b$12$invalidinvalidinvalidinvalidinvalidinvalidinvalidinvalidi";
  const ok = await bcrypt.compare(String(password), hash);
  if (!user || !ok) throw new Error("Email atau password salah");   // pesan generik
  return user.id;
}
`,
      takeaway: 'Bcrypt sengaja lambat dan menyertakan salt sehingga bocornya database tidak langsung membuka password pengguna. Pesan error generik mencegah penyerang tahu email mana yang terdaftar.',
      output: 'Database hanya menyimpan string seperti $2b$12$KIX... yang tidak bisa dibalik menjadi password asli.'
    },
    howItWorksTitle: 'Alur Login Aman dari Awal sampai Akhir',
    howItWorks: [
      { title: '1. Pengguna mengirim kredensial lewat HTTPS', description: 'Tanpa HTTPS, password terbaca siapa pun di jaringan.' },
      { title: '2. Server memvalidasi bentuk input dan menerapkan rate limit', description: 'Menolak input aneh dan membatasi percobaan berulang dari IP/akun yang sama.' },
      { title: '3. Server membandingkan dengan hash', description: 'bcrypt.compare memeriksa password terhadap hash tersimpan. Password asli tidak pernah disimpan.' },
      { title: '4. Server menerbitkan sesi atau token', description: 'Cookie HttpOnly + Secure + SameSite, atau JWT berumur pendek yang ditandatangani dengan secret kuat.' },
      { title: '5. Setiap request sensitif dicek ulang', description: 'Server memeriksa token, mengambil user dari token (bukan dari body request), lalu mengecek peran dan kepemilikan data.' }
    ],
    moreExamples: [
      {
        language: 'javascript',
        title: 'IDOR dan Broken Access Control: Rentan vs Aman',
        code: c`
// RENTAN: sudah login, tapi tidak dicek apakah pesanan itu milik dia
app.get("/pesanan/:id", requireLogin, async (req, res) => {
  const [rows] = await db.execute("SELECT * FROM pesanan WHERE id = ?", [req.params.id]);
  res.json(rows[0]);          // user A bisa membaca pesanan user B dengan mengganti ID
});

// AMAN: kepemilikan menjadi bagian dari query, user diambil dari sesi
app.get("/pesanan/:id", requireLogin, async (req, res) => {
  const [rows] = await db.execute(
    "SELECT id, total, status FROM pesanan WHERE id = ? AND user_id = ?",
    [req.params.id, req.user.id]          // req.user dari token terverifikasi
  );
  if (!rows[0]) return res.status(404).json({ error: "Tidak ditemukan" });
  res.json(rows[0]);
});

// (di dalam handler) RENTAN (mass assignment): menerima field role dari klien
// await db.execute("UPDATE users SET ? WHERE id = ?", [req.body, req.user.id]);
// body: {"nama":"Budi","role":"admin"}  -> user biasa jadi admin!
// AMAN: hanya izinkan field tertentu (allowlist)
const { nama } = req.body;
await db.execute("UPDATE users SET nama = ? WHERE id = ?", [nama, req.user.id]);
`,
        takeaway: 'Aturan emas: jangan percaya ID, role, harga, atau user_id dari klien. Ambil identitas dari token yang diverifikasi server, dan masukkan kepemilikan ke query.',
        output: 'Versi rentan: pesanan orang lain terbaca. Versi aman: 404 untuk pesanan yang bukan miliknya.'
      },
      {
        language: 'javascript',
        title: 'JWT: Kesalahan Umum vs Praktik Aman',
        code: c`
const jwt = require("jsonwebtoken");

// SALAH: secret lemah di kode, tanpa masa berlaku, decode tanpa verifikasi
//   const token = jwt.sign({ id: user.id, role: "admin" }, "secret");
//   const data = jwt.decode(req.headers.authorization);   // decode BUKAN verifikasi!

// BENAR
const SECRET = process.env.JWT_SECRET;          // acak, minimal 32 byte, dari env
if (!SECRET || SECRET.length < 32) throw new Error("JWT_SECRET tidak valid");

function buatToken(user) {
  return jwt.sign({ sub: user.id }, SECRET, { algorithm: "HS256", expiresIn: "15m" });
}
function verifikasi(token) {
  return jwt.verify(token, SECRET, { algorithms: ["HS256"] });   // kunci algoritma!
}
`,
        takeaway: 'Token harus berumur pendek, ditandatangani secret kuat dari environment, dan diverifikasi dengan algoritma yang dikunci. Jangan memasukkan data sensitif ke payload karena payload hanya di-encode, bukan dienkripsi.',
        output: 'Token kedaluwarsa dalam 15 menit dan ditolak jika tanda tangannya tidak cocok.'
      },
      {
        language: 'javascript',
        title: 'Cookie Sesi yang Aman',
        code: c`
const session = require("express-session");

app.use(session({
  name: "sid",
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,       // tidak bisa dibaca JavaScript (mengurangi dampak XSS)
    secure: true,         // hanya dikirim lewat HTTPS
    sameSite: "lax",      // mengurangi risiko CSRF
    maxAge: 1000 * 60 * 60 * 8
  }
}));
`,
        takeaway: 'Tiga flag cookie ini adalah pertahanan murah yang sangat efektif. Menyimpan token di localStorage membuatnya bisa dicuri jika ada XSS.',
        output: 'Set-Cookie: sid=...; HttpOnly; Secure; SameSite=Lax'
      }
    ],
    vibeWarnings: [
      {
        severity: 'danger',
        title: 'Password disimpan sebagai teks biasa, MD5, atau SHA1',
        problem: 'Jika database bocor, seluruh password langsung terbaca atau dipecahkan dalam hitungan detik, lalu dipakai untuk membobol akun lain karena orang memakai ulang password.',
        fix: 'Gunakan bcrypt, scrypt, atau argon2 dan tambahkan minimal panjang password serta MFA untuk akun sensitif.'
      },
      {
        severity: 'danger',
        title: 'Endpoint admin hanya "disembunyikan" di frontend',
        problem: 'Menyembunyikan tombol admin di UI tidak melindungi API. Siapa pun bisa memanggil endpoint langsung lewat curl atau Postman.',
        fix: 'Cek peran dan kepemilikan di setiap endpoint server, dengan default menolak (deny by default).'
      },
      {
        severity: 'warning',
        title: 'Pesan error yang membocorkan informasi',
        problem: 'Pesan seperti "Email tidak ditemukan" dan "Password salah" membantu penyerang menebak akun yang valid.',
        fix: 'Gunakan satu pesan generik, dan pastikan waktu respons relatif sama.'
      }
    ],
    quiz: {
      question: 'Cara menyimpan password pengguna yang benar adalah...',
      options: ['Menyimpan teks asli agar bisa dikirim ulang saat lupa', 'Di-hash dengan bcrypt/argon2 yang memakai salt', 'Di-encode dengan Base64', 'Dienkripsi dengan kunci yang ditulis di kode'],
      correctIndex: 1,
      explanation: 'Hash lambat dengan salt tidak bisa dibalik dan membuat serangan tebak massal jauh lebih mahal. Base64 hanya encoding dan bukan perlindungan.'
    },
    moreQuizzes: [
      {
        question: 'User A mengganti URL /pesanan/10 menjadi /pesanan/11 dan melihat pesanan user lain. Kerentanan ini bernama...',
        options: ['XSS', 'IDOR (Broken Access Control)', 'CORS', 'DDoS'],
        correctIndex: 1,
        explanation: 'IDOR terjadi karena server tidak memeriksa bahwa objek yang diminta milik user yang sedang login.'
      },
      {
        question: 'Kenapa role/isAdmin tidak boleh dipercaya dari body request klien?',
        options: ['Karena membuat request lambat', 'Karena klien bisa mengubahnya sendiri, sehingga user biasa bisa menjadi admin', 'Karena JSON tidak mendukungnya', 'Karena database tidak menyimpannya'],
        correctIndex: 1,
        explanation: 'Semua yang datang dari klien bisa dipalsukan. Peran harus berasal dari data tepercaya di server.'
      }
    ]
  },
  {
    id: 28,
    track: 'keamanan',
    stage: 4,
    stageLabel: 'Tahap 4: Amankan Sistem Penuh',
    level: 'Mid-Level',
    title: 'Secrets, Validasi Input & Keamanan API',
    subtitle: 'Menjaga rahasia tetap rahasia, memvalidasi input, dan mengamankan endpoint API serta webhook.',
    accentColor: 'from-amber-400 to-yellow-500',
    iconName: 'Lock',
    analogyTitle: 'Analogi Brankas dan Pintu Gerbang Pabrik',
    analogyContent:
      'Secret (API key, token, password database) itu seperti kunci brankas: tidak boleh ditulis di dinding kantor (kode) atau difoto dan dibagikan (Git/chat). Validasi input adalah satpam gerbang yang memeriksa setiap barang masuk: ukuran, isi, dan surat jalan. Rate limit adalah aturan "maksimal 5 tamu per menit". Verifikasi webhook adalah cap resmi pada surat dari pihak ketiga: tanpa cap, surat bisa saja palsu, misalnya pesan "pembayaran sudah lunas" dari orang iseng.',
    whyItMatters:
      'Bot pemindai otomatis mencari API key di GitHub publik setiap detik. Callback pembayaran palsu, harga yang dikirim dari klien, dan endpoint tanpa batas percobaan adalah celah yang sangat sering menimbulkan kerugian uang nyata pada aplikasi hasil vibe coding.',
    subTopics: [
      { id: 'm28-1', title: 'Mengelola secret dan environment variable', casualExplanation: 'Simpan di .env / panel server, masukkan .env ke .gitignore, beri nilai berbeda untuk dev dan production, dan ganti (rotate) jika bocor.' },
      { id: 'm28-2', title: 'Validasi input dengan schema', casualExplanation: 'Definisikan bentuk data yang diizinkan (tipe, panjang, rentang, format) memakai zod, joi, atau pydantic. Tolak sisanya (allowlist).' },
      { id: 'm28-3', title: 'Rate limiting dan anti brute force', casualExplanation: 'Batasi jumlah request per IP/akun untuk login, OTP, dan endpoint mahal agar tidak bisa ditebak atau dibanjiri.' },
      { id: 'm28-4', title: 'CORS, CSRF, dan security header', casualExplanation: 'Atur origin yang boleh memanggil API-mu, lindungi request yang mengubah data, dan aktifkan header seperti HSTS dan CSP (library helmet).' },
      { id: 'm28-5', title: 'Webhook, harga dari server, dan upload file', casualExplanation: 'Verifikasi signature callback, hitung harga di server (bukan dari klien), dan batasi tipe, ukuran, serta lokasi penyimpanan file upload.' }
    ],
    codeSnippet: {
      language: 'javascript',
      title: 'Secret di Environment, Bukan di Kode',
      code: c`
// SALAH: tertulis di kode lalu ter-commit ke Git
//   const BOT_TOKEN = "123456:ABC-DEF...";
//   const DB_PASSWORD = "admin123";

// BENAR: dibaca dari environment, gagal cepat jika tidak ada
require("dotenv").config();

function wajib(nama) {
  const nilai = process.env[nama];
  if (!nilai) throw new Error("Environment variable " + nama + " belum diatur");
  return nilai;
}

const BOT_TOKEN = wajib("BOT_TOKEN");
const DB_PASSWORD = wajib("DB_PASSWORD");

// File .env (JANGAN di-commit):
//   BOT_TOKEN=...
//   DB_PASSWORD=...
// File .gitignore:
//   .env
//   node_modules/
`,
      takeaway: 'Aplikasi yang langsung berhenti saat secret hilang jauh lebih baik daripada aplikasi yang diam-diam berjalan dengan nilai default yang lemah. Sediakan file .env.example berisi nama variabel saja tanpa nilai.',
      output: 'Error: Environment variable BOT_TOKEN belum diatur'
    },
    howItWorksTitle: 'Cara Verifikasi Signature Webhook (HMAC) Bekerja',
    howItWorks: [
      { title: '1. Kamu dan penyedia berbagi secret', description: 'Secret rahasia diset di dashboard penyedia (payment gateway, bot, dll) dan di environment servermu. Tidak pernah lewat request.' },
      { title: '2. Penyedia menghitung tanda tangan', description: 'Mereka menghitung HMAC (hash dengan kunci) dari isi request memakai secret, lalu mengirimkannya di header.' },
      { title: '3. Servermu menghitung ulang', description: 'Kamu menghitung HMAC dari isi mentah request yang kamu terima dengan secret yang sama.' },
      { title: '4. Bandingkan dengan aman', description: 'Gunakan timingSafeEqual. Jika cocok, request asli. Jika tidak, tolak dengan 401.' },
      { title: '5. Cegah replay dan verifikasi ulang', description: 'Cek timestamp/ID unik agar callback lama tidak bisa dikirim ulang, dan konfirmasi status pembayaran lewat API resmi penyedia sebelum mengaktifkan pesanan.' }
    ],
    moreExamples: [
      {
        language: 'javascript',
        title: 'Verifikasi Webhook dengan HMAC',
        code: c`
const crypto = require("crypto");

// Gunakan body MENTAH (Buffer), bukan hasil JSON.parse
app.post("/webhook/bayar", express.raw({ type: "application/json" }), (req, res) => {
  const signature = req.get("x-signature") || "";
  const hitung = crypto
    .createHmac("sha256", process.env.WEBHOOK_SECRET)
    .update(req.body)
    .digest("hex");

  const a = Buffer.from(signature);
  const b = Buffer.from(hitung);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
    return res.status(401).send("Signature tidak valid");
  }

  const data = JSON.parse(req.body.toString("utf8"));
  // Sebelum menandai LUNAS: cek order_id ada, belum diproses (idempoten),
  // dan nominal cocok dengan data di database kamu.
  res.sendStatus(200);
});
`,
        takeaway: 'Tanpa verifikasi, siapa pun yang tahu URL webhook bisa mengirim "pembayaran berhasil" palsu dan mendapat barang gratis. Cek juga nominal dan idempotensi (satu order hanya diproses sekali).',
        output: 'Request dengan signature salah mendapat 401.'
      },
      {
        language: 'javascript',
        title: 'Validasi Input dengan Zod dan Harga dari Server',
        code: c`
const { z } = require("zod");

const OrderSchema = z.object({
  produkId: z.string().uuid(),
  jumlah: z.number().int().min(1).max(10),
  catatan: z.string().max(200).optional()
}).strict();          // field tak dikenal (misal "harga", "role") ditolak

app.post("/order", requireLogin, async (req, res) => {
  const parsed = OrderSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "Data tidak valid" });

  const { produkId, jumlah } = parsed.data;
  const [rows] = await db.execute("SELECT harga, stok FROM produk WHERE id = ?", [produkId]);
  if (!rows[0] || rows[0].stok < jumlah) return res.status(400).json({ error: "Stok tidak cukup" });

  const total = rows[0].harga * jumlah;       // HARGA DARI DATABASE, bukan dari klien
  // ... buat pesanan dengan total tersebut
  res.json({ total });
});
`,
        takeaway: 'Jika kode menerima "harga" dari klien, penyerang tinggal mengubahnya menjadi 1 rupiah. Hitung semua nilai uang di server dari data tepercaya.',
        output: 'Request dengan field harga atau jumlah 9999 ditolak 400.'
      },
      {
        language: 'javascript',
        title: 'Rate Limit, CORS Allowlist, dan Security Header',
        code: c`
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

app.use(helmet());                                         // header keamanan standar
app.use(cors({ origin: ["https://tokoku.id"], credentials: true }));   // bukan "*"
app.use(express.json({ limit: "100kb" }));                 // batasi ukuran body

const loginLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 5, standardHeaders: true });
app.post("/login", loginLimiter, loginHandler);

// Jangan bocorkan detail error ke klien
app.use((err, req, res, next) => {
  console.error(err);                                      // detail hanya di log server
  res.status(500).json({ error: "Terjadi kesalahan" });
});
`,
        takeaway: 'Empat baris konfigurasi ini menutup banyak serangan umum: brute force, body raksasa, origin liar, dan kebocoran stack trace. Jika di balik Cloudflare/proxy, atur trust proxy agar IP asli terbaca.',
        output: 'Percobaan login ke-6 dalam 15 menit mendapat 429 Too Many Requests.'
      },
      {
        language: 'javascript',
        title: 'Upload File yang Lebih Aman',
        code: c`
const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

const upload = multer({
  storage: multer.diskStorage({
    destination: "/var/app/uploads",                       // di luar folder yang disajikan publik
    filename: (req, file, cb) =>
      cb(null, crypto.randomUUID() + path.extname(file.originalname).toLowerCase())
  }),
  limits: { fileSize: 2 * 1024 * 1024, files: 1 },         // maksimal 2 MB
  fileFilter: (req, file, cb) => {
    const ok = ["image/png", "image/jpeg"].includes(file.mimetype);
    cb(ok ? null : new Error("Tipe file tidak diizinkan"), ok);
  }
});
`,
        takeaway: 'Jangan pakai nama file dari user (bisa ../../ path traversal), batasi ukuran dan tipe, dan simpan di luar folder yang bisa dieksekusi. Idealnya periksa juga isi file (magic bytes).',
        output: 'File .php atau .exe ditolak dan file disimpan dengan nama acak.'
      }
    ],
    vibeWarnings: [
      {
        severity: 'danger',
        title: 'API key masuk ke repository publik',
        problem: 'Bot pemindai menemukan key di GitHub dalam hitungan menit dan langsung memakainya (tagihan cloud membengkak, bot diambil alih, database diakses).',
        fix: 'Pakai .gitignore sejak awal, aktifkan secret scanning (GitHub, gitleaks), dan ganti semua key yang pernah ter-commit, karena riwayat Git masih menyimpannya.'
      },
      {
        severity: 'danger',
        title: 'Webhook pembayaran tanpa verifikasi',
        problem: 'Endpoint callback yang langsung mempercayai isi request memungkinkan orang mengirim status "paid" palsu untuk mengambil produk tanpa membayar.',
        fix: 'Verifikasi signature, cek nominal dan order ID, buat proses idempoten, dan konfirmasi status lewat API resmi penyedia.'
      },
      {
        severity: 'warning',
        title: 'CORS "*" bersama kredensial dan mode debug aktif',
        problem: 'Konfigurasi "supaya tidak error di development" sering terbawa sampai production dan membuka API untuk situs mana saja.',
        fix: 'Pisahkan konfigurasi dev dan production, pakai allowlist origin, dan matikan debug/stack trace di production.'
      }
    ],
    quiz: {
      question: 'Pada sistem pembayaran, dari mana nominal total pesanan sebaiknya dihitung?',
      options: ['Dari field "total" yang dikirim aplikasi klien', 'Dari harga di database server dikali jumlah yang tervalidasi', 'Dari cookie browser', 'Dari URL'],
      correctIndex: 1,
      explanation: 'Semua nilai dari klien bisa diubah. Harga harus selalu dihitung di server dari sumber tepercaya.'
    },
    moreQuizzes: [
      {
        question: 'Kamu tidak sengaja commit file .env berisi token ke repository. Apa yang harus dilakukan?',
        options: ['Cukup hapus file di commit berikutnya', 'Anggap token bocor, ganti (rotate) tokennya, lalu bersihkan riwayat jika perlu', 'Tidak perlu apa-apa jika repo privat selamanya', 'Ubah nama file saja'],
        correctIndex: 1,
        explanation: 'Riwayat Git tetap menyimpan file lama. Satu-satunya cara aman adalah mengganti secret yang bocor.'
      },
      {
        question: 'Tujuan utama verifikasi signature pada webhook adalah...',
        options: ['Mempercepat request', 'Memastikan request benar-benar berasal dari penyedia yang sah dan isinya tidak diubah', 'Mengompres data', 'Menyembunyikan URL'],
        correctIndex: 1,
        explanation: 'HMAC membuktikan pengirim memegang secret yang sama dan isi pesan tidak dimodifikasi di tengah jalan.'
      }
    ]
  },
  {
    id: 29,
    track: 'keamanan',
    stage: 4,
    stageLabel: 'Tahap 4: Amankan Sistem Penuh',
    level: 'Mid-Level',
    title: 'Dependency, Deployment & Workflow Aman bersama AI',
    subtitle: 'Mengamankan paket pihak ketiga, server, dan cara kerja harian saat memakai AI untuk menulis kode.',
    accentColor: 'from-lime-400 to-green-500',
    iconName: 'ShieldCheck',
    analogyTitle: 'Analogi Bahan Baku Restoran dan Inspeksi Dapur',
    analogyContent:
      'Dependency adalah bahan baku dari supplier. Kalau satu supplier mengirim bahan yang terkontaminasi, seluruh restoranmu ikut bermasalah walau resepmu sempurna. Karena itu kamu mengecek supplier, mencatat versi bahan (lockfile), dan memeriksa kualitas berkala (audit). Deployment adalah dapur yang kamu buka untuk umum: pintu belakang dikunci, koki tidak diberi kunci gudang utama, dan ada CCTV. Workflow aman adalah SOP harian: setiap resep baru dicicipi dan diperiksa dulu sebelum dihidangkan.',
    whyItMatters:
      'AI kadang merekomendasikan nama paket yang tidak ada (hallucination). Penyerang mendaftarkan nama tiruan itu berisi malware (slopsquatting/typosquatting), lalu siapa pun yang menjalankan npm install atau pip install ikut terinfeksi. Server yang salah konfigurasi (jalan sebagai root, database terbuka ke internet, debug aktif) adalah pintu masuk paling umum.',
    subTopics: [
      { id: 'm29-1', title: 'Supply chain, typosquatting, dan paket halusinasi', casualExplanation: 'Paket berbahaya dengan nama mirip paket populer, atau nama paket karangan AI yang kemudian didaftarkan penyerang. Cek sebelum install.' },
      { id: 'm29-2', title: 'Audit dan lockfile', casualExplanation: 'Jalankan npm audit / pip-audit, aktifkan Dependabot, commit package-lock.json, dan gunakan npm ci agar versi konsisten dan terkunci.' },
      { id: 'm29-3', title: 'Deployment aman', casualExplanation: 'HTTPS, aplikasi tidak berjalan sebagai root, port database tertutup untuk publik, firewall, update berkala, backup, dan mode debug mati.' },
      { id: 'm29-4', title: 'Logging dan monitoring', casualExplanation: 'Catat kejadian penting (login gagal, error) tanpa menulis password, token, atau data pribadi ke log. Pasang alert untuk pola mencurigakan.' },
      { id: 'm29-5', title: 'Workflow harian aman bersama AI', casualExplanation: 'Spesifikasi jelas, perubahan kecil, review manual, test otomatis, pemindai (semgrep, gitleaks), baru deploy. Ulangi.' }
    ],
    codeSnippet: {
      language: 'bash',
      title: 'Periksa Paket Sebelum Install dan Audit Rutin',
      code: c`
# 1. Jangan langsung install nama paket dari AI. Cek dulu:
npm view nama-paket name version time.created maintainers repository.url
#  - Apakah ada? Kapan dibuat? Repo-nya jelas? (cek juga unduhan mingguan di npmjs.com)
#  - Apakah ejaannya persis seperti paket resmi (bukan "reqeusts", "expresss")?

# 2. Install tanpa menjalankan skrip pasca-install untuk paket yang kurang dikenal
npm install nama-paket --ignore-scripts

# 3. Audit rutin dan perbaikan
npm audit
npm audit fix            # perbaikan aman (tanpa breaking change)

# 4. Install yang bisa diulang di CI/server: persis sesuai lockfile
npm ci

# Python
pip install pip-audit && pip-audit
pip install --require-hashes -r requirements.txt   # jika memakai hash terkunci
`,
      takeaway: 'Biasakan memeriksa tiga hal sebelum menginstal paket baru: apakah benar ada dan populer, apakah ejaannya tepat, dan apakah repositori serta maintainer-nya jelas. Paket yang baru dibuat dengan unduhan nol patut dicurigai.',
      output: 'found 0 vulnerabilities'
    },
    howItWorksTitle: 'Siklus Kerja Aman Saat Membangun dengan AI',
    howItWorks: [
      { title: '1. Tulis spesifikasi dan batasan keamanan', description: 'Jelaskan fitur, input, siapa yang boleh akses, dan aturan keamanan (parameterized query, hash password, validasi).' },
      { title: '2. Minta perubahan kecil', description: 'Satu fitur per iterasi agar bisa direview. Minta AI menjelaskan alur dan asumsi keamanannya.' },
      { title: '3. Review sendiri dengan git diff dan checklist', description: 'Cari input, secret, akses, dan query. Jangan terima kode yang tidak kamu pahami.' },
      { title: '4. Jalankan test dan pemindai otomatis', description: 'Unit test, npm audit, gitleaks (secret), semgrep (pola kode berbahaya).' },
      { title: '5. Deploy dengan konfigurasi minimal dan aman', description: 'Variabel environment di panel server, user non-root, firewall, HTTPS, dan backup.' },
      { title: '6. Pantau dan siap rollback', description: 'Lihat log, pasang alert, dan simpan versi sebelumnya agar bisa kembali cepat saat ada masalah.' }
    ],
    moreExamples: [
      {
        language: 'bash',
        title: 'Pemindai Otomatis: Secret dan Pola Berbahaya',
        code: c`
# Cari secret yang terlanjur masuk repository (termasuk riwayat Git)
gitleaks detect --source . --verbose

# Cegah commit yang mengandung secret (pre-commit hook)
gitleaks protect --staged

# Cari pola kode berbahaya (SQL injection, eval, dll) dengan aturan komunitas
semgrep --config auto .

# Pindai dependency dan konfigurasi
npm audit --audit-level=high
`,
        takeaway: 'Pemindai tidak menggantikan review manual, tapi menangkap kesalahan yang mudah terlewat. Pasang di CI atau hook commit agar berjalan otomatis.',
        output: 'No leaks found'
      },
      {
        language: 'javascript',
        title: 'Logging Tanpa Membocorkan Data Sensitif',
        code: c`
const SENSITIF = ["password", "token", "authorization", "apikey", "secret", "cardNumber"];

function bersihkan(obj) {
  return JSON.parse(JSON.stringify(obj, (kunci, nilai) =>
    SENSITIF.includes(String(kunci).toLowerCase()) ? "[DISENSOR]" : nilai
  ));
}

app.use((req, res, next) => {
  console.log(JSON.stringify({
    waktu: new Date().toISOString(),
    metode: req.method,
    path: req.path,                 // bukan query string lengkap bila memuat token
    body: bersihkan(req.body || {})
  }));
  next();
});
`,
        takeaway: 'Log sering disalin, dikirim ke layanan pihak ketiga, atau dilihat banyak orang. Anggap log bukan tempat aman untuk data sensitif.',
        output: '{"metode":"POST","path":"/login","body":{"email":"a@b.id","password":"[DISENSOR]"}}'
      },
      {
        language: 'text',
        title: 'Konfigurasi Server: Hal yang Wajib Diperiksa',
        code: c`
SISTEM & JARINGAN
[ ] Hanya port yang perlu terbuka (80/443, SSH dengan kunci). Database, Redis, panel admin: TERTUTUP dari internet
[ ] Login SSH memakai kunci, bukan password; login root dimatikan
[ ] Firewall aktif; di belakang Cloudflare, batasi akses server asal ke IP Cloudflare
[ ] Sistem operasi dan paket di-update berkala

APLIKASI
[ ] Berjalan sebagai user biasa (bukan root), dikelola PM2/systemd dengan restart otomatis
[ ] NODE_ENV=production, mode debug dan stack trace dimatikan
[ ] Secret hanya di environment/panel server, bukan di repository
[ ] Akun database punya hak minimum (bukan root/superuser)
[ ] HTTPS aktif, HTTP dialihkan ke HTTPS

DATA
[ ] Backup otomatis dan sudah pernah diuji restore
[ ] Data sensitif dibatasi aksesnya dan dienkripsi bila perlu
`,
        takeaway: 'Server aman bukan soal satu pengaturan ajaib, tapi kumpulan kebiasaan kecil. Simpan ini sebagai checklist setiap kali men-deploy proyek baru.',
        output: 'Semua kotak tercentang sebelum go-live.'
      }
    ],
    vibeWarnings: [
      {
        severity: 'danger',
        title: 'Menginstal paket yang disarankan AI tanpa memeriksa',
        problem: 'Nama paket bisa halusinasi, salah eja, atau sudah didaftarkan penyerang berisi malware pencuri token. Skrip pasca-install langsung berjalan di komputer/servermu.',
        fix: 'Cek keberadaan, tanggal rilis, unduhan, repo, dan ejaannya. Gunakan --ignore-scripts untuk paket asing dan pilih paket populer yang terawat.'
      },
      {
        severity: 'danger',
        title: 'Database atau panel admin terbuka ke internet',
        problem: 'MySQL, MongoDB, atau Redis tanpa password pada port publik sering ditemukan pemindai otomatis dan datanya dicuri atau dihapus untuk tebusan.',
        fix: 'Bind ke localhost/jaringan privat, aktifkan autentikasi, dan batasi lewat firewall.'
      },
      {
        severity: 'warning',
        title: 'Menjalankan aplikasi sebagai root dan mode debug menyala',
        problem: 'Jika ada satu celah, penyerang langsung mendapat kendali penuh atas server, dan halaman debug membocorkan struktur kode serta secret.',
        fix: 'Buat user khusus aplikasi, matikan debug di production, dan beri hak akses seminimum mungkin.'
      }
    ],
    quiz: {
      question: 'AI menyarankan menjalankan npm install paket-yang-belum-pernah-kamu-dengar. Langkah paling aman adalah...',
      options: ['Langsung install karena AI yang menyarankan', 'Periksa dulu apakah paket itu ada, populer, ejaannya benar, dan repositorinya jelas', 'Install dengan sudo', 'Install di server production dulu'],
      correctIndex: 1,
      explanation: 'AI dapat menghasilkan nama paket yang tidak ada atau tiruan. Verifikasi dulu sebelum install karena skrip pasca-install bisa menjalankan kode berbahaya.'
    },
    moreQuizzes: [
      {
        question: 'Kenapa aplikasi sebaiknya tidak berjalan sebagai root?',
        options: ['Karena root lebih lambat', 'Karena jika aplikasi dibobol, penyerang mendapat hak penuh atas seluruh server', 'Karena root tidak bisa membuka port', 'Karena Linux melarangnya'],
        correctIndex: 1,
        explanation: 'Prinsip least privilege: batasi dampak jika terjadi kebocoran dengan memberi hak akses seminimum mungkin.'
      },
      {
        question: 'Mana yang BUKAN praktik logging yang baik?',
        options: ['Mencatat login gagal', 'Menulis password dan token lengkap ke log', 'Menyensor field sensitif', 'Memasang alert pola mencurigakan'],
        correctIndex: 1,
        explanation: 'Password dan token tidak boleh masuk log karena log sering dibagikan dan disimpan lama.'
      }
    ]
  }
];
