function showSelect() {
  const selectForm = document.querySelector(".select__car"),
    circle = document.querySelector(".circle"),
    rectangleUp = document.querySelector(".rectangle__up"),
    rectangleDown = document.querySelector(".rectangle__down"),
    rectangles = document.querySelector(".rectangles");
  selectForm.classList.remove("hide");
  circle.classList.add("hide");
  rectangleUp.classList.add("hide");
  rectangleDown.classList.add("hide");
  rectangles.classList.add("hide");
}
