var express = require('express');
var router = express.Router();
var query = require('../database/queries/gflow');
var title = "gFlow | "
router.get('/', function(req, res, next) {
  query.questionPosts()
  .then( (data) => {
    res.render('gflow/index', {
      items: data,
      user: req.user,
			title: title + "Home"
    })
  })
    .catch((err)=>{
      return next(err)
    })
})

router.get('/ask', function(req, res, next) {
  if(req.isAuthenticated()){
    res.render('gflow/ask', {user:req.user, title: title + "Ask"})
  } else {
    res.redirect('/login')
    }
  })

router.post('/ask', function (req, res, next) {

	if(req.isAuthenticated()) {

		var username = req.user.username;
	  var title = req.body.title;
	  var question = req.body.question;
	  var user_id = req.user.id;
	  var tags = req.body.tags;

	  query.newQuestionPost(username, title, question, user_id, tags)
	  .then(() =>{
	      res.redirect('/gflow')
	    })
	  .catch((err) =>{
	    return next(err)
	  })
	} else {
		res.redirect('/login');
	};

});

router.get('/question/:id',(req, res, next) => {

  var id = req.params.id;

  query.getQuestionPostbyId(id)
	.then((posts) => {

		var post = posts[0];

  	query.getCommentPostbyId(id)
		.then((data) => {

			var isOwner = (req.isAuthenticated() && post.user_id == req.user.id);

	    res.render('gflow/question', {
	      item:posts[0],
	      data:data,
	      user:req.user,
	      isOwner:isOwner,
				title: title + "Question"
			});

    })
		.catch(function(err) {
			return next(err);
		});
  })
  .catch(function(err) {
  return next(err)
	});
});

router.post('/question/:id',(req, res, next) => {

	if(req.isAuthenticated()) {

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
	} else {
		res.redirect('/login')
	};

});

router.post('/delete/:id', function(req, res, next) {

	query.getQuestionPostbyId(req.params.id)
	.then(function(data) {
		if(req.isAuthenticated() && req.user.username == data[0].username){
			query.deleteQuestionPost(req.params.id)
			.then(function() {
				res.redirect('/gflow');
			})
			.catch(function(error){
				return next(error);
			})
		} else {
			res.redirect('/gflow/')
		}
	})
	.catch((err)=>{
		return next(err)
	})

});


router.get('/:id/edit', function(req, res, next) {

  var post_id = req.params.id;

  query.getQuestionPostbyId(post_id)
  .then(function(data) {

		var post = data[0];
    var isOwner = (req.isAuthenticated() && post.user_id == req.user.id);

    if (!isOwner) {
    	res.redirect('/');
    } else {

      res.render('gflow/edit', {
        item: post,
        user: req.user,
        isOwner: isOwner,
				title: title + 'Edit'
      });

    };
  })
  .catch((err)=>{
    return next(err);
  });

});

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
	      var tags = req.body.tags;

	      query.modifyQuestionPost(title, question, tags, questionid)
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
  	});
  }
})

router.post('/question/like/:id', function(req, res, next) {


  var question_post_id = req.params.id
  query.getQuestionPostbyId(question_post_id)
  .then(function(data) {
    var likes = data[0].likes;
    var id = data[0].questionid;
    query.addLikeToQuestion(id, likes)
    .then(function(data) {
      res.send(data)
    })
		.catch(function(err) {
			return next(err);
		})
  })

})


router.post('/question/views/:id', function(req, res, next) {

    var question_post_id = req.params.id;

    query.getQuestionPostbyId(question_post_id)
    .then(function(data) {
      var views = data[0].views;
      var id = data[0].questionid;
      query.addViewsToQuestion(id, views)
      .then(function(data) {
        res.send(data)
      })
			.catch(function(err) {
				return next(err);
			})
    })
})

router.post('/question/comments/:id', function(req, res, next) {

  var question_post_id = req.params.id
  query.getQuestionPostbyId(question_post_id)
  .then(function(data) {

    var comments = data[0].comments;
    var id = data[0].questionid;

    query.addNumOfCommentsToQuestion(id, comments)
    .then(function(data) {
      console.log(data)
      res.send(data)
    })
		.catch(function(err) {
			return next(err);
		});
  })
	.catch(function(err) {
		return next(err);
	})
})

router.post('/question/favorite/:id', function(req, res, next) {
  var id = req.params.id;
  var user = req.user.id;
  console.log(id);
  query.addFavorite(id, user)
  .then(function(data) {
    console.log(data);
    res.send(data)
  })
  .catch(function(err) {
    console.log('error');
    return next(err);
  })
})


module.exports = router;
