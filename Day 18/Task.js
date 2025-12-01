// ---------------------------------------------
// 1. Declare variables using var, let, and const
// ---------------------------------------------
var a = 10;
let b = 20;
const c = 30;

console.log("var a =", a);
console.log("let b =", b);
console.log("const c =", c);


// ----------------------------------------------------
// 2. Try to redeclare a let variable (will cause error)
// ----------------------------------------------------
try {
    let b = 40; // ❌ Error: Identifier 'b' has already been declared
} catch (err) {
    console.log("Redeclaring let error:", err.message);
}


// -------------------------
// 3. Create a TDZ error
// -------------------------
try {
    console.log(x); // ❌ TDZ Error
    let x = 50;
} catch (err) {
    console.log("TDZ Error:", err.message);
}


// -------------------------------------------------------
// 4. Test variable visibility inside and outside a block
// -------------------------------------------------------
{
    let insideBlock = "I am inside the block";
    var globalVar = "I am accessible outside the block";
    console.log(insideBlock); // works
}

// console.log(insideBlock); // ❌ Error: not defined
console.log(globalVar); // ✔ works (var is not block-scoped)


// -------------------------------------------------
// 5. Create a const object and modify one property
// -------------------------------------------------
const person = {
    name: "Santhosh",
    age: 20,
};

// Modifying a property is allowed
person.age = 21;

console.log("Modified const object:", person);
