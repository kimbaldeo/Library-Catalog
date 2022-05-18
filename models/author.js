const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    Name: {
        type: string,
        required: [true]
    },
    Books: {
        type: mongoose.Types.ObjectId,
        ref: "Book"}
},
)

const Author = mongoose.model("Author", reviewSchema);
module.exports = Author;