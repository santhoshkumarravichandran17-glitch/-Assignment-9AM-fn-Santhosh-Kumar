// 1. Form Validation (Strings + Numbers)

let name = "Santhosh";
let age = 20;

console.log("Form Validation:");
if (name === "") {
  console.log("Name is required");
} else {
  console.log("Name OK");
}

if (age < 18) {
  console.log("You must be 18+");
} else {
  console.log("Age Verified");
}

console.log("----------------------------------");


// 2. User Login System (Boolean)

let isLoggedIn = false;

console.log("User Login System:");
if (isLoggedIn) {
  console.log("Welcome User!");
} else {
  console.log("Please Login");
}

console.log("----------------------------------");



// 3. Product Catalog (Objects + Arrays)

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mobile", price: 15000 },
  { name: "Headphones", price: 2000 }
];

console.log("Product Catalog:");
console.log(products);

console.log("----------------------------------");



// 4. Financial App (Numbers + BigInt)

let balance = 15000; // normal number
let bigAmount = 987654321987654321n; // BigInt

console.log("Financial Data:");
console.log("Balance:", balance);
console.log("Big Amount:", bigAmount);

console.log("----------------------------------");



// 5. Interactive UI State (Objects)

const UIState = {
  theme: "light",
  sidebarOpen: true,
  notifications: 5
};

console.log("UI State:");
console.log(UIState);

console.log("----------------------------------");
