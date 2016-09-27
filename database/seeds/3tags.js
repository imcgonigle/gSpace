exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('tags').insert({
          id: 1,
          name: 'tagName1',
          created_at: '2006-04-10T13:40:23.83-05:00'
        }),
        knex('tags').insert({
          id: 2,
          name: 'tagName2',
          created_at: '2006-04-10T13:41:23.83-05:00'
        }),
        knex('tags').insert({
          id: 3,
          name: 'tagName3',
          created_at: '2006-04-10T13:42:23.83-05:00'
        }),
        knex('tags').insert({
          id: 4,
          name: 'tagName4',
          created_at: '2006-04-10T13:44:23.83-05:00'
        }),
        knex('tags').insert({
          id: 5,
          name: 'tagName5',
          created_at: '2006-04-10T13:45:23.83-05:00'
        }),
        knex('tags').insert({
          id: 6,
          name: 'tagName6',
          created_at: '2006-04-10T13:46:23.83-05:00'
        }),
        knex('tags').insert({
          id: 7,
          name: 'tagName7',
          created_at: '2006-04-10T13:47:23.83-05:00'
        }),
        knex('tags').insert({
          id: 8,
          name: 'tagName8',
          created_at: '2006-04-10T13:48:23.83-05:00'
        }),
        knex('tags').insert({
          id: 9,
          name: 'tagName9',
          created_at: '2006-04-10T13:49:23.83-05:00'
        }),
        knex('tags').insert({
          id: 10,
          name: 'tagName10',
          created_at: '2006-04-10T13:50:23.83-05:00'
        }),
        knex('tags').insert({
          id: 11,
          name: 'tagName11',
          created_at: '2006-04-10T13:51:23.83-05:00'
        }),
        knex('tags').insert({
          id: 12,
          name: 'tagName12',
          created_at: '2006-04-10T13:52:23.83-05:00'
        }),
        knex('tags').insert({
          id: 13,
          name: 'tagName13',
          created_at: '2006-04-10T13:53:23.83-05:00'
        }),
        knex('tags').insert({
          id: 14,
          name: 'tagName14',
          created_at: '2006-04-10T13:54:23.83-05:00'
        }),
        knex('tags').insert({
          id: 15,
          name: 'tagName15',
          created_at: '2006-04-10T13:55:23.83-05:00'
        })
      ]);
    });
};
