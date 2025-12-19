// Task 1
let colors = ["Red", "Blue", "Green", "Yellow", "Purple"]
console.log(colors[0])
console.log(colors[colors.length - 1])

// Task 2
colors.push("Orange")
colors.pop()
colors.unshift("Black")
colors.shift()

// Task 3
let numbers = [10, 25, 60, 80, 45]
numbers.forEach(n => console.log(n))

// Task 4
let squaredNumbers = numbers.map(n => n * n)
console.log(squaredNumbers)

// Task 5
let greaterThanFifty = numbers.filter(n => n > 50)
console.log(greaterThanFifty)
