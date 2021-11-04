const cups = document.querySelectorAll(".cups");
const smallCups = document.querySelectorAll(".cup-small");
const percentage = document.querySelector(".percentage");
const liters = document.querySelector(".liters");
const remained = document.querySelector(".remained");

updateBigCup();

smallCups.forEach((smallCup, idx) => {
  smallCup.addEventListener("click", () => fillCup(idx));
});

function fillCup(idx) {
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  smallCups.forEach((smallCup, idx2) => {
    if (idx2 <= idx) {
      smallCup.classList.add("full");
    } else {
      smallCup.classList.remove("full");
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 220}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
