var knex = require('./knex.js');

function questionPosts() {
  return knex('gflow_questions');
}

function commentPosts() {
  return knex('gflow_comments');
}

function newQuestionPost(questionid, name, title, question, created_at, updated_at) {
  return knex('gflow_questions').insert({
    questionid: questionid,
    name: name,
    title: title,
    question: question,
    created_at:created_at,
    updated_at:updated_at
  });
}

function newQuestionComment(question_post_id, subject, comment, user_id, created_at, updated_at) {
  return knex('gflow_comments').insert({
    question_post_id:question_post_id,
    subject: subject,
    comment: comment,
    user_id: user_id,
    created_at:created_at,
    updated_at:updated_at
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
  questionPosts,
  commentPosts,
  newQuestionPost,
  newQuestionComment,
  deleteQuestionComment,
  deleteQuestionPost,
  modifyQuestionPost,
  modifyQuestionComment
}
