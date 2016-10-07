var express = require('express');
var router = express.Router();
var queries = require('../database/queries/meetups_queries');
var moment = require('moment');

/* GET home page. */
router.get('/', function (req, res, next) {
    queries.getMeetups()
        .then(function (data) {
            // console.log("user: ", req.user);
            // console.log("data[0].users_id: ", data[0].users_id, "req.user.id: ", req.user.id, "req.user: " , req.user);

            // console.log("data[0].avatar_url: ", data[0].avatar_url);

            res.render('meetups/index', {
                title: 'Meetups Homepage',
                meetups: data,
                user: req.user
            });
        })
        .catch(function (error) {
            return next(error);
        })
});

router.get('/:id/page', function (req, res, next) {
    // var currentUser = req.user.id;
    // console.log("req.params.id: " , req.params.id);

    queries.getMeetup(req.params.id)
        .then(function (data) {
            // var meetupOwner = data[0].users_id;

            // console.log("data[0].users_id: ", data[0].users_id, "req.user.id: ", req.user.id, "req.user: " , req.user);

            // if (meetupOwner == currentUser) {
            // if (data[0].user_id == req.user.id) {
            if (req.params.id == req.user.id) {
                res.render('meetups/page', {
                    meetup: data[0],
                    isOwner: true,
                    user: req.user
                })
            } else {
                res.render('meetups/page', {
                    meetup: data[0],
                    user: req.user
                })
            }
        })
        .catch(function (error) {
            return next(error);
        })
});

router.get('/new', function (req, res, next) {
    res.render('meetups/new', {
        title: 'Start a new meetup',
        defaultMeetupDateTime: moment().add(1, 'days').format("YYYY-MM-DD[T]hh:mm"),
        user: req.user
    });
});

router.post('/new', function (req, res, next) {

    queries.addMeetup({
        users_id: req.user.id,
        title: req.body.title,
        description: req.body.description,
        location: req.body.address,
        start_date: req.body.start_date
    })
    .then(function () {
        res.redirect('/meetups');
    })
    .catch(function (error) {
        return next(error);
    })
});

router.get('/:id/edit', function (req, res, next) {
    queries.getMeetup(req.params.id)
        .then(function (data) {
            var meetup = data[0];
            if (!req.user.id == meetup.user_id) {
                console.log('user ' + req.user.id + 'is not meetup owner');
                res.redirect('/');
                return;
            } else {
                res.render('edit', {meetup: meetup, user: req.user});
            }
        })
        .catch(function (error) {
            return next(error);
        })
});

router.post('/:id/edit', function (req, res, next) {
    var id = req.params.id;
    var title = req.body.title;
    var description = req.body.description;
    var location = req.body.location;
    var time = req.body.time;

    queries.updateMeetup(id, description, title, location, time)
        .then(function () {
            res.redirect('/id/page')
        })
        .catch(function (error) {
            return next(error);
        })
});

router.post('/:id/delete', function (req, res, next) {
    queries.getMeetup(req.params.id)
        .then(function (data) {
            if (req.user.id == data[0].user_id) {
                queries.deleteMeetup(req.params.id)
                    .then(function (data) {
                        res.redirect('/meetups')
                    })
                    .catch(function (error) {
                        return next(error);
                    })
            } else {
                res.redirect('/')
            }
        })
        .catch(function (error) {
            return next(error);
        })
});

module.exports = router;
