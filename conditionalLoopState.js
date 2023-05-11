// if else statement

let age = 16;
if (age >= 17) {
  console.log("you can create an id card");
} else {
  console.log(
    `you can't create an id card because your age ${age} years is lower than 17 years`
  );
}

// else if statement

let grade = "B";
if (grade === "A") {
  console.log("excellent");
} else if (grade === "B") {
  console.log("good");
} else if (grade === "C") {
  console.log("enough");
} else {
  console.log("you must hard work");
}

let score = 50;
if (score >= 80) {
  console.log(`nilai anda ${score} sudah bagus`);
} else if (score >= 70) {
  console.log(`nilai anda ${score} cukup namun perlu ditingkatkan lagi`);
} else if (score >= 60) {
  console.log(`nilai anda ${score} masih kurang`);
} else {
  console.log(`anda perlu belajar lebih giat lagi`);
}

let weight = 72;
if (weight >= 80) {
  console.log(`berat badan anda ${weight}kg perlu dikurangi`);
} else if (weight >= 70) {
  console.log(`berat badan anda ${weight}kg ideal`);
} else {
  console.log(
    `anda perlu mengkonsumsi makanan-makanan yang sehat untuk menambah berat badan anda`
  );
}

// switch case
const expr = "Oranges";
switch (expr) {
  case "Oranges":
    console.log(`Oranges are $1 a pound.`);
    break;
  case "Salak":
    console.log(`Salak are $2 a pound.`);
    break;
  case "Mangoes":
  case "Papayas":
    console.log(`Mangoes and Papayas are $5 a pound.`);
    break;
  default:
    console.log(`Product not available`);
}

const nilai = 80;
switch (true) {
  case nilai >= 80:
    console.log(`nilai anda cukup`);
    break;
  case nilai >= 70:
    console.log(`nilai anda kurang`);
    break;
  default:
    console.log(`belajar lagi`);
}

let text = "hello there";
if (text.length === 0) {
  console.log(`data masih kosong`);
} else {
  console.log(`data sudah lengkap`);
}

// logical operator

// and
// apabila semua kondisi terpenuhi maka true, apabila salah satu kondisi atau semua kondisi tidak terpenuhi akan false
x = 3;
y = 7;
if (x > 5 && y < 5) {
  console.log(true);
} else {
  console.log(false);
}

// or
// apabali salah satu kondisi terpenuhi akan true, apabila semua kondisi tidak terpenuhi akan false
if (x > 5 || y > 5) {
  console.log(true);
} else {
  console.log(false);
}

if (x > 7 || y > 5) {
  console.log(true);
} else {
  console.log(false);
}

let car = "BMW";
if (car === "BMW" || car === "TOYOTA") {
  console.log(true);
} else {
  console.log(false);
}

// not

if (x !== y) {
  console.log(true);
} else {
  console.log(false);
}

// ternary operation
const str = "JavaScript";
if (str === "JavaScript") {
  console.log("Javascript");
} else console.log(`not javascript`);

console.log(str === "JavaScript" ? "its JavaSript" : "not javascript");

const nilai1 = 72;
console.log(
  nilai1 >= 80
    ? "nilai anda memuaskan"
    : nilai1 >= 70
    ? "nilai anda cukup"
    : nilai1 >= 60
    ? "nilai anda kurang"
    : "belajar lagi"
);

// exercise if else
const input = 20;
if (input % 2 === 0) {
  console.log(`bilangan ${input} adalah bilangan genap`);
} else {
  console.log(`bilangan ${input} adalah bilangan ganjil`);
}

// looping
// for loop
for (let i = 0; i < 3; i++) {
  console.log(`hello for loop!`);
}

// while
let i = 0;
while (i < 3) {
  console.log(`hello while loop!`);
  i++;
}

// do while

let r = 0;
do {
  console.log(`hello do while loop!`);
  r++;
} while (r < 5);

// break
let sum = 0;
while (true) {
  let value = 1;
  if (sum === 6) break;
  sum += value;
  // sum++;
  console.log(`sum ${sum}`);
}
console.log(`Sum ${sum}`);

// continue
for (let i = 0; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

let phoneNumber = "0809e8980r989r887yt9";
let counter = 0;
for (let i = 0; i < phoneNumber.length; i++) {
  console.log(phoneNumber[i]);
  console.log(isNaN(phoneNumber[i]));
  counter += isNaN(phoneNumber[i]);
  if (isNaN(phoneNumber[i]) === true && counter === 5) {
    console.log("input invalid");
    break;
  }
}
