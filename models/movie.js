import findMovie from '../utils/findmovie.js';

const movies = [
    {
        id: 1,
        title: 'Inception',
        director: 'Christopher Nolan',
        year: 2010,
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_bTru3smhD-EqL3DlDzuUBrkFW7aEW9qQ9Q&s'
    },
    {
        id: 2,
        title: 'The Shawshank Redemption',
        director: 'Frank Darabont',
        year: 1994,
        logo: 'https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg'
    },
    {
        id: 3,
        title: 'The Godfather',
        director: 'Francis Ford Coppola',
        year: 1972,
        logo: 'https://cdn.europosters.eu/image/750/posters/the-godfather-logo-i11290.jpg'
    }
];
class Movie {
    static getMovies = () => {
        return movies;
    };
    static getMovieById = (id) => {
        return findMovie(id, movies);
    };
    static addMovie = (movie) => {
        movies.push(movie);
        return movies;
    };
    static updateMovie = (id, movie) => {
        const movieExist = findMovie(id, movies);
        if (movieExist) {
            movieExist.title = movie.title,
            movieExist.director = movie.director,
                movieExist.year = movie.year,
                movieExist.logo = movie.logo;
            return movies;
        } else {
            return null;
        }
    };
    // deleteMovie = () => {

    // };
}

export default Movie
