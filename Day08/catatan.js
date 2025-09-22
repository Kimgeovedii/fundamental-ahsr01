// sequence control
// Pada intinya, gambar ini menunjukkan ada dua cara umum untuk mengendalikan alur kerja program:

// Panggilan terpisah: Setiap langkah dikendalikan oleh kode utama. Ini memberikan kontrol yang lebih baik dan menjaga setiap fungsi tetap sederhana.

// Panggilan internal: Satu fungsi utama mengendalikan seluruh alur, memanggil fungsi-fungsi lain dari dalamnya. Ini bisa lebih ringkas, tetapi membuat fungsi menjadi kurang fleksibel.

// second way

// function calculator

/////

// Kode tersebut mencoba melakukan dua hal secara berurutan:

// Mengambil data kategori dari URL pertama.

// Setelah berhasil, mengambil elemen kedua dari data tersebut (data[2]) dan menyimpannya ke variabel dataCategory.

// Kemudian, di dalam blok .then() pertama, ia memulai fetch kedua untuk mengambil data produk, menggunakan dataCategory sebagai parameter URL.

// Kode ini adalah contoh yang benar untuk menangani operasi asinkron yang berurutan menggunakan Promise Chaining

// Deklarasi variabel untuk menyimpan data kategori.
// Variabel ini dideklarasikan di luar blok `fetch` agar bisa diakses.
let dataCategory;

// Mulai operasi pengambilan data kategori
// Bagian pertama: Mengambil data kategori
fetch("https://api.databse.com/category")
  // Blok .then() pertama: akan dieksekusi jika fetch kategori berhasil
  .then((data) => {
    // task code jika data berhasil diakses
    // Mengambil elemen ke-3 (indeks 2) dari array data yang diterima.
    dataCategory = data[2];

    // Mulai operasi pengambilan data produk
    // Bagian kedua: Mengambil data produk, bersarang di dalam .then() pertama
    // Ini memastikan fetch kedua baru berjalan setelah dataCategory tersedia.
    return (
      fetch(`https://api.databse.com/product?category=${dataCategory}`)
        // Blok .then() kedua: akan dieksekusi jika fetch produk berhasil
        .then((data) => {
          // task code jika data berhasil diakses
          // Lakukan sesuatu dengan data produk di sini
          console.log("Data produk berhasil diambil:", data);
        })
        // Blok .catch() kedua: menangani error spesifik untuk fetch produk
        .catch((error) => {
          // task code jika terjadi error
          console.error("Terjadi error saat mengambil data produk:", error);
        })
    );
  })
  // Blok .catch() pertama: menangani error spesifik untuk fetch kategori
  .catch((error) => {
    // task code jika terjadi error
    console.error("Terjadi error saat mengambil data kategori:", error);
  });

//kalo pakai async await
async function getData(params) {
  try {
    const dataCategory = await fetch("https://api.databse.com/category");
    const categoryData = await categoryResponse.json();
    const categoryValue = categoryData[2];
    const productResponse = await fetch(
      `https://api.databse.com/product?category=${categoryValue}`
    );
    const productData = await productResponse.json();
  } catch (e) {
    console.error("error bro", e);
  }
}

const tryThrow = () => {
  try {
    let isFalse = true;

    // Kondisi ini akan dieksekusi karena isFalse bernilai true
    if (isFalse) {
      // Baris ini akan melempar error dan menghentikan eksekusi blok `try`
      throw "there is an Error";
    }

    // Baris ini tidak akan pernah dieksekusi
    console.log("Success");
  } catch (err) {
    // Blok ini akan menangkap error yang dilempar oleh `throw`
    // `err` akan berisi nilai "there is an Error"
    console.log(err);
  }
};

// Memanggil fungsi untuk menjalankan kode
tryThrow();

// Output:

// there is an Error

// Saat fungsi tryThrow() dipanggil:
// Kode masuk ke blok try.
// Kondisi if (isFalse) terpenuhi (true).
// Kata kunci throw digunakan untuk membuat dan "melemparkan" sebuah error dengan nilai berupa string "there is an Error".
// Eksekusi di dalam blok try segera dihentikan.
// Program langsung melompat ke blok catch.
// Blok catch menerima nilai yang dilempar ("there is an Error") ke dalam parameter err.
// console.log(err) mencetak nilai tersebut ke konsol, menghasilkan output seperti yang terlihat di atas.

// Big O Notation

/**
 *  Big O Notation, sebuah cara untuk mengukur seberapa cepat waktu eksekusi sebuah algoritma bertambah seiring dengan meningkatnya ukuran data input (n). Sumbu horizontal adalah ukuran data input, dan sumbu vertikal adalah waktu eksekusi.

Berikut adalah penjelasan singkat untuk setiap notasi, dari yang paling efisien hingga yang paling tidak efisien:

O(1) - Konstan: Waktu eksekusi selalu sama, tidak peduli seberapa besar ukuran data input. Ini adalah yang paling efisien.
O(n) - Linear: Waktu eksekusi berbanding lurus dengan ukuran data input. Jika data input berlipat ganda, waktu eksekusi juga akan berlipat ganda. Contoh: pencarian sederhana pada array (looping).

O(log^n) - Logaritmik: Waktu eksekusi meningkat sangat lambat. Setiap kali ukuran data input berlipat ganda, waktu eksekusi hanya bertambah sedikit. Contoh: pencarian biner (binary search).


O(n2) - Kuadratik: Waktu eksekusi bertambah secara eksponensial dengan kuadrat ukuran data input. Jika data input berlipat ganda, waktu eksekusi bertambah empat kali lipat. Contoh: algoritma pengurutan dasar seperti bubble sort atau looping didalam looping.
contoh kode : 


O(n3) - Kubik: Waktu eksekusi bertambah sangat cepat seiring dengan kubik ukuran data input. Ini jauh lebih lambat daripada O(n2).

O(n^n) - Eksponensial: Waktu eksekusi bertambah ekstrem dan tidak praktis untuk data input yang besar. Ini adalah yang paling tidak efisien
 */

//contoh kode:

//O(n2) - Kuadratik
function checkDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
}
console.log(checkDuplicate([1, 2, 3, 1])); // Output: true

//O(n^n) - Eksponensial
function checkDuplicate(arr) {
  arr.sort();
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) return true;
  }
  return false;
}
console.log(checkDuplicate([5, 1, 3, 1]));

//Data Structure
/**
 * Sebuah tumpukan (stack) adalah struktur data yang menyimpan daftar elemen. Tumpukan hanya mengizinkan operasi pada satu ujung saja. Fitur ini membuatnya menjadi struktur data LIFO, singkatan dari Last-in-first-out (yang terakhir masuk, yang pertama keluar).

Di dalam tumpukan, elemen yang dimasukkan (disisipkan atau ditambahkan) terakhir, akan diakses pertama.

Dalam terminologi tumpukan, operasi penyisipan (menambahkan elemen) disebut operasi PUSH, dan operasi penghapusan (mengeluarkan elemen) disebut operasi POP.
 */
interface IStack {
  push(element: number): void;
  pop(): number | undefined;
}

class Stack implements IStack {
  #maxSize: number;
  #container: number[];

  constructor(maxSize: number = 10) {
    this.#maxSize = maxSize;
    this.#container = [];
  }

  // Metode untuk menambahkan elemen ke tumpukan
  push(element: number): void {
    if (this.#container.length < this.#maxSize) {
      this.#container.push(element);
    } else {
      console.log("Stack is full!");
    }
  }

  // Metode untuk mengeluarkan elemen dari tumpukan
  pop(): number | undefined {
    if (this.#container.length > 0) {
      return this.#container.pop();
    } else {
      console.log("Stack is empty!");
      return undefined;
    }
  }

  // Metode tambahan untuk melihat elemen teratas tanpa mengeluarkannya
  peek(): number | undefined {
    return this.#container[this.#container.length - 1];
  }

  // Metode tambahan untuk memeriksa apakah tumpukan kosong
  isEmpty(): boolean {
    return this.#container.length === 0;
  }

  // Metode tambahan untuk mendapatkan ukuran saat ini
  size(): number {
    return this.#container.length;
  }
}

// --- Contoh Penggunaan ---

const myStack = new Stack(3);

console.log("Stack kosong?", myStack.isEmpty()); // Output: true

myStack.push(10);
myStack.push(20);
myStack.push(30);

console.log("Ukuran stack:", myStack.size()); // Output: 3

// Menambahkan elemen saat stack sudah penuh
myStack.push(40); // Output: Stack is full!

console.log("Elemen teratas:", myStack.peek()); // Output: 30

const poppedElement = myStack.pop();
console.log("Elemen yang dikeluarkan:", poppedElement); // Output: 30
console.log("Elemen teratas sekarang:", myStack.peek()); // Output: 20

// Mengeluarkan elemen hingga stack kosong
myStack.pop();
myStack.pop();

// Mencoba mengeluarkan elemen dari stack yang kosong
myStack.pop(); // Output: Stack is empty!

//Queue
/**
 * Antrean (queue) adalah sebuah struktur data abstrak yang, dalam beberapa hal, mirip dengan Tumpukan (stack). Namun, tidak seperti tumpukan, sebuah antrean terbuka di kedua ujungnya. Satu ujung selalu digunakan untuk menyisipkan data (operasi enqueue), dan ujung lainnya digunakan untuk mengeluarkan data (operasi dequeue).

Antrean mengikuti metodologi First-In-First-Out (FIFO), yang berarti item data yang disimpan pertama kali akan diakses pertama kali.
 */

/**
 * Antrean (queue) digunakan di mana pun ada kebutuhan untuk memproses permintaan secara berurutan, dari yang pertama masuk hingga yang terakhir.

Melayani permintaan pada satu sumber daya bersama, seperti printer atau penjadwalan tugas CPU. Ketika beberapa pengguna mengirim tugas cetak ke satu printer, printer akan memprosesnya dalam antrean, satu per satu, sesuai urutan permintaan.

Diterapkan di WhatsApp saat kita mengirim pesan kepada teman dan mereka tidak memiliki koneksi internet. Pesan-pesan ini akan diantrekan (queued) di server WhatsApp dan akan dikirimkan saat teman kita terhubung kembali.

Antrean dalam router / switch. Perangkat jaringan ini mengelola paket data yang masuk dan mengirimkannya keluar secara berurutan, memastikan tidak ada paket yang hilang karena tumpang tindih.

Antrean email. Ketika Anda mengirim email, email tersebut tidak langsung terkirim. Ia akan masuk ke dalam antrean di server email dan menunggu gilirannya untuk dikirimkan.

Dan lain-lain.
 */

//Hash Table map

/**
 * Tabel hash (sering disebut peta hash) adalah sebuah struktur data yang memetakan kunci ke nilai. Tabel hash menggabungkan operasi pencarian (lookup), penyisipan (insert), dan penghapusan (delete) dengan cara yang sangat efisien.

Sebuah kunci dikirim ke fungsi hash, yang melakukan operasi aritmatika pada kunci tersebut. Hasilnya (disebut nilai hash atau hash) adalah sebuah indeks yang menunjukkan lokasi pasangan kunci-nilai disimpan.
 */

// big O notaion, Data structure : lifo, fifo dan set map
