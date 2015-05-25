'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var giftSchema = new Schema({
  name: {type: String, required: true},
  price: {type: Number, min: 0, required: true},
  url: {type: String, required: true},
  imageUrl: {type: String, required: true}
})
module.exports = mongoose.model('Gift', giftSchema);