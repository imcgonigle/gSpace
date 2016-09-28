var express = require('express');
var router = express.Router();
var query = require('../database/queries/gflow');

router.get('/', function(req, res, next) {
  query.questionPosts()
  .then( (data) => {
      // console.log(data);
      res.render('gflow/index', {items: data});
    })
    .catch((err)=>{
       console.error("Error getting from the database");
       next(err)
     })
  });

router.get('/', function(req, res, next) {
  query.questionPosts()
  .then( (data) => {
      // console.log(data);
      res.render('gflow/ask');
    })
    .catch((err)=>{
       console.error("Error getting from the database");
       next(err)
     })
  });


router.post('/ask/new/:id', function (req, res, next) {
  console.log(req.body);
  query.newQuestionPost(req.body.questionid, req.users.username, req.body.title, req.body.question)
  .then(() =>{
      res.redirect('/gflow/index/' + req.users.username)
    })
  .catch(function(err) {
    next(err)
    })
  })


router.post('/question/:id/addcomment',(req, res, next) => {
  // console.log(req.body);
  query.newQuestionComment(req.body.question_post_id, req.body.subject, req.body.comment, req.body.user_id)
  .then(() =>{
    res.redirect('/gflow/index/'+ req.params.id)
  })
  .catch((err)=>{
    console.log('there was an error')
    next(err)
  })
});

  router.get('/gflow/question/:id', (req, res, next) => {
    var id  = req.params.id;
    query.questionPosts().where('questionid',id).then((posts) => {
    query.commentPosts().where('question_post_id', id).then((data) => {
    res.render('gflow/question/'+ req.params.id, {
      items:posts,
      data:data
        })
      })
    })
    .catch((err)=>{
    console.error("Error getting from the database");
    next(err)
    })
  });


  router.get('/items/delete/:id', function(req, res, next) {
    console.log("deleting question "+ req.params.id);
    query.deleteQuestionPost(req.params.id)
    .then(function() {
      res.redirect('/gflow/index/');
    })
    .catch(function(err) {
      return next(err)
    })
  })

  router.get('/items/modify/:id', function(req, res, next) {
    console.log("modifying question "+ req.params.id);
    query.modifyQuestionPost(req.params.id)
    .then(function() {
      res.redirect('/gflow/index/');
    })
    .catch(function(err) {
      return next(err)
    })
  })

	router.get('/data/delete/:id', function(req, res, next) {
    console.log("deleting comment "+ req.params.id);
    query.deleteCommentPost(req.params.id)
    .then(function() {
      res.redirect('/gflow/index/');
    })
    .catch(function(err) {
      return next(err)
    })
  })

  router.get('/data/modify/:id', function(req, res, next) {
    console.log("modifying comment "+ req.params.id);
    query.modifyCommentPost(req.params.id)
    .then(function() {
      res.redirect('/gflow/index/');
    })
    .catch(function(err) {
      return next(err)
    })
  })


module.exports = router;
