exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('questions').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('questions').insert({
                    id: 1,
                    users_id: '1',
                    title: 'title1',
                    body: 'body1',
                    likes: 14,
                    created_on: '2006-04-10T13:40:23.83-05:00',
                    updated_on: '2006-04-10T13:42:23.83-05:00'
                }),
                knex('questions').insert({
                    id: 2,
                    users_id: '3',
                    title: 'title2',
                    body: 'body2',
                    likes: 140,
                    created_on: '2006-04-10T13:42:23.83-05:00',
                    updated_on: '2006-04-10T13:43:23.83-05:00'
                }),
                knex('questions').insert({
                    id: 3,
                    users_id: '3',
                    title: 'title3',
                    body: 'body3',
                    likes: 0,
                    created_on: '2006-04-10T13:43:23.83-05:00',
                    updated_on: '2006-04-10T13:44:23.83-05:00'
                }),
                knex('questions').insert({
                    id: 4,
                    users_id: '2',
                    title: 'title4',
                    body: 'body4',
                    likes: 4,
                    created_on: '2006-04-10T13:45:23.83-05:00',
                    updated_on: '2006-04-10T13:46:23.83-05:00'
                })
            ]);
        });
};
