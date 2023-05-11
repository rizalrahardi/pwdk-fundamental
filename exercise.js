// celcius to farenheit
const celcius = 60;
const konversi = (9 / 5) * celcius + 32;
console.log(
  `hasil konversi dari ${celcius} celcius ke farenheit adalah ${konversi} farenheit`
);

// odd or even number
const number = 11;
if (number % 2 === 0) {
  console.log(`angka ${number} adalah bilangan genap`);
} else {
  console.log(`angka ${number} adalah bilangan ganjil`);
}

console.log(
  number % 2 === 0
    ? `angka ${number} adalah bilangan genap`
    : `angka ${number} adalah bilangan ganjil`
);

// check prime number
let x = 10;
let prime = true;
for (let i = 2; i < x; i++) {
  if (x % i == 0) {
    prime = false;
    break;
  }
}
console.log(prime ? `${x} is a prime number` : `${x} is not a prime number`);

// sum of numbers
let total = 0;
let n = 6;
for (let i = 0; i <= n; i++) {
  total += i;
}
console.log(`sum of numbers of ${n} is ${total}`);

// factorial number
let factorial = 1;
let y = 5;
for (let i = 1; i <= y; i++) {
  factorial *= i;
}
console.log(`factorial numbers of ${y} is ${factorial}`);

// fibonacci numbers

let a = 0;
let b = 1;
let r = 12;
for (let i = 0; i < r; i++) {
  let fibonacci;
  if (i == 0 || i == 1) {
    fibonacci = i;
  } else {
    fibonacci = a + b;
    a = b;
    b = fibonacci;
  }
  console.log(fibonacci);
}
// fibonacci using array
let arr = [0, 1];
let f = 12;
for (i = 0; i < f; i++) {
  arr.push(arr[arr.length - 1] + arr[arr.length]);
}
