// Task 1
let nums = [10, 20, 30, 40]
let total = nums.reduce((sum, n) => sum + n, 0)
console.log(total)

// Task 2
let ages = [12, 18, 25, 16, 30]
let adults = ages.filter(age => age >= 18)
console.log(adults)

// Task 3
let students = [
  ["Rahul", 85],
  ["Anita", 92],
  ["Kiran", 78]
]

students.forEach(s => {
  console.log("Name:", s[0], "Marks:", s[1])
})

// Task 4
let a = [1, 2, 3]
let b = [4, 5, 6]

let combined1 = a.concat(b)
let combined2 = [...a, ...b]

console.log(combined1)
console.log(combined2)

// Task 5
let products = [
  { name: "Mobile" },
  { name: "Laptop" },
  { name: "Headphones" }
]

let ul = document.getElementById("productList")

products.forEach(p => {
  let li = document.createElement("li")
  li.textContent = p.name
  ul.appendChild(li)
})
