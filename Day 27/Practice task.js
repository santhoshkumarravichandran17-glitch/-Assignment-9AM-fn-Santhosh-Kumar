// Task 1: Button Click Alert
document.getElementById("alertBtn").addEventListener("click", function () {
  alert("Button Clicked")
})

// Task 2: Change Text Color on Hover
let hoverText = document.getElementById("hoverText")
hoverText.addEventListener("mouseover", function () {
  hoverText.style.color = "red"
})
hoverText.addEventListener("mouseout", function () {
  hoverText.style.color = "black"
})

// Task 3: Log Keyboard Input
document.getElementById("keyInput").addEventListener("keydown", function (e) {
  console.log(e.key)
})

// Task 4: Stop Form Reload
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault()
  alert("Form Submitted Without Reload")
})

// Task 5: Display Clicked Element Text
document.querySelectorAll(".textBtn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    document.getElementById("displayText").textContent = btn.textContent
  })
})
