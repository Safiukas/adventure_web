// conditional pick up rendering
function selection() {
  const select = document.getElementById("pick-up-category").value;
  const container = document.querySelector("#display");

  if (select == 1) {
    container.style.display = "block";
  } else {
    container.style.display = "none";
  }
}
