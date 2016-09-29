var knex = require('./knex.js')

function Resources()  {
  return knex('resource')
}

function Resources_Tags()  {
  return knex('resources_tags')
}

function Comments()  {
  return knex('comments')
}

function Tags() {
  return knex('tags')
}



module.exports = {
  getAllResources: function () {
    return Resources().orderBy('created_on', 'desc')
  },
  getResourceById: function(resource_id) {
    return Resources().where('id', resource_id);
  },
  addResource: function (users_id, title, description, link) {
    return Resources().insert({
      users_id: users_id,
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
      updated_on: new Date()
    })
    .returning('id');
  },
  deleteResource: function (resource_id) {
    return Resources().where('id', resource_id).del();
  },
  addLikeToResource: function (resource_id, likes) {
    return Resources().where('id', resource_id).update({
      likes: likes +=1
    }).returning('likes','id')
  },
  getResourceLikes: function (resource_id) {
    return Resources().where('id', resource_id)
  },
  getRourceComments: function (resource_id) {
    return Resources().where('id')
  },
  getResourceTags: function (resource_id) {
    return Resources().select('resource.id as resource_id', 'resource.title as resource_title', "resource.link as link", 'resource.likes as likes', 'description')
    .then(function (resourceData) {
      return Tags().join('resources_tags', 'tags.id', 'resources_tags.tag_id')
      .then(function (tagData) {
        // console.log(tagData)
        for (var i = 0; i < resourceData.length; i++) {
          resourceData[i].tags = []
          for (var j = 0; j < tagData.length; j++) {
            if (tagData[j].resource_id === resourceData[i].resource_id) {
              resourceData[i]["tags"].push(tagData[j].name)
            }
          }
        }
        return resourceData
      })
    })

  },
  addTagToResource: function (resource_id, tag_id ) {
    return Resources_Tags().insert({
        resource_id: resource_id,
        tag_id:tag_id
    })
  },
  addTag: function (resource_id, tag_id) {
    return Tags().insert({
      name: name,
      created_at: new Date()
    })
  },
  
  }
