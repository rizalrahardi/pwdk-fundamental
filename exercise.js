// let triangle = (n) => {
//   let result = "";
//   for (i = 1; i <= n; i++) {
//     // console.log(i);
//     for (j = 1; j <= i; j++) {
//       //   console.log(j);
//       result += `0${j} `;
//     }
//     result += "\n";
//   }
//   console.log(result);
// };

// triangle(10);

let triangle1 = (n) => {
  let result = "";
  let counter = 1;
  for (i = 1; i <= n; i++) {
    // console.log(i);
    for (j = 1; j <= i; j++) {
      //   console.log(counter);
      //   console.log(j);
      if (counter <= 9) {
        result += `0${counter} `;
      } else {
        result += `${counter}`;
      }
      counter++;
    }
    result += "\n";
  }
  console.log(result);
};

triangle1(4);

////////
// fizzbuzz

let fizzbuzz = (n) => {
  for (i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
};

fizzbuzz(30);

// calculate BMI
let bmi = (weight, height) => {
  //   let formula = weight / Math.pow(height, 2);
  let formula = weight / height ** 2;
  console.log(formula);

  if (formula < 18.5) {
    console.log("less weight");
  } else if (formula < 25) {
    console.log("ideal");
  } else if (formula < 30) {
    console.log(`overweight`);
  } else if (formula < 40) {
    console.log(`very overweight`);
  } else {
    console.log(`obesity`);
  }
};
bmi(70, 1.7);

// remove odd numbers in array
let remOddNums = (r) => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let newArr = [];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) newArr.push(arr[i]);
  }
  console.log(newArr);
  //   return newArr;
};
remOddNums();

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let even = a.filter(result);
function result(num) {
  return num % 2 === 0;
}
console.log(even);

// let a = [1, 2, 3, 4, 5, 6, 7, 8];
// let answer = a.filter(hasil);
// function hasil(num) {
//   return num % 2 === 0;
// }
// console.log(answer);

// convert string into array
// console.log(string.split(" "));
let toArr = (str) => {
  console.log(str.split(" "));
};
toArr("Hello world");
