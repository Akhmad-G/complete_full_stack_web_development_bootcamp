drumButtons = document.querySelectorAll(".drum");

for (let i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", handleClick)
}

function handleClick() {
  alert("I got clicked!");
}