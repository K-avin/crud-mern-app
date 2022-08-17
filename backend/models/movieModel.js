const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const { Schema } = mongoose;

let movieSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is Required"],
        unique: false,
    },
    director: {
        type: String,
        required: [true, "Director is Required"],
        unique: false,
    },
    year: {
        type: Number,
        required: [true, "Relese Year is Required"],
        unique: false,
    },
    type: {
        type: String,
        required: [true, "Type is Required"],
        unique: false,
    },
    language: {
        type: String,
        required: [true, "Language is Required"],
        unique: false,
    }
});

movieSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    next();
  });

module.exports = mongoose.model('Movies', movieSchema)

