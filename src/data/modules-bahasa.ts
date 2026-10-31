import type { ModuleItem } from './types';
import { c } from './helpers';

export const BAHASA_MODULES: ModuleItem[] = [
  {
    id: 21,
    track: 'bahasa',
    stage: 1,
    stageLabel: 'Tahap 1: Pahami Peta Bahasa',
    level: 'Pemula',
    title: 'Peta Bahasa Pemrograman & Paradigma',
    subtitle: 'Kenapa ada ratusan bahasa, dan bagaimana mengelompokkannya agar mudah dipelajari.',
    accentColor: 'from-amber-400 to-orange-500',
    iconName: 'Map',
    analogyTitle: 'Analogi Alat Transportasi',
    analogyContent:
      'Bahasa pemrograman itu seperti alat transportasi. Motor (Python/JavaScript) lincah dan mudah dipelajari untuk urusan harian. Truk (Java/C#) kuat untuk muatan besar dan perjalanan jauh. Mobil balap (C/C++/Rust) sangat cepat tetapi perlu pengemudi yang paham mesin. Kereta (SQL) hanya jalan di rel tertentu tetapi tidak tertandingi di jalurnya. Kamu tidak perlu menguasai semuanya, cukup paham pola umum supaya bisa berpindah dengan cepat.',
    whyItMatters:
      'Bahasa berbeda, konsep sama. Kalau kamu paham variabel, loop, fungsi, dan tipe data, kamu bisa membaca kode dalam bahasa apa pun, termasuk kode AI di bahasa yang belum pernah kamu pakai. Ini penting untuk memutuskan apakah pilihan bahasa dari AI masuk akal.',
    subTopics: [
      { id: 'm21-1', title: 'Compiled, interpreted, dan JIT', casualExplanation: 'Compiled diterjemahkan lebih dulu ke kode mesin (C, Go, Rust). Interpreted dijalankan baris per baris (Python, Ruby). JIT menggabungkan keduanya (JavaScript V8, Java JVM).' },
      { id: 'm21-2', title: 'Static vs dynamic typing', casualExplanation: 'Static: tipe dicek sebelum jalan (Java, Go, TypeScript). Dynamic: tipe dicek saat jalan (Python, JavaScript), fleksibel tapi bug tipe baru ketahuan belakangan.' },
      { id: 'm21-3', title: 'Paradigma pemrograman', casualExplanation: 'Imperatif (perintah berurutan), OOP (objek dan kelas), fungsional (fungsi murni tanpa efek samping), deklaratif (jelaskan hasil, bukan langkah, seperti SQL).' },
      { id: 'm21-4', title: 'Manajemen memori', casualExplanation: 'Manual (C malloc/free), garbage collector otomatis (Java, Python, Go), atau aturan kepemilikan (Rust ownership).' },
      { id: 'm21-5', title: 'Ekosistem dan package manager', casualExplanation: 'Bahasa dinilai dari library dan tools-nya: pip (Python), npm (JS), Maven/Gradle (Java), NuGet (C#), Cargo (Rust), Composer (PHP).' }
    ],
    codeSnippet: {
      language: 'text',
      title: 'Hello World di 10 Bahasa',
      code: c`
Python      print("Halo dunia")
JavaScript  console.log("Halo dunia");
TypeScript  console.log("Halo dunia");                  // sama, plus tipe
PHP         <?php echo "Halo dunia"; ?>
Ruby        puts "Halo dunia"
Go          fmt.Println("Halo dunia")                   // di dalam func main()
Rust        println!("Halo dunia");                     // di dalam fn main()
Java        System.out.println("Halo dunia");           // di dalam class + main
C#          Console.WriteLine("Halo dunia");
C           printf("Halo dunia\n");                     // #include <stdio.h>
Kotlin      println("Halo dunia")
Swift       print("Halo dunia")
`,
      takeaway: 'Inti kerjanya sama: mencetak teks. Perbedaan ada pada seremoni di sekitarnya (class, main, titik koma, import). Itulah yang membuat bahasa tertentu lebih ringkas atau lebih ketat.',
      output: 'Halo dunia'
    },
    howItWorksTitle: 'Perjalanan Kode di Tiga Jenis Bahasa',
    howItWorks: [
      { title: 'Compiled (C, Go, Rust)', description: 'Source code, compiler, file executable berisi kode mesin, lalu dijalankan langsung oleh CPU. Cepat, tapi harus dikompilasi ulang untuk tiap platform.' },
      { title: 'Interpreted (Python, Ruby, PHP)', description: 'Source code dibaca interpreter, diubah menjadi bytecode, lalu dieksekusi oleh virtual machine. Mudah dijalankan di mana saja, biasanya lebih lambat.' },
      { title: 'JIT (JavaScript V8, Java JVM, C# .NET)', description: 'Kode diubah menjadi bytecode, lalu bagian yang sering dipakai (hot code) dikompilasi ke kode mesin saat program berjalan.' },
      { title: 'Kesimpulan praktis', description: 'Kecepatan, ukuran, kemudahan deploy, dan kemudahan belajar adalah tradeoff, bukan ada bahasa yang terbaik di semuanya.' }
    ],
    moreExamples: [
      {
        language: 'python',
        title: 'Dynamic Typing: Error Baru Muncul Saat Dijalankan',
        code: c`
def total_harga(harga, jumlah):
    return harga * jumlah

print(total_harga(15000, 3))        # 45000
print(total_harga("15000", 3))      # "150001500015000"  <- tidak error, tapi salah!
`,
        takeaway: 'Python tidak menolak string, bahkan mengalikannya sebagai pengulangan teks. Bug seperti ini diam-diam lolos tanpa tipe yang ketat.',
        output: '45000\n150001500015000'
      },
      {
        language: 'typescript',
        title: 'Static Typing: Salah Tipe Ketahuan Sebelum Jalan',
        code: c`
function totalHarga(harga: number, jumlah: number): number {
  return harga * jumlah;
}

console.log(totalHarga(15000, 3));      // 45000
console.log(totalHarga("15000", 3));    // ERROR saat compile:
// Argument of type 'string' is not assignable to parameter of type 'number'.
`,
        takeaway: 'Tipe statis memberi pagar pengaman: kesalahan tipe ditangkap oleh compiler/editor sebelum kode berjalan di server.',
        output: '45000'
      }
    ],
    vibeWarnings: [
      {
        severity: 'warning',
        title: 'Terjemahan antar bahasa yang salah kaprah',
        problem: 'Saat minta "ubah kode Python ke JavaScript", AI bisa membawa asumsi bahasa asal: pembagian bulat, truthiness ([] dan 0 itu false di Python tapi [] itu true di JavaScript), atau urutan dictionary.',
        fix: 'Uji hasil terjemahan dengan input yang sama dan bandingkan outputnya, termasuk nilai kosong dan angka 0.'
      },
      {
        severity: 'info',
        title: 'Memilih bahasa karena tren',
        problem: 'AI atau tutorial sering memilih bahasa yang paling populer, bukan yang paling cocok untuk kebutuhanmu.',
        fix: 'Tanyakan: siapa yang akan merawatnya, butuh secepat apa, di mana akan dijalankan, dan library apa yang sudah tersedia.'
      }
    ],
    quiz: {
      question: 'Apa keuntungan utama static typing seperti pada TypeScript, Java, atau Go?',
      options: ['Programnya otomatis lebih cepat 10 kali', 'Kesalahan tipe bisa ditemukan sebelum program dijalankan', 'Tidak butuh compiler', 'Tidak perlu testing sama sekali'],
      correctIndex: 1,
      explanation: 'Tipe statis dicek sebelum eksekusi sehingga banyak bug tipe tertangkap lebih awal, walau testing tetap diperlukan.'
    },
    moreQuizzes: [
      {
        question: 'Pasangan bahasa mana yang umumnya dikompilasi langsung ke kode mesin?',
        options: ['C, Go, Rust', 'Python, Ruby, PHP', 'HTML, CSS', 'Markdown, JSON'],
        correctIndex: 0,
        explanation: 'C, Go, dan Rust dikompilasi menjadi executable native. Python, Ruby, dan PHP umumnya diinterpretasikan.'
      },
      {
        question: 'SQL termasuk paradigma...',
        options: ['Deklaratif (menjelaskan hasil yang diinginkan)', 'Assembly', 'Fungsional murni saja', 'OOP murni'],
        correctIndex: 0,
        explanation: 'Di SQL kamu mendeskripsikan data apa yang diinginkan, sedangkan database yang menentukan langkah mengambilnya.'
      }
    ]
  },
  {
    id: 22,
    track: 'bahasa',
    stage: 2,
    stageLabel: 'Tahap 2: Bahasa Web & Scripting',
    level: 'Pemula',
    title: 'Python, JavaScript, TypeScript, PHP, Ruby & Bash',
    subtitle: 'Bahasa yang paling sering dipakai untuk web, otomasi, bot, dan AI.',
    accentColor: 'from-yellow-400 to-amber-500',
    iconName: 'Globe',
    analogyTitle: 'Analogi Pisau Dapur Serbaguna',
    analogyContent:
      'Python adalah pisau chef: serbaguna, mudah dipegang, cocok untuk AI, data, dan otomasi. JavaScript adalah pisau yang wajib ada karena hanya dia yang jalan langsung di browser, dan lewat Node.js juga bisa di server. TypeScript adalah JavaScript dengan pelindung jari (tipe). PHP adalah pisau tua yang menjalankan sebagian besar web (WordPress, Laravel). Ruby fokus pada kenyamanan developer (Rails). Bash adalah gunting kecil untuk menyambung perintah di terminal.',
    whyItMatters:
      'Sebagian besar proyek vibe coding memakai Python atau JavaScript/TypeScript. Memahami perbedaan dan jebakan khas tiap bahasa membuatmu mampu meninjau kode AI dengan lebih jeli.',
    subTopics: [
      { id: 'm22-1', title: 'Python', casualExplanation: 'Sintaks bersih berbasis indentasi. Dipakai untuk AI/ML, data, otomasi, backend (Django, FastAPI, Flask).' },
      { id: 'm22-2', title: 'JavaScript dan Node.js', casualExplanation: 'Bahasa browser, juga server lewat Node.js. Asinkron dengan callback, Promise, dan async/await. Dasar dari bot Telegram dan API.' },
      { id: 'm22-3', title: 'TypeScript', casualExplanation: 'Superset JavaScript dengan tipe statis. Dikompilasi menjadi JavaScript. Standar di proyek frontend/backend modern (Next.js).' },
      { id: 'm22-4', title: 'PHP dan Ruby', casualExplanation: 'PHP menggerakkan banyak situs (Laravel, WordPress). Ruby dikenal lewat Rails dan sintaks yang enak dibaca.' },
      { id: 'm22-5', title: 'Bash dan shell scripting', casualExplanation: 'Menyambung perintah terminal menjadi skrip otomasi: backup, deploy, dan pengolahan file.' }
    ],
    codeSnippet: {
      language: 'python',
      title: 'Tugas Sama: Ambil Genap, Kuadratkan, Jumlahkan (Python)',
      code: c`
angka = [1, 2, 3, 4, 5, 6]

hasil = sum(n ** 2 for n in angka if n % 2 == 0)
print(hasil)    # 4 + 16 + 36 = 56

# Versi eksplisit
total = 0
for n in angka:
    if n % 2 == 0:
        total += n * n
print(total)    # 56
`,
      takeaway: 'Python mengutamakan keterbacaan. Satu baris comprehension setara dengan loop 4 baris di bawahnya.',
      output: '56\n56'
    },
    howItWorksTitle: 'Alur Request Web: Siapa Mengerjakan Apa',
    howItWorks: [
      { title: '1. Browser meminta halaman', description: 'JavaScript/TypeScript di browser mengirim request HTTP ke server (misal fetch ke /api/produk).' },
      { title: '2. Server menerima', description: 'Aplikasi Node.js, PHP, Python, atau Ruby menerima request, memeriksa izin, lalu memproses logika.' },
      { title: '3. Server bertanya ke database', description: 'Query SQL dijalankan untuk mengambil atau menyimpan data.' },
      { title: '4. Server membalas', description: 'Hasil dikirim kembali sebagai HTML atau JSON, lalu browser menampilkannya.' }
    ],
    moreExamples: [
      {
        language: 'javascript',
        title: 'Tugas Sama di JavaScript + Async/Await',
        code: c`
const angka = [1, 2, 3, 4, 5, 6];
const hasil = angka
  .filter((n) => n % 2 === 0)
  .map((n) => n ** 2)
  .reduce((a, b) => a + b, 0);
console.log(hasil);   // 56

// Mengambil data dari API (asinkron)
async function ambilProduk() {
  const res = await fetch("https://example.com/api/produk");
  if (!res.ok) throw new Error("Gagal: " + res.status);
  return res.json();
}
`,
        takeaway: 'Rantai filter, map, reduce adalah gaya fungsional JavaScript. Selalu cek res.ok karena fetch tidak melempar error saat status 404 atau 500.',
        output: '56'
      },
      {
        language: 'typescript',
        title: 'Tugas Sama di TypeScript dengan Tipe',
        code: c`
interface Produk {
  nama: string;
  harga: number;
}

function totalHarga(daftar: Produk[]): number {
  return daftar.reduce((jumlah, p) => jumlah + p.harga, 0);
}

console.log(totalHarga([{ nama: "Kopi", harga: 15000 }, { nama: "Teh", harga: 8000 }]));
`,
        takeaway: 'Interface mendokumentasikan bentuk data dan editor langsung memberi peringatan jika kamu salah menulis field.',
        output: '23000'
      },
      {
        language: 'php',
        title: 'Tugas Sama di PHP',
        code: c`
<?php
$angka = [1, 2, 3, 4, 5, 6];
$genap = array_filter($angka, fn($n) => $n % 2 === 0);
$hasil = array_sum(array_map(fn($n) => $n ** 2, $genap));
echo $hasil;   // 56
`,
        takeaway: 'PHP memakai tanda $ di depan variabel. Gunakan === untuk perbandingan ketat.',
        output: '56'
      },
      {
        language: 'ruby',
        title: 'Tugas Sama di Ruby',
        code: c`
angka = [1, 2, 3, 4, 5, 6]
hasil = angka.select(&:even?).map { |n| n ** 2 }.sum
puts hasil   # 56
`,
        takeaway: 'Ruby sangat ekspresif sehingga hampir terbaca seperti kalimat bahasa Inggris.',
        output: '56'
      },
      {
        language: 'bash',
        title: 'Skrip Bash: Backup Otomatis',
        code: c`
#!/usr/bin/env bash
set -euo pipefail                      # berhenti jika ada error atau variabel kosong

SUMBER="./data"
TUJUAN="./backup/data-$(date +%F).tar.gz"

mkdir -p ./backup
tar -czf "$TUJUAN" "$SUMBER"           # TANDA KUTIP wajib di sekitar variabel
echo "Backup selesai: $TUJUAN"
`,
        takeaway: 'Selalu beri tanda kutip pada variabel di Bash. Tanpa kutip, nama file berspasi akan pecah menjadi beberapa argumen.',
        output: 'Backup selesai: ./backup/data-2026-10-31.tar.gz'
      }
    ],
    vibeWarnings: [
      {
        severity: 'danger',
        title: 'eval(), exec(), dan perintah shell dari input user',
        problem: 'Kode AI kadang memakai eval(), exec(), os.system(), atau child_process.exec() dengan teks dari pengguna. Penyerang bisa menjalankan perintah apa pun di servermu.',
        fix: 'Jangan pernah mengeksekusi string dari input pengguna. Pakai fungsi spesifik atau daftar argumen (execFile, subprocess.run dengan list) dan validasi ketat.'
      },
      {
        severity: 'warning',
        title: 'Lupa await dan error asinkron',
        problem: 'Di JavaScript, memanggil fungsi async tanpa await membuat kode lanjut sebelum data siap, dan error di dalamnya bisa hilang tanpa terdeteksi (unhandled rejection).',
        fix: 'Gunakan await, bungkus dalam try/catch, dan periksa pesan unhandled rejection di log.'
      },
      {
        severity: 'warning',
        title: 'Memakai tipe any di TypeScript',
        problem: 'any mematikan semua pengecekan tipe sehingga TypeScript tidak memberi perlindungan sama sekali.',
        fix: 'Definisikan interface/type yang jelas dan aktifkan "strict": true di tsconfig.'
      }
    ],
    quiz: {
      question: 'Kenapa TypeScript sering dipilih dibanding JavaScript biasa pada proyek yang cukup besar?',
      options: ['Karena jalan langsung di CPU tanpa runtime', 'Karena tipe statis membantu menangkap kesalahan lebih awal', 'Karena otomatis aman dari semua serangan', 'Karena tidak perlu dikompilasi lagi'],
      correctIndex: 1,
      explanation: 'TypeScript menambahkan pengecekan tipe saat pengembangan. Ia tetap dikompilasi menjadi JavaScript dan tidak otomatis membuat aplikasi aman.'
    },
    moreQuizzes: [
      {
        question: 'Fungsi fetch di JavaScript untuk status HTTP 404 akan...',
        options: ['Selalu melempar error', 'Tetap berhasil (resolve) sehingga kamu harus cek res.ok', 'Menutup program', 'Mengulang otomatis'],
        correctIndex: 1,
        explanation: 'fetch hanya melempar error untuk kegagalan jaringan. Status 4xx/5xx tetap dianggap respons sukses sehingga harus dicek manual.'
      },
      {
        question: 'Cara paling aman menjalankan perintah sistem yang melibatkan input pengguna adalah...',
        options: ['Menyambung string langsung ke perintah', 'Memakai eval', 'Menggunakan fungsi dengan daftar argumen terpisah dan validasi ketat', 'Menonaktifkan semua error'],
        correctIndex: 2,
        explanation: 'Dengan argumen terpisah dan validasi, input tidak bisa menyisipkan perintah tambahan (command injection).'
      }
    ]
  },
  {
    id: 23,
    track: 'bahasa',
    stage: 3,
    stageLabel: 'Tahap 3: Bahasa Backend & Mobile',
    level: 'Junior',
    title: 'Java, C#, Kotlin, Go, Swift & Dart',
    subtitle: 'Bahasa untuk backend skala besar, aplikasi enterprise, dan aplikasi mobile.',
    accentColor: 'from-orange-400 to-red-500',
    iconName: 'Smartphone',
    analogyTitle: 'Analogi Kendaraan Niaga dan Kendaraan Pribadi',
    analogyContent:
      'Java dan C# seperti truk dan bus kota: aturan ketat, kapasitas besar, ekosistem matang, dipakai bank dan perusahaan besar. Go seperti sepeda motor kurir: ringan, cepat dibuat dan dijalankan, bagus untuk layanan jaringan. Kotlin dan Swift adalah kendaraan resmi Android dan iOS. Dart (Flutter) adalah satu kendaraan yang bisa dipakai di dua jalan sekaligus, Android dan iOS.',
    whyItMatters:
      'Saat AI menyarankan backend Spring Boot, aplikasi mobile Flutter, atau microservice Go, kamu perlu tahu bentuk kode, kekuatan, dan jebakan khas tiap bahasa agar bisa menilai apakah pilihannya masuk akal.',
    subTopics: [
      { id: 'm23-1', title: 'Java dan Kotlin', casualExplanation: 'Java berjalan di JVM, dominan di enterprise (Spring). Kotlin lebih ringkas, kompatibel dengan Java, dan bahasa utama Android.' },
      { id: 'm23-2', title: 'C# dan .NET', casualExplanation: 'Bahasa Microsoft untuk backend (ASP.NET), desktop, dan game (Unity). Mirip Java dengan fitur modern.' },
      { id: 'm23-3', title: 'Go (Golang)', casualExplanation: 'Sederhana, cepat dikompilasi, dan punya goroutine untuk konkurensi ringan. Favorit untuk API, CLI, dan infrastruktur cloud.' },
      { id: 'm23-4', title: 'Swift', casualExplanation: 'Bahasa Apple untuk iOS/macOS dengan optional untuk menangani nilai kosong secara aman.' },
      { id: 'm23-5', title: 'Dart dan Flutter', casualExplanation: 'Dart dipakai Flutter untuk membuat aplikasi mobile, web, dan desktop dari satu basis kode.' }
    ],
    codeSnippet: {
      language: 'java',
      title: 'OOP di Java: Class, Objek, dan Method',
      code: c`
public class Rekening {
    private double saldo;              // private: tidak bisa diubah sembarangan dari luar

    public Rekening(double saldoAwal) {
        this.saldo = saldoAwal;
    }

    public void tarik(double jumlah) {
        if (jumlah <= 0 || jumlah > saldo) {
            throw new IllegalArgumentException("Jumlah tidak valid");
        }
        saldo -= jumlah;
    }

    public double getSaldo() { return saldo; }

    public static void main(String[] args) {
        Rekening r = new Rekening(100000);
        r.tarik(30000);
        System.out.println(r.getSaldo());   // 70000.0
    }
}
`,
      takeaway: 'Enkapsulasi: data (saldo) dilindungi dan hanya bisa diubah lewat method yang memvalidasi. Konsep ini sama di Java, C#, Kotlin, Swift, dan Dart.',
      output: '70000.0'
    },
    howItWorksTitle: 'Cara Kerja Java/Kotlin/C# (VM) vs Go (Native)',
    howItWorks: [
      { title: '1. Java, Kotlin, C#', description: 'Source dikompilasi menjadi bytecode (JVM atau .NET IL). Bytecode itu berjalan di virtual machine yang sama di semua OS.' },
      { title: '2. JIT dan garbage collector', description: 'VM mengoptimalkan kode panas saat jalan dan membersihkan objek yang tidak dipakai secara otomatis.' },
      { title: '3. Go', description: 'Dikompilasi langsung menjadi satu file executable native tanpa VM, mudah di-deploy (copy satu file saja).' },
      { title: '4. Konkurensi', description: 'Java memakai thread, C# memakai async/await dan Task, Go memakai goroutine dan channel yang jauh lebih ringan.' }
    ],
    moreExamples: [
      {
        language: 'go',
        title: 'Go: Server HTTP Mini dan Goroutine',
        code: c`
package main

import (
    "fmt"
    "net/http"
    "sync"
)

func main() {
    var wg sync.WaitGroup
    for i := 1; i <= 3; i++ {
        wg.Add(1)
        go func(n int) {            // goroutine: tugas ringan berjalan bersamaan
            defer wg.Done()
            fmt.Println("Kerja ke-", n)
        }(i)
    }
    wg.Wait()                        // tunggu semua selesai

    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintln(w, "Halo dari Go")
    })
    http.ListenAndServe(":8080", nil)
}
`,
        takeaway: 'Kata kunci go menjalankan fungsi secara bersamaan. Selalu pastikan goroutine punya akhir (WaitGroup/context) agar tidak bocor.',
        output: 'Kerja ke- 2\nKerja ke- 1\nKerja ke- 3'
      },
      {
        language: 'kotlin',
        title: 'Kotlin: Null Safety dan Data Class',
        code: c`
data class Pengguna(val nama: String, val email: String?)   // email boleh null

fun main() {
    val p = Pengguna("Austi", null)
    println(p.email?.uppercase() ?: "Email belum diisi")      // aman, tanpa crash
}
`,
        takeaway: 'Tanda ? menandai nilai yang boleh kosong sehingga compiler memaksamu menanganinya. Ini mencegah NullPointerException yang terkenal.',
        output: 'Email belum diisi'
      },
      {
        language: 'swift',
        title: 'Swift: Optional',
        code: c`
let umurTeks: String = "25x"
if let umur = Int(umurTeks) {
    print("Umur:", umur)
} else {
    print("Input bukan angka")
}
`,
        takeaway: 'Int("25x") menghasilkan nil, bukan crash. if let membuka nilai hanya jika ada.',
        output: 'Input bukan angka'
      },
      {
        language: 'csharp',
        title: 'C#: LINQ dan Async',
        code: c`
using System.Linq;

var angka = new[] { 1, 2, 3, 4, 5, 6 };
var hasil = angka.Where(n => n % 2 == 0).Select(n => n * n).Sum();
Console.WriteLine(hasil);   // 56
`,
        takeaway: 'LINQ memberi gaya fungsional pada C# dengan tipe yang tetap ketat.',
        output: '56'
      },
      {
        language: 'dart',
        title: 'Dart/Flutter: Widget Sederhana',
        code: c`
import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(home: Halo()));

class Halo extends StatelessWidget {
  const Halo({super.key});
  @override
  Widget build(BuildContext context) {
    return const Scaffold(body: Center(child: Text("Halo Flutter")));
  }
}
`,
        takeaway: 'Di Flutter semuanya adalah widget yang tersusun bersarang seperti pohon. Ini konsep tree dari modul struktur data.',
        output: 'Menampilkan teks "Halo Flutter" di tengah layar'
      }
    ],
    vibeWarnings: [
      {
        severity: 'warning',
        title: 'Method atau library yang dikarang AI (hallucination)',
        problem: 'AI kadang menulis method yang tidak ada atau memakai versi API lama. Kode tampak meyakinkan tapi gagal saat dijalankan, atau memakai paket tiruan berbahaya.',
        fix: 'Cek ke dokumentasi resmi, pastikan versi library sama, dan jangan install paket yang namanya tidak kamu kenali sebelum memeriksanya.'
      },
      {
        severity: 'warning',
        title: 'Kebocoran goroutine, thread, dan koneksi',
        problem: 'Tugas konkuren yang tidak pernah selesai atau koneksi database yang tidak ditutup lama-lama menghabiskan memori dan membuat server mati.',
        fix: 'Pakai context dengan timeout, defer untuk menutup resource, dan connection pool.'
      }
    ],
    quiz: {
      question: 'Apa keunggulan utama null safety pada Kotlin dan Swift?',
      options: ['Program berjalan tanpa memori', 'Compiler memaksa kita menangani nilai kosong sehingga mengurangi crash null pointer', 'Menghilangkan kebutuhan test', 'Mengenkripsi data'],
      correctIndex: 1,
      explanation: 'Dengan membedakan tipe yang boleh null dan tidak, kesalahan akses nilai kosong terdeteksi saat kompilasi.'
    },
    moreQuizzes: [
      {
        question: 'Kenapa aplikasi Go mudah di-deploy?',
        options: ['Karena butuh VM besar', 'Karena dikompilasi menjadi satu executable native', 'Karena hanya jalan di Windows', 'Karena memakai Python di dalamnya'],
        correctIndex: 1,
        explanation: 'Go menghasilkan satu file binary mandiri sehingga cukup disalin ke server.'
      },
      {
        question: 'Apa yang harus kamu lakukan jika AI memakai method library yang kamu tidak kenal?',
        options: ['Langsung percaya', 'Periksa dokumentasi resmi dan versinya', 'Hapus semua kode', 'Tambahkan lebih banyak library'],
        correctIndex: 1,
        explanation: 'Dokumentasi resmi adalah sumber kebenaran. AI bisa salah dengan nada sangat yakin.'
      }
    ]
  },
  {
    id: 24,
    track: 'bahasa',
    stage: 4,
    stageLabel: 'Tahap 4: Bahasa Sistem, Data & Memilih Bahasa',
    level: 'Mid-Level',
    title: 'C, C++, Rust, SQL & Cara Memilih Bahasa',
    subtitle: 'Bahasa dekat mesin, bahasa data, dan panduan memilih bahasa yang tepat.',
    accentColor: 'from-red-400 to-rose-600',
    iconName: 'Cpu',
    analogyTitle: 'Analogi Mekanik Mesin dan Pustakawan Data',
    analogyContent:
      'C dan C++ seperti mekanik yang memegang mesin langsung: kontrol penuh dan sangat cepat, tapi satu baut salah bisa merusak mesin (memory bug). Rust seperti mekanik dengan checklist ketat dari inspektur yang tidak mengizinkan mesin dinyalakan jika ada baut longgar (compiler memeriksa kepemilikan memori). SQL seperti pustakawan: kamu cukup bilang buku apa yang kamu mau, ia yang tahu cara mencarinya.',
    whyItMatters:
      'Kerentanan paling berbahaya di dunia (buffer overflow, use-after-free) lahir dari bahasa tanpa pengaman memori. SQL ada di hampir setiap aplikasi, dan SQL yang disusun sembarangan adalah sumber celah injection. Memahami keduanya melindungimu dari banyak masalah serius.',
    subTopics: [
      { id: 'm24-1', title: 'C dan C++', casualExplanation: 'Kontrol memori manual lewat pointer. Dipakai di OS, game engine, dan embedded (ESP32). Cepat tapi rawan bug memori.' },
      { id: 'm24-2', title: 'Rust', casualExplanation: 'Cepat seperti C tapi aman memori lewat ownership dan borrowing yang dicek compiler. Kurva belajar curam.' },
      { id: 'm24-3', title: 'SQL', casualExplanation: 'Bahasa deklaratif untuk database relasional: SELECT, INSERT, UPDATE, DELETE, JOIN, GROUP BY, dan index.' },
      { id: 'm24-4', title: 'Bahasa lain yang perlu dikenal', casualExplanation: 'R/Julia (statistik, sains), Scala (big data), Haskell/Elixir (fungsional), Lua (scripting game), Assembly (kode mesin), COBOL (sistem bank lama).' },
      { id: 'm24-5', title: 'Cara memilih bahasa', casualExplanation: 'Pertimbangkan masalahnya, ekosistem, performa, tim, kemudahan deploy, dan keamanan, bukan sekadar popularitas.' }
    ],
    codeSnippet: {
      language: 'sql',
      title: 'SQL: SELECT, JOIN, dan GROUP BY',
      code: c`
-- Tabel: pengguna(id, nama)   pesanan(id, pengguna_id, total)

SELECT p.nama,
       COUNT(o.id)   AS jumlah_pesanan,
       SUM(o.total)  AS total_belanja
FROM pengguna p
JOIN pesanan o ON o.pengguna_id = p.id
WHERE o.total > 0
GROUP BY p.id, p.nama
HAVING SUM(o.total) > 100000
ORDER BY total_belanja DESC
LIMIT 5;
`,
      takeaway: 'Kamu menjelaskan hasil yang diinginkan (5 pengguna dengan belanja terbanyak), database yang menentukan caranya. Tambahkan INDEX pada kolom yang sering dipakai untuk WHERE dan JOIN.',
      output: 'nama   | jumlah_pesanan | total_belanja\nBudi   | 12             | 2450000\nSiti   | 8              | 1980000'
    },
    howItWorksTitle: 'Memori: Manual (C), Garbage Collector, dan Ownership (Rust)',
    howItWorks: [
      { title: '1. Stack dan heap', description: 'Variabel kecil hidup di stack (otomatis dibersihkan). Data besar/dinamis hidup di heap dan harus dikelola.' },
      { title: '2. C: manual', description: 'Programmer memanggil malloc dan free. Lupa free menyebabkan kebocoran, free dua kali atau pakai setelah free menyebabkan crash atau celah keamanan.' },
      { title: '3. Java/Go/Python: garbage collector', description: 'Runtime melacak objek yang tidak dipakai dan membersihkannya. Aman, dengan sedikit biaya performa.' },
      { title: '4. Rust: ownership', description: 'Setiap nilai punya satu pemilik. Saat pemilik keluar scope, memori dibebaskan otomatis. Compiler menolak kode yang berpotensi bug memori.' }
    ],
    moreExamples: [
      {
        language: 'c',
        title: 'C: Buffer Overflow (Rentan) vs Aman',
        code: c`
#include <stdio.h>
#include <string.h>

int main(void) {
    char nama[8];

    // RENTAN: input panjang menimpa memori di sekitarnya
    // strcpy(nama, "NamaYangSangatPanjangSekali");

    // AMAN: batasi jumlah byte yang disalin dan akhiri dengan null
    strncpy(nama, "NamaYangSangatPanjangSekali", sizeof(nama) - 1);
    nama[sizeof(nama) - 1] = '\0';

    printf("%s\n", nama);   // NamaYang
    return 0;
}
`,
        takeaway: 'strcpy tidak memeriksa panjang buffer. Kode C buatan AI sering memakainya. Selalu batasi ukuran atau pakai fungsi yang lebih aman (snprintf).',
        output: 'NamaYang'
      },
      {
        language: 'rust',
        title: 'Rust: Ownership Mencegah Bug Memori',
        code: c`
fn main() {
    let a = String::from("halo");
    let b = a;                 // kepemilikan PINDAH ke b
    // println!("{}", a);      // ERROR compile: a sudah tidak valid
    println!("{}", b);

    let c = String::from("dunia");
    let panjang = hitung(&c);  // meminjam (borrow), c tetap milik main
    println!("{} {}", c, panjang);
}

fn hitung(teks: &String) -> usize {
    teks.len()
}
`,
        takeaway: 'Compiler Rust menolak kode yang memakai data setelah dipindahkan. Bug use-after-free ketahuan sebelum program ada di server.',
        output: 'halo\ndunia 5'
      },
      {
        language: 'cpp',
        title: 'C++: Vector dan Smart Pointer',
        code: c`
#include <iostream>
#include <memory>
#include <vector>

int main() {
    std::vector<int> angka = {1, 2, 3};
    angka.push_back(4);

    auto p = std::make_unique<int>(42);   // dibebaskan otomatis saat keluar scope
    std::cout << angka.size() << " " << *p << std::endl;
    return 0;
}
`,
        takeaway: 'C++ modern menghindari new/delete manual dengan vector dan smart pointer agar kebocoran memori berkurang.',
        output: '4 42'
      }
    ],
    vibeWarnings: [
      {
        severity: 'danger',
        title: 'Kode C/C++ buatan AI dengan fungsi tidak aman',
        problem: 'strcpy, gets, sprintf, dan aritmetika pointer tanpa batas dapat menimbulkan buffer overflow, celah klasik untuk eksekusi kode oleh penyerang.',
        fix: 'Pakai fungsi dengan batas ukuran, aktifkan warning compiler (-Wall -Wextra), gunakan sanitizer (-fsanitize=address), atau pilih Rust/Go untuk kode baru.'
      },
      {
        severity: 'danger',
        title: 'Menyusun query SQL dengan string biasa',
        problem: 'Menggabungkan input user langsung ke query membuka SQL injection. Di modul Secure Coding kamu akan melihat contohnya.',
        fix: 'Selalu pakai parameterized query / prepared statement.'
      },
      {
        severity: 'info',
        title: 'Query tanpa index pada tabel besar',
        problem: 'SELECT pada tabel jutaan baris tanpa index memindai seluruh tabel (O(n)) dan membuat aplikasi lambat.',
        fix: 'Buat index di kolom yang sering dipakai pada WHERE/JOIN dan periksa dengan EXPLAIN.'
      }
    ],
    quiz: {
      question: 'Apa keunggulan utama Rust dibanding C dalam hal keamanan memori?',
      options: ['Rust tidak punya compiler', 'Aturan ownership dan borrowing dicek compiler sehingga banyak bug memori ditolak sebelum program jalan', 'Rust memakai garbage collector besar', 'Rust hanya berjalan di browser'],
      correctIndex: 1,
      explanation: 'Ownership memastikan setiap data punya satu pemilik jelas, sehingga use-after-free dan data race dicegah saat kompilasi.'
    },
    moreQuizzes: [
      {
        question: 'Perintah SQL mana yang dipakai untuk menggabungkan data dari dua tabel berdasarkan kolom yang berelasi?',
        options: ['MERGE TABLE', 'JOIN', 'SPLIT', 'LOOP'],
        correctIndex: 1,
        explanation: 'JOIN menghubungkan baris dari dua tabel berdasarkan kondisi relasi (misal pengguna_id = id).'
      },
      {
        question: 'Untuk proyek bot Telegram sederhana yang cepat dibuat dan punya banyak library, bahasa yang paling masuk akal adalah...',
        options: ['Assembly', 'JavaScript (Node.js) atau Python', 'COBOL', 'C dengan pointer manual'],
        correctIndex: 1,
        explanation: 'Node.js dan Python punya library bot matang dan cepat dikembangkan. Pilih bahasa sesuai masalah, bukan paling rumit.'
      }
    ]
  }
];
