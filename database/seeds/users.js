
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1, username: 'username1', avatar_url: 'avatar_url1', biography: 'biography1', first_name: 'first_name1', last_name: 'last_name1', cohort: '1', city: 'city1', linkedin_url: 'linkedin_url1', github_url: 'github_url1', website: 'website1', email: 'email1', first_login: '2006-04-10T13:40:23.83-05:00', last_login: '2006-04-10T13:40:23.83-05:01'}),
        knex('users').insert({id: 2, username: 'username2', avatar_url: 'avatar_url2', biography: 'biography2', first_name: 'first_name2', last_name: 'last_name2', cohort: '2', city: 'city2', linkedin_url: 'linkedin_url2', github_url: 'github_url2', website: 'website2', email: 'email2', first_login: '2006-04-10T13:40:23.83-05:03', last_login: '2006-04-10T13:40:23.83-05:04'}),
        knex('users').insert({id: 3, username: 'username3', avatar_url: 'avatar_url3', biography: 'biography3', first_name: 'first_name3', last_name: 'last_name3', cohort: '3', city: 'city3', linkedin_url: 'linkedin_url3', github_url: 'github_url3', website: 'website3', email: 'email3', first_login: '2006-04-10T13:40:23.83-05:05', last_login: '2006-04-10T13:40:23.83-05:06'})
      ]);
    });
};
