'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var giftSchema = new Schema({
  name: {type: String},
  price: {type: Number, min: 0}
})
module.exports = mongoose.model('Gift', giftSchema);