const express = require('express');
const Pokemon = require('../models/pokemon');
const router = express.Router();
const bodyParser = require('body-parser').json();

router
  .get('/', (req, res) => {
    Pokemon.find()
      .lean()
      .then(results => res.json(results))
      .catch(err => res.status(500).json({error: {message: 'Unable to find Pokemon', reason: err}}));
  })
  .post('/', bodyParser, (req, res) => {
    new Pokemon(req.body)
      .save()
      .then(result => res.json(result))
      .catch(err => res.status(500).json({error: {message: 'Unable to create new Pokemon', reason:err}}));
  });

  module.exports = router;
