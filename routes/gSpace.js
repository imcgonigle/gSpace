var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('gSpace/index');
});

module.exports = router;
