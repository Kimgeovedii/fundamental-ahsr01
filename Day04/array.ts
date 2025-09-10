/**
 * Array: Tipe data yang berisi sekumpulan data.
 *        Tipe data yang disimpan umumnya memiliki tipe yang sama.
 *        Tiap data pada arrya memiliki alamat index, yang dimulai dari index ke -0.
 * Tujuan : untuk mempermudah penglolaan data.
 * Aturan Penulisan :
 *  KeywpordVariable NameVariable = [data1, data2,...]
 * - Example : let numbs:number[] = [1,2,3,4]
 * - Example : let abjad:string[] = ["a","b","c"]
 * - Example : let student:(string | number)[] = ["Abdi",20];// union types
 * - Example : let student:[string, number,number,boolean] = ["TV",12,140000,true];// tuples type
 *
 */

//Case without array : kita ingin mencatat kumpulan nama produk
let baju: string = "baju";
let topi: string = " Topi";

//with array
let productName: string[] = ["Baju", "Topi", "Handphone"];
console.log(typeof productName);

//specifi access
console.log(productName[1]);

//define array with array constructor
let productPrice: number[] = new Array(35000, 25000, 1500000);
console.log(productPrice);
console.log(productPrice[1]);

//mengganti salah satu data array menggunakan konsep re assign
productPrice[1] = 18000;
console.log(productPrice);

//access all data in array
for (let index: number = 0; index < 3; index++) {
  console.log("halo", productPrice[index]);
}

let printList: string = "";
for (let index: number = 0; index < 3; index++) {
  printList += `${index + 1}. ${productName[index]} \n`;
}
console.log(printList);
//access data array without array

//array function
//array.push(newData) : menambahkan data baru diakhir data
productName.push("celana");
console.log(productName);

//array.pop(): menghapus data array terakhir
productName.pop();
console.log(productName);

//array.unshift(newData): menambahkan data diawal array
productName.unshift("Celana");
console.log(productName);

//array.shift(): menghapus data array pertama
productName.shift();
console.log(productName);

//array.splice(pilihanIndex, jumlahdatayangdihapus) : menghapus data pada index tertentu
productName.splice(1, 1);
console.log(productName);

//array.indexOf(data) : mencari alamat data index suatu data yang khususnya primitive data type
console.log(productName.indexOf("Handphone"));

//array.reverse() : membalik urutan data
console.log(productName.reverse());

//arary.sort() : mengurutkan data string secara ASC
console.log(productName.sort());

const abjad: string[] = ["A1", "a2", "z16", "B9", "Z3", "b12"];
abjad.sort();
console.log(abjad);

// for..off : access value in array without index
for (const value of productName) {
  console.log(value);
}

//penggabungan data array
const studentA: string[] = ["Ronaldo", "Messi"];
const studentB: string[] = ["Ruben", "Amorim"];

//cara 1 pake function concat
const students: string[] = studentA.concat(studentB);
console.log(students);

//cara 2 : spread operator
const studentList: string[] = [...studentA, ...studentB];
console.log(studentList);

//array destructue : cara mengeluarkan nilai suatu array untuk menjadi variable sendiri
const product: [string, number, number, boolean] = ["TV", 12, 1400000, true];
let [namaProduct, stok, harga, isphisical] = product;
console.log(namaProduct);
console.log(stok);
console.log(harga);
console.log(isphisical);

console.log(
  `barang yang ada pilih adalah ${namaProduct} dengan jumlah stok : ${stok} dengan harga saat ini di Rp.${harga} dan ini termasuk category barang ${
    isphisical ? "fisik" : "digital"
  }`
);

//array 2 dimensi
const products: [string, number, number][] = [
  ["laptop", 12, 10000000],
  ["Printer", 20, 4500000],
  ["Keyboard", 4, 2000000],
];

// cara akses :array[indexArryLuar][indexArrayDalam]
console.log(products[1][0]);

//exercise
let productList = "";
let index = 0;
for (const [name, stock, price] of products) {
  productList += `${
    index + 1
  }. ${name} Tersedia: ${stock}, Rp.${price.toLocaleString("id-ID")} \n`;
}
console.log(productList);
