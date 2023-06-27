import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import Movie from './Models/movieModel.js';
import Review from './Models/reviewModel.js';
// import 'dotenv/config';


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('We are on home');
});

// find all movies
app.get('/movies', async(req, res) => {
    try {
        const movies = await Movie.find({});
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

// find movie by id
app.get('/movies/:id', async(req, res) => {
    try {
        const {id} = req.params.id;
        const movies = await Movie.findById(req.params.id);
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

// create or add new movie
app.post('/movies', async(req, res) => {
    try {
        const movie = await Movie.create(req.body)
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

// update movies (for average rating)
app.put('/movies/:id', async(req,res) => {
    try {
        const {id} = req.params.id;
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body);
        if(!movie){
            return res.status(404).json({ message: 'cannot find any product with ID ${_id}'})
        }
        const updatedmovie = await Movie.findById(req.params.id);
        res.status(200).json(updatedmovie);
    } catch (error){
        res.status(500).json({ message: error.message})
    }
});

app.get('/reviews', async(req, res) => {
    try {
        const reviews = await Review.find({});
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

app.post('/reviews', async(req, res) => {
    try {
        const review = await Review.create(req.body)
        res.status(200).json(review);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});



// Connection to MongoDB
mongoose.connect(
    //process.env.DB_URL, 
    "mongodb+srv://bekin73:d54MloLOaUXrD6HA@countlytask.jrmx68f.mongodb.net/",
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
    });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

// Server Start
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default { 
    Movie, 
    Review}
