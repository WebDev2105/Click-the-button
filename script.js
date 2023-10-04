const button = document.querySelector("#btn");
const val = document.querySelector("#counter");

let count = 0;

function updateResult() {
  val.textContent = count;
  if (count > 0) {
    val.style.color = "green";
  }
}

button.addEventListener("click", () => {
  count = count + 1;
  updateResult();
});
