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
            res.render('updateMovieForm', { movie });
        } else {
            res.status(404).render('404', { message: 'Movie not found' });
        }
    },
    
    addMovie:(req,res)=>{},
    updateMovie:(req,res)=>{},
    deleteMovie:(req,res)=>{},

}
export default controllers