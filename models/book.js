const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {
        type: string,
        required: [true]
    },
    author: {
        type: string,
        required: [true]
    },
    published: {
        type: string,
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
    review: {
        type: string,
        required: [false]
    },
}
)

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;