document.getElementById('enterButton').addEventListener('click', () => {
    window.location.href = 'browse.html'; // Redirects to the movie selection page
});

const featuredMovies = [
    { title: "Monty Python and the Holy Grail", poster: "posters/holygrail.jpg", path: "movies/holygrail/index.html" },
    { title: "Oppenheimer", poster: "posters/oppenheimer.jpg", path: "movies/oppenheimer/index.html" },
    { title: "Top Gun: Maverick", poster: "posters/tpgun.jpg", path: "movies/topgun/index.html" },
    { title: "John Wick: Chapter 4", poster: "posters/johnwick4.jpg", path: "movies/johnwick4/index.html" }
];

const featuredMovieList = document.getElementById('featuredMovieList');

function displayFeaturedMovies(movies) {
    featuredMovieList.innerHTML = '';
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
        featuredMovieList.appendChild(movieTile);
    });
}

displayFeaturedMovies(featuredMovies);
