const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");
const slides = document.querySelectorAll(".slide");
const body = document.body;

let activeSlide = 0;

// set background image

setBgImage();

function setBgImage() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

// set active slide background

function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[activeSlide].classList.add("active");
}

// event listeners for arrows

rightArrow.addEventListener("click", () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setActiveSlide();
  setBgImage();
});

leftArrow.addEventListener("click", () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setActiveSlide();
  setBgImage();
});
