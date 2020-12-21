const express = require("express");
const router = express.Router();

// TODO
// Require Movie and Theatre mongoose models

const Movie = require("../models/Movie");
const Theatre = require("../models/Theatre");


// TODO
// @access Public
router.get("/", async (req, res) => {
  // @route  GET /movies
  const movies = await Movie.find();
  // @desc   Returns all movies in the database
  // sending response in json format with data from movies.
  res.json(movies);
});

// TODO
// @route  POST /movies/add
// @desc   Add a new movie to the database
// @access Public
router.post("/add", async (req, res) => {
  // Create a new movie from the information entered through req.body

  const { name, director, nowPlaying } = req.body;

  const newMovie = new Movie({
    name: name,
    director: director,
    nowPlaying: nowPlaying,
    theatres: [],
  });

  // Save the movie you just created to db 
  const movie = await newMovie.save();  
  
  // return a message using res.json() to confirm the movie has been saved successfully
  res.json(movie);
});

// TODO
// @route  POST /movies/add/:theatreId
// @desc   Add a movie object to a theatre based on the theatreid passed in as a param, and that theatre name to the movies playing array
// @access Public
router.post("/add/:theatreId", async (req, res) => {

  const { theatreId } = req.params;
  const { name }  = req.body;

  // Find the theatre based on the theatreID passed in from req.params
  const theatre = await Theatre.findById(theatreId);

  // Find the movie based on the name passed in from req.body
  const movie = await Movie.findOne({ name: name });

  // Add the theatre name to the theatres array on the movie
  movie.theatres.push(theatre.name);

  // Save the movie
  const updatedMovie = await movie.save();

  // Then add the movie name onto the theatre's playing array
  theatre.playing.push(movie.name);

  // Save the theatre,
  const updatedTheatre = await theatre.save();
  // and return a message using res.json() to confirm the movie and theatre has been saved successfully
  res.json({ updatedMovie, updatedTheatre})
});

// TODO
// Export router

module.export = router;