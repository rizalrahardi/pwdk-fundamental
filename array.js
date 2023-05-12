let arr = [];
let arr1 = new Array();
console.log(arr);
console.log(arr1);

let arr2 = ["A", "B", "C", "D"];
console.log(arr2);
// access data index array
console.log(arr2[2]);
// replace data in index of array
arr2[3] = "R";
console.log(arr2);

// built in array method
// join
let arr3 = ["a", "b", "c", "d", "e"];
console.log(arr3.join());

// pop
let arr4 = ["a", "b", "c", "d", "e"];
arr4.pop();
console.log(arr4);

// push
let arr5 = ["a", "b", "c", "d", "e"];
arr5.push("push");
console.log(arr5.push());
console.log(arr5);

// shift
let arr6 = ["a", "b", "c", "d", "e"];
arr6.shift();
console.log(arr6);

// unshift
let arr7 = ["a", "b", "c", "d", "e"];
arr7.unshift("unshift");
console.log(arr7);

// length
let arr8 = ["a", "b", "c", "d", "e"];
console.log(arr8.length);

// concat
let nums1 = [1, 2, 3, 4, 5];
let nums2 = [6, 7, 8, 9, 0];
let nums = nums1.concat(nums2);
console.log(nums);

// slice
let arr9 = [1, 2, 3, 4, 5, 6];
console.log(arr9.slice(1, 4));

// sort
let arr10 = [1, 2, 3, 4, 5, 6];
console.log(arr10.sort((a, b) => a - b)); //ascending
console.log(arr10.sort((a, b) => b - a)); //descending

// delete
let arr11 = [1, 2, 3, 4, 5, 6];
delete arr11[1];
console.log(arr11);

// delete and add array with splice
let arr12 = ["banana", "oranges", "pineapple", "apple"];
arr12.splice(1, 1, "kiwi", "melon");
console.log(arr12);

// foreach
let arr13 = [1, 2, 3, 4, 5, 6, 7];
let a = arr13.forEach((item, index) => {
  console.log("ini item", item);
  console.log("indexnya", index);
});

// map
let arr14 = [1, 2, 3, 4, 5, 6, 7];
let b = arr14.map((item, index) => {
  return item * 4;
  console.log("ini indexnya", index);
});
console.log(b);

// for of loop
let fruits = ["apple", "orange", "plum"];
for (let fruit of fruits) {
  console.log(fruit);
}
