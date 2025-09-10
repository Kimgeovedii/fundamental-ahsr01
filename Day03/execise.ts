const input: number = 9;
const limit: number = 10;

console.log(`Tabel Perkalian Input`);

for (let i: number = 1; i <= limit; i++) {
  console.log(`${input} x ${i} = ${input * i}`);
}
///
let kataAsli = "madam";
let kataDibalik = "";

for (let i = kataAsli.length - 1; i >= 0; i--) {
  kataDibalik = kataDibalik + kataAsli[i];
}

if (kataAsli === kataDibalik) {
  console.log("Kata '" + kataAsli + "' is palindrome.");
} else {
  console.log("Kata '" + kataAsli + "' not palindrome.");
}

//convert centimeter to kilometer
let centimeter = 100000;
let kilometer = centimeter / 100000;

console.log(centimeter + " cm adalah " + kilometer + " km.");
