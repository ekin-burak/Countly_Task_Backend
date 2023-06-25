import express from 'express';
const router = express.Router();
// import Review from '../index.js';

router.get('/', (req,res) => {
    res.send('We are on reviews');
});

router.post('/', (req, res) => {
    console.log(req.body);
});

export default router;

