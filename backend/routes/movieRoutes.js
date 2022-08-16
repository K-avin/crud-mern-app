const mongoose = require('mongoose');
const express = require('express')
const router = express.Router()

let movieSchema = require('../models/Movies')

// store movie data

router.route('/create-movie').post((req,res,next) =>{
    movieSchema.create(req.body,(error,data) => {
        if(error){
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
})

// list movies data

router.route('/').get((req,res)=>{
    movieSchema.find((error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// update movie data

router.route('/update-movie/:id').put((req,res,next) =>{
    movieSchema.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        (error,data) => {
        if(error){
            return next(error)
            console.log(error)
        } else {
            res.json(data)
            console.log('Movie updates Successfully')
        }
    },
    )
})

// get single movie

router.route('/edit-movie/:id').get((req,res)=>{
    movieSchema.findById(req.params.id,(error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// delete movie data


router.route('/delete-movie/:id').delete((req,res,next) =>{
    movieSchema.findByIdAndRemove(req.params.id,(error,data)=>{
        if(error){
            return next(error)
        } else {
            res.status(200).json({
                msg:data,
            })
        }
    })
})

module.exports = router