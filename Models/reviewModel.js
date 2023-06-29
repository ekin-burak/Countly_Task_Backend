import mongoose from 'mongoose';


const reviewSchema = new mongoose.Schema({
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
    movieID: {
        type: String,
        required: false,
        index:true,
    }

  });

const Review = mongoose.model('Review', reviewSchema);

export default Review;