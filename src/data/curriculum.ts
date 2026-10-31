import type { BaseModule, ModuleItem } from './types';
import { TRACKS, getTrack } from './tracks';
import { AI_ENRICHMENTS } from './enrichments-ai';
import { DASAR_MODULES } from './modules-dasar';
import { ALGORITMA_MODULES } from './modules-algoritma';
import { BAHASA_MODULES } from './modules-bahasa';
import { KEAMANAN_MODULES } from './modules-keamanan';

export type {
  LevelType,
  TrackId,
  SubTopic,
  Quiz,
  CodeExample,
  HowItWorksStep,
  VibeWarning,
  BaseModule,
  ModuleItem,
  StageInfo,
  OutcomeInfo,
  TrackInfo
} from './types';
export { getQuizzes, getExamples } from './types';
export { TRACKS, getTrack } from './tracks';

// Kompatibilitas dengan versi lama (jalur AI Engineer).
export const LEARNING_STAGES = getTrack('ai').stages;
export const FINAL_OUTCOMES = getTrack('ai').outcomes;

const AI_BASE_MODULES: BaseModule[] = [
  {
    id: 1,
    stage: 1,
    stageLabel: 'Tahap 1: Pelajari Dasar',
    level: 'Pemula',
    title: 'Matematika Dasar',
    subtitle: 'Fondasi untuk memahami cara kerja AI dan Machine Learning.',
    accentColor: 'from-blue-500 to-cyan-400',
    iconName: 'Calculator',
    analogyTitle: 'Analogi Racikan Kopi Susu',
    analogyContent:
      'Bayangkan kamu lagi meracik kopi susu terenak. Aljabar Linear itu adalah takaran bahan di dalam tabel resep (berapa gram kopi, susu, gula). Kalkulus itu cara kamu ngulik: "Kalau gulanya dikurangi dikit, rasanya makin pas atau malah kepahitan?". Statistika itu cara kamu menebak selera pelanggan, dan Optimisasi itu proses nyari titik manis paling pas dengan modal paling hemat!',
    whyItMatters:
      'Komputer nggak ngerti gambar kucing atau kalimat curhatmu secara langsung—mereka cuma ngerti angka. Matematika dasar inilah "kacamata" untuk membaca bagaimana AI mengubah data jadi angka dan mencari pola di dalamnya.',
    subTopics: [
      {
        id: 'm1-1',
        title: 'Aljabar linear',
        casualExplanation:
          'Cara menyimpan kumpulan angka dalam baris dan tabel (vektor & matriks). Di AI, satu gambar atau satu kata itu disimpan sebagai deretan angka.'
      },
      {
        id: 'm1-2',
        title: 'Kalkulus dasar',
        casualExplanation:
          'Ilmu tentang perubahan (turunan/gradien). Dipakai AI buat tahu arah mana yang harus diperbaiki saat tebakannya masih meleset.'
      },
      {
        id: 'm1-3',
        title: 'Statistika & probabilitas',
        casualExplanation:
          'Ilmu peluang dan baca pola data. AI itu pada dasarnya mesin penebak peluang: "Seberapa besar kemungkinan email ini adalah spam?".'
      },
      {
        id: 'm1-4',
        title: 'Optimisasi dasar',
        casualExplanation:
          'Cara mencari nilai error paling kecil (seperti teknik Gradient Descent, alias menuruni bukit sampai ketemu lembah paling dasar).'
      }
    ],
    codeSnippet: {
      language: 'python',
      title: 'Menghitung Kemiripan Data dengan Vektor (Aljabar Linear)',
      code: `import numpy as np

# Bayangkan ini profil film: [Aksi, Komedi, Romantis]
film_a = np.array([9, 2, 1])
film_b = np.array([8, 3, 1])

# Dot product sederhana untuk cek kemiripan arah vektor
skor_kemiripan = np.dot(film_a, film_b)
print(f"Skor kemiripan film: {skor_kemiripan}")`,
      takeaway: 'Di balik layar rekomendasi Netflix atau pencarian AI, semuanya berawal dari operasi perkalian deretan angka (vektor) seperti ini!'
    },
    quiz: {
      question: 'Bagian matematika mana yang bertugas membantu AI mengetahui arah perbaikan saat tebakannya masih salah?',
      options: [
        'Aljabar Linear',
        'Kalkulus Dasar & Optimisasi',
        'Sejarah Matematika',
        'Geometri Bangun Ruang'
      ],
      correctIndex: 1,
      explanation: 'Kalkulus (turunan/gradien) dan optimisasi membantu AI menghitung seberapa besar kesalahannya dan ke arah mana bobot harus diubah agar makin akurat.'
    }
  },
  {
    id: 2,
    stage: 1,
    stageLabel: 'Tahap 1: Pelajari Dasar',
    level: 'Pemula',
    title: 'Pemrograman',
    subtitle: 'Bahasa pemrograman untuk AI dan data processing.',
    accentColor: 'from-purple-500 to-indigo-500',
    iconName: 'Code2',
    analogyTitle: 'Analogi Bahasa Dapur & Mesin Waktu',
    analogyContent:
      'Kalau kamu mau nyuruh koki robot masak, kamu harus ngomong pakai bahasa yang dia mengerti, yaitu Python! Struktur Data itu ibarat kotak-kotak Tupperware buat nyimpan bahan masakan biar rapi. Sedangkan Git itu ibarat tombol "Save Game" di PlayStation—kalau kodinganmu rusak, kamu tinggal load ke titik aman sebelumnya.',
    whyItMatters:
      'Hampir seluruh ekosistem AI dunia dibangun di atas Python. Menguasai Python, struktur kode yang rapi (OOP), dan Git adalah tiket masuk wajib sebelum menyentuh model AI apa pun.',
    subTopics: [
      {
        id: 'm2-1',
        title: 'Python (wajib)',
        casualExplanation:
          'Bahasa pemrograman paling ramah pemula karena cara bacanya mirip bahasa Inggris sehari-hari, tapi punya ekosistem AI paling raksasa.'
      },
      {
        id: 'm2-2',
        title: 'Struktur data & algoritma',
        casualExplanation:
          'Cara nyimpan data (List, Dictionary, Set) dan langkah logis mengolahnya supaya program nggak lemot waktu datanya jutaan baris.'
      },
      {
        id: 'm2-3',
        title: 'Pemrograman OOP',
        casualExplanation:
          'Object-Oriented Programming: cara merapikan kode dengan membungkusnya jadi "cetakan objek" (Class) biar gampang dipakai ulang.'
      },
      {
        id: 'm2-4',
        title: 'Library (NumPy, Pandas)',
        casualExplanation:
          'Perkakas siap pakai di Python: NumPy buat ngitung angka super cepat, dan Pandas buat ngolah tabel data mirip Excel tapi pakai kode.'
      },
      {
        id: 'm2-5',
        title: 'Version control (Git)',
        casualExplanation:
          'Alat pelacak riwayat perubahan kode dan kolaborasi tim di GitHub supaya kode aman dan terorganisir.'
      }
    ],
    codeSnippet: {
      language: 'python',
      title: 'Membuat Blueprint Asisten AI Sederhana dengan OOP di Python',
      code: `class AsistenAI:
    def __init__(self, nama: str):
        self.nama = nama
        self.riwayat_chat = []

    def jawab(self, pesan_user: str) -> str:
        self.riwayat_chat.append(pesan_user)
        return f"[{self.nama}]: Halo! Kamu barusan nanya tentang '{pesan_user}'."

bot = AsistenAI("JarvisLite")
print(bot.jawab("Cara belajar Python cepat"))`,
      takeaway: 'Dengan konsep Class (OOP), kamu bisa membuat struktur agen atau model AI yang rapi dan mudah dikembangkan.'
    },
    quiz: {
      question: 'Mengapa Python menjadi bahasa wajib bagi seorang AI Engineer?',
      options: [
        'Karena Python satu-satunya bahasa yang bisa jalan di laptop',
        'Sintaksnya mudah dibaca dan punya dukungan library AI/Data terlengkap seperti NumPy, Pandas, dan PyTorch',
        'Karena dibuat khusus untuk desain tampilan website',
        'Karena tidak membutuhkan logika algoritma'
      ],
      correctIndex: 1,
      explanation: 'Python menjadi standar industri AI karena sintaksnya bersih dan didukung penuh oleh library komputasi ilmiah serta AI modern.'
    }
  },
  {
    id: 3,
    stage: 1,
    stageLabel: 'Tahap 1: Pelajari Dasar',
    level: 'Pemula',
    title: 'Pengolahan Data',
    subtitle: 'Kemampuan bekerja dengan data untuk training, evaluasi, dan analisis.',
    accentColor: 'from-emerald-500 to-teal-400',
    iconName: 'Database',
    analogyTitle: 'Analogi Mencuci Bahan Masakan Sebelum Dimasak',
    analogyContent:
      'Sebagus apa pun kompor dan panci mahalku (Model AI), kalau bahan makanannya busuk atau masih penuh tanah (Data Kotor), hasil masakannya pasti bikin sakit perut! Di dunia AI ada istilah legendaris: "Garbage In, Garbage Out". Pengolahan data itu proses mencuci, mengupas, dan memotong bahan sampai siap masuk kuali.',
    whyItMatters:
      'Di dunia kerja nyata, 70% waktu AI/Data Engineer habis bukan buat bikin model canggih, melainkan mengambil data dari database (SQL), membersihkan data kosong/duplikat, dan membangun pipa aliran datanya.',
    subTopics: [
      {
        id: 'm3-1',
        title: 'Data collection & cleaning',
        casualExplanation:
          'Mengumpulkan data dari berbagai sumber lalu membuang duplikat, mengisi nilai yang bolong (missing values), dan merapikan formatnya.'
      },
      {
        id: 'm3-2',
        title: 'Data analysis (Pandas)',
        casualExplanation:
          'Mengulik isi tabel menggunakan Pandas: mencari rata-rata, tren tersembunyi, atau anomali data hanya dengan beberapa baris kode.'
      },
      {
        id: 'm3-3',
        title: 'Data visualization',
        casualExplanation:
          'Mengubah tabel angka yang bikin pusing jadi grafik visual (bar chart, scatter plot) agar pola datanya langsung kelihatan mata.'
      },
      {
        id: 'm3-4',
        title: 'SQL dan database',
        casualExplanation:
          'Bahasa standar untuk mengambil, memfilter, dan menggabungkan data langsung dari gudang penyimpanan database perusahaan.'
      },
      {
        id: 'm3-5',
        title: 'Data pipeline dasar',
        casualExplanation:
          'Membuat jalur otomatis (ETL) agar data mentah bisa mengalir, dibersihkan, dan disimpan secara terjadwal tanpa kerja manual.'
      }
    ],
    codeSnippet: {
      language: 'python',
      title: 'Membersihkan Data Kotor dengan Pandas',
      code: `import pandas as pd

data_mentah = {
    "nama": ["Budi", "Siti", "Budi", "Andi"],
    "umur": [25, None, 25, 30], # Ada data kosong (None) & duplikat
    "gaji_juta": [8, 12, 8, 15]
}

df = pd.DataFrame(data_mentah)
df = df.drop_duplicates() # Hapus baris kembar
df["umur"] = df["umur"].fillna(df["umur"].median()) # Isi umur kosong dengan nilai tengah
print(df)`,
      takeaway: 'Hanya dengan dua fungsi (`drop_duplicates` dan `fillna`), data yang tadinya berantakan langsung bersih dan siap dilatih ke model AI.'
    },
    quiz: {
      question: 'Apa arti prinsip "Garbage In, Garbage Out" dalam pengolahan data AI?',
      options: [
        'Komputer harus dibersihkan dari file sampah setiap hari',
        'Jika data yang dimasukkan ke AI kotor/buruk, maka hasil prediksi AI juga pasti buruk',
        'Data yang sudah dipakai harus langsung dihapus dari database',
        'Semakin sedikit data, semakin pintar model AI'
      ],
      correctIndex: 1,
      explanation: 'Kualitas model AI sangat bergantung pada kualitas data latihnya. Data yang kotor akan menghasilkan model yang tidak akurat.'
    }
  },
  {
    id: 4,
    stage: 2,
    stageLabel: 'Tahap 2: Kuasai Model AI',
    level: 'Junior',
    title: 'Machine Learning Dasar',
    subtitle: 'Memahami cara model belajar dari data.',
    accentColor: 'from-amber-500 to-orange-500',
    iconName: 'BrainCircuit',
    analogyTitle: 'Analogi Anak Sekolah Belajar Menghadapi Ujian',
    analogyContent:
      'Machine Learning itu mirip murid yang lagi latihan soal. Kalau dia belajar pakai buku soal yang ada kunci jawabannya, itu namanya Supervised Learning. Kalau dia disuruh mengelompokkan kartu mainan sendiri tanpa kunci jawaban, itu Unsupervised Learning. Nah, kalau dia cuma menghafal mati soal latihan tapi pas soal ujiannya diganti dikit langsung gagal paham, itu namanya Overfitting!',
    whyItMatters:
      'Sebelum loncat ke teknologi berat seperti ChatGPT, kamu wajib paham gimana algoritma klasik belajar dari data, cara menguji akurasinya secara jujur, dan cara memilih fitur data yang tepat.',
    subTopics: [
      {
        id: 'm4-1',
        title: 'Supervised & unsupervised',
        casualExplanation:
          'Supervised belajar dari data berlabel (tebak harga rumah, deteksi spam), sedangkan Unsupervised mencari kelompok/pola sendiri (segmentasi pelanggan).'
      },
      {
        id: 'm4-2',
        title: 'Training & evaluation',
        casualExplanation:
          'Membagi data jadi dua: Data Latihan (buat belajar) dan Data Ujian/Test (buat ngetes apakah modelnya beneran pintar).'
      },
      {
        id: 'm4-3',
        title: 'Overfitting & underfitting',
        casualExplanation:
          'Overfitting = terlalu menghafal data latihan sampai gagal di data baru. Underfitting = kurang belajar sampai pola dasarnya aja nggak nangkep.'
      },
      {
        id: 'm4-4',
        title: 'Model selection',
        casualExplanation:
          'Seni memilih algoritma yang pas untuk masalahmu (Linear Regression, Decision Tree, Random Forest, atau XGBoost).'
      },
      {
        id: 'm4-5',
        title: 'Feature engineering',
        casualExplanation:
          'Meracik kolom data baru yang lebih bermakna agar model AI lebih gampang menemukan pola (misal: mengubah "Tanggal Lahir" jadi "Usia").'
      }
    ],
    codeSnippet: {
      language: 'python',
      title: 'Melatih Model Prediksi Harga Rumah dengan Scikit-Learn',
      code: `from sklearn.linear_model import LinearRegression
import numpy as np

# Luas tanah (m2) -> Harga rumah (Juta Rupiah)
X_luas = np.array([[50], [70], [100], [120]])
y_harga = np.array([500, 700, 1000, 1200])

model = LinearRegression()
model.fit(X_luas, y_harga) # Proses Training!

prediksi = model.predict([[90]]) # Tebak harga rumah luas 90m2
print(f"Prediksi harga 90m2: Rp {prediksi[0]:.0f} Juta")`,
      takeaway: 'Perintah `.fit()` adalah momen di mana mesin mencari pola hubungan antara luas tanah dan harga, lalu `.predict()` dipakai untuk menebak data baru.'
    },
    quiz: {
      question: 'Kondisi ketika model AI mendapatkan nilai 99% saat latihan, tapi anjlok jadi 40% saat diuji dengan data baru disebut apa?',
      options: [
        'Underfitting',
        'Overfitting',
        'Feature Engineering',
        'Data Cleaning'
      ],
      correctIndex: 1,
      explanation: 'Overfitting terjadi saat model terlalu menghafal detail/noise pada data latihan sehingga kehilangan kemampuan menggeneralisasi pada data baru.'
    }
  },
  {
    id: 5,
    stage: 2,
    stageLabel: 'Tahap 2: Kuasai Model AI',
    level: 'Junior',
    title: 'Deep Learning',
    subtitle: 'Dasar untuk memahami model modern seperti LLM, vision, dan speech.',
    accentColor: 'from-rose-500 to-pink-500',
    iconName: 'Network',
    analogyTitle: 'Analogi Estafet Detektif Berlapis',
    analogyContent:
      'Bayangkan tim detektif yang berbaris berlapis-lapis (Neural Network) buat menebak foto hewan. Detektif lapis pertama cuma ngecek garis dan lengkungan. Lapis kedua menggabungkan garis itu jadi bentuk kuping lancip dan kumis. Lapis terakhir berteriak: "Fix, ini Kucing!". Kalau tebakannya salah, bos mereka ngasih koreksi mundur ke belakang biar tiap detektif memperbaiki catatannya (Backpropagation).',
    whyItMatters:
      'Machine Learning biasa kewalahan kalau disuruh mengenali wajah, suara manusia, atau teks panjang. Deep Learning adalah mesin utama di balik Computer Vision, pengenal suara, hingga LLM modern.',
    subTopics: [
      {
        id: 'm5-1',
        title: 'Neural network fundamentals',
        casualExplanation:
          'Jaringan saraf tiruan yang terdiri dari lapisan input, hidden layers (lapisan pemikir), dan output beserta fungsi aktivasinya.'
      },
      {
        id: 'm5-2',
        title: 'Backpropagation',
        casualExplanation:
          'Mekanisme "evaluasi mundur": saat tebakan jaringan saraf meleset, error-nya dikirim balik dari ujung ke awal untuk mengatur ulang bobot saraf.'
      },
      {
        id: 'm5-3',
        title: 'CNN (computer vision)',
        casualExplanation:
          'Convolutional Neural Network: arsitektur khusus yang jago memindai piksel gambar untuk deteksi objek, wajah, atau foto medis.'
      },
      {
        id: 'm5-4',
        title: 'RNN / Transformer concept',
        casualExplanation:
          'Evolusi model untuk data berurutan (teks/waktu): dari RNN yang baca kata satu-satu, hingga Transformer yang bisa memproses seluruh kalimat sekaligus!'
      },
      {
        id: 'm5-5',
        title: 'PyTorch atau TensorFlow',
        casualExplanation:
          'Dua framework raksasa untuk merakit dan melatih model Deep Learning menggunakan kekuatan kartu grafis (GPU).'
      }
    ],
    codeSnippet: {
      language: 'python',
      title: 'Merakit Jaringan Saraf Tiruan Sederhana dengan PyTorch',
      code: `import torch
import torch.nn as nn

# Membuat otak mini: 4 input -> 8 saraf tengah -> 1 output
model_jaringan = nn.Sequential(
    nn.Linear(4, 8),
    nn.ReLU(),       # Fungsi aktivasi agar bisa belajar pola rumit
    nn.Linear(8, 1),
    nn.Sigmoid()     # Ubah hasil akhir jadi probabilitas (0 s/d 1)
)

contoh_input = torch.randn(1, 4)
print("Output Prediksi:", model_jaringan(contoh_input).item())`,
      takeaway: 'Dengan PyTorch, menyusun lapisan jaringan saraf tiruan semudah menyusun balok Lego menggunakan `nn.Sequential`.'
    },
    quiz: {
      question: 'Arsitektur Deep Learning mana yang paling cocok digunakan untuk membuat sistem deteksi helm proyek melalui kamera CCTV?',
      options: [
        'Linear Regression',
        'CNN (Convolutional Neural Network)',
        'SQL Database',
        'Git Version Control'
      ],
      correctIndex: 1,
      explanation: 'CNN dirancang khusus untuk mengekstrak fitur visual (tepi, bentuk, objek) dari data gambar maupun video (Computer Vision).'
    }
  },
  {
    id: 6,
    stage: 2,
    stageLabel: 'Tahap 2: Kuasai Model AI',
    level: 'Mid-Level',
    title: 'Natural Language Processing (NLP)',
    subtitle: 'Memahami cara AI memahami dan menghasilkan bahasa manusia.',
    accentColor: 'from-sky-500 to-blue-600',
    iconName: 'MessageSquareText',
    analogyTitle: 'Analogi Peta Koordinat Makna Kata',
    analogyContent:
      'Gimana caranya komputer tahu kalau kata "Raja" dan "Ratu" itu mirip, sedangkan "Raja" dan "Kulkas" itu jauh banget? Lewat teknik bernama Embeddings! Bayangkan sebuah peta GPS raksasa: kata-kata yang artinya mirip bakal ditaruh di koordinat yang sebelahan. Jadi komputer nggak sekadar mengeja huruf, tapi benar-benar paham posisi maknanya!',
    whyItMatters:
      'Bahasa manusia itu penuh singkatan, konteks ganda, dan emosi. NLP adalah jembatan yang mengubah teks obrolan manusia menjadi representasi matematika yang bisa dicerna mesin.',
    subTopics: [
      {
        id: 'm6-1',
        title: 'Text processing',
        casualExplanation:
          'Tahap memotong kalimat jadi potongan kata/sub-kata (Tokenization) dan membersihkan simbol yang tidak perlu.'
      },
      {
        id: 'm6-2',
        title: 'Embeddings',
        casualExplanation:
          'Mengubah kata atau kalimat menjadi deretan angka koordinat (vektor) sehingga mesin bisa menghitung kemiripan makna antar kalimat.'
      },
      {
        id: 'm6-3',
        title: 'Transformer architecture',
        casualExplanation:
          'Arsitektur revolusioner dengan fitur "Self-Attention" yang membuat AI tahu kata mana yang saling berkaitan dalam kalimat panjang.'
      },
      {
        id: 'm6-4',
        title: 'Prompt engineering',
        casualExplanation:
          'Teknik menyusun instruksi, konteks, dan contoh (Few-shot) agar model bahasa menghasilkan jawaban yang presisi.'
      },
      {
        id: 'm6-5',
        title: 'Evaluasi model (BLEU, ROUGE)',
        casualExplanation:
          'Metrik standar untuk menilai seberapa bagus kualitas terjemahan atau rangkuman teks yang dibuat oleh AI dibandingkan teks manusia.'
      }
    ],
    codeSnippet: {
      language: 'python',
      title: 'Konsep Dasar Tokenization & Pencarian Makna',
      code: `# Ilustrasi bagaimana kalimat dipecah jadi Token ID sebelum masuk ke model NLP
kamus_token = {"saya": 101, "suka": 102, "belajar": 103, "ai": 104}
kalimat = "saya suka belajar ai"

token_ids = [kamus_token[kata] for kata in kalimat.split()]
print("Teks Asli:", kalimat)
print("Representasi Token ID:", token_ids)`,
      takeaway: 'Setiap kali kamu mengetik prompt ke AI, teks tersebut selalu dipecah menjadi deretan angka Token ID terlebih dahulu sebelum diproses.'
    },
    quiz: {
      question: 'Apa fungsi utama dari "Embeddings" di dalam Natural Language Processing (NLP)?',
      options: [
        'Menghapus seluruh kata bahasa asing dari dokumen',
        'Mengubah teks menjadi koordinat angka (vektor) yang menyimpan makna semantik sehingga kemiripan makna bisa dihitung',
        'Mempercepat koneksi internet saat memanggil API',
        'Mengubah tampilan website menjadi mode gelap'
      ],
      correctIndex: 1,
      explanation: 'Embeddings memetakan teks ke dalam ruang vektor berdimensi tinggi di mana teks dengan makna serupa memiliki jarak yang berdekatan.'
    }
  },
  {
    id: 7,
    stage: 2,
    stageLabel: 'Tahap 2: Kuasai Model AI',
    level: 'Mid-Level',
    title: 'Large Language Models (LLM)',
    subtitle: 'Memahami arsitektur, kemampuan, dan cara menggunakan LLM.',
    accentColor: 'from-teal-400 to-emerald-600',
    iconName: 'Sparkles',
    analogyTitle: 'Analogi Ujian Open-Book (RAG) vs Kursus Spesialis (Fine-Tuning)',
    analogyContent:
      'LLM (seperti GPT, Gemini, atau Claude) itu ibarat sarjana jenius yang sudah baca jutaan buku, tapi dia nggak tahu aturan rahasia di kantor barumu. Kalau kamu kasih dia buku pedoman kantor buat dibaca sambil jawab pertanyaan, itu namanya RAG (Ujian Open-Book). Tapi kalau kamu sekolahkan lagi dia khusus buat meniru gaya bicara dokter spesialis, itu namanya Fine-Tuning!',
    whyItMatters:
      'Inilah keahlian paling dicari perusahaan saat ini: menghubungkan LLM dengan dokumen internal perusahaan (RAG), menekan halusinasi AI, dan menjaga keamanan aplikasi.',
    subTopics: [
      {
        id: 'm7-1',
        title: 'Cara kerja LLM (Transformer)',
        casualExplanation:
          'Memahami bagaimana LLM memprediksi token kata berikutnya berdasarkan konteks, parameter seperti Temperature, dan batas Context Window.'
      },
      {
        id: 'm7-2',
        title: 'Prompt engineering',
        casualExplanation:
          'Teknik lanjutan seperti System Prompting, Chain-of-Thought (menyuruh AI berpikir bertahap), dan memaksa output berupa JSON rapi.'
      },
      {
        id: 'm7-3',
        title: 'RAG (Retrieval Augmented Gen)',
        casualExplanation:
          'Menghubungkan LLM ke Vector Database berisi PDF/data pribadimu agar AI menjawab berdasarkan fakta dokumenmu tanpa mengarang (halusinasi).'
      },
      {
        id: 'm7-4',
        title: 'Fine-tuning (LoRA, etc)',
        casualExplanation:
          'Melatih ulang sebagian kecil bobot model open-source secara hemat memori (LoRA/QLoRA) agar punya gaya bahasa atau keahlian spesifik.'
      },
      {
        id: 'm7-5',
        title: 'Evaluasi dan keamanan',
        casualExplanation:
          'Menguji akurasi jawaban RAG dan melindungi sistem dari serangan Prompt Injection (user nakal yang mencoba membajak instruksi AI).'
      }
    ],
    codeSnippet: {
      language: 'python',
      title: 'Pola Alur Kerja RAG (Retrieval-Augmented Generation)',
      code: `def jawab_dengan_rag(pertanyaan_user: str, dokumen_relevan: str) -> str:
    # Kita suntikkan fakta dari database ke dalam prompt LLM
    prompt_sistem = f"""
Gunakan HANYA konteks dokumen berikut untuk menjawab pertanyaan.
Jika tidak ada di konteks, katakan "Maaf, data tidak ditemukan."

KONTEKS DOKUMEN:
{dokumen_relevan}

PERTANYAAN: {pertanyaan_user}
"""
    return prompt_sistem # Dikirim ke API LLM (Gemini / OpenAI / Claude)

print(jawab_dengan_rag("Berapa jatah cuti tahunan?", "Pasal 4: Karyawan mendapat 12 hari cuti tahunan."))`,
      takeaway: 'RAG mencegah AI mengarang bebas karena kita menyodorkan potongan dokumen yang tepat langsung ke dalam prompt sebelum AI menjawab.'
    },
    quiz: {
      question: 'Jika perusahaanmu ingin membuat chatbot AI yang bisa menjawab pertanyaan berdasarkan 500 file PDF SOP internal yang sering berubah setiap minggu, solusi mana yang paling tepat dan hemat biaya?',
      options: [
        'Melatih LLM baru dari nol (Pre-training)',
        'Menerapkan sistem RAG (Retrieval-Augmented Generation)',
        'Menulis ribuan aturan if-else secara manual',
        'Mengganti bahasa pemrograman ke bahasa C'
      ],
      correctIndex: 1,
      explanation: 'RAG memungkinkan kita memperbarui basis pengetahuan AI kapan saja cukup dengan meng-update dokumen di database tanpa perlu melatih ulang model.'
    }
  },
  {
    id: 8,
    stage: 3,
    stageLabel: 'Tahap 3: Bangun Aplikasi',
    level: 'Mid-Level',
    title: 'AI Agents & Tooling',
    subtitle: 'Membangun agent yang dapat menggunakan tools dan menjalankan tugas otomatis.',
    accentColor: 'from-orange-500 to-red-500',
    iconName: 'Bot',
    analogyTitle: 'Analogi Konsultan yang Cuma Ngomong vs Asisten Pribadi yang Punya Tangan',
    analogyContent:
      'Chatbot LLM biasa itu ibarat penasihat yang terkurung di dalam ruangan: dia pintar ngasih saran rencana liburan, tapi nggak bisa memesankan tiketmu. Nah, AI Agent itu adalah LLM yang dikasih "tangan dan kaki" (Tools)! Dia bisa buka kalendermu, ngecek harga tiket lewat API, mengirim email otomatis, bahkan kerja bareng agen lain sampai tugasnya beres.',
    whyItMatters:
      'Industri sedang bergerak dari sekadar "Chat dengan AI" menuju "Agentic AI"—sistem otonom yang bisa merencanakan langkah kerja, memanggil fungsi program (Tool Calling), dan menangani error secara mandiri.',
    subTopics: [
      {
        id: 'm8-1',
        title: 'Agent architecture',
        casualExplanation:
          'Pola pikir agen seperti ReAct (Reason + Act): AI berpikir dulu apa yang harus dilakukan, memilih aksi, melihat hasilnya, lalu lanjut sampai selesai.'
      },
      {
        id: 'm8-2',
        title: 'Tool calling / function use',
        casualExplanation:
          'Memberi kemampuan pada LLM untuk memicu fungsi kode nyata (misal: hitung kalkulator, cek database stok barang, atau kirim notifikasi).'
      },
      {
        id: 'm8-3',
        title: 'Framework (LangChain, LlamaIndex)',
        casualExplanation:
          'Framework populer untuk merangkai LLM, memori percakapan, dokumen RAG, dan eksekusi tools menjadi satu kesatuan aplikasi.'
      },
      {
        id: 'm8-4',
        title: 'Multi-agent system',
        casualExplanation:
          'Membuat beberapa agen spesialis yang saling bekerja sama (misal: Agen Peneliti mencari data, lalu menyerahkan hasilnya ke Agen Penulis).'
      },
      {
        id: 'm8-5',
        title: 'Workflow & error handling',
        casualExplanation:
          'Mengatur alur kerja yang aman: membuat mekanisme retry otomatis jika API gagal, pembatasan loop, serta persetujuan manusia (Human-in-the-loop).'
      }
    ],
    codeSnippet: {
      language: 'typescript',
      title: 'Konsep Tool Calling pada AI Agent',
      code: `// Definisi Tool yang bisa dipanggil otomatis oleh AI Agent
const cekStokGudangTool = {
  name: "cek_stok_barang",
  description: "Gunakan tool ini ketika user menanyakan ketersediaan stok produk.",
  parameters: {
    nama_produk: { type: "string", description: "Nama barang yang dicari" }
  },
  execute: async ({ nama_produk }: { nama_produk: string }) => {
    // Simulasi query ke database nyata
    return { produk: nama_produk, stokTersedia: 42, lokasi: "Gudang Jakarta" };
  }
};`,
      takeaway: 'Saat user bertanya "Stok iPhone masih ada?", AI Agent mengenali maksudnya, menjalankan fungsi `cek_stok_barang`, lalu menjawab dengan angka akurat dari database.'
    },
    quiz: {
      question: 'Apa yang membedakan AI Agent dengan Chatbot LLM biasa?',
      options: [
        'AI Agent tidak membutuhkan koneksi ke model bahasa sama sekali',
        'AI Agent mampu merencanakan langkah kerja dan memanggil tools/fungsi eksternal untuk menyelesaikan tugas secara otonom',
        'AI Agent hanya bisa menjawab dengan satu kata',
        'Chatbot biasa lebih lambat daripada AI Agent'
      ],
      correctIndex: 1,
      explanation: 'Kekuatan utama AI Agent terletak pada otonomi penalaran (reasoning) dan kemampuannya berinteraksi dengan sistem luar melalui Tool Calling.'
    }
  },
  {
    id: 9,
    stage: 4,
    stageLabel: 'Tahap 4: Production & Best Practice',
    level: 'Senior',
    title: 'Production & Best Practice',
    subtitle: 'Standar Senior AI Engineer untuk merilis, mengoptimalkan, dan menjaga sistem AI di dunia nyata.',
    accentColor: 'from-fuchsia-500 to-purple-600',
    iconName: 'Rocket',
    analogyTitle: 'Analogi Masak Satu Porsi di Rumah vs Membuka Restoran Waralaba',
    analogyContent:
      'Bikin aplikasi AI yang jalan di laptop sendiri (localhost) itu ibarat masak mie instan satu porsi buat diri sendiri—gampang! Tapi ketika aplikasi itu dipakai 50.000 orang barengan di internet, kamu harus mikirin: gimana biar tagihan API nggak jebol? Gimana kalau server LLM pusat lagi down? Gimana cara memantau jawaban AI biar tetap cepat dan aman? Itulah wilayah kerja seorang Senior AI Engineer!',
    whyItMatters:
      'Tahap ke-4 ini adalah pembeda antara sekadar hobiis AI dengan AI Engineer profesional yang siap membangun sistem skala industri yang tangguh, cepat, dan efisien.',
    subTopics: [
      {
        id: 'm9-1',
        title: 'Deployment & Containerization (Docker & Cloud/Vercel)',
        casualExplanation:
          'Membungkus aplikasi dan API AI agar berjalan konsisten di server production serta mengatur CI/CD otomatis dari GitHub.'
      },
      {
        id: 'm9-2',
        title: 'Semantic Caching & Cost Optimization',
        casualExplanation:
          'Menyimpan jawaban untuk pertanyaan serupa di cache (Redis/Vector Cache) dan memakai model kecil untuk tugas mudah agar tagihan token hemat hingga 70%.'
      },
      {
        id: 'm9-3',
        title: 'Streaming UX & Latency Optimization',
        casualExplanation:
          'Mengirimkan respon teks kata demi kata secara real-time (Server-Sent Events / Streaming) agar user tidak menunggu layar kosong terlalu lama.'
      },
      {
        id: 'm9-4',
        title: 'LLMOps, Observability & Tracing',
        casualExplanation:
          'Memantau performa AI di production (acak latensi, jumlah pemakaian token, dan mendeteksi kualitas jawaban yang menurun).'
      },
      {
        id: 'm9-5',
        title: 'Fallback System & Rate Limiting',
        casualExplanation:
          'Menyiapkan model cadangan otomatis jika provider AI utama sedang gangguan, serta membatasi request per user agar tidak disalahgunakan.'
      }
    ],
    codeSnippet: {
      language: 'typescript',
      title: 'Pola Auto-Fallback & Caching untuk Production AI',
      code: `async function generateSmartResponse(prompt: string) {
  // 1. Cek Cache dulu agar hemat biaya API dan instan
  const cached = await checkSemanticCache(prompt);
  if (cached) return { source: "cache", text: cached };

  try {
    // 2. Panggil Model Utama
    return await callPrimaryLLM(prompt);
  } catch (error) {
    // 3. Jika server utama sibuk/error, otomatis pindah ke Model Cadangan!
    console.warn("Primary LLM gagal, beralih ke Fallback Model...");
    return await callBackupLLM(prompt);
  }
}`,
      takeaway: 'Di level Senior, aplikasi AI tidak boleh langsung crash saat API provider mengalami gangguan. Sistem Caching dan Fallback menjamin aplikasi tetap hidup 99.9%.'
    },
    quiz: {
      question: 'Teknik apa yang digunakan oleh Senior AI Engineer agar aplikasi tidak perlu membayar biaya token API berulang kali ketika ribuan user menanyakan pertanyaan yang sama persis?',
      options: [
        'Menghapus database setiap jam',
        'Semantic / Response Caching',
        'Overfitting Model',
        'Mematikan server di malam hari'
      ],
      correctIndex: 1,
      explanation: 'Dengan menyimpan jawaban yang sering ditanyakan di dalam sistem Cache, aplikasi bisa langsung memberikan jawaban secara instan (0 milidetik) tanpa memanggil API LLM lagi.'
    }
  }
];

const AI_MODULES: ModuleItem[] = AI_BASE_MODULES.map((item) => ({
  ...item,
  ...AI_ENRICHMENTS[item.id],
  track: 'ai' as const
}));

/** Urutan jalur belajar yang disarankan: Dasar, Algoritma, Bahasa, Secure Coding, lalu AI. */
export const CURRICULUM_DATA: ModuleItem[] = [
  ...DASAR_MODULES,
  ...ALGORITMA_MODULES,
  ...BAHASA_MODULES,
  ...KEAMANAN_MODULES,
  ...AI_MODULES
];

export const TOTAL_TRACKS = TRACKS.length;
