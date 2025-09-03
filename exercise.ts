// Exercise
// Write a code to check whether the number is odd or even
// Example: 25→ odd number, 2→ even number
let number: number = 25;

if (number % 2 === 0) {
  console.log("Ini adalah bilangan genap.");
} else {
  console.log("Ini adalah bilangan ganjil.");
}

// Write a code to check whether the number is prime number or not
// Example: 7→7 is a prime number
// Example: 6→6 is not a prime number
let number2: number = 7;
let isPrime: boolean = true;

if (number2 <= 1) {
  isPrime = false;
} else {
  for (let i: number = 2; i < number2; i++) {
    if (number2 % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(`${number2} adalah bilangan prima.`);
} else {
  console.log(`${number2} bukan bilangan prima.`);
}

// Write a code to find the sum of the numbers 1 to N
// Example: 5→1+2+3+4+5=15
// Example: 3→1+2+3=6
let N: number = 5;
let totalSum: number = 0;

for (let i: number = 1; i <= N; i++) {
  totalSum += i;
}
console.log(`Jumlah dari 1 sampai ${N} adalah ${totalSum}.`);

// Write a code to find factorial of a number
// Example: 4!→4×3×2×1=24
// Example: 6!→6×5×4×3×2×1=720
let number3: number = 4;
let factorialResult: number = 1;

for (let i: number = number3; i >= 1; i--) {
  factorialResult *= i;
}
console.log(`Faktorial dari ${number3}! adalah ${factorialResult}.`);

// Write a code to print the first N fibonacci numbers
// Example: 15→610
let N2: number = 15;
let a: number = 0;
let b: number = 1;

console.log("Deret Fibonacci:");

for (let i: number = 0; i < N2; i++) {
  console.log(a);

  let temp: number = a + b;
  a = b;
  b = temp;
}
