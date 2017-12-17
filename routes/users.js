var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:name', function(req, res, next) {
	/* mongo connection necessary for heroku functionality because heroku doesn't use some if not all parts of app.js
	var mongoOptions = {
	  	server: {socketOptions: {
	    	keepAlive: 300000, connectTimeoutMS: 30000
	  	}},
	  	replset: {socketOptions: {
	    	keepAlive: 300000, connectTimeoutMS: 30000
	  	}}
	};
	if(process.env.MONGODB_URI) {
	  	mongoose.connect(process.env.MONGODB_URI, mongoOptions);
	} else {
	  	mongoose.connect('mongodb://acheng6845:dragoon@ds143588.mlab.com:43588/heroku_dnn6ww4r', mongoOptions);
	}
	var conn = mongoose.connection;
	conn.on('error', console.error.bind(console, 'connection error'));*/
	mongoose.model('units').find({name: new RegExp(req.params.name, 'i')}, function(err, units) {
		//res.header('Access-Control-Allow-Origin', '*');
  		//res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
		res.send(units);
	}).limit(48);
});

router.get('/id/:name', function(req, res, next) {
/*
	var mongoOptions = {
	  	server: {socketOptions: {
	    	keepAlive: 300000, connectTimeoutMS: 30000
	  	}},
	  	replset: {socketOptions: {
	    	keepAlive: 300000, connectTimeoutMS: 30000
	  	}}
	};
	if(process.env.MONGODB_URI) {
	  	mongoose.connect(process.env.MONGODB_URI, mongoOptions);
	} else {
	  	mongoose.connect('mongodb://acheng6845:dragoon@ds143588.mlab.com:43588/heroku_dnn6ww4r', mongoOptions);
	}
	var conn = mongoose.connection;
	conn.on('error', console.error.bind(console, 'connection error'));
*/
	mongoose.model('units').findOne({number: parseInt(req.params.name)}, function(err, unit) {
		//res.header('Access-Control-Allow-Origin', '*');
  		//res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
		res.send(unit);
	});
});

module.exports = router;
