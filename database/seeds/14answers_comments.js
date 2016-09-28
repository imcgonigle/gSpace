exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('answers_comments').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('answers_comments').insert({
                    id: 1,
                    answers_id: '1',
                    body: 'body1',
                    likes: 14,
                    created_on: '2006-04-10T13:40:23.83-05:00',
                    updated_on: '2006-04-10T13:42:23.83-05:00'
                }),
                knex('answers_comments').insert({
                    id: 2,
                    answers_id: '2',
                    body: 'body2',
                    likes: 2,
                    created_on: '2006-04-10T13:42:23.83-05:00',
                    updated_on: '2006-04-10T13:43:23.83-05:00'
                }),
                knex('answers_comments').insert({
                    id: 3,
                    answers_id: '3',
                    body: 'body3',
                    likes: 3,
                    created_on: '2006-04-10T13:43:23.83-05:00',
                    updated_on: '2006-04-10T13:44:23.83-05:00'
                }),
                knex('answers_comments').insert({
                    id: 4,
                    answers_id: '1',
                    body: 'body1',
                    likes: 1,
                    created_on: '2006-04-10T13:45:23.83-05:00',
                    updated_on: '2006-04-10T13:46:23.83-05:00'
                }),
                knex('answers_comments').insert({
                    id: 5,
                    answers_id: '2',
                    body: 'body2',
                    likes: 0,
                    created_on: '2006-04-10T13:49:23.83-05:00',
                    updated_on: '2006-04-10T13:50:23.83-05:00'
                }),
                knex('answers_comments').insert({
                    id: 6,
                    answers_id: '1',
                    body: 'body2',
                    likes: 1400,
                    created_on: '2006-04-10T13:55:23.83-05:00',
                    updated_on: '2006-04-10T13:56:23.83-05:00'
                })
            ]);
        });
};
