const Movies = require("../models/movieModel");

const handleErrors = (err) => {
    let errors = {
        title: '',
        director: '',
        year: '',
        type: '',
        language: ''
    };

    console.log(err);
    if (err.message === "Title is Required") {
        errors.title = "Title is Required";
    }

    if (err.message === "Director is Required") {
        errors.director = "Director is Required";
    }

    if (err.message === "Relese Year is Required") {
        errors.year = "Relese Year is Required";
    }

    if (err.message === "Type is Required") {
        errors.type = "Type is Required";
    }

    if (err.message === "Language is Required") {
        errors.language = "Language is Required";
    }

    if (err.message.includes("Movies validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
};

// store movie data
module.exports.createMovies = async (req, res, next) => {
    try {
        const { title, director, year, type, language } = req.body;
        const movies = await Movies.create({ title, director, year, type, language });

        res.status(201).json({ movies: movies._id, created: true });

    } catch (err) {
        console.log(err);
        const errors = handleErrors(err);
        res.json({ errors, created: false });
    }
};

// list movies data
module.exports.listMovies = async (req, res, next) => {
    Movies.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
};


// delete movie data
module.exports.deleteMovie = async (req, res, next) => {

    Movies.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data,
            })
        }
    })
};