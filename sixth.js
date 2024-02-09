const prompt = require('prompt-sync')();
// Q1

let age = prompt("What is your age?")
let a = age > 18 ? "You can drive" : "You cannot drive"
console.log(a)

// Q2

let age1 = prompt("What is your age?")
let a1 = age1 < 0 ? console.error("Please enter a valid age") :  console.log("Valid Age")

// Q3

let age1 = prompt("Enter a Number")
let a1 = age1 > 4 ? window.location.href="https://www.google.com" : console.log("Valid Age")

// Q4
let color = prompt("Enter the page background color")
document.body.style.background = color
