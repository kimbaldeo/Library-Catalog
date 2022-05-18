const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {
        type: string,
        required: [true]
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: "Author"
    },
    published: {
        type: date,
        required: [true]
    },
    cover: {
        type: string,
        required: [false]
    },
    description: {
        type: string,
        required: [false]
    },
}
)

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;