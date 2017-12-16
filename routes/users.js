var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:name', function(req, res, next) {
	mongoose.model('units').find({name: new RegExp(req.params.name, 'i')}, function(err, units) {
		res.send(units);
	}).limit(48);
});

router.get('/id/:name', function(req, res, next) {
	mongoose.model('units').findOne({number: parseInt(req.params.name)}, function(err, unit) {
		res.send(unit);
	});
});

module.exports = router;
