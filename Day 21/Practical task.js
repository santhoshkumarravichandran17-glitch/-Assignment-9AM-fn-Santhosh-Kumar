// 1. Multiplication Table Generator

let number = 5; // you can change this number
console.log("Multiplication Table for:", number);

for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}console.log("-----------------------------------");


// 2. Array Search Program

let fruits = ["apple", "banana", "mango", "orange"];
let searchItem = "mango";

console.log("Array Search:");
let found = false;

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === searchItem) {
    found = true;
    console.log(`${searchItem} found at index ${i}`);
  }
}

if (!found) {
  console.log(`${searchItem} not found`);
}
console.log("------------------------------------");



// 3. Password Retries (do…while)

let correctPassword = "1234";
let userInput;
let attempts = 0;

console.log("Password Check:");

do {
  userInput = "1234"; // simulate user input
  attempts++;
} while (userInput !== correctPassword);

console.log("Access Granted after", attempts, "attempt(s)");

console.log("----------------------------------");



// 4. Cart Total Calculator

let prices = [100, 250, 50, 75];
let total = 0;

for (let i = 0; i < prices.length; i++) {
  total += prices[i];
}

console.log("Cart Total:", total);

console.log("----------------------------------");



// 5. Attendance Checker (Object)

const attendance = {
  Santhosh: true,
  Priya: false,
  Dinesh: true,
  Boomika: false
};

console.log("Attendance Checker:");

for (let student in attendance) {
  if (attendance[student] === true) {
    console.log(student + " is Present");
  } else {
    console.log(student + " is Absent");
  }
}
console.log("----------------------------------");


