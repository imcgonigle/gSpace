var knex = require('./knex')

function Users () {
  return knex('users');
};

module.exports = {
  getAllUsers : Users,
  getUserByUsername: function (username) {
    return Users().where("username", username)
  },
  createUser: function (username, avatar_url, github_url, email, biography, location, name, first_login) {
    return Users().insert({
      username: username,
      avatar_url: avatar_url,
      biography: biography,
      name: name,
      location: location,
      email: email,
      github_url: github_url,
      first_login: new Date()
    }).returning('id')
  },
  updateUserLogin: function (username) {
    return Users().where("username", username).update({
      last_login: new Date()
    })
  },
  updateUserInfo: function (username) {
    return Users().where("username", username).update({
      biography: biography,
      name: name,
      location: location,
      email: email,
      github_url: github_url,
      linkedin_url: linkedin_url,
      website: website,
      cohort: cohort
    }).returning('id')
  }
}
