const movies = [
    { title: "Free Guy", poster: "posters/freeguy.jpg" },
    { title: "Oppenheimer", poster: "posters/oppenheimer.jpg" },
    { title: "Top Gun: Maverick", poster: "posters/tpgun.jpg" }
];

const movieList = document.getElementById('movieList');
const searchBar = document.getElementById('searchBar');

function displayMovies(movies) {
    movieList.innerHTML = '';
    movies.forEach(movie => {
        const movieTile = document.createElement('div');
        movieTile.classList.add('movieTile');
        
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
