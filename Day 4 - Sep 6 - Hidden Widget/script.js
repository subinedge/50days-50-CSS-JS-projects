const container = document.querySelector(".search");
const inpSearch = document.querySelector("#inpSearch");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  container.classList.add("active");
});
