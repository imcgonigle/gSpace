var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	var user = req.user.username
	res.render('resources/index', {});
});

module.exports = router;
