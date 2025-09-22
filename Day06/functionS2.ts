/**
 * Calback Function : Sebuah fungsi yang dijalankan didalam fungsi lain yang dimasukan melalui parameter
 * aturan penulisan :
 * 1. Callback Dibuat dulu, baru kemudian dimasukan lewat paremeter ke function lain
 * function cb(){
 * //taskcode
 * }
 *
 * function main(calback) {
 *      callback(); //ini tahap menjalankan callback params
 * }
 *
 * ketika diexecute :
 * main(cb)
 *
 * 2. Callback func, bisa juga langsung dibuat didalam parameter, ketika fungsi utamanya dijalankan
 *
 * function main(callback){
 *      callback()
 * }
 *
 * ketika dijalankan :
 * main(function(){
 *  //taskcode
 * })
 *
 *note :
 - parameter callback: diisi dengan function yang dibutuhkan
 */

//create main function: function to display calculation result
//mainFunction:
function displayCalculation(callback) {
  const result: number = callback();
  return `Hasil Perhitungan fungsi callback adalah ${result}`;
}

//callbackFn
function add() {
  let angkaA: number = 12;
  let angkaB: number = 2;

  return angkaA + angkaB;
}

//execute function
console.log(displayCalculation(add));
console.log(
  displayCalculation(function () {
    return 7 + 1;
  })
);

//mainFunction with value for callback params

function displayCalculationv2(calback) {
  const angkaA: number = 10;
  const angkaB: number = 11;
  const result: number = calback(angkaA, angkaB);
  return `Hasil Perhitungan fungsi callback adalah ${result}`;
}

console.log(
  displayCalculationv2(function (angkaA, angkaB) {
    return angkaA + angkaB;
  })
);

//array function with callback : foreach, map, filter
//array.foreach(callback) : sebagai pilihan lain untuk mengakses isi data array

const students: string[] = ["garnacho", "onana", "hojlund"];

//for loop
for (let index = 0; index < students.length; index++) {
  console.log(index);
}

//foreach
students.forEach(function (value: string, index: number) {
  console.log(value);
});
// exercise duplikasi cara kerja array.foreach
function duplicateForEach(arrayData: any[], calbackFn) {
  for (let i = 0; i < arrayData.length; i++) {
    calbackFn(arrayData[i], i);
  }
}

duplicateForEach(["owen", "rooney", "beckham"], (value: any, index: number) => {
  console.log(value);
});

//array.map(callbackFn) :  untuk merubah seluruh data array menjadi data array yang baru
//[1,2,3] ==> ["1","2",3]
//["Abdi","Edi","Aldo"] ==> ["Nama Saya Abdi",""]

//exercise

function duplicateMap(arrayData: any[], calbackFn) {
  const newArray = [];

  for (let i = 0; i < arrayData.length; i++) {
    const result = calbackFn(arrayData[i], i, arrayData);
    newArray.push(result);
  }
  return newArray;
}

const arrayMultipleTwo = duplicateMap([1, 2, 3, 4], function (value) {
  return value * 2;
});

console.log(arrayMultipleTwo);

//array.filter(callbackFn) : digunakan untuk memberikan data array baru sesuai dengan condition filter yang diberikan
const angkaC: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const genap: number[] = angkaC.filter(function (value: number) {
  return value % 2 === 0;
});

console.log(genap);

//exercise
function duplicateFilter(arrayData: any[], callbackFn) {
  const newArray = [];
  for (let i = 0; i < arrayData.length; i++) {
    const result = callbackFn(arrayData[i], i);
    if (result) {
      newArray.push(arrayData[i]);
    }
  }
  return newArray;
}

const ganjil = duplicateFilter(angkaC, function (value) {
  return value % 2 !== 0;
});

console.log(ganjil);
