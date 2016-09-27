var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('gspace/index');
});

module.exports = router;
