import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        index: true,
    },
    description: {
        type: String,
        required: true,
        index: true,
    },
    releaseDate: {
        type: Date,
        required: true,
        index: true,
    },
    avgRating: {
        type: Number,
        required: true,
        index: true,
    },
});

movieSchema.virtual('averageRating', {
    ref: 'Review',
    localField: '_id',
    foreignField: 'Movie',
    justOne: false,
    options: { sort: { date: -1 } },
});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;