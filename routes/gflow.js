var express = require('express');
var router = express.Router();
var query = require('../database/queries/gflow');

router.get('/', function(req, res, next) {
  query.questionPosts()
  .then( (data) => {
    res.render('gflow/index', {items: data});
  })
    .catch((err)=>{
      return next(err)
    })
});

router.get('/ask', function(req, res, next) {
  if(req.isAuthenticated()){
    res.render('gflow/ask', {user:req.user});
  } else {
    res.redirect('/login')
    }
  });

router.post('/ask', function (req, res, next) {
  var username = req.user.username;
  var title = req.body.title;
  var question = req.body.question;
  query.newQuestionPost(username, title, question)
  .then((questionid) =>{
      res.redirect('/question/'+questionid)
    })
  .catch(function(err) {
    return next(err)
    })
  })

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
})

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

router.post('/items/delete/:id', function(req, res, next) {
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
  .catch(function(error){
    return next(error);
  })
});

router.get('/items/delete/:id', function(req, res, next) {
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
  .catch(function(error){
    return next(error);
  })
});
  // router.get('/items/modify/:id', function(req, res, next) {
  //   console.log("modifying question "+ req.params.id);
  //   query.modifyQuestionPost(req.params.id)
  //   .then(function() {
  //     res.redirect('/gflow/index/');
  //   })
  //   .catch(function(err) {
  //     return next(err)
  //   })
  // })
  //
	// router.get('/data/delete/:id', function(req, res, next) {
  //   console.log("deleting comment "+ req.params.id);
  //   query.deleteCommentPost(req.params.id)
  //   .then(function() {
  //     res.redirect('/gflow/index/');
  //   })
  //   .catch(function(err) {
  //     return next(err)
  //   })
  // })
  //
  // router.get('/data/modify/:id', function(req, res, next) {
  //   console.log("modifying comment "+ req.params.id);
  //   query.modifyCommentPost(req.params.id)
  //   .then(function() {
  //     res.redirect('/gflow/index/');
  //   })
  //   .catch(function(err) {
  //     return next(err)
  //   })
  // })

router.get('/:id/edit', function(req, res, next) {
  query.getQuestionPostbyId(req.params.id)
        .then(function(data) {
          var post = data[0];
            if (!req.user.id == req.user.username) {
                res.redirect('/');
                return;
            } else {
                res.render('edit', {item: post});
            }
        })
        .catch(function(error){
          return next(error);
        })
});

  router.post('/:id/edit', function(req, res, next) {
          var id = req.params.id;
          var username = req.user.username;
          var title = req.body.title;
          var question = req.body.question;
          queries.updateMeetup(id, username, title, question)
          .then(function() {
              res.redirect('/gflow/question/'+req.params.id)
          })
          .catch(function(error){
            return next(error);
          })
  });

module.exports = router;
