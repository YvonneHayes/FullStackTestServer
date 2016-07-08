const express = require('express');
const app = module.exports = express();
const pokemons = require('../routes/pokemons');
const cors = require('./cors')('*');

app.use(cors);
app.use(express.static(__dirname+'/public'));

app.use('/api/pokemon', pokemons);
