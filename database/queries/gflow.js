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

function newQuestionPost(username, title, question, user_id, created_at, updated_at) {
  return knex('gflow_questions').insert({
    username: username,
    title: title,
    question: question,
    user_id:user_id,
    created_at: new Date(),
    updated_on: new Date()
  }).returning('questionid');
}

function newQuestionComment(question_post_id, subject, comment, username, created_at, updated_at) {
  return knex('gflow_comments').insert({
    question_post_id:question_post_id,
    subject: subject,
    comment: comment,
    username: username,
    created_at: new Date(),
    updated_on: new Date()
  }).returning('id');
}

function deleteQuestionPost(id) {
  return knex('gflow_questions').where('questionid', id).del();
}

function deleteQuestionComment(id) {
  return knex('gflow_comments').where('id', id).del();
}

function modifyQuestionPost(title, question, updated_on) {
  return knex('gflow_questions').where('questionid', id).update({
    title:title,
    question:question,
    updated_on: new Date()
  }).returning('questionid');
}

function modifyQuestionComment(subject, comment, updated_on) {
  return knex('gflow_comments').where('id', id).update({
    subject: subject,
    comment: comment,
    updated_on: new Date()
  });
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
