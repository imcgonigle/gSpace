var knex = require('./knex.js')

function Resources() = {
  return knex('resources')
}

function Resources_Tags() = {
  return knex('resources_tags')
}

function Comments() = {
  return knex('comments')
}

module.exports = {
  getAllResources: Resources,
  getResourceById: function(resource_id) {
    return Projects().where('id', resource_id);
  },
  addResource: function (user_id, title, description, link) {
    return Resources().insert({
      user_id: user_id,
      title: title,
      description: description,
      link: link,
      created_on: new Date(),
      updated_on: new Date()
    })
    .returning('id');
  },
  updateResource: function (resource_id, title, description, link) {
    return Resources().where('id', resource_id).update({
      title: title,
      description: description,
      link: link,
      updated_on: new Date();
    })
    .returning('id');
  },
  deleteResource: function (resource_id) {
    return Resources().where('id', resource_id).del();
  },
  addLikeToResource: function (resource_id, likes) {
    return Resources().where('id', resource_id).update({
      likes: likes +=1
    })
  }
}
