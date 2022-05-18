const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    Name: {
        type: string,
        required: [true]
    },
    Books: {
        type: Array,
        required: [true]
    }
},
)

const Book = mongoose.model('Review', reviewSchema);
module.exports = Review;