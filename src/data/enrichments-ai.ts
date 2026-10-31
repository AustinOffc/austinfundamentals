import type { BaseModule } from './types';
import { c } from './helpers';

export type Enrichment = Pick<BaseModule, 'howItWorksTitle' | 'howItWorks' | 'moreExamples' | 'vibeWarnings' | 'moreQuizzes'>;

/** Materi pelengkap untuk modul 1-9 (jalur AI Engineer), digabung otomatis di curriculum.ts. */
export const AI_ENRICHMENTS: Record<number, Enrichment> = {
  1: {
    howItWorksTitle: 'Bagaimana AI Belajar dengan Gradient Descent',
    howItWorks: [
      { title: '1. Tebak dulu', description: 'Model memulai dengan angka (bobot) acak dan membuat prediksi pertama yang hampir pasti meleset.' },
      { title: '2. Hitung seberapa salah', description: 'Fungsi loss mengukur jarak antara tebakan dan jawaban benar menjadi satu angka error.' },
      { title: '3. Cari arah perbaikan', description: 'Turunan (gradien) memberi tahu bobot mana yang harus naik atau turun agar error mengecil.' },
      { title: '4. Melangkah sedikit, ulangi', description: 'Bobot digeser sedikit (learning rate) ke arah yang benar, lalu proses diulang ribuan kali sampai error cukup kecil.' }
    ],
    moreExamples: [
      {
        language: 'python',
        title: 'Gradient Descent Mini: Menemukan Titik Terendah',
        code: c`
# Cari x yang membuat f(x) = (x - 3)^2 paling kecil (jawabannya x = 3)
x = 10.0
learning_rate = 0.1

for langkah in range(25):
    gradien = 2 * (x - 3)          # turunan dari (x - 3)^2
    x = x - learning_rate * gradien
print(round(x, 4))                  # mendekati 3.0
`,
        takeaway: 'Inilah inti pelatihan semua model AI: hitung gradien, geser bobot sedikit, ulangi. Model raksasa hanya melakukan hal yang sama dengan miliaran bobot.',
        output: '3.0095'
      }
    ],
    vibeWarnings: [
      {
        severity: 'info',
        title: 'Menerima rumus dari AI tanpa memeriksa satuan dan arah',
        problem: 'Rumus statistik atau gradien yang dibuat AI bisa terlihat benar tetapi tanda atau satuannya terbalik (misalnya menaikkan loss alih-alih menurunkan).',
        fix: 'Uji dengan contoh kecil yang jawabannya kamu ketahui, dan cek apakah loss benar-benar turun setiap iterasi.'
      },
      {
        severity: 'warning',
        title: 'Menganggap probabilitas model sebagai kepastian',
        problem: 'Skor 0.92 bukan berarti 92% pasti benar di dunia nyata, apalagi jika datanya berbeda dari data latih.',
        fix: 'Evaluasi dengan data uji terpisah dan komunikasikan ketidakpastian kepada pengguna.'
      }
    ],
    moreQuizzes: [
      {
        question: 'Apa fungsi learning rate pada gradient descent?',
        options: ['Menentukan ukuran langkah perubahan bobot di setiap iterasi', 'Menentukan jumlah data', 'Mengubah bahasa pemrograman', 'Mengenkripsi model'],
        correctIndex: 0,
        explanation: 'Learning rate terlalu besar membuat model melompati titik terbaik, terlalu kecil membuat pelatihan sangat lambat.'
      },
      {
        question: 'Jika loss tidak turun setelah banyak iterasi, apa yang sebaiknya dicek lebih dulu?',
        options: ['Learning rate, data, dan arah gradien', 'Warna tema editor', 'Nama file', 'Ukuran monitor'],
        correctIndex: 0,
        explanation: 'Learning rate yang salah, data bermasalah, atau gradien terbalik adalah penyebab umum loss tidak turun.'
      }
    ]
  },
  2: {
    howItWorksTitle: 'Alur Kerja Proyek Python AI dari Awal',
    howItWorks: [
      { title: '1. Siapkan lingkungan terisolasi', description: 'Buat virtual environment (python -m venv .venv) agar library proyek tidak bentrok dengan proyek lain.' },
      { title: '2. Catat dependency', description: 'Simpan versi library di requirements.txt agar proyek bisa dijalankan ulang di mesin lain.' },
      { title: '3. Tulis kode modular', description: 'Pisahkan logika ke fungsi dan class kecil, bukan satu file raksasa.' },
      { title: '4. Uji dan commit', description: 'Jalankan test, lalu commit ke Git dengan pesan yang jelas.' }
    ],
    moreExamples: [
      {
        language: 'python',
        title: 'Struktur Data & Algoritma dalam Kasus AI: Top-K Terdekat',
        code: c`
import heapq

dokumen = {"d1": 0.31, "d2": 0.88, "d3": 0.54, "d4": 0.93, "d5": 0.12}

# Ambil 3 dokumen dengan skor kemiripan tertinggi tanpa mengurutkan semuanya
top3 = heapq.nlargest(3, dokumen.items(), key=lambda kv: kv[1])
print(top3)
`,
        takeaway: 'Mesin pencari dan RAG selalu mencari top-K hasil. Pemilihan struktur data (heap) menghemat waktu saat datanya jutaan.',
        output: "[('d4', 0.93), ('d2', 0.88), ('d3', 0.54)]"
      }
    ],
    vibeWarnings: [
      {
        severity: 'danger',
        title: 'Memuat model atau data dengan pickle dari sumber tidak dikenal',
        problem: 'File pickle dapat menjalankan kode sembarang saat dimuat. Mengunduh model .pkl dari internet sama dengan menjalankan program asing.',
        fix: 'Pakai format aman (safetensors, ONNX, JSON) dan hanya muat file dari sumber tepercaya.'
      },
      {
        severity: 'warning',
        title: 'Menginstal library tanpa virtual environment',
        problem: 'Instalasi global membuat versi library bentrok dan proyek sulit direproduksi.',
        fix: 'Selalu gunakan venv atau conda, dan catat versi di requirements.txt.'
      }
    ],
    moreQuizzes: [
      {
        question: 'Kenapa virtual environment penting?',
        options: ['Membuat Python lebih cepat', 'Mengisolasi library tiap proyek agar tidak saling bentrok', 'Mengenkripsi kode', 'Menghapus file lama'],
        correctIndex: 1,
        explanation: 'Setiap proyek memiliki versi library sendiri sehingga lingkungan kerja stabil dan bisa direproduksi.'
      },
      {
        question: 'Risiko utama memuat file pickle dari sumber tidak dikenal adalah...',
        options: ['Ukuran file besar', 'Dapat mengeksekusi kode berbahaya saat dimuat', 'Hanya bisa dibuka di Windows', 'Tidak ada risiko'],
        correctIndex: 1,
        explanation: 'Proses unpickle bisa memicu eksekusi kode, jadi jangan memuat pickle yang tidak dipercaya.'
      }
    ]
  },
  3: {
    howItWorksTitle: 'Alur Pipeline Data yang Rapi',
    howItWorks: [
      { title: '1. Kumpulkan', description: 'Ambil data dari CSV, database, atau API. Catat sumber dan tanggalnya.' },
      { title: '2. Bersihkan', description: 'Tangani nilai kosong, duplikat, tipe yang salah, dan outlier.' },
      { title: '3. Transformasi', description: 'Ubah format, gabungkan tabel, buat fitur baru, dan normalisasi skala.' },
      { title: '4. Simpan dan validasi', description: 'Simpan hasil bersih dan cek ulang jumlah baris, tipe, dan rentang nilai.' }
    ],
    moreExamples: [
      {
        language: 'python',
        title: 'Data Leakage: Kesalahan Halus yang Merusak Model',
        code: c`
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

scaler = StandardScaler()
X_train_s = scaler.fit_transform(X_train)   # BENAR: belajar skala hanya dari data latih
X_test_s = scaler.transform(X_test)         # data uji hanya ditransformasi

# SALAH: scaler.fit(X) pada seluruh data sebelum split
# membuat informasi data uji "bocor" ke proses latih sehingga skor tampak lebih bagus dari kenyataan
`,
        takeaway: 'Selalu split data lebih dulu, baru lakukan preprocessing berbasis statistik. Kode AI sering membalik urutan ini.',
        output: 'Skor evaluasi yang jujur pada data yang belum pernah dilihat model.'
      }
    ],
    vibeWarnings: [
      {
        severity: 'danger',
        title: 'Data pribadi masuk ke dataset dan prompt',
        problem: 'Nomor telepon, email, atau data transaksi pengguna yang dikirim ke layanan AI pihak ketiga atau disimpan tanpa kontrol dapat melanggar privasi dan aturan perlindungan data.',
        fix: 'Anonimkan atau hapus data pribadi sebelum diproses, dan batasi apa saja yang dikirim ke API eksternal.'
      },
      {
        severity: 'warning',
        title: 'Menghapus baris kosong tanpa melihat penyebabnya',
        problem: 'dropna() otomatis dari AI bisa membuang separuh data dan membuat model bias.',
        fix: 'Periksa pola nilai kosong, lalu putuskan: isi, tandai, atau hapus.'
      }
    ],
    moreQuizzes: [
      {
        question: 'Apa itu data leakage?',
        options: ['Data hilang karena server mati', 'Informasi dari data uji ikut masuk ke proses pelatihan sehingga evaluasi terlalu optimis', 'Data dienkripsi', 'Data terlalu besar'],
        correctIndex: 1,
        explanation: 'Leakage membuat skor terlihat bagus tetapi model gagal pada data baru.'
      },
      {
        question: 'Sebelum mengirim data pelanggan ke API AI eksternal, langkah yang benar adalah...',
        options: ['Kirim semuanya apa adanya', 'Hapus atau anonimkan data pribadi yang tidak diperlukan', 'Tambahkan password ke nama file', 'Ubah ke huruf besar'],
        correctIndex: 1,
        explanation: 'Minimalkan data: kirim hanya yang dibutuhkan dan lindungi identitas pengguna.'
      }
    ]
  },
  4: {
    howItWorksTitle: 'Siklus Hidup Model Machine Learning',
    howItWorks: [
      { title: '1. Bagi data', description: 'Pisahkan data latih (belajar) dan data uji (ujian akhir) agar penilaian jujur.' },
      { title: '2. Latih model', description: 'Algoritma mencari pola dengan meminimalkan error pada data latih.' },
      { title: '3. Evaluasi', description: 'Ukur performa pada data uji dengan metrik yang sesuai (MAE, akurasi, F1).' },
      { title: '4. Perbaiki', description: 'Jika overfitting atau underfitting, ubah fitur, kompleksitas model, atau jumlah data lalu ulangi.' }
    ],
    moreExamples: [
      {
        language: 'python',
        title: 'Mendeteksi Overfitting dengan Membandingkan Skor',
        code: c`
from sklearn.tree import DecisionTreeRegressor

model = DecisionTreeRegressor(max_depth=None)       # pohon sangat dalam: mudah menghafal
model.fit(X_train, y_train)

print("Skor latih:", model.score(X_train, y_train))  # 1.00  (hafal semua)
print("Skor uji  :", model.score(X_test, y_test))    # 0.62  (gagal di data baru)

model2 = DecisionTreeRegressor(max_depth=5).fit(X_train, y_train)
print("Skor uji (depth=5):", model2.score(X_test, y_test))   # lebih stabil
`,
        takeaway: 'Jarak besar antara skor latih dan skor uji adalah tanda overfitting. Model yang hanya menghafal tampak sempurna di demo, gagal di dunia nyata.',
        output: 'Skor latih: 1.0\nSkor uji  : 0.62\nSkor uji (depth=5): 0.81'
      }
    ],
    vibeWarnings: [
      {
        severity: 'warning',
        title: 'Hanya melihat akurasi pada data latih',
        problem: 'Model yang menghafal data latih menghasilkan skor hampir sempurna sehingga tampak hebat padahal tidak berguna.',
        fix: 'Selalu laporkan skor pada data uji atau cross-validation.'
      },
      {
        severity: 'warning',
        title: 'Memakai akurasi untuk data tidak seimbang',
        problem: 'Jika 99% transaksi normal, model yang selalu menebak "normal" berakurasi 99% tetapi gagal menangkap semua penipuan.',
        fix: 'Gunakan precision, recall, dan F1, serta periksa confusion matrix.'
      }
    ],
    moreQuizzes: [
      {
        question: 'Skor latih 99% tetapi skor uji 60% menandakan...',
        options: ['Underfitting', 'Overfitting', 'Model sempurna', 'Data kosong'],
        correctIndex: 1,
        explanation: 'Model menghafal data latih dan gagal menggeneralisasi ke data baru.'
      },
      {
        question: 'Metrik yang lebih tepat untuk mendeteksi penipuan yang sangat jarang terjadi adalah...',
        options: ['Akurasi saja', 'Recall dan precision / F1', 'Jumlah baris', 'Ukuran file'],
        correctIndex: 1,
        explanation: 'Pada data tidak seimbang, akurasi menyesatkan, sedangkan recall dan precision menilai kemampuan menangkap kelas langka.'
      }
    ]
  },
  5: {
    howItWorksTitle: 'Satu Putaran Pelatihan Neural Network',
    howItWorks: [
      { title: '1. Forward pass', description: 'Input mengalir lapis demi lapis: kalikan bobot, tambah bias, aktivasi, hingga muncul prediksi.' },
      { title: '2. Hitung loss', description: 'Prediksi dibandingkan dengan jawaban benar untuk mendapat satu angka error.' },
      { title: '3. Backpropagation', description: 'Error dihitung mundur untuk mengetahui kontribusi setiap bobot terhadap kesalahan (gradien).' },
      { title: '4. Update bobot', description: 'Optimizer (misal Adam) menggeser bobot sedikit. Ulangi untuk ribuan batch dan banyak epoch.' }
    ],
    moreExamples: [
      {
        language: 'python',
        title: 'Loop Pelatihan PyTorch yang Lengkap',
        code: c`
import torch, torch.nn as nn

model = nn.Sequential(nn.Linear(2, 8), nn.ReLU(), nn.Linear(8, 1))
loss_fn = nn.MSELoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.01)

X = torch.tensor([[0., 0.], [0., 1.], [1., 0.], [1., 1.]])
y = torch.tensor([[0.], [1.], [1.], [0.]])           # XOR

for epoch in range(2000):
    optimizer.zero_grad()          # reset gradien lama
    pred = model(X)                # forward pass
    loss = loss_fn(pred, y)        # hitung error
    loss.backward()                # backpropagation
    optimizer.step()               # update bobot
print(round(loss.item(), 4))
`,
        takeaway: 'Lima baris di dalam loop (zero_grad, forward, loss, backward, step) adalah pola yang sama di hampir semua pelatihan PyTorch.',
        output: '0.0003'
      }
    ],
    vibeWarnings: [
      {
        severity: 'info',
        title: 'Lupa zero_grad() atau model.eval()',
        problem: 'Gradien menumpuk antar iterasi dan mode dropout tetap aktif saat prediksi sehingga hasil tidak stabil.',
        fix: 'Pastikan pola latih standar dan pakai model.eval() serta torch.no_grad() saat inferensi.'
      },
      {
        severity: 'warning',
        title: 'Menjalankan notebook atau skrip training dari sumber asing',
        problem: 'Repo atau notebook "tinggal jalankan" bisa mengunduh dan mengeksekusi kode tidak dikenal, termasuk mengirim data keluar.',
        fix: 'Baca kodenya dulu, jalankan di lingkungan terisolasi, dan jangan beri akses secret.'
      }
    ],
    moreQuizzes: [
      {
        question: 'Tugas backpropagation adalah...',
        options: ['Menyimpan model', 'Menghitung seberapa besar tiap bobot berkontribusi pada error', 'Membersihkan data', 'Mengubah bahasa pemrograman'],
        correctIndex: 1,
        explanation: 'Backpropagation menghitung gradien dari output ke input sehingga optimizer tahu cara memperbaiki bobot.'
      },
      {
        question: 'Fungsi aktivasi seperti ReLU diperlukan agar jaringan...',
        options: ['Lebih kecil', 'Bisa mempelajari pola non-linear', 'Tidak butuh data', 'Bebas dari error'],
        correctIndex: 1,
        explanation: 'Tanpa aktivasi non-linear, tumpukan lapisan linear hanya setara satu lapisan linear.'
      }
    ]
  },
  6: {
    howItWorksTitle: 'Dari Teks Mentah ke Angka yang Dipahami Model',
    howItWorks: [
      { title: '1. Tokenisasi', description: 'Kalimat dipecah menjadi potongan (kata atau sub-kata) yang masing-masing punya ID.' },
      { title: '2. Embedding', description: 'Setiap token diubah menjadi vektor angka yang menangkap makna. Kata bermakna mirip berdekatan di ruang vektor.' },
      { title: '3. Attention', description: 'Model menimbang kata mana yang paling relevan dengan kata lain dalam konteks kalimat.' },
      { title: '4. Output', description: 'Hasilnya dipakai untuk klasifikasi, pencarian makna, atau menebak token berikutnya.' }
    ],
    moreExamples: [
      {
        language: 'python',
        title: 'Cosine Similarity: Mengukur Kemiripan Makna',
        code: c`
import numpy as np

def cosine(a, b):
    return float(np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b)))

# Embedding contoh (disederhanakan jadi 3 dimensi)
kucing = np.array([0.9, 0.1, 0.0])
anjing = np.array([0.8, 0.2, 0.1])
mobil  = np.array([0.0, 0.1, 0.9])

print(round(cosine(kucing, anjing), 2))   # tinggi: makna dekat
print(round(cosine(kucing, mobil), 2))    # rendah: makna jauh
`,
        takeaway: 'Pencarian semantik dan RAG bekerja dengan membandingkan sudut antar vektor, bukan mencocokkan kata persis.',
        output: '0.98\n0.01'
      }
    ],
    vibeWarnings: [
      {
        severity: 'warning',
        title: 'Memakai model embedding yang berbeda untuk indexing dan query',
        problem: 'Vektor dari dua model berbeda tidak sebanding sehingga hasil pencarian tampak acak.',
        fix: 'Pakai model embedding dan versi yang sama untuk dokumen dan pertanyaan.'
      },
      {
        severity: 'danger',
        title: 'Prompt injection lewat teks yang diproses',
        problem: 'Dokumen atau email yang berisi kalimat seperti "abaikan instruksi sebelumnya" dapat membajak model yang memproses teks tersebut.',
        fix: 'Pisahkan instruksi sistem dari data, batasi hak akses model, dan jangan jalankan aksi sensitif tanpa konfirmasi.'
      }
    ],
    moreQuizzes: [
      {
        question: 'Embedding digunakan untuk...',
        options: ['Mengompres gambar', 'Mengubah teks menjadi vektor yang menangkap makna', 'Menghapus stopword saja', 'Membuat database'],
        correctIndex: 1,
        explanation: 'Embedding memetakan teks ke ruang vektor sehingga kemiripan makna dapat dihitung secara numerik.'
      },
      {
        question: 'Apa itu prompt injection?',
        options: ['Teks dalam data yang memanipulasi perintah model', 'Cara mempercepat model', 'Jenis database', 'Format file'],
        correctIndex: 0,
        explanation: 'Penyerang menyisipkan instruksi dalam data agar model mengikuti perintahnya, bukan perintah pemilik aplikasi.'
      }
    ]
  },
  7: {
    howItWorksTitle: 'Alur Sistem RAG dari Pertanyaan sampai Jawaban',
    howItWorks: [
      { title: '1. Indexing', description: 'Dokumen dipecah (chunking), diubah menjadi embedding, lalu disimpan di vector database.' },
      { title: '2. Retrieval', description: 'Pertanyaan pengguna di-embed lalu dicari potongan dokumen paling mirip (top-K).' },
      { title: '3. Augmentation', description: 'Potongan relevan dimasukkan ke prompt sebagai konteks, lengkap dengan instruksi "jawab hanya dari konteks".' },
      { title: '4. Generation', description: 'LLM menyusun jawaban berdasarkan konteks tersebut, idealnya dengan kutipan sumber.' }
    ],
    moreExamples: [
      {
        language: 'python',
        title: 'Prompt RAG yang Menekan Halusinasi',
        code: c`
def buat_prompt(pertanyaan, potongan):
    konteks = "\n\n".join(f"[{i+1}] {p}" for i, p in enumerate(potongan))
    return f"""Kamu asisten yang menjawab HANYA berdasarkan konteks di bawah.
Jika jawabannya tidak ada di konteks, jawab: "Saya tidak menemukan informasinya."
Sebutkan nomor sumber, misal [1].

KONTEKS:
{konteks}

PERTANYAAN: {pertanyaan}
JAWABAN:"""

print(buat_prompt("Berapa garansi produk?", ["Garansi produk 12 bulan.", "Pengiriman 2-3 hari."]))
`,
        takeaway: 'Instruksi tegas untuk menolak menjawab saat konteks kosong adalah pertahanan paling sederhana terhadap halusinasi.',
        output: 'Prompt berisi konteks bernomor dan aturan menjawab hanya dari konteks.'
      }
    ],
    vibeWarnings: [
      {
        severity: 'danger',
        title: 'Dokumen internal bocor lewat chatbot',
        problem: 'Jika semua dokumen masuk ke satu index tanpa kontrol akses, pengguna biasa bisa mendapat jawaban dari dokumen rahasia.',
        fix: 'Filter hasil retrieval berdasarkan hak akses pengguna sebelum masuk ke prompt.'
      },
      {
        severity: 'warning',
        title: 'Chunk terlalu besar atau terlalu kecil',
        problem: 'Chunk besar menyertakan noise, chunk kecil kehilangan konteks sehingga jawaban salah.',
        fix: 'Uji beberapa ukuran chunk dengan overlap dan ukur kualitas jawaban dengan pertanyaan evaluasi tetap.'
      }
    ],
    moreQuizzes: [
      {
        question: 'Tujuan utama RAG adalah...',
        options: ['Melatih ulang model dari nol', 'Memberi LLM konteks dari dokumen terkini agar jawaban lebih akurat', 'Memperkecil ukuran model', 'Menghapus prompt'],
        correctIndex: 1,
        explanation: 'RAG mengambil informasi relevan lebih dulu lalu menyertakannya dalam prompt sehingga jawaban berbasis sumber.'
      },
      {
        question: 'Apa risiko jika retrieval tidak memfilter berdasarkan hak akses pengguna?',
        options: ['Jawaban lebih panjang', 'Data rahasia dapat muncul pada jawaban pengguna yang tidak berhak', 'Model lebih lambat', 'Tidak ada risiko'],
        correctIndex: 1,
        explanation: 'Kontrol akses harus diterapkan pada tahap retrieval, bukan hanya pada tampilan akhir.'
      }
    ]
  },
  8: {
    howItWorksTitle: 'Loop Kerja AI Agent',
    howItWorks: [
      { title: '1. Terima tujuan', description: 'Pengguna memberi tugas, misalnya "cek stok dan buat ringkasan".' },
      { title: '2. Pilih tool', description: 'LLM memutuskan tool apa yang perlu dipanggil beserta argumennya dalam format terstruktur.' },
      { title: '3. Eksekusi di sisi aplikasi', description: 'KODE KAMU yang menjalankan tool (setelah validasi), bukan LLM. Hasilnya dikembalikan ke model.' },
      { title: '4. Ulangi sampai selesai', description: 'Model menilai hasil, memanggil tool lain jika perlu, hingga menghasilkan jawaban akhir (dengan batas langkah).' }
    ],
    moreExamples: [
      {
        language: 'typescript',
        title: 'Eksekusi Tool dengan Validasi dan Batas Langkah',
        code: c`
const TOOLS: Record<string, (args: any) => Promise<unknown>> = {
  cekStok: async ({ sku }) => {
    if (typeof sku !== "string" || !/^[A-Z0-9-]{3,20}$/.test(sku)) throw new Error("SKU tidak valid");
    return { sku, stok: 12 };
  }
};

async function jalankanAgent(tujuan: string) {
  for (let langkah = 0; langkah < 5; langkah++) {          // batas langkah: cegah loop tanpa ujung
    const aksi = await tanyaLLM(tujuan);
    if (aksi.tipe === "jawaban") return aksi.teks;
    const tool = TOOLS[aksi.nama];
    if (!tool) throw new Error("Tool tidak diizinkan");     // allowlist tool
    const hasil = await tool(aksi.argumen);
    tujuan += "\nHasil " + aksi.nama + ": " + JSON.stringify(hasil);
  }
  throw new Error("Batas langkah tercapai");
}
`,
        takeaway: 'Agent yang aman memakai allowlist tool, validasi argumen, dan batas langkah. LLM mengusulkan, kodemu yang memutuskan.',
        output: 'Agent berhenti dengan aman setelah maksimal 5 langkah.'
      }
    ],
    vibeWarnings: [
      {
        severity: 'danger',
        title: 'Memberi agent akses penuh ke shell, file, atau database',
        problem: 'Agent yang bisa menjalankan perintah apa pun dapat dibajak lewat prompt injection untuk menghapus data atau membocorkan secret.',
        fix: 'Beri tool sesempit mungkin (read-only bila cukup), sandbox, konfirmasi manusia untuk aksi destruktif, dan jangan sertakan secret di konteks.'
      },
      {
        severity: 'warning',
        title: 'Loop agent tanpa batas dan tanpa batas biaya',
        problem: 'Agent yang terus memanggil tool dan LLM dapat menghabiskan kuota API dalam semalam.',
        fix: 'Pasang batas langkah, timeout, dan batas anggaran token per tugas.'
      }
    ],
    moreQuizzes: [
      {
        question: 'Siapa yang sebenarnya mengeksekusi tool pada AI Agent?',
        options: ['LLM langsung', 'Kode aplikasi kamu, berdasarkan permintaan terstruktur dari LLM', 'Browser pengguna', 'Database'],
        correctIndex: 1,
        explanation: 'LLM hanya mengusulkan pemanggilan tool. Aplikasi yang memvalidasi dan menjalankannya.'
      },
      {
        question: 'Perlindungan yang tepat untuk agent yang punya tool berbahaya (hapus data) adalah...',
        options: ['Percaya penuh pada model', 'Allowlist tool, validasi argumen, dan konfirmasi manusia', 'Hapus logging', 'Perbesar batas langkah'],
        correctIndex: 1,
        explanation: 'Aksi destruktif membutuhkan lapisan kontrol di luar model.'
      }
    ]
  },
  9: {
    howItWorksTitle: 'Perjalanan Sistem AI ke Production',
    howItWorks: [
      { title: '1. Kemas', description: 'Bungkus aplikasi dalam container (Docker) agar lingkungan sama di mana pun.' },
      { title: '2. Otomatiskan rilis', description: 'CI/CD menjalankan test dan deploy otomatis setiap kali kode digabung.' },
      { title: '3. Lindungi dan hemat', description: 'Rate limit, caching, batas token, dan fallback model menjaga biaya serta ketersediaan.' },
      { title: '4. Amati', description: 'Log, metrik, dan tracing menampilkan latensi, biaya, dan kualitas jawaban sehingga masalah cepat ketahuan.' }
    ],
    moreExamples: [
      {
        language: 'typescript',
        title: 'Rate Limit Sederhana per User',
        code: c`
const jendela = new Map<string, { jumlah: number; reset: number }>();

export function izinkan(userId: string, batas = 20, menit = 1): boolean {
  const sekarang = Date.now();
  const catatan = jendela.get(userId);
  if (!catatan || catatan.reset < sekarang) {
    jendela.set(userId, { jumlah: 1, reset: sekarang + menit * 60_000 });
    return true;
  }
  if (catatan.jumlah >= batas) return false;     // tolak: terlalu banyak request
  catatan.jumlah++;
  return true;
}
`,
        takeaway: 'Tanpa batas, satu pengguna (atau penyerang) bisa menghabiskan seluruh anggaran API. Untuk banyak server pakai Redis agar hitungan dibagi bersama.',
        output: 'Request ke-21 dalam semenit mendapat penolakan.'
      }
    ],
    vibeWarnings: [
      {
        severity: 'danger',
        title: 'API key LLM ada di kode frontend',
        problem: 'Key yang dikirim ke browser bisa dilihat siapa pun lalu dipakai untuk menghabiskan kreditmu.',
        fix: 'Panggil API LLM dari backend, simpan key di environment server, dan beri batas penggunaan per user.'
      },
      {
        severity: 'warning',
        title: 'Cache semantik yang mencampur data antar pengguna',
        problem: 'Jawaban yang berisi data pribadi satu user bisa dikirim ke user lain jika cache tidak dipisah.',
        fix: 'Sertakan identitas/tenant dalam kunci cache atau jangan cache jawaban personal.'
      }
    ],
    moreQuizzes: [
      {
        question: 'Di mana API key LLM sebaiknya disimpan?',
        options: ['Di kode JavaScript frontend', 'Di environment variable pada server backend', 'Di URL', 'Di README'],
        correctIndex: 1,
        explanation: 'Key hanya boleh berada di server dan tidak pernah dikirim ke browser.'
      },
      {
        question: 'Apa manfaat observability pada sistem AI production?',
        options: ['Membuat model lebih pintar otomatis', 'Memantau latensi, biaya, dan kualitas sehingga masalah cepat terdeteksi', 'Menghilangkan kebutuhan test', 'Menghapus log'],
        correctIndex: 1,
        explanation: 'Dengan log, metrik, dan tracing kamu tahu apa yang terjadi di sistem nyata dan dapat memperbaikinya dengan cepat.'
      }
    ]
  }
};
