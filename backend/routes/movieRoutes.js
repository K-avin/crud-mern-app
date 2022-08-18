const { createMovies, listMovies, deleteMovie } = require("../controllers/movieController");
const { checkUser, verifyToken } = require("../middlewares/authMiddleware");
const router = require("express").Router();

// list movies data
router.get("/", listMovies);

// store movie data
router.post("/create-movie", createMovies);

// delete movie data
router.delete("/delete-movie/:id", deleteMovie);



module.exports = router;



// // update movie data

// router.route('/update-movie/:id').put((req,res,next) =>{
//     movieSchema.findByIdAndUpdate(
//         req.params.id,
//         {
//             $set: req.body,
//         },
//         (error,data) => {
//         if(error){
//             return next(error)
//             console.log(error)
//         } else {
//             res.json(data)
//             console.log('Movie updates Successfully')
//         }
//     },
//     )
// })

// // get single movie

// router.route('/edit-movie/:id').get((req,res)=>{
//     movieSchema.findById(req.params.id,(error,data)=>{
//         if(error){
//             return next(error)
//         } else {
//             res.json(data)
//         }
//     })
// })