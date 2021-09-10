const left = document.querySelector(".left");
const right = document.querySelector(".right");

const container = document.querySelector(".container");

left.addEventListener("mouseenter", () => {
  container.classList.add("wide-left");
});

left.addEventListener("mouseleave", () => {
  container.classList.remove("wide-left");
});

right.addEventListener("mouseenter", () => {
  container.classList.add("wide-right");
});

right.addEventListener("mouseleave", () => {
  container.classList.remove("wide-right");
});
