import express from 'express';
const router = express.Router();

router.get('/', (req,res) => {
    res.send('We are on movies');
});

router.post('/', (req, res) => {
    const movie = new Movie({
        title: req.body.title,
        description: req.body.description,
        releaseDate: req.body.releaseDate,
        avgRating: req.body.releaseDate,
    });
    movie.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    });
});

export default router;

