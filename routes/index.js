var express = require('express');
var router = express.Router();
var ItemModel = require('../models/ItemModel.js');

/* GET home page. this will list all of the items in the db*/
router.get('/', function(req, res, next) {
  ItemModel.find(function(err, items) {
  res.render('index', { title: 'Express',
items: items
});
});
});

router.post('/items', function(req, res, next) {
var item = new ItemModel({
  verdura : req.body.verdura,
  quantity : req.body.quantity
});


item.save(function(err, item) {

res.redirect('/');

});
});
module.exports = router;
