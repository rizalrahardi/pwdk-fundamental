// function square
let square = (n) => {
  //arrow function
  return n * n;
};
console.log(square(4));

let sum = (n) => {
  return n + n;
};
console.log(sum(5));

let greeting = () => {
  console.log("hello");
};
greeting();

let salam = (greeting) => {
  console.log(greeting);
};
salam("good morning");

//
let kali = (n) => {
  console.log(n * n);
  return n * n;
};
let y = kali(3);
console.log(y);

// function variabel scope
let morning = () => {
  let greeting = "hello good morning";
  return greeting;
  //   console.log(greeting);
};
// console.log(morning);

// function parameter and argument
let message = (name) => {
  const hello = "hello";
  return hello + " " + name;
};
console.log(message("David"));

// default parameter
let multiply = (a, b) => {
  return a * b;
};
console.log(multiply(5));

let multiply1 = (a, b = 2) => {
  return a * b;
};
console.log(multiply1(5));

let multiply2 = (a, b) => {
  return a * b;
};
console.log(multiply2(5, 5));

// rest params
let myFunc = (a, b, ...manyMoreArgs) => {
  console.log("a:", a);
  console.log("b:", b);
  console.log("many more:", manyMoreArgs);
};

myFunc(1, 2, 3, 4, 5, 6, 7);

let myFunc1 = (a, b, manyMoreArgs) => {
  console.log("a:", a);
  console.log("b:", b);
  console.log("many more:", manyMoreArgs);
};

myFunc1(1, 2, 3, 4, 5, 6, 7);

// nested function
let getMessage = (firstname) => {
  // nested function(inner function)
  let sayHello = () => {
    return "hello" + " " + firstname + ".";
  };
  // nested function(innder function)

  let welcomeMessage = () => {
    return "welcome to purwadhika";
  };
  return sayHello() + " " + welcomeMessage();
};
const pesan = getMessage("David");
console.log(pesan);

let greetings = (name) => {
  const defaultMessage = "Hello";
  return () => {
    return defaultMessage + " " + name;
  };
};

const greetingDavid = greetings("David");
console.log(greetingDavid());

// function currying
let multiplier = (factor, number) => {
  return factor * number;
};
console.log(multiplier(5, 3));
console.log(multiplier(10, 3));

let multiplier1 = (factor) => {
  return (number) => {
    return factor * number;
  };
};

const mul3 = multiplier1(3);
const mul5 = multiplier1(5);
console.log(mul3(3));
console.log(mul5(6));

let preCurrying = (n1, n2) => {
  //pre currying
  return n2 - n1;
};
// console.log(preCurrying(3, 5));

// let postCurrying = (n1) => {
//   return (n2) => {
//     return n2 - n1;
//   };
// };

// console.log(postCurrying(3)(5));

// recursive
let countDown = (fromNumber) => {
  console.log(fromNumber);
  let nextNumber = fromNumber - 1;
  //   console.log(nextNumber);
  if (nextNumber > 0) {
    countDown(nextNumber);
  }
};
countDown(10);

// predifined function
// isNaN
let a = "abc";
console.log(isNaN(a));
// parseInt
let b = "123";
console.log(parseInt(b));
// parseFloat
let c = "12,3";
console.log(parseFloat(c));
