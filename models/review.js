const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    comment: {
        type: string,
        required: [true]
    },
},
    {timestamps: true}
)

const Book = mongoose.model('Review', reviewSchema);
module.exports = Review;