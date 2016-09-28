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

function newQuestionPost(username, title, question) {
  return knex('gflow_questions').insert({
    username: username,
    title: title,
    question: question,
    created_at: new Date(),
    updated_at: new Date()
  }).return('questionid');
}

function newQuestionComment(question_post_id, subject, comment, username) {
  return knex('gflow_comments').insert({
    question_post_id:question_post_id,
    subject: subject,
    comment: comment,
    username: username,
    created_at: new Date(),
    updated_at:new Date()
  })
}

function deleteQuestionPost(id) {
  return knex('gflow_questions').where('questionid', id).del();
}

function deleteQuestionComment(id) {
  return knex('gflow_comments').where('id', id).del();
}

function modifyQuestionPost(id) {
  return knex('gflow_questions').where('questionid', id).update();
}

function modifyQuestionComment(id) {
  return knex('gflow_comments').where('id', id).update();
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
  modifyQuestionComment
}
