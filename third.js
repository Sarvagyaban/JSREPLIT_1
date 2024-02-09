const prompt = require("prompt-sync")();

// Q1
let marks = {
  sarvagya: 89,
  shiv: 98,
  tushar: 59,
};
for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "Marks of " +
      Object.keys(marks)[i] +
      " are " +
      marks[Object.keys(marks)[i]],
  );
}

// Q2
for (let key in marks) {
  console.log("Marks of " + key + " are " + marks[key]);
}

// Q3
let num = 16;
let i;
while (i != num) {
  i = prompt("Enter a number ");
  if (i != num) console.log("Try again");
}
console.log("You have entered a correct number");

// Q4
const mean = (a, b, c, d) => {
  return (a + b + c + d) / 4;
};

console.log("Mean is " + mean(40, 50, 60, 70));
