const valueA: number = 10;
const valueB: number = 5;

// 1. Berdasarkan tipe data lain
// TRUTHY
console.log(Boolean("ABC")); // true
console.log(Boolean(" ")); // true
console.log(Boolean(12)); // true
console.log(Boolean(-12)); // true
console.log(Boolean(true)); // true
console.log(Boolean([])); // true
console.log(Boolean([1, 2, 0])); // true
console.log(Boolean({})); // true
console.log(Boolean({ name: "Abdi" })); // true

// 3. Logical Operator : AND (&&), OR (||), NOT(!)
// AND : akan menghasilkan nilai TRUE jika antar nilai yang dibandingkan, semua bernilai true
console.log(Boolean("ABC") && Boolean(2)); // true
console.log(Boolean("ABC") && Boolean(0) && true); // false
console.log(valueA > 9 && valueB < 6); // true

// OR :akan menghasilkan nilai TRUE jika salah satu data bernilai true
console.log(Boolean("") || Boolean(0)); // false
console.log(Boolean("") || Boolean(0)); // false
console.log(Boolean(" ") || Boolean(true)); // true

// NOT : membalikkan nilai
console.log(!Boolean(valueA)); // false
console.log(!(valueA === 10) || valueB === 5); // true
