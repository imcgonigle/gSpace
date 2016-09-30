var express = require('express');
var router = express.Router();
var queries = require('../database/queries/meetups_queries');

/* GET home page. */
router.get('/', function (req, res, next) {
    queries.getMeetups()
        .then(function (data) {
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

router.post('/new/like/:id', function (req, res, next) {

    var meetup_id = req.params.id
    queries.getMeetup(id)
        .then(function (data) {
            var likes = data[0].likes
            var id = data[0].id
            queries.addLikeToMeetup(id, likes)
                .then(function (data) {
                    console.log(data)
                    res.send(data)
                })
        })
    // .catch(function(error) {
    // 	return next(error)
    // })
});

router.get('/:id/page', function (req, res, next) {
    queries.getMeetup(req.params.id)
        .then(function (data) {
            if (data[0].user_id == req.user.id) {
                res.render('meetups/page', {
                    meetup: data[0],
                    isOwner: true,
                    user: req.user
                })
            } else {
                res.render('meetups/page', {
                    meetup: data[0],
                    isOwner: false,
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
        user: req.user
    });
});

router.post('/new', function (req, res, next) {
    var user_id = req.user.id;
    var title = req.body.title;
    var description = req.body.description;
    var location = req.body.location;
    var dateTime = req.body.time.split(' ');
    var date = dateTime[0];
    var time = dateTime[1];

    // pass timestamp into moment which will parse it.
    // take moment object, format out the time
    // then format date

    // queries.addMeetup(id)
    // queries.addMeetup(req.params.id, req.body.title, req.body.description, req.body.location, req.body.time)

    queries.addMeetup(user_id, title, description, location, time, date)
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


// var express = require('express');
// var router = express.Router();
// var queries = require('../database/queries/meetups_queries')
// var passport = require('../passport')
//
// router.get('/', function(req, res, next) {
//
//     queries.getMeetupTags().then((meetup) => {
//         res.render('meetups/index', {
//         title: 'Meetups Homepage',
//         meetup: meetup,
//         user: req.user.id,
//     })
// })
//     .catch(function(error) {
//         return next(error)
//     })
// });
//
// router.get('/page/:id', function(req, res, next) {
//     var meetup_id = req.params.id
//     queries.getMeetupById(meetup_id)
//         .then(function(data) {
//             var meetup = data[0]
//             var isOwner = (req.isAuthenticated() && meetup.users_id == req.user.id)
//
//             res.render('meetups/page', {
//                 meetup: meetup,
//                 isOwner: isOwner
//             })
//         })
// })
//
// router.post('/new', function(req, res, next) {
//     queries.addMeetup(req.user.id, req.body.title, req.body.description, req.body.link)
//         .then(function(data) {
//             res.redirect('/meetups')
//         })
//         .catch(function(error) {
//             return next(error)
//         })
// })
//
// router.post('/new/like/:id', function(req, res, next) {
//
//     var meetup_id = req.params.id
//     queries.getMeetupById(meetup_id)
//         .then(function(data) {
//             var likes = data[0].likes
//             var id = data[0].id
//             queries.addLikeToMeetup(id, likes)
//                 .then(function(data) {
//                     res.send(data)
//                 })
//         })
//     // .catch(function(error) {
//     // 	return next(error)
//     // })
// })
// router.get('/:id/edit', function(req, res, next) {
//     var id = req.params.id
//     queries.getMeetupById(id)
//         .then(function(data) {
//             var meetup = data[0]
//             // if(!post.users_id == req.user.id) {
//             // 	res.redirect('/')
//             // } else {
//             res.render('meetups/edit', {
//                 meetup: meetup
//             })
//             // }
//         })
// })
// router.get('/:id/delete', function(req, res, next) {
//     if (req.isAuthenticated()) {
//         queries.getMeetupById(req.params.id)
//             .then(function(data) {
//                 var meetup = data[0]
//                 console.log(req.user.id, meetup.users_id)
//                 if (req.user.id == meetup.users_id) {
//
//                     queries.deleteMeetup(req.params.id)
//                         .then(function() {
//                             res.redirect('/meetups/')
//                         })
//                 } else {
//                     res.redirect('/meetups/')
//                 }
//             })
//             .catch(function(error) {
//                 return next(error)
//             })
//     } else {
//         res.redirect('/login')
//     }
//
// })
//
// router.post('/:id/edit', function (req,res,next) {
//     if (!req.isAuthenticated()) {
//         res.redirect('/login')
//     } else {
//
//         var meetup_id = req.param.id
//
//         query.getMeetupById(meetup_id)
//             .then(function(data) {
//
//                 var meetup = data[0]
//
//                 if (meetup_id.user_id == req.use.id) {
//                     var title = req.body.title
//                     var link = req.body.link
//                     console.log(link)
//                     var user_id = req.user.id
//                     var description = req.body.description
//
//                     query.updateMeetup(meetup.id, title, description, link)
//                         .then(function(id) {
//                             res.redirect('/meetups/page' + id)
//                         })
//                 }
//             })
//     }
// })
//
// router.post('/:id/edit', function(req, res, next) {
//     if (!req.isAuthenticated()) {
//         res.redirect('/login')
//     } else {
//
//         var id = req.params.id
//
//         queries.getMeetupById(id)
//             .then(function(data) {
//                 var meetup = data[0];
//
//                 if (meetup.users_id == req.user.id) {
//                     var title = req.body.title;
//                     var description = req.body.description;
//                     var link = req.body.link;
//
//                     queries.updateMeetup(meetup.id, title, description, link)
//                         .then(function(id) {
//                             res.redirect('/meetups/page/' + id + '')
//                         })
//                         .catch(function(error) {
//                             return next(error)
//                         })
//                 } else {
//                     res.redirect('/meetups/')
//                 }
//             })
//             .catch(function(error) {
//                 return next(error)
//             })
//     }
// })
//
// module.exports = router;
