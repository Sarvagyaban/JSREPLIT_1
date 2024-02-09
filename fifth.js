const prompt = require("prompt-sync")();
// Q1
let arr = [10, 20, 30, 40, 50];
let a = prompt("Enter a number");
a = Number.parseInt(a);
arr.push(a);
console.log(arr);

// Q2
let arr1 = [10, 20, 30, 40, 50];
let a1;
do {
  a1 = prompt("Enter a number");
  a1 = Number.parseInt(a1);
  arr1.push(a1);
} while (a1 != 0);
console.log(arr1);

// Q3
let arr2 = [10, 20, 30, 40, 51];
let n1 = arr2.filter((x) => {
  return x % 10 == 0;
});
console.log(n1);

// Q4

let arr = [10, 20, 30, 40, 51];
let n1 = arr.map((x) => {
  return x * x;
});
console.log(n1);

// Q5

let arr = [1, 2, 3, 4, 5];
let n = arr.reduce((x1, x2) => {
  return x1 * x2;
});
console.log(n);
