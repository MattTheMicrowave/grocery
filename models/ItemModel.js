var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({

  'item' : String,
  'quantity' : Number
});

module.exports = mongoose.model('Item', itemSchema);
