
// Task 1: Syntax Error

// ❌ Wrong Code (COMMENTED)
/*
let a = 10
if (a > 5 {
  console.log("Greater")
}
*/

// ✅ Correct Code
let a1 = 10
if (a1 > 5) {
  console.log("Greater")
}



// Task 2: Runtime Error

// ❌ Wrong Code (COMMENTED)
/*
let x = 5
console.log(y)
*/

// ✅ Correct Code
let x1 = 5
let y1 = 10
console.log(y1)



// Task 3: Logical Error

// ❌ Wrong Code (COMMENTED)
/*
let age = 16
if (age > 18) {
  console.log("Adult")
} else {
  console.log("Adult")
}
*/

// ✅ Correct Code
let age1 = 16
if (age1 >= 18) {
  console.log("Adult")
} else {
  console.log("Minor")
}


// Task 4: Console Error

// ❌ Wrong Code (COMMENTED)
/*
let num = 10
num()
*/

// ✅ Correct Code
function num1() {
  console.log("Function called")
}
num1()


// Task 5: Debug Using console.log

// ❌ Wrong Code (COMMENTED)
/*
let total = 0
for (let i = 1; i <= 5; i++) {
  total = total + i
}
console.log(sum)
*/

// ✅ Correct Code
let total1 = 0
for (let i = 1; i <= 5; i++) {
  console.log("i =", i)
  total1 = total1 + i
}
console.log("Total =", total1)
