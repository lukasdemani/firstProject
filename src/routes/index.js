var express = require('express');
var router = express.Router();
//var static = express ();


router.get('/', (req, res, next) => {
	res.status(200).send({
		"title": "Node Store API",
		"version": "0.0.1"
		//static.use(express.static('public'))
	});
});

module.exports = router;