//  steps to be taken care on pressing NEXT

// 1. progress line to be filled upto 2nd mark and 3rd mark and so on, on clicking next
// 2. circle to be filled with background color on clicking NEXT
// 3. Check needs to be done if circle is over

// same for previous button

const progressContainer = document.querySelector(".progress-container");
const progress = document.querySelector(".progress");
const circles = document.querySelectorAll(".circle");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

let currentActive = 1;

// on clicking next button

nextButton.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

// on clicking previous button

prevButton.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prevButton.disabled = true;
  } else if (currentActive === circles.length) {
    nextButton.disabled = true;
  } else {
    prevButton.disabled = false;
    nextButton.disabled = false;
  }
}
