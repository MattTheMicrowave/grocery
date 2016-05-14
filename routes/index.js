var express = require('express');
var router = express.Router();
var ItemModel = require('../models/ItemModel.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  ItemModel.find(function(err, items) {
  res.render('index', { title: 'Express',
items: items
});
});
});

router.post('/tasks', function(req, res, next) {
var task = new ItemModel({
  item : req.body.item
});

task.save(function(err, task) {

res.redirect('/');

});
});
module.exports = router;
