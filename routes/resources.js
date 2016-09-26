var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('resources/index');
});

module.exports = router;
