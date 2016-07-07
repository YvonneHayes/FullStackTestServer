const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Pokemon', new Schema( {
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true,
  },
  url: {
    type: String
  }

}));
