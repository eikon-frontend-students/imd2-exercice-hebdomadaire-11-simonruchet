var button = document.querySelector(".button");
var count = document.querySelector(".count");

function changeColor() {
  button.classList.add("is-active");
  count.classList.add("is-active");
  setTimeout(() => {
    button.classList.remove("is-active");
    count.classList.remove("is-active");
  }, 2000);
}

button.addEventListener("click", changeColor);
