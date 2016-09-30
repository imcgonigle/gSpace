exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('projects').insert({
          id: 1,
          creator_id: '1',
          title: 'title1',
          body: 'body1',
          repository_url: 'repository_url1',
          likes: 5,
          created_on: '2006-04-10T13:40:23.83-05:00',
          updated_on: '2006-04-10T13:41:23.83-05:00',
        }),
        knex('projects').insert({
          id: 2,
          creator_id: '2',
          title: 'title2',
          body: 'body2',
          repository_url: 'repository_url2',
          likes: 288,
          created_on: '2006-04-10T13:41:23.83-05:00',
          updated_on: '2006-04-10T13:42:23.83-05:00',
        }),
        knex('projects').insert({
          id: 3,
          creator_id: '1',
          title: 'title3',
          body: 'body3',
          repository_url: 'repository_url3',
          likes: 100,
          created_on: '2006-04-10T13:48:23.83-05:00',
          updated_on: '2006-04-10T13:49:23.83-05:00',
        }),
				knex.raw('ALTER SEQUENCE meetups_id_seq RESTART WITH 4;')
      ]);
    });
};
