import Movie from '../models/movie.js';


const controllers={
    getMovies:(req,res)=>{
        const movies =Movie.getMovies()
        res.status(200).render('movies', {movies})
        //* 'movie' page ejs where to rend, {movies} object to rend

    },
    getMovieById: (req, res) => {
        const id = req.query.id || req.params.id; 
        const movie = Movie.getMovieById(id); 
        if (movie) {
            res.status(200).render('movieDetails', { movie }); 
        } else {
            res.status(404).render('404', {
                title: '404 Page',
                message: 'Movie not found'
            });
        }
    },
    getUpdateForm: (req, res) => {
        const { id } = req.params;
        const movie = Movie.getMovieById(id);
        
        if (movie) {
            res.render('updateForm', { movie });
        } else {
            res.status(404).render('404', { message: 'Movie not found' });
        }
    },
    updateMovie: (req, res) => {
        const { id } = req.params;
        const updatedMovie = {
            title: req.body.title,
            director: req.body.director,
            year: req.body.year,
            logo: req.body.logo
        };
        const movie = Movie.updateMovie(parseInt(id), updatedMovie);
        if (movie) {
            res.redirect(`/api/get`); 
        } else {
            res.status(404).render('404', {
                title: '404 Page',
                message: 'Movie not found'
            });
        }
    },
    
    getAddMovieForm: (req, res) => {
        res.render('addMovieForm'); 
    },
    addMovie: (req, res) => {
        const newMovie = {
            title: req.body.title,
            director: req.body.director,
            year: req.body.year,
            logo: req.body.logo
        };
        Movie.addMovie(newMovie);
        res.redirect('/api/get'); 
    },

    deleteMovie: (req, res) => {
        const { id } = req.params;
        const movieDeleted = Movie.deleteMovie(parseInt(id)); // Assicurati di implementare deleteMovie nel modello
        if (movieDeleted) {
            res.redirect('/api/get'); // Reindirizza alla lista dei film dopo l'eliminazione
        } else {
            res.status(404).render('404', {
                title: '404 Page',
                message: 'Movie not found'
            });
        }
    },

}
export default controllers