var express = require('express');
var router = express.Router();
var queries = require('../database/queries/resources')
var passport = require('../passport')

var title = 'Resources | '

router.get('/', function(req, res, next) {
        queries.getResourceTags().then((resource) => {
            var resource = resource
            var user = req.user.id
            queries.getFavorites(user)
            .then(function(favorites) {
              console.log(favorites)

                res.render('resources/index', {
                    title: 'Resources Homepage',
                    resource: resource,
                    favorites: favorites,
                    user: req.user,
                    title: title + "Homepage"
                })
            })
        })

    .catch(function(error) {
        return next(error)
    })
  })
router.get('/page/:id', function(req, res, next) {
    var resource_id = req.params.id
    queries.getResourceById(resource_id)
        .then(function(data) {
            var resource = data[0]
            var isOwner = (req.isAuthenticated() && resource.users_id == req.user.id)

            res.render('resources/single-resource', {
                resource: resource,
                isOwner: isOwner,
                user: req.user,
                title: title + resource.title
            })
        })
})

router.post('/search', function(req, res, nect) {
    var search = req.body.search
    console.log(search)
    queries.Search(search)
        .then(function(resource) {
            res.render('resources/index', {
                resource: resource,
                user: req.user,
                title: title + "Search"
            })
        })

})

router.post('/new', function(req, res, next) {
    if (req.isAuthenticated()) {
        queries.addResource(req.user.id, req.body.title, req.body.description, req.body.link)
            .then(function(data) {
                res.redirect('/resources')
            })
            .catch(function(error) {
                return next(error)
            })
    } else {
        res.redirect('/login');
    }

});

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
                    resource: resource,
                    user: req.user,
                    title: title + "Edit"
                })
                // }
        })
})
router.get('/:id/delete', function(req, res, next) {
    if (req.isAuthenticated()) {
        queries.getResourceById(req.params.id)
            .then(function(data) {
                var resource = data[0]
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

router.post('/:id/update', function(req, res, next) {
    if (!req.isAuthenticated()) {
        res.redirect('/login')
    } else {

        var resource_id = req.param.id

        query.getResourceById(resource_id)
            .then(function(data) {

                var resource = data[0]

                if (resource_id.user_id == req.use.id) {
                    var title = req.body.title
                    var link = req.body.link
                    var user_id = req.user.id
                    var description = req.body.description

                    query.updateProject(resource.id, title, description, link)
                        .then(function(id) {
                            res.redirect('/resources/page' + id)
                        })
                        .catch(function(err) {
                            return next(err);
                        });
                } else {
                    res.redirect('/resources/');
                }

            })
            .catch(function(err) {
                return next(err);
            });
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

                    queries.updateResource(resource.id, title, description, link)
                        .then(function(id) {
                            res.redirect('/resources/page/' + id + '')
                        })
                        .catch(function(error) {
                            return next(error)
                        })
                } else {
                    res.redirect('/resources/')
                }
            })
            .catch(function(error) {
                return next(error)
            })
    }
})

router.post('/new/favorite/:id', function(req, res, next) {
  var id = req.params.id
  var user = req.user.id
  queries.addFavorite(id, user)
    .then(function(data) {
      res.render('resources/index')
    })
})








module.exports = router;
