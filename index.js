const dropDownArrows = Array.from(document.querySelectorAll(".arrow"));
const dropDownTxts = Array.from(document.querySelectorAll(".arrow-text"));
const dropDownContent1 = document.querySelector(".dropdown-content-1");
const dropDownContent2 = document.querySelector(".dropdown-content-2");

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

dropDownTxts[0].addEventListener("click", ()=>{
  dropDownContent1.classList.toggle("active-content");
});

dropDownTxts[1].addEventListener("click", ()=>{
  dropDownContent2.classList.toggle("active-content");
});
