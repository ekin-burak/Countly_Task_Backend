import mongoose from 'mongoose';


const reviewSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: false,
        index: true,
    },
    username: {
        type: String,
        required: true,
        index: true,
    },
    rating: {
        type: Number,
        required: true,
        index: true,
    },
    userReview: {
        type: String,
        required: true,
        index: true,
    },
    movieId: {
        type: String,
        required: true,
        index: true,
    },
  });

const Review = mongoose.model('Review', reviewSchema);

export default Review;