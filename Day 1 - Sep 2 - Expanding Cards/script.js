// add active class to the panel on click

const imgPanel = document.querySelectorAll(".panel");
// console.log(imgPanel);

imgPanel.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClass();
    panel.classList.add("active");
  });
});

function removeActiveClass() {
  imgPanel.forEach((panel) => {
    panel.classList.remove("active");
  });
}
