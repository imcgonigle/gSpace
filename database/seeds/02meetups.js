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
          likes: 5,
          description: 'description1',
          location: 'location1',
          date: '09-09-2016',
          time: '11:10:30',
          created_on: '2006-04-10T13:40:23.83-05:00',
          updated_on: '2006-04-10T13:40:23.83-05:01'
        }),
        knex('meetups').insert({
          id: 2,
          users_id: '2',
          title: 'title2',
          likes: 6,
          description: 'description2',
          location: 'location2',
          time: '11:10:30',
          created_on: '2006-04-10T13:40:23.83-05:02',
          updated_on: '2006-04-10T13:40:23.83-05:01'
        }),
        knex('meetups').insert({
          id: 3,
          users_id: '4',
          title: 'title3',
          likes: 7,
          description: 'description3',
          location: 'location3',
          time: '11:10:30',
          created_on: '2006-04-10T13:40:23.83-05:03',
          updated_on: '2006-04-10T13:40:23.83-05:01'
        }),
        knex('meetups').insert({
          id: 4,
          users_id: '4',
          title: 'title4',
          likes: 0,
          description: 'description4',
          location: 'location4',
          time: '11:10:30',
          created_on: '2006-04-10T13:40:23.83-05:02',
          updated_on: '2006-04-10T13:40:23.83-05:01'
        }),
        knex('meetups').insert({
          id: 5,
          users_id: '4',
          title: 'title5',
          likes: 5,
          description: 'description5',
          location: 'location5',
          time: '11:10:30',
          created_on: '2006-04-10T13:40:23.83-05:02',
          updated_on: '2006-04-10T13:40:23.83-05:01'
        })
      ])
          .then(function(){
            return knex.raw('ALTER SEQUENCE meetups_id_seq RESTART WITH 6;')
          })
    });
};
