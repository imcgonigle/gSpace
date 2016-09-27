exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({username: 'username1', avatar_url: 'avatar_url1', biography: 'biography1', name: 'first_name1', cohort: '1', location: 'city1', linkedin_url: 'linkedin_url1', github_url: 'github_url1', website: 'website1', email: 'email1', first_login: '2006-04-10T13:40:23.83-05:00', last_login: '2006-04-10T13:40:23.83-05:00'}),
        knex('users').insert({username: 'username2', avatar_url: 'avatar_url2', biography: 'biography2', name: 'first_name2', cohort: '2', location: 'city2', linkedin_url: 'linkedin_url2', github_url: 'github_url2', website: 'website2', email: 'email2', first_login: '2006-04-10T13:41:23.83-05:00', last_login: '2006-04-10T13:41:23.83-05:00'}),
        knex('users').insert({username: 'username3', avatar_url: 'avatar_url3', biography: 'biography3', name: 'first_name3', cohort: '3', location: 'city3', linkedin_url: 'linkedin_url3', github_url: 'github_url3', website: 'website3', email: 'email3', first_login: '2006-04-10T13:42:23.83-05:00', last_login: '2006-04-10T13:42:23.83-05:00'})
      ]);
    });
};
