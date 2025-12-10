// 1. Function that prints "Good Morning"
function greet() {
  console.log("Good Morning");
}
greet();
console.log("");
console.log("-------------------------------");


// 2. Function that takes two numbers and prints their sum
function add(a, b) {
  console.log("Sum:", a + b);
}
add(10, 20);
console.log("");
console.log("-------------------------------");

// 3. Function that returns the square of a number
function square(num) {
  return num * num;
}
console.log("Square:", square(5));
console.log("");
console.log("-------------------------------"); 

// 4. Arrow function that multiplies two numbers
const multiply = (x, y) => x * y;
console.log("Multiplication:", multiply(4, 6));
console.log("");
console.log("-------------------------------");

// 5. Function with a default parameter "Student"
function welcome(name = "Student") {
  console.log("Welcome", name);
}
welcome();
welcome("Santhosh");
console.log("");
console.log("-------------------------------");