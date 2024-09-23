import express from 'express';
import controllers from '../controllers/movie.js';

const router = express.Router();
const { getMovies, getMovieById, addMovie, updateMovie, deleteMovie } =
    controllers;

// routes
router.get('/get', getMovies);
router.get('/get/:id', getMovieById);
router.post('/add', addMovie);
router.put('/update/:id', updateMovie);
router.delete('/delete/:id', deleteMovie);

export default router;
