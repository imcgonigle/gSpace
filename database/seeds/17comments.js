exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('comments').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('comments').insert({
                    id: 1,
                    // ex projects
                    type: 'resources',
                    // id of the project/meetup/article
                    uid: '3',
                    users_id: '3',
                    likes: 14,
                    created_on: '2006-04-10T13:40:23.83-05:00',
                    updated_on: '2006-04-10T13:42:23.83-05:00'
                }),
                knex('comments').insert({
                    id: 2,
                    type: 'projects',
                    uid: '3',
                    users_id: '2',
                    likes: 0,
                    created_on: '2006-04-10T13:40:23.83-05:00',
                    updated_on: '2006-04-10T13:42:23.83-05:00'
                }),
                knex('comments').insert({
                    id: 3,
                    type: 'meetups',
                    uid: '3',
                    users_id: '3',
                    likes: -4,
                    created_on: '2006-04-10T13:40:23.83-05:00',
                    updated_on: '2006-04-10T13:42:23.83-05:00'
                }),
                knex('comments').insert({
                    id: 4,
                    type: 'questions',
                    uid: '2',
                    users_id: '2',
                    likes: 400,
                    created_on: '2006-04-10T13:40:23.83-05:00',
                    updated_on: '2006-04-10T13:42:23.83-05:00'
                }),
                knex('comments').insert({
                    id: 5,
                    type: 'answers',
                    uid: '2',
                    users_id: '1',
                    likes: 01,
                    created_on: '2006-04-10T13:40:23.83-05:00',
                    updated_on: '2006-04-10T13:42:23.83-05:00'
                }),
                knex('comments').insert({
                    id: 6,
                    // comments on users? idk... test
                    type: 'users',
                    uid: '1',
                    users_id: '3',
                    likes: 4,
                    created_on: '2006-04-10T13:40:23.83-05:00',
                    updated_on: '2006-04-10T13:42:23.83-05:00'
                }),
                knex('comments').insert({
                    id: 7,
                    type: 'resources',
                    uid: '3',
                    users_id: '1',
                    likes: 11,
                    created_on: '2006-04-10T13:40:23.83-05:00',
                    updated_on: '2006-04-10T13:42:23.83-05:00'
                }),
                knex('comments').insert({
                    id: 8,
                    type: 'projects',
                    uid: '1',
                    users_id: '3',
                    likes: 55,
                    created_on: '2006-04-10T13:40:23.83-05:00',
                    updated_on: '2006-04-10T13:42:23.83-05:00'
                })
            ]);
        });
};
