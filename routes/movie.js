import express from 'express';
import controllers from '../controllers/movie.js';

const router = express.Router();
const {
    getMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deleteMovie,
    getUpdateForm,
    getAddMovieForm
} = controllers;

// routes
router.get('/get', getMovies);
router.get('/get/:id', getMovieById);
router.get('/getById', getMovieById);
router.get('/add', getAddMovieForm); 
router.post('/add', addMovie);
router.get('/update/:id', getUpdateForm);
router.post('/update/:id', updateMovie);
router.delete('/delete/:id', deleteMovie);

export default router;
