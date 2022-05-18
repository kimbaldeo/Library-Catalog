const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    comment: {
        type: string,
        required: [true]
    },
    book: {
        type: mongoose.Types.ObjectId,
        ref: "Book"}
},

)

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;