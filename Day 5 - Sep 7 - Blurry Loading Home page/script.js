const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

const inter = setInterval(blur, 30);

function blur() {
  load++;
  if (load > 99) {
    clearInterval(inter);
  }

  loadText.innerHTML = load + "%";
  loadText.style.opacity = (100 - load) / 100;
  bg.style.filter = `blur(${100 - load}px)`;
}
