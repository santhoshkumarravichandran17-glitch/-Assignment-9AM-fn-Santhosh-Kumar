// 1. Print numbers 1–10 using a for loop
console.log("Numbers 1 to 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("-----------------------------------");



// 2. Print even numbers using a while loop
console.log("Even Numbers:");
let num = 2;

while (num <= 20) {
  console.log(num);
  num += 2;
}
console.log("-----------------------------------");



// 3. do…while example (runs once even if false)
console.log("do...while example:");
let x = 20;

do {
  console.log("This will run at least once");
  x++;
} while (x < 5);

console.log("-----------------------------------");



// 4. Loop through an array using for…of
console.log("Array Loop (for...of):");
let colors = ["red", "blue", "green", "yellow"];

for (let color of colors) {
  console.log(color);
}

console.log("-----------------------------------"); 
// 5. Loop through an object using for…in
console.log("Object Loop (for...in):");
let student = {
  name: "Santhosh",
  age: 23,
  course: "MBA"
};

for (let key in student) {
  console.log(key + ":", student[key]);
}

console.log("-----------------------------------");
