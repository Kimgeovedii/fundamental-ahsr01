/**
 * function : Sekumpulan program yang dibungkus menjadi satu untuk mengerjaka proses tertentu,
 * selain itu function juga ditunjukan untuk mempermudah penggunaan kode berulang untuk menggunakan suatu function
 * kategori function : Built-in function dan user defined function
 * Aturan penulisan defined function:
 *  - Nama Function mengikuti aturan nama variable
 *  - Function bisa menerima nilai dinamis dari luar function melalui parameter atau argument
 *  - Function jenis penulisanya ada 3 yaitu : declarative function, function expression, arrow function
 *  - Function biasanya menghasilnya nilai output yang dikeluarkan melalui "return"
 */

//without function
//case : membuat kode penjumlahan
//Input : dua variabel yang menampung data untuk dijumlahkan
let angkaA: number = 10;
let angkaB: number = 100;
//Process : Menentukan rumus penjumlahan
const hasil: number = angkaA + angkaA;
//Output menghasilkan nila penjumlahan
console.log(hasil);

//Convert to function
/**
 * Declarative Function
 * Aturan Penulisan tanpa parameter
 * function namaFunction (){
 * //taskcode
 * }
 *
 * aturan penulisan dengan parameter
 * function namaFunction(paramA,paramB,...){
 * //taskcode}
 */

//function without params
//tahap create function
function penjumlahan() {
  let angkaA: number = 11;
  let angkaB: number = 17;

  const hasil: number = angkaA + angkaB;

  console.log(hasil);
  return hasil;
}

//call function
penjumlahan;

//execute function
penjumlahan();

//apapun yang rerjadi selama tidak ada trigger untuk mengeksekusi functin tidak tidak akan jalan
const hasilFunction = penjumlahan(); // ini gk jalan karena didalam variabel hanya menyimpan hasil eksekusi dari function, nilaie durung ditokne
console.log(hasilFunction); // nah kalo ini jalan karena kita menampilkan hasifunction yang isinya adalah hasil eksekusi dari function penjumlahan dijalankan sama console.log

//function with params
//kasih tanda tanya pada parameter contoh (params?: number) kalo parameter itu ada kemungkinan bisa untuk tidak diisi, atau bisa juga dengan memberikan default value, tapi harus salah satu kalo di typescript antara default value atau dikasih opsional atau tanda tanya ?
function penjumlahanParam(angkaA: number, angkaB: number) {
  const hasil: number = angkaA + angkaB;
  return hasil;
}
console.log(penjumlahanParam(12, 2));

//exsercise : Buat function calculator, yang setiap kali di execute angka dan perhitunganya berbeda -beda

function calculator(perhitungan: string) {
  let operation = perhitungan.replace(/\s+/g, "");

  const regex = /(\d+)([*\/])(\d+)/;
  let match;
  if ((match = operation.match(regex))) {
    const [fullMatch, num1Str, operator, num2Str] = match;
  }
  console.log(operation);
}

calculator("1+2+2");

// 14 soal eazy dan 3 soal medium
