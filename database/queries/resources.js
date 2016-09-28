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
