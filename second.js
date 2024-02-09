const prompt = require('prompt-sync')();
// Q1

let age = prompt("What is your age?")
if (age > 10 && age < 20) {
  console.log("Your age lies between 10 and 20")
}
else {
  console.log("Your age doesnt lies between 10 and 20")
}

// Q2

let age = prompt("What is your age?")
switch (age) {
  case '11':
    console.log("Your age is 11")
    break
  case '17':
    console.log("Your age is 17")
    break
  case '19':
    console.log("Your age is 19")
    break
  case '20':
    console.log("Your age is 20")
    break
  default:
    console.log("Your age is not special")
}

// Q3

let num = prompt("What is your Number?")
num = Number.parseInt(num)
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Your number is divisible by 2 and 3")
}
else {
  console.log("Your number is not divisible by 2 and 3")
}

// Q4

let num = prompt("What is your Number?")
num = Number.parseInt(num)
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Your number is divisible by 2 and 3")
}
else
if (num % 2 == 0) {
    console.log("Your number is divisible by 2")
}
if (num % 3 == 0) {
    console.log("Your number is divisible by 3")
}
else 
if (num % 2 != 0 && num % 3 != 0)
{
  console.log("Your number is not divisible by 2 or 3")
}

// Q5

let age = prompt("What is your age?")
let a = age > 18 ? "You can drive" : "You cannot drive"
console.log(a)
