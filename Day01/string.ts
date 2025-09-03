//string : data yang terdiri dari karakter huruf, simbol atau juga angka
// yang ditandai dengan simbol quote "" atau '' dan ``

let namaToko:string = "Sport Station"
// namaToko = 20 tidak bisa karena hanya boleh diisi string sesuai yang dideklarasikan diawal
namaToko = "BBS SPORT"
console.log(namaToko)

//menggabungkan data string
let alamat:string = "Gg jragem IV No 32 Semarang Jawa tengah"
// cara 1 : Menggunakan operator penjumlahan
let printToko:string = namaToko +" " +alamat
console.log(printToko)

//Cara 2 : Menggunakan Template literal / `` backtick

printToko = `${namaToko} ${alamat}`
console.log(printToko)

//Fungsi Bawaan Tipe Data String
let greeting:string ="hello, SAYA hakim"
//length: Menghitung panjang karakter pada data string
console.log(greeting.length)

// toloweCase() : mengubah semua karakter jadi huruf kecil semua
console.log(greeting.toLocaleLowerCase())
// toUpperCase : Mengubah semua karakter ke jadi huruf besar semua
console.log(greeting.toUpperCase())
// includes("data") : memastikan suatu karakter ada didalam string
console.log(greeting.includes("hello"))
// split : merubah data string menjadi array
console.log(greeting.split(""))
// replace mengganti kata tertentu 
console.log(greeting.replace("hello","hai"))