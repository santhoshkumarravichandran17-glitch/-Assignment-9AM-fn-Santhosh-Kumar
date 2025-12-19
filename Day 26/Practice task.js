// Task 1
document.getElementById("changeTextBtn").addEventListener("click", () => {
  document.getElementById("heading").textContent = "Heading Changed"
})

// Task 2
document.querySelector("#para").style.color = "blue"

// Task 3
document.getElementById("addItemsBtn").addEventListener("click", () => {
  let list = document.getElementById("list")

  for (let i = 3; i <= 5; i++) {
    let li = document.createElement("li")
    li.textContent = "Item " + i
    list.appendChild(li)
  }
})

// Task 4
document.getElementById("removeItemBtn").addEventListener("click", () => {
  let list = document.getElementById("list")
  if (list.firstElementChild) {
    list.removeChild(list.firstElementChild)
  }
})

// Task 5
document.getElementById("bgBtn").addEventListener("click", () => {
  document.body.style.backgroundColor = "lightgray"
})
