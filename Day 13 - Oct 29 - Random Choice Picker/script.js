const tagsEl = document.getElementById("tags");
const textarea = document.querySelector(".textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.keyCode === 13) {
    setTimeout(() => {
      e.target.value = "";
    }, 10);

    randomChoiceSelect();
  }
});

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsEl.innerHTML = "";

  tags.forEach((tag) => {
    const tagEl = document.createElement("small");
    tagEl.innerHTML = tag;
    tagEl.classList.add("tag");
    tagsEl.appendChild(tagEl);
  });
}

function randomChoiceSelect() {
  const timesHighlight = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);

    setTimeout(() => {
      unhighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);
    }, 100);
  }, timesHighlight * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");

  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unhighlightTag(tag) {
  tag.classList.remove("highlight");
}
