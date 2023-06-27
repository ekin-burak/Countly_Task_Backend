import express from 'express';
const router = express.Router();
import Review from '../index.js';
import Movie from '../index.js'

router.get('/', (req,res) => {
    res.send('We are on reviews');
});

router.post('/', (req, res) => {
    const review = new Review({
        movieName: req.body.title,
        date: req.body.date,
        username: req.body.username,
        rating: req.body.rating,
        userReview: req.body.userReview,
    });
    review.save()
    console.log(req.body.date)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    });
});

export default router;

