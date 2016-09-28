exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('meetups').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('meetups').insert({
          id: 1,
          users_id: '1',
          title: 'title1',
          description: 'description1',
          location: 'location1',
          time: '2006-04-10T13:40:23.83-05:00',
          created_on: '2006-04-10T13:40:23.83-05:01'
        }),
        knex('meetups').insert({
          id: 2,
          users_id: '2',
          title: 'title2',
          description: 'description2',
          location: 'location2',
          time: '2006-04-10T13:40:23.83-05:02',
          created_on: '2006-04-10T13:40:23.83-05:02'
        }),
        knex('meetups').insert({
          id: 3,
          users_id: '3',
          title: 'title3',
          description: 'description3',
          location: 'location3',
          time: '2006-04-10T13:40:23.83-05:03',
          created_on: '2006-04-10T13:40:23.83-05:03'
        })
      ]);
    });
};
