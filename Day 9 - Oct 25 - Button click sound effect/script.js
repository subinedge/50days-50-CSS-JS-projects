const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const button = document.createElement("button");
  button.classList.add("btn");
  button.innerText = sound;

  button.addEventListener("click", () => {
    stopSongs();
    document.getElementById(sound).play();
  });

  const btnContainer = document.querySelector(".buttons");
  btnContainer.appendChild(button);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const currentSong = document.getElementById(sound);
    currentSong.pause();
    currentSong.currentTime = 0;
  });
}
