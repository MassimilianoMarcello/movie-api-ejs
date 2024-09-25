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
        return findMovie(movies,id);
    };
    static addMovie = (movie) => {
        movies.push(movie);
        return movies;
    };

    
    static updateMovie = (id, updatedData) => {
        const movie = findMovie(movies, id);
        if (movie) {
            // uptate on fulled fields
            movie.title = updatedData.title || movie.title;
            movie.director = updatedData.director || movie.director;
            movie.year = updatedData.year || movie.year;
            movie.logo = updatedData.logo || movie.logo;
            return movie; // update movie rendered
        }
        return null; // film did not find
    };
    static deleteMovie = (id) => {
        const index = movies.findIndex(movie => movie.id === id);
        if (index !== -1) {
            movies.splice(index, 1); // Rimuove il film dall'array
            return true; // Restituisce true se il film è stato eliminato
        }
        return false; // Restituisce false se il film non è stato trovato
    };
}



export default Movie
