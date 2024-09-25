import express from 'express';
import dotenv from 'dotenv';
import path,{dirname} from 'path';
import { fileURLToPath } from 'url';
import methodOverride from 'method-override';




// import movie routes
import movieRoutes from './routes/movie.js';
// import middleware
import createLog from './middleware/createLog.js';


// configure dotenv
dotenv.config();
const PORT = process.env.PORT || 5009;

// construct path
const __fileName = fileURLToPath(import.meta.url)
const PATH =dirname(__fileName)

// initialize express
const app = express();

// Set the view engine to ejs

app.set('view engine', 'ejs');
app.set('views', path.join(PATH, 'views'));


// parse body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method')); 

// Middleware logging
app.use(createLog);


// serve static file
app.use(express.static(path.join(PATH, 'public')));



// use routes
app.use('/api', movieRoutes);

// handle 404
app.use('*', (req, res) => {
    console.log('404 Error: Page not found for', req.originalUrl);
    res.status(404).render('404', {
        title: '404 Page',
        message: 'Page not found'
    });
});

// error handling
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).render('500', {
        title: '500 Page',
        message: 'Page not found'
    });
});
// listen
app.listen(PORT, () => {
    console.log(`Server is up and running on port : ${PORT}`);
});