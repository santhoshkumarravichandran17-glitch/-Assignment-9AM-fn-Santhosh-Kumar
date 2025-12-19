// Task 1: Interactive Counter
let count = 0
document.getElementById("increase").addEventListener("click", function () {
  count++
  document.getElementById("count").textContent = count
})
document.getElementById("decrease").addEventListener("click", function () {
  count--
  document.getElementById("count").textContent = count
})

// Task 2: Hover-based Menu
let title = document.getElementById("menuTitle")
let menu = document.getElementById("menu")

title.addEventListener("mouseover", function () {
  menu.style.display = "block"
})
title.addEventListener("mouseout", function () {
  menu.style.display = "none"
})

// Task 3: Login Form Validation
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault()

  let user = document.getElementById("username").value
  let pass = document.getElementById("password").value

  if (user === "" || pass === "") {
    document.getElementById("loginMsg").textContent = "All fields required"
  } else {
    document.getElementById("loginMsg").textContent = "Login Successful"
  }
})

// Task 4: Keyboard Shortcut (Ctrl + S)
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault()
    alert("Ctrl + S detected")
  }
})

// Task 5: Click Tracker App
let clicks = 0
document.getElementById("trackBtn").addEventListener("click", function () {
  clicks++
  document.getElementById("clickCount").textContent = clicks
})
