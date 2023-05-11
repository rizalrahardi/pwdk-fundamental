// display multiplication
const input = 9;
const limit = 10;
for (i = 0; i <= limit; i++) {
  console.log(`${input} x ${i} = ${input * i}`);
}

// check whether a string is palindrome or not
let string = "mobil";
let palindrome = "";
// console.log(string);
string = string.toLowerCase().replace(/ /g, ""); //replace white space with regular expression (/ /g, '')
console.log(string);
// console.log(string)

for (i = string.length - 1; i >= 0; i--) {
  palindrome += string[i];
  console.log(palindrome);
}
if (string === palindrome) {
  console.log(`${string} and ${palindrome} is a palindrome`);
} else {
  console.log(`${string} and ${palindrome} is not a palindrome`);
}

// convert cm to km
let cm = 100;
const formula = cm / 100000;
console.log(`nilai konversi dari${cm} ke km adalah ${formula} km`);

// convert number to currency
const uang = 5000;
const convertCurrency = Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});
console.log(convertCurrency.format(uang).replace(/Rp/g, "Rp."));

// remove the first occurrence
let word = "Hello World!";
word = word.slice(0, 1) + word.slice(4);
console.log(word);
// upppercase each word
const inputStr = "hello woRld toDay i learning js";
const arr = inputStr.toLowerCase().split(" ");
// console.log(arr);

for (i = 0; i < arr.length; i++) {
  arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  console.log(arr);
}
const inputStr1 = arr.join(" ");
console.log(inputStr1);

// reverse string
let stringNormal = "kasur";
let stringReverse = "";
let word1 = stringNormal.length;
// stringNormal = stringNormal.toLowerCase();
for (i = word1 - 1; i >= 0; i--) {
  stringReverse += stringNormal[i];
  //   console.log(palindrome);
}
console.log(stringReverse);

let inputKata = "meja";
// console.log(balikKata);
let hasilBalik = inputKata.split("").reverse().join("");
console.log(hasilBalik);

// swap case
let swapCase = "HeLlo WorLd";
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let result = [];

for (i = 0; i < swapCase.length; i++) {
  if (upper.indexOf(swapCase[i]) !== -1) {
    result.push(swapCase[i].toLowerCase());
  } else if (lower.indexOf(swapCase[i] !== -1)) {
    result.push(swapCase[i].toUpperCase());
  } else {
    result.push(swapCase[i]);
  }
}
console.log(result.join(""));

let swapCase1 = "The QuiCk Brown Fox";
let newStr = "";
for (let i = 0; i < swapCase.length; i++) {
  var char = swapCase.charAt(i);
  if (char === char.toUpperCase()) {
    newStr += char.toLowerCase();
  } else {
    newStr += char.toUpperCase();
  }
}
console.log(newStr);

// find the largest numbers
let findMax = Math.max(10, 100);
console.log(findMax);

// sort three number using conditional statement
let numbers = [1, 3, 2];
if (numbers[0] < numbers[1] && numbers[1] < numbers[2]) {
  console.log(numbers[0], numbers[1], numbers[2]);
} else if (numbers[0] < numbers[1] && numbers[2] < numbers[1]) {
  console.log(numbers[0], numbers[2], numbers[1]);
} else if (numbers[1] < numbers[0] && numbers[0] < numbers[2]) {
  console.log(numbers[1], numbers[0], numbers[2]);
} else if (numbers[1] < numbers[0] && numbers[2] < numbers[0]) {
  console.log(numbers[2], numbers[1], numbers[0]);
} else if (numbers[2] < numbers[0] && numbers[0] < numbers[1]) {
  console.log(numbers[2], numbers[0], numbers[1]);
} else {
  console.log(numbers[1], numbers[2], numbers[0]);
}

// sort three number conditional statement
var x = 0;
var y = 2;
var z = 4;
if (x > y && x > z) {
  if (y > z) {
    console.log(x + ", " + y + ", " + z);
  } else {
    console.log(x + ", " + z + ", " + y);
  }
} else if (y > x && y > z) {
  if (x > z) {
    console.log(y + ", " + x + ", " + z);
  } else {
    console.log(y + ", " + z + ", " + x);
  }
} else if (z > x && z > y) {
  if (x > y) {
    console.log(z + ", " + x + ", " + y);
  } else {
    console.log(z + ", " + y + ", " + x);
  }
}

let arraryNumber = [112378];
arraryNumber.sort();
console.log(arraryNumber.toString());

// code to shows input type data

let typeData = "[1, 2]";
// console.log(typeof typeData);
if (typeof typeData === false || typeData === true) {
  console.log(typeof typeData);
} else {
  console.log(typeof typeData);
}

let inputData = 123;
console.log(typeof inputData);

// change every letter a into *
let words = "An apple a day";
words = words.replace(/a/gi, "*");
console.log(words);

// armstrong number

let nums = 153;
let count = 0;
let a = nums.toString().length;

for (i = 0; i < a; i++) {
  console.log(nums.toString()[i]);
  count += nums.toString()[i] ** a;
  console.log(count);
}

if (count == nums) {
  console.log(`amrstrong`);
} else {
  console.log(`not armstrong`);
}
