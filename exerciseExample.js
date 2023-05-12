// nested looping
let triangle = (n) => {
  let result = "";
  for (i = 1; i <= n; i++) {
    // console.log(i)
    for (j = 1; j <= i; j++) {
      //   console.log(j);
      result += "*";
      //   console.log(result);
    }
    result += "\n";
  }
  console.log(result);
};
triangle(5);

let triangleNum = (n) => {
  let result = "";
  for (i = 1; i <= n; i++) {
    // console.log(i)
    for (j = 1; j <= i; j++) {
      //   console.log(j);
      result += `0${j} `;
      //   console.log(result);
    }
    result += "\n";
  }
  console.log(result);
};
triangleNum(5);
