exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('answers').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('answers').insert({
                    id: 1,
                    users_id: '1',
                    questions_id: '1',
                    body: 'body1',
                    likes: 14,
                    created_on: '2006-04-10T13:40:23.83-05:00',
                    updated_on: '2006-04-10T13:42:23.83-05:00'
                }),
                knex('answers').insert({
                    id: 2,
                    users_id: '2',
                    questions_id: '2',
                    body: 'body2',
                    likes: 2,
                    created_on: '2006-04-10T13:42:23.83-05:00',
                    updated_on: '2006-04-10T13:43:23.83-05:00'
                }),
                knex('answers').insert({
                    id: 3,
                    users_id: '3',
                    questions_id: '3',
                    body: 'body3',
                    likes: 3,
                    created_on: '2006-04-10T13:43:23.83-05:00',
                    updated_on: '2006-04-10T13:44:23.83-05:00'
                }),
                knex('answers').insert({
                    id: 4,
                    users_id: '1',
                    questions_id: '1',
                    body: 'body1',
                    likes: 1,
                    created_on: '2006-04-10T13:45:23.83-05:00',
                    updated_on: '2006-04-10T13:46:23.83-05:00'
                }),
                knex('answers').insert({
                    id: 5,
                    users_id: '2',
                    questions_id: '1',
                    body: 'body2',
                    likes: 0,
                    created_on: '2006-04-10T13:49:23.83-05:00',
                    updated_on: '2006-04-10T13:50:23.83-05:00'
                }),
                knex('answers').insert({
                    id: 6,
                    users_id: '1',
                    questions_id: '1',
                    body: 'body2',
                    likes: 1400,
                    created_on: '2006-04-10T13:55:23.83-05:00',
                    updated_on: '2006-04-10T13:56:23.83-05:00'
                })
            ]);
        });
};
