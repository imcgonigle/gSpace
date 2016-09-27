// Update with your config settings.
var dotenv = require('dotenv').config();
var pg = require('pg');

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/gspace',
		migrations: {
			directory: './database/migrations'
		},
		seeds: {
			directory: './database/seeds'
		}
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
			directory:'./database/migrations',
      tableName: 'knex_migrations'
    },
		seeds: {
			directory: './database/seeds'
		}
  }

};
