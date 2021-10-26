const btn = document.querySelector(".btn");
const joke = document.querySelector(".joke");

function dadJokes() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      joke.innerHTML = data.joke;
    });
}
dadJokes();
btn.addEventListener("click", dadJokes);
