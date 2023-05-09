// Welcome to purwadhika
console.log("Hello World");

//variabel
let message1 = "hello";
console.log(message1);

const message = "javascript";
const count = 123;
const bigNumber = 1234567890n;
const isTrue = true;
const noData = null;
let noAssigned;
const person = {
  name: "Rizal",
  age: 24,
};
console.log(typeof message);
console.log(typeof count);
console.log(typeof bigNumber);
console.log(typeof isTrue);
console.log(typeof noData);
console.log(typeof noAssigned);
console.log(typeof person);

// template literal
const nama = "Rizal";
const pesan = `hello ${nama}`;
console.log(pesan);
console.log(`selamat datang ${nama} di purwadhika`);
console.log("hello " + nama);

// number built in
let number1 = 123;
let hasil = number1.toString();
console.log(typeof hasil);

// exponential
let number2 = 123.456;
let exp = number2.toExponential();
console.log(exp);
console.log(typeof exp);

let string1 = "123";
let string2 = 123.123;
let num1 = parseInt(string1);
console.log(num1);
let num2 = parseFloat(string2);
let num3 = Math.floor(num2);
let num4 = Math.ceil(num2);
console.log(num2);
console.log(num3);
console.log(num4);

// date dta type
let now = new Date();
console.log(now);

let jan01 = new Date(0);
console.log(jan01);
let jan02 = new Date(24 * 10 * 3600 * 1000);
console.log(jan02);
let date = new Date("2017-01-26");

// date built in
let d = new Date().getFullYear();
console.log(d);

let d1 = new Date().getMonth();
console.log(d1);

let d2 = new Date().getDate();
console.log(d2);

let d3 = new Date().getDay();
console.log(d3);

let d4 = new Date().getHours();
console.log(d4);

let d5 = new Date().getMinutes();
console.log(d5);

let d6 = new Date().getMilliseconds();
console.log(d6);

let d7 = new Date().getTime();
// console.log(d7);

let s = new Date();
s.setFullYear(2022);
console.log(s);

let s1 = new Date();
s.setDate(08);
console.log(s1);
