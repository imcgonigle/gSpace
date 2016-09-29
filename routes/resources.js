var express = require('express');
var router = express.Router();
var queries = require('../database/queries/resources')
var passport = require('../passport')

router.get('/', function(req, res, next) {

    queries.getResourceTags().then((resource) => {

            res.render('resources/index', {
                title: 'Resources Homepage',
                resource: resource,
                user: req.user
            })

        })
        .catch(function(error) {
            return next(error)
        })
});

router.get('/page/:id', function(req, res, next) {
    var resource_id = req.params.id

    queries.getResourceById(resource_id)
        .then(function(data) {
            var resource = data[0]

            res.render('resources/single-resource', {
                resource: resource
            })
        })
})

router.post('/new', function(req, res, next) {
    queries.addResource(req.user.id, req.body.title, req.body.description, req.body.link)
        .then(function(data) {
            res.redirect('/resources')
        })
        .catch(function(error) {
            return next(error)
        })
})

router.post('/new/like/:id', function(req, res, next) {

    var resource_id = req.params.id
    queries.getResourceById(resource_id)
        .then(function(data) {
            var likes = data[0].likes
            var id = data[0].id
            queries.addLikeToResource(id, likes)
                .then(function(data) {
                    res.send(data)
                })
        })
        // .catch(function(error) {
        // 	return next(error)
        // })
})
router.get('/:id/edit', function(req, res, next) {
    var id = req.params.id
    queries.getResourceById(id)
        .then(function(data) {
            var resource = data[0]
                // if(!post.users_id == req.user.id) {
                // 	res.redirect('/')
                // } else {
            res.render('resources/edit', {
                    resource: resource
                })
                // }
        })
})
router.get('/:id/delete', function(req, res, next) {
    if (req.isAuthenticated()) {
        queries.getResourceById(req.params.id)
            .then(function(data) {
                var resource = data[0]
                  console.log(req.user.id, resource.users_id)
                if (req.user.id == resource.users_id) {

                    queries.deleteResource(req.params.id)
                        .then(function() {
                            res.redirect('/resources/')
                        })
                } else {
                    res.redirect('/resources/')
                }
            })
            .catch(function(error) {
                return next(error)
            })
    } else {
        res.redirect('/login')
    }

})

router.post('/:id/edit', function(req, res, next) {
    if (!req.isAuthenticated()) {
        res.redirect('/login')
    } else {

        var id = req.params.id

        queries.getResourceById(id)
            .then(function(data) {
                var resource = data[0];

                if (resource.users_id == req.user.id) {
                    var title = req.body.title;
                    var description = req.body.description;
                    var link = req.body.link;

                    query.updateResource(resource.id, title, description, link)
                        .then(function(id) {
                            res.redirect('/resources/page' + id + '')
                        })
                        .catch(function(error) {
                            return next(error)
                        })
                } else {
                    res.redirect('/resources/')
                }
            })
            .catch(function(error) {
                return next(err)
            })
    }
})









module.exports = router;
