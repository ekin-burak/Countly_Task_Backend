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

app.get('/movies', async(req, res) => {
    try {
        const movies = await Movie.find({});
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

app.get('/movies/:id', async(req, res) => {
    try {
        const {id} = req.params.id;
        const movies = await Movie.findById(req.params.id);
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

app.post('/movies', async(req, res) => {
    try {
        const movie = await Movie.create(req.body)
        res.status(200).json(movie);
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

export default Movie;
