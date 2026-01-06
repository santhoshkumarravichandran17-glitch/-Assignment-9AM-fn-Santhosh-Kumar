
function show(msg) {
  document.getElementById("out").innerHTML += msg + "<br>";
}

// Task 1: Closure
function clickCounter() {
  let c = 0;
  return function () {
    c++;
    document.getElementById("count").innerText = c;
  };
}
let counter = clickCounter();
document.getElementById("btn").onclick = counter;

// Task 2: Callback
setTimeout(function () {
  show("Callback executed");
}, 1000);

// Task 3: Promise
function fetchData() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Data received");
    }, 1000);
  });
}

fetchData().then(show);

// Task 4: async/await
async function getData() {
  try {
    let res = await fetchData();
    show(res);
  } catch (e) {
    show("Error");
  }
}
getData();

// Task 5: Destructuring
let student = { name: "SANTHOSH KUMAR", age: 23, dept: "CS" };
let { name, age } = student;
show(name + " " + age);
