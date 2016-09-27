var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/meetups', function(req, res, next) {
  res.render('meetups', { title: 'Meetups Homepage' });
});

router.get('/meetups/:id', function (req, res, next) {

  var params = {
        id: req.params.id,
        owner: meetups.user_id
    }

    if(params.user_id == meetups.user_id){
      meetupsFile.getMeetup(req.params.id)
          .then(function (meetups) {
              params.meetups = meetups;
              res.render('meetups', params);
          })
    }
});

module.exports = router;
