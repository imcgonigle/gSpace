var pg = require('pg');
var enviroment = process.env.NODE_ENV || 'development';

var config = require('../../knexfile')[enviroment];

module.exports = require('knex')(config);
