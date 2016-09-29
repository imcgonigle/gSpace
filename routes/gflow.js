var express = require('express');
var router = express.Router();
var query = require('../database/queries/gflow');

router.get('/', function(req, res, next) {
  query.questionPosts()
  .then( (data) => {
    res.render('gflow/index', {items: data})
  })
    .catch((err)=>{
      return next(err)
    })
})

router.get('/ask', function(req, res, next) {
  if(req.isAuthenticated()){
    res.render('gflow/ask', {user:req.user})
  } else {
    res.redirect('/login')
    }
  })

router.post('/ask', function (req, res, next) {
  var username = req.user.username;
  var title = req.body.title;
  var question = req.body.question;
  var user_id = req.user.id;
  var likes = 0;
  query.newQuestionPost(username, title, question, user_id, likes)
  .then(() =>{
      res.redirect('/gflow')
    })
  .catch((err) =>{
    return next(err)
  })
});

router.get('/question/:id',(req, res, next) => {
  var id = req.params.id;
  query.getQuestionPostbyId(id).then((posts) => {
  query.getCommentPostbyId(id).then((data) => {
    console.log(posts);
    res.render('gflow/question', {
      item:posts[0],
      data:data,
      user:req.user
      })
    })
  })
  .catch(function(err) {
  return next(err)
  })
});

router.post('/question/:id',(req, res, next) => {
  var username = req.user.username;
  var subject = req.body.subject;
  var comment = req.body.comment;
  var question_post_id = req.params.id;
  query.newQuestionComment(question_post_id, subject, comment, username)
  .then(() =>{
    res.redirect('/gflow/question/'+req.params.id)
  })
  .catch((err)=>{
    return next(err)
  })
});

router.post('/delete/:id', function(req, res, next) {
  query.getQuestionPostbyId(req.params.id)
  .then(function(data) {
    console.log(data);
    if(req.user.username == data[0].username){
      query.deleteQuestionPost(req.params.id)
      .then(function() {
        res.redirect('/gflow');
      })
      .catch(function(error){
        return next(error);
      })
    } else {
      res.redirect('/')
    }
  })
  .catch((err)=>{
    return next(err)
  })
});

router.get('/delete/:id', function(req, res, next) {
  query.getQuestionPostbyId(req.params.id)
  .then(function(data) {
    console.log(data);
    if(req.user.username == data[0].username){
      query.deleteQuestionPost(req.params.id)
      .then(function() {
        res.redirect('/gflow');
      })
      .catch(function(error){
        return next(error);
      })
    } else {
      res.redirect('/')
    }
  })
  .catch((err)=>{
    return next(err)
  })
})

router.get('/:id/edit', function(req, res, next) {
  var post_id = req.params.id;
  query.getQuestionPostbyId(post_id)
        .then(function(data) {
          console.log(data);
          var post = data[0];
            if (!post.user_id == req.user.id) {
                res.redirect('/');
                return;
            } else {
                res.render('gflow/edit', {
                  item: post,
                  user: req.user
                })
            }
        })
        .catch((err)=>{
          return next(err)
        })
})

router.post('/:id/edit', function(req, res, next) {
  if(!req.isAuthenticated()) {
		res.redirect('/login');
	} else {

    var post_id = req.params.id;

		query.getQuestionPostbyId(post_id)
		.then(function(data) {

      var post = data[0];

    if(post.user_id == req.user.id) {
      var questionid = req.params.id;
      var username = req.user.username;
      var title = req.body.title;
      var question = req.body.question;
      query.modifyQuestionPost(questionid, username, title, question)
        .then(function() {
          res.redirect('/gflow')
        })
    .catch((err)=>{
      return next(err)
    })
      } else {
        res.redirect('/question/' + post_id)
      }

    })
    .catch(function(err){
      return next(err);
    })
  }
})

module.exports = router;
