const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c1b370237b949a86942dc1bd2eabc75e&page=1";

const IMG_PATH = "https://image.tmdb.org/t/p/w500";

const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=c1b370237b949a86942dc1bd2eabc75e&query="';

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

getMovies(API_URL);

// fetching movie data from API

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  // appending to DOM
  showMovies(data.results);
}

// appending to DOM

function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
            <img src="${IMG_PATH + movie.poster_path}"/>
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <span class="${getClassByVote(movie.vote_average)}">${
      movie.vote_average
    }</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                <p>${movie.overview}</p>
            </div>
    `;

    main.appendChild(movieEl);
  });
}

function getClassByVote(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

// search functionality

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_URL + searchTerm);

    search.value = "";
  } else {
    window.location.reload();
  }
});
