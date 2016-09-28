
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('resource').insert({
          id: 1,
          users_id: '1',
          title: 'title1',
          likes: 3,
          description: 'description1',
          link: 'link1',
          updated_on: '2006-04-10T13:40:23.83-05:00',
          created_on: '2006-04-10T13:40:23.83-05:01'
        }),
        knex('resource').insert({
          id: 2,
          users_id: '2',
          title: 'title2',
          likes: 59,
          description: 'description2',
          link: 'link2',
          updated_on: '2006-04-10T13:40:23.83-05:02',
          created_on: '2006-04-10T13:40:23.83-05:02'
        }),
        knex('resource').insert({
          id: 3,
          users_id: '3',
          title: 'title3',
          likes: 500,
          description: 'description3',
          link: 'link3',
          updated_on: '2006-04-10T13:40:23.83-05:03',
          created_on: '2006-04-10T13:40:23.83-05:03'
        })
      ]);
    });
};
