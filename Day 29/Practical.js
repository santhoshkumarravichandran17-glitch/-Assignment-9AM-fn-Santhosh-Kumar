
function show(id, msg) {
  document.getElementById(id).innerHTML += msg + "<br>";
}


// Task 1: Login Counter using closure
function loginCounter() {
  let count = 0;
  return function() {
    count++;
    document.getElementById("loginCount").innerText = "Login count: " + count;
  };
}
let login = loginCounter();
document.getElementById("loginBtn").onclick = login;


// Task 2: Simulated API call using Promise
function simulateAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("API call completed");
    }, 1000);
  });
}

simulateAPI().then(msg => show("apiOutput", msg));


// Task 3: Fetch user data with async/await
async function fetchUser() {
  try {
    let data = await simulateAPI();
    show("userData", "User data fetched: " + data);
  } catch (e) {
    show("userData", "Error fetching user");
  }
}
fetchUser();


// Task 4: Shopping cart using spread operator
let cart1 = ["Apple", "Banana"];
let cart2 = ["Orange", "Grapes"];
let cart = [...cart1, ...cart2, "Mango"];
show("cartOutput", "Cart Items: " + cart.join(", "));

// Task 5: Function accepting unlimited arguments using rest
function sumAll(...numbers) {
  let sum = numbers.reduce((a,b) => a+b, 0);
  return sum;
}
show("sumOutput", "Sum of numbers: " + sumAll(5,10,15,20));
