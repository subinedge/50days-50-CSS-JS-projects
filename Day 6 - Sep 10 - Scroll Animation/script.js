const boxes = document.querySelectorAll(".box");
checkBoxes();
window.addEventListener("scroll", checkBoxes);
function checkBoxes() {
  const triggerBox = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxPosition = box.getBoundingClientRect().top;
    if (boxPosition < triggerBox) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
