var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// this is set up for 2 attributes
var itemSchema = new Schema({

  'verdura' : String,
  'quantity' : Number
});

module.exports = mongoose.model('Item', itemSchema);
