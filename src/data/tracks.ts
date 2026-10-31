import type { TrackInfo } from './types';

export const TRACKS: TrackInfo[] = [
  {
    id: 'dasar',
    order: 1,
    label: 'Dasar Programmer',
    tagline: 'Mulai dari nol: cara komputer, variabel, logika, sampai baca kode',
    description:
      'Fondasi yang wajib dipahami sebelum menyuruh AI menulis kode: cara program dijalankan, tipe data, percabangan, perulangan, fungsi, struktur data, debugging, dan Git.',
    iconName: 'Terminal',
    accentColor: 'from-cyan-400 to-blue-500',
    stages: [
      { step: 1, title: 'Kenali cara kerja komputer', level: 'Pemula', description: 'Pahami CPU, memori, compiler/interpreter, dan bagaimana kode berubah jadi aksi nyata.' },
      { step: 2, title: 'Kuasai logika dasar', level: 'Pemula', description: 'Variabel, tipe data, if/else, loop, dan fungsi: bahan baku semua program di dunia.' },
      { step: 3, title: 'Olah data', level: 'Pemula', description: 'Array, object/dictionary, set, stack, dan queue untuk menyimpan data dengan rapi.' },
      { step: 4, title: 'Baca, uji, dan lacak kode', level: 'Junior', description: 'Debugging, test, dan Git supaya kamu bisa memeriksa kode buatan AI, bukan menelannya bulat-bulat.' }
    ],
    outcomes: [
      { title: 'Bisa membaca kode yang ditulis AI', description: 'Kamu tahu apa yang dikerjakan setiap baris, bukan sekadar menekan tombol run dan berharap.' },
      { title: 'Bisa menemukan dan memperbaiki bug', description: 'Debugging sistematis dan Git membuatmu tenang saat kode error atau AI mengubah hal yang salah.' },
      { title: 'Siap lanjut ke algoritma & bahasa lain', description: 'Fondasi ini berlaku di semua bahasa: Python, JavaScript, Java, Go, dan lainnya.' }
    ]
  },
  {
    id: 'algoritma',
    order: 2,
    label: 'Algoritma & Struktur Data',
    tagline: 'Cara berpikir menyelesaikan masalah secara efisien',
    description:
      'Belajar berpikir algoritmik: pseudocode, Big-O, searching, sorting, rekursi, struktur data lanjutan, hingga dynamic programming, lengkap dengan cara kerja dan contoh.',
    iconName: 'Workflow',
    accentColor: 'from-emerald-400 to-teal-500',
    stages: [
      { step: 1, title: 'Berpikir algoritmik', level: 'Pemula', description: 'Pecah masalah besar jadi langkah kecil, tulis pseudocode, dan gambar flowchart.' },
      { step: 2, title: 'Ukur efisiensi', level: 'Junior', description: 'Pakai Big-O untuk tahu kode mana yang tetap cepat saat datanya jutaan.' },
      { step: 3, title: 'Cari & urutkan', level: 'Junior', description: 'Linear/binary search, bubble/merge/quick sort, dan kapan memakainya.' },
      { step: 4, title: 'Pola lanjutan', level: 'Mid-Level', description: 'Rekursi, hash table, tree, graph, greedy, dan dynamic programming.' }
    ],
    outcomes: [
      { title: 'Bisa menilai kualitas kode AI', description: 'Kamu bisa mengenali kode AI yang lambat, boros memori, atau punya loop bersarang yang tidak perlu.' },
      { title: 'Siap wawancara teknis', description: 'Pola algoritma dasar yang paling sering muncul di tes coding perusahaan.' },
      { title: 'Berpikir sistematis', description: 'Setiap masalah dipecah, diuji, dan diselesaikan dengan langkah yang jelas.' }
    ]
  },
  {
    id: 'bahasa',
    order: 3,
    label: 'Bahasa Pemrograman',
    tagline: 'Peta semua bahasa: kapan pakai apa, dan bagaimana bedanya',
    description:
      'Kenali paradigma dan keluarga bahasa pemrograman, lalu lihat masalah yang sama diselesaikan di banyak bahasa: Python, JavaScript, TypeScript, Java, C#, Go, Rust, C/C++, PHP, Kotlin, Swift, SQL, dan lainnya.',
    iconName: 'Languages',
    accentColor: 'from-amber-400 to-orange-500',
    stages: [
      { step: 1, title: 'Pahami peta bahasa', level: 'Pemula', description: 'Compiled vs interpreted, static vs dynamic typing, dan paradigma OOP, fungsional, imperatif.' },
      { step: 2, title: 'Bahasa web & scripting', level: 'Pemula', description: 'Python, JavaScript, TypeScript, PHP, Ruby, dan Bash.' },
      { step: 3, title: 'Bahasa backend & mobile', level: 'Junior', description: 'Java, Kotlin, C#, Go, Swift, dan Dart.' },
      { step: 4, title: 'Bahasa sistem & data', level: 'Mid-Level', description: 'C, C++, Rust, SQL, dan cara memilih bahasa untuk proyek nyata.' }
    ],
    outcomes: [
      { title: 'Bisa membaca banyak bahasa', description: 'Karena konsep intinya sama, kamu bisa membaca kode dari bahasa yang belum pernah kamu pakai.' },
      { title: 'Bisa memilih bahasa yang tepat', description: 'Kamu tahu alasan teknis memilih sebuah bahasa, bukan ikut-ikutan tren.' },
      { title: 'Bisa mengarahkan AI dengan tepat', description: 'Prompt jadi jelas karena kamu paham kelebihan dan batasan tiap bahasa.' }
    ]
  },
  {
    id: 'keamanan',
    order: 4,
    label: 'Secure Coding & Vibe Coding Aman',
    tagline: 'Jangan sampai kode buatan AI jadi pintu masuk peretas',
    description:
      'Banyak vibe coder menyuruh AI membuat kode tanpa memahami isinya. Jalur ini mengajarkan celah keamanan yang paling umum (injection, XSS, secret bocor, auth rusak, dependency berbahaya) dan cara meninjau kode AI dengan benar.',
    iconName: 'ShieldCheck',
    accentColor: 'from-rose-400 to-red-500',
    stages: [
      { step: 1, title: 'Sadari risiko vibe coding', level: 'Pemula', description: 'Kenapa kode AI bisa terlihat benar tetapi berbahaya, dan cara me-review-nya.' },
      { step: 2, title: 'Pahami serangan umum', level: 'Junior', description: 'SQL injection, command injection, dan XSS dengan contoh rentan vs aman.' },
      { step: 3, title: 'Amankan akses & rahasia', level: 'Junior', description: 'Password hashing, session/JWT, kontrol akses, dan pengelolaan API key.' },
      { step: 4, title: 'Amankan sistem penuh', level: 'Mid-Level', description: 'Validasi input, rate limit, CORS, dependency, dan workflow aman bersama AI.' }
    ],
    outcomes: [
      { title: 'Bisa mengaudit kode AI sendiri', description: 'Punya checklist untuk memeriksa kode sebelum di-deploy ke server nyata.' },
      { title: 'Tidak lagi membocorkan secret', description: 'API key, token, dan password tersimpan dengan benar dan tidak masuk ke Git.' },
      { title: 'Produk lebih aman untuk pengguna', description: 'Data pengguna terlindungi karena celah paling umum sudah kamu tutup sejak awal.' }
    ]
  },
  {
    id: 'ai',
    order: 5,
    label: 'AI Engineer',
    tagline: 'Dari matematika sampai deploy sistem AI production',
    description:
      'Jalur lengkap menjadi AI Engineer: matematika, Python, data, machine learning, deep learning, NLP, LLM, AI Agent, sampai production dan best practice.',
    iconName: 'BrainCircuit',
    accentColor: 'from-fuchsia-400 to-purple-500',
    stages: [
      { step: 1, title: 'Pelajari dasar (1 - 3)', level: 'Pemula', description: 'Bangun pondasi logika matematika, bahasa Python, dan cara merapikan data mentah.' },
      { step: 2, title: 'Kuasai model AI (4 - 7)', level: 'Junior - Mid', description: 'Pahami cara mesin belajar dari data, jaringan saraf tiruan, NLP, hingga otak di balik LLM.' },
      { step: 3, title: 'Bangun aplikasi (8)', level: 'Mid-Level', description: 'Rakit AI Agent pintar yang bisa memakai tools dan menyelesaikan pekerjaan secara otomatis.' },
      { step: 4, title: 'Production & Best Practice', level: 'Senior', description: 'Deploy sistem AI ke server nyata yang aman, hemat biaya, cepat, dan siap dipakai ribuan user.' }
    ],
    outcomes: [
      { title: 'Mampu membangun solusi AI yang nyata', description: 'Bukan cuma jago teori di atas kertas, tapi bisa bikin aplikasi AI fungsional dari nol sampai jalan.' },
      { title: 'Siap bekerja sebagai AI Engineer', description: 'Punya portofolio terstruktur dan pemahaman teknis dari hulu ke hilir yang dicari perusahaan.' },
      { title: 'Memiliki kemampuan yang relevan untuk industri', description: 'Menguasai stack modern seperti RAG, LLM, AI Agents, dan deployment yang dipakai industri saat ini.' }
    ]
  }
];

export const getTrack = (id: string) => TRACKS.find((track) => track.id === id) ?? TRACKS[0];
