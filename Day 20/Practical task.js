// 1. Student Info Object

const student = {
  name: "Santhosh",
  age: 23,
  grade: "A"
};

console.log("Student Info:");
console.log(student);
console.log("----------------------------------");



// 2. Cart Total (String → Number)

let price1 = "100";
let price2 = "250";

// string to number conversion
let total = Number(price1) + Number(price2);

console.log("Cart Total:");
console.log("Price 1:", price1);
console.log("Price 2:", price2);
console.log("Total Price: Rs " + total);
console.log("----------------------------------");



// 3. Login Status (Boolean)

let isLoggedIn = false;

console.log("Login Status:");
if (isLoggedIn) {
  console.log("Welcome!");
} else {
  console.log("Please Login");
}
console.log("----------------------------------");



// 4. Large Number Calculator (BigInt)

let big1 = 9007199254740991n;
let big2 = 2000000000000000n;

let bigTotal = big1 + big2;

console.log("BigInt Calculation:");
console.log("Big Number Total:", bigTotal);
console.log("----------------------------------");


// 5. Unique User IDs (Symbols)

const uid1 = Symbol("user");
const uid2 = Symbol("user");

console.log("Symbol Unique IDs:");
console.log("Are both IDs same?", uid1 === uid2);  // false
console.log("----------------------------------");
