const movies = [
    { title: "Free Guy", poster: "posters/freeguy.jpg", path: "movies/freeguy/index.html" },
    { title: "Oppenheimer", poster: "posters/oppenheimer.jpg", path: "movies/oppenheimer/index.html" },
    { title: "Top Gun: Maverick", poster: "posters/tpgun.jpg", path: "movies/topgun/index.html" },
    { title: "John Wick: Chapter 1", poster: "posters/johnwick1.jpg", path: "movies/johnwick1/index.html" },
    { title: "John Wick: Chapter 2", poster: "posters/johnwick2.jpg", path: "movies/johnwick2/index.html" },
    { title: "John Wick: Chapter 3", poster: "posters/johnwick3.jpg", path: "movies/johnwick3/index.html" },
    { title: "John Wick: Chapter 4", poster: "posters/johnwick4.jpg", path: "movies/johnwick4/index.html" },
    { title: "Dune", poster: "posters/dune1.jpg", path: "movies/dune1/index.html" },
    { title: "Dune: Part Two", poster: "posters/dune2.jpg", path: "movies/dune2/index.html" },
    { title: "Inside Out 2", poster: "posters/insideout2.jpg", path: "movies/insideout2/index.html" },
    { title: "The Matrix", poster: "posters/matrix.jpg", path: "movies/matrix/index.html" },
    { title: "Monty Python and the Holy Grail", poster: "posters/holygrail.jpg", path: "movies/holygrail/index.html" },
    { title: "No Time to Die", poster: "posters/notimetodie.jpg", path: "movies/notimetodie/index.html" },
    { title: "The Imitation Game", poster: "posters/imitationgame.jpg", path: "movies/imitationgame/index.html" },
    { title: "Cunk on Earth", poster: "posters/cunkearth.jpg", path: "series/cunkearth/index.html" }
];

const movieList = document.getElementById('movieList');
const searchBar = document.getElementById('searchBar');

function displayMovies(movies) {
    movieList.innerHTML = '';
    movies.forEach(movie => {
        const movieTile = document.createElement('div');
        movieTile.classList.add('movieTile');
        movieTile.addEventListener('click', () => {
            movieTile.classList.add('click-animate');
            setTimeout(() => {
                window.location.href = movie.path;
            }, 300); // Adjust duration to match animation timing
        });
        
        const moviePoster = document.createElement('img');
        moviePoster.src = movie.poster;
        moviePoster.alt = movie.title;
        moviePoster.classList.add('moviePoster');
        
        const movieTitle = document.createElement('div');
        movieTitle.classList.add('movieTitle');
        movieTitle.textContent = movie.title;
        
        movieTile.appendChild(moviePoster);
        movieTile.appendChild(movieTitle);
        movieList.appendChild(movieTile);
    });
}

searchBar.addEventListener('input', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchString));
    displayMovies(filteredMovies);
});

displayMovies(movies);
