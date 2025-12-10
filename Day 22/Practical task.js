// 1. Calculator Functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return b !== 0 ? a / b : "Cannot divide by zero";
}

console.log("Add:", add(10, 5));
console.log("Subtract:", subtract(10, 5));
console.log("Multiply:", multiply(10, 5));
console.log("Divide:", divide(10, 5));
console.log("");
console.log("-------------------------------");


// 2. Greeting Program
function greet(name) {
  return "Welcome, " + name + "!";
}
console.log(greet("Santhosh"));
console.log("");
console.log("-------------------------------");


// 3. Grade Checker
function checkGrade(marks) {
  if (marks >= 90) return "A";
  else if (marks >= 75) return "B";
  else if (marks >= 60) return "C";
  else if (marks >= 40) return "D";
  else return "F";
}

console.log("Grade:", checkGrade(85));
console.log("");
console.log("-------------------------------");


// 4. Area Calculator (Rectangle)
function rectangleArea(length, width) {
  return length * width;
}

console.log("Area:", rectangleArea(10, 5));
console.log("");
console.log("-------------------------------");

// 5. Login Function
function login(username, password) {
  const correctUser = "admin";
  const correctPass = "1234";

  if (username === correctUser && password === correctPass) {
    return "Login Successful";
  } else {
    return "Try Again";
  }
}

console.log(login("admin", "1234"));
console.log(login("user", "0000"));
console.log("");
console.log("-------------------------------");