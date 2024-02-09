// Q1
let str = 'SARVAGYA"';
console.log(str.length);

// Q2
const sentence =
  "Artificial intelligence (AI) is the simulation of human intelligence processes by machines.";
const word = "machine";
console.log(
  `Word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } there in the sentence`,
);

// Q3
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());

// Q4
let str2 = "The Amount is Rs 6000";
console.log(str2.slice("The Amount is Rs ".length));

// Q5
let tool = "VSCODE";
tool[3] = "T";
console.log(tool); // String are immutable
