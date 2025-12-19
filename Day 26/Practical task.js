// Task 1
let isDark = false
document.getElementById("darkModeBtn").addEventListener("click", () => {
  if (!isDark) {
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
    isDark = true
  } else {
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    isDark = false
  }
})

// Task 2
document.getElementById("liveInput").addEventListener("input", e => {
  document.getElementById("liveText").textContent = e.target.value
})

// Task 3
document.getElementById("addTodoBtn").addEventListener("click", () => {
  let input = document.getElementById("todoInput")
  let text = input.value.trim()

  if (text !== "") {
    let li = document.createElement("li")
    li.textContent = text

    li.addEventListener("click", () => {
      document.getElementById("todoList").removeChild(li)
    })

    document.getElementById("todoList").appendChild(li)
    input.value = ""
  }
})

// Task 4
document.querySelectorAll(".colorBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.body.style.backgroundColor = btn.dataset.color
  })
})

// Task 5
document.getElementById("formatBtn").addEventListener("click", () => {
  document.getElementById("formatArea").innerHTML =
    "<b>Bold Text</b> and <i>Italic Text</i> inserted dynamically"
})
