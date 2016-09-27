var knex = require('./knex')

function Users () {
  return knex('users');
};

module.exports = {
  getAllUsers : Users,
  getUserByUsername: function (username) {
    return Users().where("username", username)
  },
  createUser: function (username, avatar_url, github_url, email, biography, location, name) {
    return Users().insert({
      username: username,
      avatar_url: avatar_url,
      biography: biography,
      name: name,
      location: location,
      email: email,
      github_url: github_url
    }).returning('id')
  },
  updateUserLogin: function (username) {
    return Users().where("username", username).update({
      last_login: new Date()
    })
  }
}
