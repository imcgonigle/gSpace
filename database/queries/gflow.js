var knex = require('./knex.js');

function questionPosts() {
  return knex('gflow_questions');
}

function commentPosts() {
  return knex('gflow_comments');
}

function getQuestionPostbyId(id) {
  return knex('gflow_questions').where('questionid', id);
}

function getCommentPostbyId(id) {
  return knex('gflow_comments').where('question_post_id', id);
}

function newQuestionPost(username, title, question, user_id, tags, comments, views) {
  return knex('gflow_questions').insert({
    username: username,
    user_id:user_id,
    title: title,
    question: question,
    tags: tags,
    likes: 0,
    comments: 0,
    views: 0
  }).returning('questionid');
}

function newQuestionComment(question_post_id, subject, comment, username) {
  return knex('gflow_comments').insert({
    question_post_id:question_post_id,
    subject: subject,
    comment: comment,
    username: username
  }).returning('id');
}

function deleteQuestionPost(id) {
  return knex('gflow_questions').where('questionid', id).del();
}

function deleteQuestionComment(id) {
  return knex('gflow_comments').where('id', id).del();
}

function modifyQuestionPost(title, question, questionid) {
  return knex('gflow_questions').where('questionid', questionid).update({
    title:title,
    question:question,
    // updated_on: new Date()
  })
}

function addLikeToQuestion(questionid, likes) {
  return knex('gflow_questions').where('questionid', questionid).update({
  likes: likes +=1
}).returning('likes','questionid')
}

function getQuestionLikes (questionid) {
  return knex('gflow_questions').where('questionid', questionid)
}

function addViewsToQuestion(questionid, views) {
  return knex('gflow_questions').where('questionid', questionid).update({
  views: views +=1
}).returning('views','questionid')
}

function getQuestionViews (questionid) {
  return knex('gflow_questions').where('questionid', questionid)
}


function addNumOfCommentsToQuestion(questionid, comments) {
  return knex('gflow_questions').where('questionid', questionid).update({
  comments: comments +=1
}).returning('comments','questionid')
}

function getQuestionComments (questionid) {
  return knex('gflow_questions').where('questionid', questionid)
}





module.exports = {
  questionPosts: questionPosts,
  commentPosts,
  getQuestionPostbyId,
  getCommentPostbyId,
  newQuestionPost,
  newQuestionComment,
  deleteQuestionComment,
  deleteQuestionPost,
  modifyQuestionPost,
  addLikeToQuestion,
  getQuestionLikes,
  addViewsToQuestion,
  getQuestionViews,
  addNumOfCommentsToQuestion,
  getQuestionComments
}
