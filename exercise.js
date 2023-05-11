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
let swapCase = "Hello World";
