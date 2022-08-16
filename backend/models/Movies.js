const mongoose = require('mongoose');
const { Schema } = mongoose;

let movieSchema = new Schema({
    title: {
        type: String
    },
    director: {
        type: String
    },
    year: {
        type: Number
    },
    type: {
        type: String
    },
    language: {
        type: String
    }
}, {
    collection: 'movies'
})

module.exports = mongoose.model('Movie', movieSchema)

