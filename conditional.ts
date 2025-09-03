// Conditional Statement : code yang ditujukan untuk memberikan pilihan eksekusi
// program sesuai kondisi yang diberikan.
/**
 * - if : untuk satu kondisi
 * - if...else : untuk dua kondisi
 * - if...else if...else : untuk 3 kondisi atau lebih
 * - switch...case : pengkondisian dalam bentuk validasi kecocokan data
 */

// Contoh data :
let nama: string = "edo";
let usia: number = 20;
let email: string = "edo@mail.com";

// IF STATEMENT
/**
 * Aturan penulisan :
 * if(condition){
 * taskcode
 * }
 * note :
 * - condition : kondisi yang diinginkan berdasarkan nilai boolean yang didapat
 * dari TRUTHLY/FALSY/COMPARISON/LOGICAL
 * - taskcode  : kumpulan baris program yang ingin dijalankan ketika condition terpenuhi (nilainya true)
 */

// case : memvalidasi batas usia
if (usia > 17) {
  console.log("Verifikasi usia anda berhasil");
}

//IF..ELSE STATEMENT
/**
 * aturan
 *
 */

usia = 14;
let results: string;
if (usia > 17) {
  results = "sudah dewasa";
} else {
  results = "belum dewasa";
}

console.log(results);

//case : memerikasa data email apakah benar itu email
email = "persib@gmail.com";
if (email.includes("@") && email.split("@")[1].includes(".")) {
  results = "email benar";
} else {
  results = "salah lurd";
}

console.log(`cek email status : ${results}`);

// IF...ELSE IF...ELSE
/**
 * Aturan penulisan
 * if(condition){
 * // taskcode
 * }else if(condition){
 * // taskcode
 * }else{
 * // taskcode
 * }
 */

let nilaiUN: number = 80;
let hasilUN: string;

if (nilaiUN > 80) {
  hasilUN = "Lulus Bro";
} else if (nilaiUN === 80) {
  hasilUN = "lulus tapi pinggir jurang";
} else {
  hasilUN = "remidi bro";
}
console.log(`nilai UN anda ${nilaiUN} maka anda dinyatakan ${hasilUN}`);

// SWITCH CASE
/**
 * Aturan penulisan :
 * switch(variableOfValue){
 * case "A":
 * - taskcode
 * case "B":
 * - taskcode
 * case "C":
 * - taskcode
 * default:
 * - taskcode
 * }
 */

function cekKerja(pekerjaan: string) {
  let kerja: string = "Programmer";
  switch (pekerjaan) {
    case "Programmer":
      console.log("Bikin Aplikasi");
      break;
    case "Petani":
      console.log("Macul");
      break;
    case "Dokter":
      console.log("periksa kesehatan");
    default:
      console.log("Nganggur palingan");
  }
}

cekKerja("Programmer");

// Ternary operator : operator yang merepresentasikan pengkondisian
/**
 * Aturan penulisan :
 * let value:string = condition ? mainValue : optionValue;
 */

usia = 10;
let hasilBaru: string =
  usia < 17 ? "Belum bisa bikin sim" : "sudah bisa bikin sim";
console.log(hasilBaru);
