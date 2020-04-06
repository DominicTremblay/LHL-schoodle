const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  // EVENT ROUTER TO RENDER EVENT PAGE - TEST - BY LUANA
  router.get("/event", (req, res) => {
    res.render("event");
  });

  router.get("/createEvent", (req, res) => {
    res.render("createEvent");
  })

  return router;
}
