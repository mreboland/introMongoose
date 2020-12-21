const express = require("express");
const router = express.Router();

// TODO
// Require Theatre mongoose model

const Theatre = require("../models/Theatre");

// TODO
// @route  GET /theatres
// @desc   Returns all the theatres in database
// @access Public
router.get("/", async (req, res) => {
  const theatres = await Theatre.get();
  res.json(theatres);
});


// TODO
// @route  POST /theatres
// @desc   Add a new theatre
// @access Public
router.post("/", (req, res) => {

  // If req.body has a VIP value passed in, create a new theatre with that VIP value
  let theatre;
  if(req.body.VIP) {
    theatre = new Theatre({
      name: req.body.name,
      VIP: req.body.VIP,
    })
  } else {
    // If req.body does not have a VIP value passed in, create a new theatre, and let VIP default to the default value
    theatre = new Theatre({
      name:req.body.name,
    })
  }

  // Save the theatre you just created, return a message using res.json() to confirm the theatre has been saved successfully
  const doc = await theatre.save();
  res.json(doc);

});

// TODO
// Export router
module.exports = router;