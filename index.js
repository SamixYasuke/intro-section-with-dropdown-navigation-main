const dropDownArrows = Array.from(document.querySelectorAll(".arrow"));
const dropDownTxts = Array.from(document.querySelectorAll(".arrow-text"));

dropDownArrows.forEach((arrow, index) => {
  arrow.addEventListener("click", () => {
    if (arrow.classList.contains("active")) {
      arrow.classList.remove("active");
    } else {
      arrow.classList.add("active");
    }
  });

  dropDownTxts[index].addEventListener("click", () => {
    if (arrow.classList.contains("active")) {
      arrow.classList.remove("active");
    } else {
      arrow.classList.add("active");
    }
  });
});
