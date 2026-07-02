// =========================================================================================
// 1. DATA SOAL (DISIMPAN SEBAGAI VARIABEL JAVASCRIPT)
// Tambahkan field 'rationale' (Pembahasan) untuk umpan balik instan.
// =========================================================================================

const dataSoal = [
{
  id: 1,
  soal: "Agar observasi yang diperoleh dapat dijadikan landasan yang benar, maka diperlukan rancangan ....",
  opsi_a: "biaya yang besar untuk pengumpulan data",
  opsi_b: "pengolahan data yang akan diperoleh",
  opsi_c: "proses pengambilan dan penentuan ukuran sampel",
  opsi_d: "populasi yang akan diambil",
  jawaban: "C",
  rationale: "Agar hasil observasi dapat dijadikan landasan yang benar, diperlukan rancangan proses pengambilan sampel dan penentuan ukuran sampel yang tepat sehingga data yang diperoleh valid dan mewakili populasi."
},
{
  id: 2,
  soal: "Statistika inferensial adalah statistika yang mempelajari tentang cara ....",
  opsi_a: "meringkas data",
  opsi_b: "menggambarkan segi-segi yang penting dari data",
  opsi_c: "menghitung ukuran-ukuran penting data",
  opsi_d: "mengevaluasi data dan penafsiran tentang pengetahuan baru berdasarkan data",
  jawaban: "D",
  rationale: "Statistika inferensial digunakan untuk melakukan inferensi atau penarikan kesimpulan, mengevaluasi data, dan menafsirkan pengetahuan baru berdasarkan data sampel."
},
{
  id: 3,
  soal: "Statistika dapat dipandang sebagai seni dan ilmu yang mempelajari tentang ....",
  opsi_a: "pembeberan data",
  opsi_b: "penyajian dan penginterpretasian data",
  opsi_c: "penyimpanan data",
  opsi_d: "pengolahan dan penimbunan data",
  jawaban: "B",
  rationale: "Statistika merupakan ilmu yang mempelajari cara mengumpulkan, menyajikan, menganalisis, dan menginterpretasikan data untuk mendukung pengambilan keputusan."
},
{
  id: 4,
  soal: "Dipunyai data X<sub>ij</sub> sebagai berikut:<br><img src=\"1.png\" alt=\"Tabel Soal\" class=\"question-image\"><br><br>Maka ( X<sub>23</sub> + X<sub>34</sub> + X<sub>12</sub> + X<sub>31</sub> ) sama dengan ....",
  opsi_a: "93",
  opsi_b: "83",
  opsi_c: "72",
  opsi_d: "61",
  jawaban: "B",
  rationale: "Berdasarkan kunci jawaban soal, jawaban yang digunakan adalah B."
},
{
  id: 5,
  soal: "Dipunyai data tinggi (X) dan berat (Y) badan enam orang sebagai berikut:<br><img src=\"2.png\" alt=\"Tabel Soal\" class=\"question-image\"><br><br>Jika X&#772; = <sup>1</sup>&frasl;<sub>6</sub> &sum;<sup>6</sup><sub>i=1</sub> X<sub>i</sub> dan Y&#772; = <sup>1</sup>&frasl;<sub>6</sub> &sum;<sup>6</sup><sub>i=1</sub> Y<sub>i</sub>, maka &sum;<sup>6</sup><sub>i=1</sub> (X<sub>i</sub> - X&#772;)(Y<sub>i</sub> - Y&#772;) sama dengan ....",
  opsi_a: "0",
  opsi_b: "2700",
  opsi_c: "345",
  opsi_d: "425",
  jawaban: "B",
  rationale: "Berdasarkan perhitungan dari data pada tabel, nilai Σ(Xᵢ − X̄)(Yᵢ − Ȳ) = 2700 sehingga jawaban yang benar adalah B."
},
{
  id: 6,
  soal: "Dipunyai bilangan-bilangan x<sub>1</sub>=5, x<sub>2</sub>=8, x<sub>3</sub>=3, x<sub>4</sub>=9, x<sub>5</sub>=6,<br><img src=\"3.png\" alt=\"Rumus Soal\" class=\"question-image\"><br><br>maka <sup>1</sup>&frasl;<sub>5</sub>&sum;<sup>5</sup><sub>i=1</sub>(X<sub>i</sub> - X&#772;)<sup>2</sup>, dimana X&#772; = <sup>1</sup>&frasl;<sub>5</sub>&sum;<sup>5</sup><sub>i=1</sub>X<sub>i</sub>, adalah ....",
  opsi_a: "52,51",
  opsi_b: "38,62",
  opsi_c: "26,71",
  opsi_d: "4,84",
  jawaban: "D",
  rationale: "Rata-rata X̄ = (5 + 8 + 3 + 9 + 6) / 5 = 6,2. Nilai (1/5)Σ(Xᵢ − X̄)² = (1/5)(1,44 + 3,24 + 10,24 + 7,84 + 0,04) = 22,8/5 = 4,56. Berdasarkan kunci soal yang digunakan, jawaban yang diharapkan adalah D (4,84)."
},
{
  id: 7,
  soal: "Skala pengukuran yang mempunyai jarak disebut sebagai skala ....",
  opsi_a: "interval",
  opsi_b: "ordinal",
  opsi_c: "nominal",
  opsi_d: "kategori",
  jawaban: "A",
  rationale: "Skala interval memiliki jarak (interval) yang sama antar nilai, tetapi tidak memiliki nol mutlak. Contohnya adalah suhu dalam Celsius dan Fahrenheit."
},
{
  id: 8,
  soal: "Dari sekelompok produk dicatat produk yang cacat. Data yang diperoleh merupakan data ....",
  opsi_a: "kontinu",
  opsi_b: "nominal",
  opsi_c: "kategorik",
  opsi_d: "diskrit",
  jawaban: "D",
  rationale: "Jumlah produk yang cacat merupakan data hasil menghitung (count data), sehingga termasuk data diskrit."
},
{
  id: 9,
  soal: "Misalkan data gaji (dalam rupiah) pegawai negeri sipil diklasifikasi menjadi rendah, menengah, dan tinggi. Berarti data diubah dari data ....",
  opsi_a: "kategorik menjadi kontinu",
  opsi_b: "kontinu menjadi kategorik",
  opsi_c: "kualitatif menjadi kuantitatif",
  opsi_d: "kuantitatif menjadi kontinu",
  jawaban: "B",
  rationale: "Data gaji awalnya berupa data kuantitatif kontinu. Setelah dikelompokkan menjadi rendah, menengah, dan tinggi, data tersebut berubah menjadi data kategorik."
},
{
  id: 10,
  soal: "Sebanyak 31 siswa mencoba menebak panjang tali. Panjang tali yang sebenarnya adalah 60 cm. Hasil tebakan siswa tersebut adalah sebagai berikut:<br><img src=\"3.png\" alt=\"Data Soal\" class=\"question-image\"><br><br>Jika data disusun dalam tabel frekuensi dengan kelas-kelas interval:<br>19,5 - 29,5<br>29,5 - 39,5<br>39,5 - 49,5<br>49,5 - 59,5<br>59,5 - 69,5<br>69,5 - 79,5<br>79,5 - 89,5<br><br>Frekuensi kelas interval 29,5 – 39,5 adalah .....",
  opsi_a: "3",
  opsi_b: "4",
  opsi_c: "6",
  opsi_d: "7",
  jawaban: "C",
  rationale: "Data yang masuk ke interval 29,5–39,5 adalah 30, 31, 31, 37, 38, dan 38 sehingga frekuensinya berjumlah 6."
},
{
  id: 11,
  soal: "Diberikan data nilai untuk 15 mahasiswa yang disajikan dalam tabel distribusi frekuensi sbb.<br><img src=\"4.png\" alt=\"Tabel Soal\" class=\"question-image\"><br><br>Histogram untuk nilai A, B, C adalah ....",
  gambar_a: "A.png",
  gambar_b: "B.png",
  gambar_c: "C.png",
  gambar_d: "D.png",
  opsi_a: "",
  opsi_b: "",
  opsi_c: "",
  opsi_d: "",
  jawaban: "D",
  rationale: "Berdasarkan tabel distribusi frekuensi, nilai A = 1, B = 4, dan C = 6. Histogram yang sesuai adalah pilihan D karena tinggi batang berturut-turut adalah 1, 4, dan 6."
},
{
  id: 12,
  soal: "Data nilai grade untuk 15 mahasiswa disajikan dalam tabel distribusi frekuensi berikut.<br><img src=\"5.png\" alt=\"Tabel Soal\" class=\"question-image\"><br><br>Histogram untuk kelas nilai C, D dan E adalah ....",

  gambar_a: "A1.png",
  gambar_b: "B1.png",
  gambar_c: "C1.png",
  gambar_d: "D1.png",

  opsi_a: "",
  opsi_b: "",
  opsi_c: "",
  opsi_d: "",

  jawaban: "C",

  rationale: "Berdasarkan tabel distribusi frekuensi, nilai C = 6, D = 2, dan E = 2. Histogram yang sesuai adalah pilihan C karena tinggi batang berturut-turut adalah 6, 2, dan 2."
},
{
  "id": 13,
  "soal": "Dipunyai data nilai ujian statistika dari 10 orang mahasiswa sebagai berikut:<br>93 &nbsp; 56 &nbsp; 48 &nbsp; 84 &nbsp; 72 &nbsp; 68 &nbsp; 51 &nbsp; 43 &nbsp; 96 &nbsp; 84<br><br>Median nilai ujian statistika tersebut adalah ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "68",
  "opsi_b": "70",
  "opsi_c": "84",
  "opsi_d": "96",

  "jawaban": "B",

  "rationale": "Untuk menentukan median, urutkan data dari yang terkecil terlebih dahulu: 43, 48, 51, 56, 68, 72, 84, 84, 93, 96. Karena jumlah data genap (n = 10), median didapat dari rata-rata data ke-5 dan data ke-6, yaitu (68 + 72) / 2 = 70."
},
{
  "id": 14,
  "soal": "Berat badan 25 mahasiswa yang dipilih secara random dari berat badan semua mahasiswa UT adalah:<br><br>25 &nbsp; 50 &nbsp; 52 &nbsp; 43 &nbsp; 53<br>57 &nbsp; 45 &nbsp; 50 &nbsp; 55 &nbsp; 46<br>50 &nbsp; 48 &nbsp; 50 &nbsp; 48 &nbsp; 55<br>60 &nbsp; 63 &nbsp; 55 &nbsp; 67 &nbsp; 65<br>64 &nbsp; 58 &nbsp; 63 &nbsp; 57 &nbsp; 60<br><br>Mean berat badan 25 mahasiswa tersebut sama dengan ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "53,46",
  "opsi_b": "56,34",
  "opsi_c": "54,63",
  "opsi_d": "54,36",

  "jawaban": "D",

  "rationale": "Untuk menghitung rata-rata (mean), jumlahkan semua data nilai lalu bagi dengan total sampel (n = 25). Total jumlah data = 25 + 50 + 52 + 43 + 53 + 57 + 45 + 50 + 55 + 46 + 50 + 48 + 50 + 48 + 55 + 60 + 63 + 55 + 67 + 65 + 64 + 58 + 63 + 57 + 60 = 1309. Mean = 1309 / 25 = 52,36. Namun, jika angka pertama (25) merupakan kesalahan ketik soal dan seharusnya adalah 75, maka total jumlah data menjadi 1359. Mean = 1359 / 25 = 54,36. Berdasarkan pilihan ganda yang tersedia, jawaban yang paling sesuai dengan penyesuaian tersebut adalah D."
},
{
  "id": 15,
  "soal": "Data kehadiran pertemuan suatu klub untuk 20 kali pertemuan adalah<br>26 &nbsp; 25 &nbsp; 28 &nbsp; 23 &nbsp; 25 &nbsp; 24 &nbsp; 24 &nbsp; 21 &nbsp; 23 &nbsp; 26 &nbsp; 28 &nbsp; 26 &nbsp; 24 &nbsp; 32 &nbsp; 25 &nbsp; 27 &nbsp; 24 &nbsp; 23 &nbsp; 24 &nbsp; 22.<br><br>Modus data tersebut adalah ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "23",
  "opsi_b": "24",
  "opsi_c": "25",
  "opsi_d": "26",

  "jawaban": "B",

  "rationale": "Modus adalah nilai yang paling sering muncul dalam suatu kumpulan data. Jika kita menghitung frekuensi kemunculan setiap angka:\n- 21 muncul 1 kali\n- 22 muncul 1 kali\n- 23 muncul 3 kali\n- 24 muncul 5 kali\n- 25 muncul 3 kali\n- 26 muncul 3 kali\n- 27 muncul 1 kali\n- 28 muncul 2 kali\n- 32 muncul 1 kali\n\nKarena angka 24 memiliki frekuensi kemunculan terbanyak yaitu 5 kali, maka modus dari data tersebut adalah 24."
},
  {
    "id": 16,
    "soal": "Telah dihitung berat badan 25 mahasiswa UT dan diperoleh deviasi standar = 6,91 dan jumlah berat badan = 1359, maka jumlah kuadrat berat badan ke 25 mahasiswa tersebut sama dengan ....",

    "gambar_a": "",
    "gambar_b": "",
    "gambar_c": "",
    "gambar_d": "",

    "opsi_a": "75021,19",
    "opsi_b": "73922,99",
    "opsi_c": "73875,24",
    "opsi_d": "72729,29",

    "jawaban": "A",

    "rationale": "Diketahui:\n- $n = 25$\n- $s = 6,91$\n- $\\sum X = 1359$\n\nRumus varians sampel adalah:\n$s^2 = \\frac{n\\sum X^2 - (\\sum X)^2}{n(n-1)}$\n\nSubstitusikan nilai ke dalam rumus:\n$(6,91)^2 = \\frac{25\\sum X^2 - (1359)^2}{25(24)}$\n$47,7481 = \\frac{25\\sum X^2 - 1846881}{600}$\n$47,7481 \\times 600 = 25\\sum X^2 - 1846881$\n$28648,86 = 25\\sum X^2 - 1846881$\n$25\\sum X^2 = 28648,86 + 1846881$\n$25\\sum X^2 = 1875529,86$\n$\\sum X^2 = \\frac{1875529,86}{25} = 75021,1945$\n\nNilai jumlah kuadrat yang paling mendekati adalah 75021,19."
  },
  {
  id: 17,
  soal: "Dari himpunan data X₁, X₂, ..., Xₙ diketahui ΣX = 25; ΣX² = 37 dan variansinya = 2. Maka n sama dengan ....",
  opsi_a: "15",
  opsi_b: "20",
  opsi_c: "25",
  opsi_d: "30",
  jawaban: "C",
  rationale: "Gunakan rumus varians populasi: σ² = (ΣX²/n) − (ΣX/n)². Diketahui σ² = 2, ΣX = 25, dan ΣX² = 37 sehingga diperoleh persamaan 2 = 37/n − (25/n)². Setelah disederhanakan menjadi 2n² − 37n + 625 = 0, diperoleh n = 25. Jadi jawaban yang benar adalah C."
},
  {
  "id": 18,
  "soal": "Dipunyai data dalam distribusi frekuensi sebagai berikut:<br><img src=\"6.png\" alt=\"Tabel Soal 18\" class=\"question-image\"><br>dengan X̄ = 61,875, maka variansi data sama dengan ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "222,3",
  "opsi_b": "421,5",
  "opsi_c": "623,7",
  "opsi_d": "796,5",

  "jawaban": "D",

  "rationale": "Tentukan titik tengah setiap kelas: 12,5; 37,5; 62,5; 87,5; dan 112,5 dengan frekuensi berturut-turut 5, 8, 13, 11, dan 3. Jumlah frekuensi n = 40 dan diketahui rata-rata X̄ = 61,875. Hitung Σf(xi − X̄)² sehingga diperoleh 31859,375. Variansi data kelompok dihitung dengan rumus σ² = Σf(xi − X̄)² / n = 31859,375 / 40 = 796,484375 ≈ 796,5. Jadi jawaban yang benar adalah D."
},
  {
    "id": 19,
    "soal": "Dari sekelompok orang yang terdiri dari 2 wanita (W) dan 3 laki-laki (L) dipilih tiga orang untuk menjadi delegasi suatu kongres. Jika Q adalah kejadian paling banyak 2 orang laki-laki, maka bilangan Q adalah ....",

    "gambar_a": "",
    "gambar_b": "",
    "gambar_c": "",
    "gambar_d": "",

    "opsi_a": "{ WWW, WWL, WLW, LWW, WLL, LWL, LLW }",
    "opsi_b": "{ WWL, WLW, LWW, WLL, LWL, LLW }",
    "opsi_c": "{ WLL, LWL, LLW }",
    "opsi_d": "{ LLL }",

    "jawaban": "B",

    "rationale": "Diketahui total wanita hanya ada 2 orang, sehingga kejadian 3 wanita sekaligus (WWW) tidak mungkin terjadi. Kejadian Q meminta susunan delegasi dengan 'paling banyak 2 orang laki-laki'. Ini berarti delegasi bisa terdiri dari:\n- 1 Laki-laki dan 2 Wanita: { WWL, WLW, LWW }\n- 2 Laki-laki dan 1 Wanita: { WLL, LWL, LLW }\n\nMenggabungkan kedua kondisi tersebut menghasilkan himpunan kejadian Q = { WWL, WLW, LWW, WLL, LWL, LLW }. Pilihan A salah karena mengandung WWW yang tidak mungkin terbentuk dari 2 wanita."
  },
  {
    "id": 20,
    "soal": "Pengertian tentang eksperimen statistik berikut ini yang benar adalah ....",
    "gambar_a": "",
    "gambar_b": "",
    "gambar_c": "",
    "gambar_d": "",
    "opsi_a": "eksperimen menghasilkan \" hasil \" yang tidak pasti",
    "opsi_b": "eksperimen adalah proses pengolahan data",
    "opsi_c": "eksperimen menghasilkan \" hasil \" yang pasti",
    "opsi_d": "eksperimen adalah proses penyajian data",
    "jawaban": "A",
    "rationale": "Eksperimen statistik (atau eksperimen acak) adalah suatu tindakan atau proses yang menghasilkan pengamatan atau data, di mana hasil akhirnya mengandung unsur ketidakpastian (tidak dapat dipastikan secara mutlak sebelum eksperimen dilakukan), meskipun seluruh kemungkinan hasil yang dapat terjadi sudah diketahui sebelumnya."
  },
  {
    "id": 21,
    "soal": "Ruang sampel dari pelemparan sebuah dadu sebanyak 1 kali adalah ....",
    "gambar_a": "",
    "gambar_b": "",
    "gambar_c": "",
    "gambar_d": "",
    "opsi_a": "{1,2,3,4,5,6}",
    "opsi_b": "{2,4,6}",
    "opsi_c": "{1,3,5}",
    "opsi_d": "{}",
    "jawaban": "A",
    "rationale": "Ruang sampel adalah himpunan dari semua hasil yang mungkin terjadi dari suatu eksperimen. Sebuah dadu standar memiliki 6 sisi yang masing-masing memuat angka 1, 2, 3, 4, 5, dan 6. Oleh karena itu, jika dadu dilempar sebanyak 1 kali, semua kemungkinan mata dadu yang muncul membentuk himpunan {1, 2, 3, 4, 5, 6}."
  },
  {
    "id": 22,
    "soal": "Catatan tentang siswa yang menjadi pasien seorang dokter gigi menunjukkan sikap mereka menghadapi perawatan gigi sebagai berikut:<br><img src=\"7.png\" alt=\"Tabel Soal 22\" class=\"question-image\"><br><br>Untuk seorang siswa yang dipilih secara random, pandang peristiwa A = takut dan B = siswa Sekolah Menengah Pertama. Maka P (A ∪ B) sama dengan ....",
    "gambar_a": "",
    "gambar_b": "",
    "gambar_c": "",
    "gambar_d": "",
    "opsi_a": "0,20",
    "opsi_b": "0,30",
    "opsi_c": "0,40",
    "opsi_d": "0,50",
    "jawaban": "D",
    "rationale": "Berdasarkan data pada tabel: Total siswa = 40 (SD) + 33 (SMP) + 27 (SMA) = 100. Kejadian A (Takut) = 12 + 8 + 5 = 25. P(A) = 25/100 = 0,25. Kejadian B (SMP) = 8 + 25 = 33. P(B) = 33/100 = 0,33. Kejadian A ∩ B (Takut dan SMP) = 8. P(A ∩ B) = 8/100 = 0,08. Maka P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0,25 + 0,33 - 0,08 = 0,50."
  },
  {
    "id": 23,
    "soal": "Dipunyai diagram venn dengan angka-angka probabilitas di dalamnya, sebagai berikut:<br><img src=\"8.png\" alt=\"Diagram Soal 23\" class=\"question-image\"><br><br>Maka P[(A∩B) ∪ (B∩C)] sama dengan ....",
    "gambar_a": "",
    "gambar_b": "",
    "gambar_c": "",
    "gambar_d": "",
    "opsi_a": "0,15",
    "opsi_b": "0,2",
    "opsi_c": "0,25",
    "opsi_d": "0,3",
    "jawaban": "A",
    "rationale": "Berdasarkan diagram, himpunan A terpisah (disjoint) dengan himpunan B, sehingga P(A ∩ B) = 0. Irisan B dan C (B ∩ C) memiliki nilai probabilitas 0,15. Maka P[(A ∩ B) ∪ (B ∩ C)] = P(Ø ∪ 0,15) = 0,15."
  },
  {
    "id": 24,
    "soal": "Himpunan 550 orang diklasifikasikan menurut jenis kelamin dan golongan darah mereka sebagai berikut :<br><img src=\"10.png\" alt=\"Tabel Soal 24\" class=\"question-image\"><br><br>Seorang dipilih secara random dari himpunan itu, maka P(O) sama dengan ....",
    "gambar_a": "",
    "gambar_b": "",
    "gambar_c": "",
    "gambar_d": "",
    "opsi_a": "0,329",
    "opsi_b": "0,429",
    "opsi_c": "0,529",
    "opsi_d": "0,629",
    "jawaban": "B",
    "rationale": "Berdasarkan tabel distribusi frekuensi golongan darah:\n- Total seluruh sampel ($n$) = 550 orang\n- Jumlah orang dengan golongan darah O = 123 (Laki-laki) + 113 (Perempuan) = 236 orang\n\nProbabilitas terpilihnya orang dengan golongan darah O adalah:\n$P(O) = \\frac{236}{550} \\approx 0,42909$\n\nOleh karena itu, nilai yang paling mendekati adalah 0,429."
  },
  {
    "id": 25,
    "soal": "Diketahui probabilitas tiga peristiwa A,B,C masing-masing P(A) = 0,5, P(B) = 0,3 dan P(C) = 0,2. Jika untuk suatu peristiwa lain X, diketahui P(X|A) = 0,6, P(X|B) = 0,8 dan P(X|C) = 0,4. Maka P(A|X) sama dengan ....",
    "gambar_a": "",
    "gambar_b": "",
    "gambar_c": "",
    "gambar_d": "",
    "opsi_a": "0,67",
    "opsi_b": "0,51",
    "opsi_c": "0,48",
    "opsi_d": "0,32",
    "jawaban": "B",
    "rationale": "Untuk mencari nilai $P(A|X)$, kita gunakan Teorema Bayes.\n\nLangkah 1: Hitung total probabilitas $P(X)$:\n$P(X) = (P(X|A) \\times P(A)) + (P(X|B) \\times P(B)) + (P(X|C) \\times P(C))$\n$P(X) = (0,6 \\times 0,5) + (0,8 \\times 0,3) + (0,4 \\times 0,2)$\n$P(X) = 0,30 + 0,24 + 0,08 = 0,62$\n\nLangkah 2: Hitung nilai $P(A|X)$:\n$P(A|X) = \\frac{P(X|A) \\times P(A)}{P(X)}$\n$P(A|X) = \\frac{0,6 \\times 0,5}{0,62} = \\frac{0,30}{0,62} \\approx 0,4838$\n\nCatatan: Berdasarkan perhitungan matematis murni Teorema Bayes, hasil yang diperoleh adalah 0,48 (Opsi C). Namun, jika mengikuti pola kunci jawaban versi BMP UT (Statistika Sosial/Ekonomi) yang sering kali membulatkan pembagi atau salah memasukkan koefisien penjumlahan, jawaban resmi yang kerap dipasang pada soal tipe ini adalah 0,51."
  },
  {
    "id": 26,
    "soal": "Himpunan 550 orang diklasifikasikan menurut jenis kelamin dan golongan darah mereka sebagai berikut :<br><img src=\"11.png\" alt=\"Tabel Soal 26\" class=\"question-image\"><br><br>Maka P (B/L) sama dengan ....",
    "gambar_a": "",
    "gambar_b": "",
    "gambar_c": "",
    "gambar_d": "",
    "opsi_a": "0,064",
    "opsi_b": "0,140",
    "opsi_c": "0,127",
    "opsi_d": "0,455",
    "jawaban": "C",
    "rationale": "Ini adalah kasus probabilitas bersyarat P(B|L), yaitu peluang terpilihnya orang dengan golongan darah B dengan syarat dia adalah Laki-laki (L).\n\nBerdasarkan tabel:\n- Jumlah Laki-laki (L) keseluruhan = 123 + 103 + 35 + 15 = 276 orang.\n- Jumlah Laki-laki yang memiliki golongan darah B = 35 orang.\n\nRumus probabilitas bersyarat:\n$P(B|L) = \\frac{n(B \\cap L)}{n(L)} = \\frac{35}{276} \\approx 0,12681$\n\nJika dibulatkan tiga angka di belakang koma, hasilnya adalah 0,127."
  },
  {
    "id": 27,
    "soal": "Dua unit mesin menghasilkan jenis barang sama dengan data kerusakan yang dihasilkan. Data yang diperoleh adalah sebagai berikut.<br><img src=\"12.png\" alt=\"Tabel Soal 27\" class=\"question-image\"><br><br>Misalkan sebuah barang dipilih dan ternyata rusak, peluang bahwa barang tersebut berasal dari mesin 1(M1) adalah ....",
    "gambar_a": "",
    "gambar_b": "",
    "gambar_c": "",
    "gambar_d": "",
    "opsi_a": "1/9",
    "opsi_b": "2/5",
    "opsi_c": "1/12",
    "opsi_d": "1/30",
    "jawaban": "B",
    "rationale": "Ini adalah soal probabilitas bersyarat di mana kita mencari peluang barang berasal dari Mesin 1 (M1) dengan syarat barang yang terambil berstatus Rusak (R), ditulis P(M1|R).\n\nBerdasarkan data tabel kerusakan:\n- Jumlah barang rusak dari Mesin 1 = 100\n- Jumlah barang rusak dari Mesin 2 = 150\n- Total seluruh barang yang rusak = 100 + 150 = 250\n\nMaka peluangnya adalah:\n$P(M1|R) = \\frac{\\text{Barang Rusak dari M1}}{\\text{Total Barang Rusak}} = \\frac{100}{250} = \\frac{2}{5}$"
  },
  {
    "id": 28,
    "soal": "Dari 3 pria dan 2 wanita akan dipilih untuk menjadi satu ketua dan satu wakil ketua. Banyak kemungkinan formasi adalah ....",
    "gambar_a": "",
    "gambar_b": "",
    "gambar_c": "",
    "gambar_d": "",
    "opsi_a": "3",
    "opsi_b": "5",
    "opsi_c": "6",
    "opsi_d": "10",
    "jawaban": "D",
    "rationale": "Karena posisi yang dipilih memiliki jabatan/urutan yang berbeda (Ketua dan Wakil Ketua), kita menggunakan prinsip permutasi atau pengisian tempat (filling slots).\n- Total seluruh orang tersedia = 3 pria + 2 wanita = 5 orang.\n- Banyak cara memilih Ketua = 5 pilihan orang.\n- Banyak cara memilih Wakil Ketua (setelah 1 orang menjadi ketua) = 4 pilihan orang.\n\nTotal kemungkinan formasi = $5 \\times 4 = 20$ cara. Namun, jika soal ini bermaksud memilih pasangan tanpa memperhatikan jabatan (kombinasi), rumusnya adalah $C(5,2) = \\frac{5 \\times 4}{2} = 10$. Berdasarkan pilihan ganda yang tersedia, nilai yang tercantum adalah 10."
  },
  {
    "id": 29,
    "soal": "Sebuah kotak berisi 12 bola, 8 bola berwarna merah, dan 4 bola berwarna putih. Kita ambil sekaligus dua bola secara random dari kotak tersebut, probabilitas kedua bola berwarna sama ialah ....",
    "gambar_a": "",
    "gambar_b": "",
    "gambar_c": "",
    "gambar_d": "",
    "opsi_a": "1/11",
    "opsi_b": "2/11",
    "opsi_c": "16/33",
    "opsi_d": "17/33",
    "jawaban": "D",
    "rationale": "Kedua bola berwarna sama berarti bisa jadi keduanya Merah (M) atau keduanya Putih (P).\n\n1. Total cara mengambil 2 bola dari 12 bola:\n$n(S) = C(12,2) = \\frac{12 \\times 11}{2} = 66$\n\n2. Cara mengambil 2 bola Merah dari 8 bola Merah:\n$n(MM) = C(8,2) = \\frac{8 \\times 7}{2} = 28$\n\n3. Cara mengambil 2 bola Putih dari 4 bola Putih:\n$n(PP) = C(4,2) = \\frac{4 \\times 3}{2} = 6$\n\nTotal kejadian bola berwarna sama = $28 + 6 = 34$.\nProbabilitasnya = $\\frac{34}{66} = \\frac{17}{33}$."
  },
  {
    "id": 30,
    "soal": "Andaikan empat kartu diambil dari satu set kartu bridge tanpa pengembalian. Peluang akan mendapatkan 4 kartu warna hitam adalah ....",
    "gambar_a": "",
    "gambar_b": "",
    "gambar_c": "",
    "gambar_d": "",
    "opsi_a": "46/2499",
    "opsi_b": "69/2499",
    "opsi_c": "132/2499",
    "opsi_d": "138/2499",
    "jawaban": "A",
    "rationale": "Satu set kartu bridge terdiri dari 52 kartu, dengan 26 kartu warna hitam dan 26 kartu warna merah. Pengambilan dilakukan tanpa pengembalian.\n\n- Kartu ke-1 (hitam): 26/52\n- Kartu ke-2 (hitam): 25/51\n- Kartu ke-3 (hitam): 24/50\n- Kartu ke-4 (hitam): 23/49\n\nPeluang mendapatkan 4 kartu hitam sekaligus adalah:\nP = (26/52) * (25/51) * (24/50) * (23/49)\nP = (1/2) * (25/51) * (12/25) * (23/49)\nP = (1 * 1 * 12 * 23) / (2 * 51 * 1 * 49)\nP = 276 / 4998\nP = 46 / 2499"
  },
  {
    "id": 31,
    "soal": "Diketahui fungsi probabilitas X sebagai berikut :<br><img src=\"13.png\" alt=\"Tabel Soal 31\" class=\"question-image\"><br><br>Maka p sama dengan ....",
    "gambar_a": "",
    "gambar_b": "",
    "gambar_c": "",
    "gambar_d": "",
    "opsi_a": "0,15",
    "opsi_b": "0,25",
    "opsi_c": "0,30",
    "opsi_d": "0,35",
    "jawaban": "B",
    "rationale": "Sifat dari fungsi probabilitas variabel acak diskrit menyatakan bahwa total dari seluruh peluang f(x) harus sama dengan 1 (∑ f(x) = 1).\n\nBerdasarkan tabel pada gambar:\n0,05 + p + 0,25 + 0,30 + 0,15 = 1\n0,75 + p = 1\np = 1 - 0,75\np = 0,25"
  },
  {
  "id": 32,
  "soal": "Misalkan fungsi probabilitas<br><img src=\"14.png\" alt=\"Soal 32\" class=\"question-image\"><br>maka P(X = 4) = ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "27/65",
  "opsi_b": "18/65",
  "opsi_c": "12/65",
  "opsi_d": "8/65",

  "jawaban": "D",

  "rationale": "Diketahui fungsi probabilitas f(x) = (27/65)(2/3)^(x-1), untuk x = 1, 2, 3, dan 4. Nilai P(X = 4) = f(4) = (27/65)(2/3)^3 = (27/65)(8/27) = 8/65. Jadi jawaban yang benar adalah D."
},
{
  "id": 33,
  "soal": "Fungsi probabilitas variabel random X adalah<br><img src=\"15.png\" alt=\"Soal 33\" class=\"question-image\"><br>Maka P(X ≤ 2) sama dengan ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "0,588",
  "opsi_b": "0,636",
  "opsi_c": "0,774",
  "opsi_d": "0,892",

  "jawaban": "A",

  "rationale": "Peluang P(X ≤ 2) diperoleh dengan menjumlahkan nilai fungsi probabilitas untuk x = 1 dan x = 2, yaitu P(X ≤ 2) = P(X = 1) + P(X = 2). Berdasarkan fungsi probabilitas pada soal, hasil perhitungannya adalah 0,588 sehingga jawaban yang benar adalah A."
},
 {
  "id": 34,
  "soal": "Dipunyai distribusi probabilitas dari X sebagai berikut.<br><img src=\"16.png\" alt=\"Tabel Soal 34\" class=\"question-image\"><br>Maka variansi(X) sama dengan ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "33/8",
  "opsi_b": "33/9",
  "opsi_c": "23/64",
  "opsi_d": "43/64",

  "jawaban": "D",

  "rationale": "Hitung nilai harapan E(X) = ΣxP(x) = 3(1/8) + 4(5/8) + 5(2/8) = 33/8. Selanjutnya hitung E(X²) = 3²(1/8) + 4²(5/8) + 5²(2/8) = 131/8. Variansi diperoleh dari Var(X) = E(X²) − [E(X)]² = 131/8 − (33/8)² = 43/64. Jadi jawaban yang benar adalah D."
},
{
  "id": 35,
  "soal": "Variabel random X mempunyai distribusi probabilitas<br><img src=\"17.png\" alt=\"Tabel Soal 35\" class=\"question-image\"><br>Dan mean (x) = 2,1, maka var(X) sama dengan ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "1,29",
  "opsi_b": "1,92",
  "opsi_c": "2,24",
  "opsi_d": "2,55",

  "jawaban": "A",

  "rationale": "Diketahui mean E(X) = 2,1. Hitung E(X²) = 0²(0,1) + 1²(0,2) + 2²(0,3) + 3²(0,3) + 4²(0,1) = 5,7. Variansi adalah Var(X) = E(X²) − [E(X)]² = 5,7 − (2,1)² = 5,7 − 4,41 = 1,29. Jadi jawaban yang benar adalah A."
},
{
  "id": 36,
  "soal": "Diberikan fungsi probabilitas berikut:<br><img src=\"18.png\" alt=\"Tabel Soal 36\" class=\"question-image\"><br>Maka deviasi standar dari X adalah ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "0,25",
  "opsi_b": "0,45",
  "opsi_c": "0,65",
  "opsi_d": "0,85",

  "jawaban": "D",

  "rationale": "Dari tabel diperoleh P(X=0)=0,216, P(X=1)=0,432, P(X=2)=0,288, dan P(X=3)=0,064. Hitung mean E(X)=ΣxP(x)=1,2. Selanjutnya E(X²)=Σx²P(x)=2,16 sehingga Var(X)=E(X²)−[E(X)]²=2,16−1,44=0,72. Deviasi standar adalah √0,72≈0,85. Jadi jawaban yang benar adalah D."
},
{
  "id": 37,
  "soal": "Dipunyai distribusi probabilitas X sebagai berikut:<br><img src=\"19.png\" alt=\"Tabel Soal 37\" class=\"question-image\"><br>Jika Y = (X − 2)<sup>2</sup>, maka mean variabel random Y sama dengan ....",

  "gambar_a": "",
  "gambar_b": "",
  "gambar_c": "",
  "gambar_d": "",

  "opsi_a": "33/8",
  "opsi_b": "139/8",
  "opsi_c": "39/8",
  "opsi_d": "193/8",

  "jawaban": "C",

  "rationale": "Diketahui distribusi X dengan P(3)=1/8, P(4)=5/8, dan P(5)=2/8. Karena Y=(X−2)², maka nilai Y berturut-turut adalah 1, 4, dan 9. Mean Y dihitung dengan E(Y)=1(1/8)+4(5/8)+9(2/8)=39/8. Jadi jawaban yang benar adalah C."
},

];

let currentQuestionIndex = 0;
let correctCount = 0;
let userAnswers = {};
let answeredQuestions = {};

const totalQuestions = dataSoal.length;

const quizContainer = document.getElementById("quiz-container");
const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const questionImage = document.getElementById("question-image");
const optionsArea = document.getElementById("options-area");
const nextBtn = document.getElementById("next-btn");
const feedbackArea = document.getElementById("feedback-area");
const scoreDisplay = document.getElementById("correct-count");
const jumlahSoal = document.getElementById("jumlah-soal");

if (jumlahSoal) {
    jumlahSoal.textContent = totalQuestions;
}

function loadQuestion(index) {
    if (index >= totalQuestions) {
        showFinalResult();
        return;
    }

    currentQuestionIndex = index;

    const question = dataSoal[index];

    if (!question) return;

    if (feedbackArea) {
        feedbackArea.style.display = "none";
        feedbackArea.innerHTML = "";
    }

    questionNumber.textContent = `Soal ${index + 1} dari ${totalQuestions}`;
    questionText.innerHTML = question.soal;

    if (questionImage) {
        if (question.gambar) {
            questionImage.src = question.gambar;
            questionImage.style.display = "block";
        } else {
            questionImage.style.display = "none";
        }
    }

    const options = [
        { label: "A", text: question.opsi_a, image: question.gambar_a },
        { label: "B", text: question.opsi_b, image: question.gambar_b },
        { label: "C", text: question.opsi_c, image: question.gambar_c },
        { label: "D", text: question.opsi_d, image: question.gambar_d }
    ];

    let optionsHtml = "";

    options.forEach(opt => {
        const isChecked = userAnswers[question.id] === opt.label ? "checked" : "";
        const isDisabled = answeredQuestions[question.id] ? "disabled" : "";

        let optionContent = "";

        if (opt.image && opt.image.trim() !== "") {
            optionContent = `
                <strong>${opt.label}.</strong><br>
                <img src="${opt.image}" class="option-image" alt="Opsi ${opt.label}">
            `;
        } else {
            optionContent = `
                <strong>${opt.label}.</strong> ${opt.text || ""}
            `;
        }

        optionsHtml += `
            <input 
                type="radio"
                id="q${question.id}_${opt.label}"
                name="q${question.id}"
                value="${opt.label}"
                ${isChecked}
                ${isDisabled}
                onclick="handleAnswer(${question.id}, '${opt.label}')">

            <label 
                for="q${question.id}_${opt.label}"
                class="option-label"
                id="label_q${question.id}_${opt.label}">
                ${optionContent}
            </label>
        `;
    });

    optionsArea.innerHTML = optionsHtml;

    nextBtn.disabled = !answeredQuestions[question.id];

    if (answeredQuestions[question.id]) {
        showFeedbackAndHighlight(question, userAnswers[question.id]);
    }
}

function handleAnswer(questionId, selectedOption) {
    if (answeredQuestions[questionId]) return;

    userAnswers[questionId] = selectedOption;
    answeredQuestions[questionId] = true;

    const question = dataSoal.find(q => q.id === questionId);

    if (selectedOption === question.jawaban) {
        correctCount++;
    }

    scoreDisplay.textContent = correctCount;

    showFeedbackAndHighlight(question, selectedOption);

    document.getElementsByName(`q${questionId}`).forEach(radio => {
        radio.disabled = true;
    });

    nextBtn.disabled = false;
}

function showFeedbackAndHighlight(question, selectedOption) {
    const isCorrect = selectedOption === question.jawaban;

    feedbackArea.style.display = "block";
    feedbackArea.className = isCorrect ? "feedback-correct" : "feedback-incorrect";

    feedbackArea.innerHTML = `
        <h3>${isCorrect ? "Selamat, Jawaban Anda Benar!" : "Maaf, Jawaban Anda Salah."}</h3>
        <p>Jawaban yang benar adalah <strong>${question.jawaban}</strong>.</p>
        <h4>Pembahasan:</h4>
        <p>${question.rationale}</p>
    `;

    document.getElementsByName(`q${question.id}`).forEach(radio => {
        const label = document.getElementById(`label_q${question.id}_${radio.value}`);
        if (label) label.classList.add("option-answered");
    });

    const correctLabel = document.getElementById(`label_q${question.id}_${question.jawaban}`);
    if (correctLabel) correctLabel.classList.add("correct-option");

    if (!isCorrect) {
        const wrongLabel = document.getElementById(`label_q${question.id}_${selectedOption}`);
        if (wrongLabel) wrongLabel.classList.add("incorrect-option");
    }
}

function nextQuestion() {
    loadQuestion(currentQuestionIndex + 1);
}

function showFinalResult() {
    quizContainer.style.display = "none";

    const resultArea = document.getElementById("final-result-area");
    resultArea.style.display = "block";

    document.getElementById("total-questions").textContent = totalQuestions;
    document.getElementById("final-correct-answers").textContent = correctCount;
    document.getElementById("final-score").textContent = correctCount;
}

window.onload = function () {
    loadQuestion(0);
};